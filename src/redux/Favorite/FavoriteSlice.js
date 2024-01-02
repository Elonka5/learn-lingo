import { createSlice } from '@reduxjs/toolkit';

const initialStateFavorite = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    addFavorite(state, { payload }) {
      state.favoriteList.push(payload);
    },
    removeFromFavorite(state, { payload }) {
      state.favorite = state.favoriteList.filter(
        teacher => teacher !== payload
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, removeFromFavorite } = favoriteSlice.actions;
