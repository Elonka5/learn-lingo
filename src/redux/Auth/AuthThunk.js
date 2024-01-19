import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth, db, storage } from '../../firebase/firebase';
import { get, getDatabase, ref, remove, set, update } from 'firebase/database';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
// import { ref as sRef } from 'firebase/storage';

import { runTransaction } from 'firebase/database';
import { getFavoritesTeachers } from '../Favorite/FavoriteThunk';
// import { getDownloadURL, uploadBytes } from 'firebase/storage';

export const registerThunk = createAsyncThunk(
  'auth/registerAndSaveUserData',
  async ({ email, password, displayName }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const defaultAvatar = `https://ui-avatars.com/api/?name=${displayName}&background=9FBAAE`;

      const uid = userCredential.user.uid;

      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: defaultAvatar,
      });

      const db = getDatabase();
      const userData = {
        email: email,
        displayName: displayName,
        photoURL: defaultAvatar,
      };

      await set(ref(db, `users/${uid}`), userData);

      return { uid, email, displayName, photoURL: defaultAvatar };
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
      const { uid, displayName, email, photoURL } = userCredential.user;
      return { uid, displayName, email, photoURL };
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

export const updateDisplayNameAsync = createAsyncThunk(
  'user/updateDisplayName',
  async ({ userId, displayName }) => {
    try {
      const userRef = ref(db, `users/${userId}`);
      await update(userRef, { displayName });
      return displayName;
    } catch (error) {
      console.error('Помилка при оновленні імені користувача:', error);
      throw error;
    }
  }
);

export const changePasswordAsync = createAsyncThunk(
  'auth/changePassword',
  async ({ oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error('Not authorized.');
      }

      const credentials = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credentials);

      await updatePassword(user, newPassword);

      return 'Passord succesfully changed.';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (payload, { rejectWithValue }) => {
    try {
      const { userId, file } = payload;
      const storageRef = ref(storage, `avatars/${userId}`);

      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);

      const dbRef = ref(db, `users/${userId}`);
      await update(dbRef, { photoURL: downloadURL });

      return downloadURL;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
