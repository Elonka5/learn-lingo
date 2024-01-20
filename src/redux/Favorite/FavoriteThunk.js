import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { db } from '../../firebase/firebase';
import { setUserFavorites } from '../Auth/AuthSlice';

export const getFavoritesTeachers = createAsyncThunk(
  'favorite/getFavorites',
  async (userId, { dispatch }) => {
    const userFavoritesRef = ref(db, `users/${userId}/favorites`);

    try {
      const snapshot = await get(userFavoritesRef);
      const favorites = snapshot.val() || {};

      dispatch(setUserFavorites(favorites));

      return favorites;
    } catch (error) {
      console.error('Error getFavoritesTeachers ', error);
      throw error;
    }
  }
);
