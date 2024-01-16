import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk } from './AuthThunk';
import { getFavoritesTeachers } from '../Favorite/FavoriteThunk';

const initialState = {
  userId: null,
  email: null,
  name: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  favorites: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      email: payload.email,
      name: payload.name,
      isLoggedIn: true,
    }),
    setUserFavorites: (state, { payload }) => ({
      ...state,
      favorites: payload,
    }),
    clearUserData: state => {
      return {
        ...initialState, // Скидуємо до початкового стану
        favorites: {},
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.name = payload.displayName;
        state.email = payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.name = payload.displayName;
        state.email = payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFavoritesTeachers.fulfilled, (state, { payload }) => {
        state.favorites = payload;
      })
      .addCase(logoutThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.userId = null;
        state.name = null;
        state.email = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase('UPDATE_FAVORITES_AFTER_ADDITION', (state, action) => {
        const { id } = action.payload;
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [id]: action.payload,
          },
        };
      })
      .addCase('UPDATE_FAVORITES_AFTER_REMOVAL', (state, action) => {
        const updatedFavorites = { ...state.favorites };
        delete updatedFavorites[action.payload];
        return {
          ...state,
          favorites: updatedFavorites,
        };
      });
  },
});

export const authReducer = authSlice.reducer;

export const { getCurrentUser, setUserFavorites, clearUserData } =
  authSlice.actions;
