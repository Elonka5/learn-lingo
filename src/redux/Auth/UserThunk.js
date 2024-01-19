import { set, get, ref } from 'firebase/database';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { db, storage } from '../../firebase/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

const uploadImageToStorage = async (file, userId) => {
  try {
    const storageReference = storageRef(storage, `avatars/${userId}`);
    const snapshot = await uploadBytes(storageReference, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Помилка при завантаженні аватарки:', error);
    throw error;
  }
};

export const uploadAvatarAsync = createAsyncThunk(
  'user/uploadAvatar',
  async ({ file, userId }) => {
    try {
      const downloadURL = await uploadImageToStorage(file, userId);

      const userRef = ref(db, `users/${userId}/`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const existingUserData = snapshot.val();

        await set(userRef, { ...existingUserData, photoURL: downloadURL });

        console.log(downloadURL);
        return downloadURL;
      } else {
        console.error(`Користувач з ID ${userId} не існує в базі даних.`);
        throw new Error(`Користувач з ID ${userId} не існує в базі даних.`);
      }
    } catch (error) {
      console.error('Помилка при завантаженні аватарки:', error);
      throw error;
    }
  }
);

//Rules
// {
//   "rules": {
//     ".read": true,
//     ".write": "auth != null",
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid",
//         "favorites": {
//           ".read": "$uid === auth.uid",
//           ".write": "$uid === auth.uid"
//         }
//       }
//     }
//   }
// }
