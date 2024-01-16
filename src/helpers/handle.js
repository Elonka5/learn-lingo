import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, getDatabase, ref, set } from 'firebase/database';

export const updateFavoritesAfterAddition = teacher => ({
  type: 'UPDATE_FAVORITES_AFTER_ADDITION',
  payload: teacher,
});

export const updateFavoritesAfterRemoval = teacherId => ({
  type: 'UPDATE_FAVORITES_AFTER_REMOVAL',
  payload: teacherId,
});

export const toggleFavoriteTeacherThunk = createAsyncThunk(
  'favorite/toggleFavoriteTeacher',
  async ({ userId, teacher }, { dispatch }) => {
    console.log('Toggling favorite teacher:', { userId, teacher });
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}/favorites/` + teacher.id);

    try {
      const snapshot = await get(userRef);
      const currentData = snapshot.val();

      if (currentData === null || !currentData.some(t => t.id === teacher.id)) {
        await set(userRef, [...(currentData || []), teacher]);
        dispatch(updateFavoritesAfterAddition(teacher));
      } else {
        const updatedData = currentData.filter(t => t.id !== teacher.id);
        await set(userRef, updatedData);
        dispatch(updateFavoritesAfterRemoval(teacher.id));
      }
    } catch (error) {
      console.error('Error toggling favorite teacher:', error);
      throw error;
    }
  }
);

// const addTeacherToFavorites = async (userRef, teacher) => {
//   try {
//     const snapshot = await get(userRef);
//     const currentData = snapshot.val();

//     let updatedData;

//     if (currentData === null) {
//       updatedData = [{ ...teacher, isFavorite: true }];
//     } else {
//       updatedData = Array.isArray(currentData) ? currentData : [currentData];
//       updatedData.push({ ...teacher, isFavorite: true });
//     }

//     await set(userRef, updatedData);
//   } catch (error) {
//     console.error('Error adding favorite teacher:', error);
//     throw error;
//   }
// };

// const removeTeacherFromFavorites = async (userRef, teacherId) => {
//   remove(ref(userRef, teacherId));
// };

// const isTeacherInFavorites = (favorites, teacherId) => {
//   return Object.keys(favorites).includes(teacherId);
// };
