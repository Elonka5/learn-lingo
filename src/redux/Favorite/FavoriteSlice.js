import { createSlice } from '@reduxjs/toolkit';

const initialStateFavorite = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    addFavorite(state, { payload }) {
      if (!state.favoriteList.some(teacher => teacher.id === payload.id)) {
        state.favoriteList.push(payload);
      }
    },
    removeFromFavorite(state, { payload }) {
      state.favoriteList = state.favoriteList.filter(
        teacher => teacher.id !== payload.id
      );
    },
    clearFavorite(state) {
      state.favoriteList = [];
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, removeFromFavorite, clearFavorite } =
  favoriteSlice.actions;
