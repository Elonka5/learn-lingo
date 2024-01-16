import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { get, getDatabase, ref, remove, set } from 'firebase/database';

import { runTransaction } from 'firebase/database';
import { getFavoritesTeachers } from '../Favorite/FavoriteThunk';

export const registerThunk = createAsyncThunk(
  'auth/registerAndSaveUserData',
  async ({ email, password, displayName }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      const db = getDatabase();
      const userData = {
        email: email,
        displayName: displayName,
      };

      await set(ref(db, `users/${uid}`), userData);

      return { uid, email, displayName };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (body, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      const { uid, displayName, email } = userCredential.user;
      return { uid, displayName, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteTeacherThunk = createAsyncThunk(
  'favorite/addFavoriteTeacher',
  async ({ userId, teacher }) => {
    console.log('Adding favorite teacher:', { userId, teacher });
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}/favorites/` + teacher.id);
    try {
      const snapshot = await get(userRef);
      const currentData = snapshot.val();

      let updatedData;

      if (currentData === null) {
        updatedData = [{ ...teacher, isFavorite: true }];
      } else {
        updatedData = Array.isArray(currentData) ? currentData : [currentData];
        updatedData.push({ ...teacher, isFavorite: true });
      }

      await set(userRef, updatedData);
    } catch (error) {
      console.error('Error updating favorites:', error);
      throw error;
    }
  }
);

export const removeFavoriteTeacherThunk = createAsyncThunk(
  'favorite/removeFavoriteTeacher',
  async ({ userId, teacherId }) => {
    const db = getDatabase();
    const userRef = remove(
      ref(db, `users/${userId}/favorites/${teacherId.id}`)
    );

    try {
      await runTransaction(userRef, async currentData => {
        if (!currentData) {
          return currentData;
        } else {
          const updatedData = Array.isArray(currentData)
            ? currentData.filter(id => id !== teacherId.id)
            : [];
          return updatedData;
        }
      });
    } catch (error) {
      console.error('Error removing favorite teacher:', error);
      throw error;
    }
  }
);

export const removeFavoriteThunk = createAsyncThunk(
  'favorite/removeTeacher',
  async ({ userId, teacherId }) => {
    remove(ref(db, `users/${userId}/favorites/${teacherId}`));
  }
);

export const loadUserFavoritesThunk = createAsyncThunk(
  'auth/loadUserFavorites',
  async (userId, { dispatch }) => {
    try {
      const favorites = await dispatch(getFavoritesTeachers(userId));
      return favorites;
    } catch (error) {
      console.error('Error loading user favorites:', error);
      throw error;
    }
  }
);
