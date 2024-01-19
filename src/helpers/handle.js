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
