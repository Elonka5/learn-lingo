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
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
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
  async (body, { rejectWithValue, dispatch }) => {
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

export const updateDisplayNameThunk = createAsyncThunk(
  'user/updateDisplayName',
  async ({ userId, newDisplayName }) => {
    try {
      const userRef = ref(db, `users/${userId}`);
      await updateProfile(auth.currentUser, {
        displayName: newDisplayName,
      });
      await update(userRef, { displayName: newDisplayName });
      return newDisplayName;
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

      return 'Password succesfully changed.';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadAvatarThunk = createAsyncThunk(
  'user/uploadAvatar',
  async ({ file, userId }) => {
    try {
      const storageReference = storageRef(storage, `avatars/${userId}`);
      const snapshot = await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      await updateProfile(auth.currentUser, {
        photoURL: downloadURL,
      });
      return downloadURL;
    } catch (error) {
      console.error('Error loading avatar:', error);
      throw error;
    }
  }
);

// export const updateUserProfileAsync = createAsyncThunk(
//   'user/updateUserProfile',
//   async (
//     { userId, newDisplayName, oldPassword, newPassword },
//     { rejectWithValue }
//   ) => {
//     try {

//       if (newDisplayName) {
//         const userRef = ref(db, `users/${userId}`);
//         await updateProfile(auth.currentUser, {
//           displayName: newDisplayName,
//         });
//         await update(userRef, { displayName: newDisplayName });
//       }

//       if (oldPassword && newPassword) {
//         const user = auth.currentUser;

//         if (!user) {
//           throw new Error('Not authorized.');
//         }

//         const credentials = EmailAuthProvider.credential(
//           user.email,
//           oldPassword
//         );
//         await reauthenticateWithCredential(user, credentials);
//         await updatePassword(user, newPassword);
//       }

//       // Return a success message or any other relevant data
//       return 'Profile updated successfully.';
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );