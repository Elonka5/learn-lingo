import { createSlice } from '@reduxjs/toolkit';
import {
  changePasswordAsync,
  loginThunk,
  logoutThunk,
  registerThunk,
  updateAvatar,
  updateDisplayNameAsync,
} from './AuthThunk';
import { getFavoritesTeachers } from '../Favorite/FavoriteThunk';
import { uploadAvatarAsync } from './UserThunk';

const initialState = {
  userId: null,
  email: null,
  name: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  favorites: {},
  photoURL: null,
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
      photoURL: payload.photoURL,
    }),
    setUserFavorites: (state, { payload }) => ({
      ...state,
      favorites: payload,
    }),
    updateUserName: (state, action) => {
      state.name = action.payload.name;
    },
    clearUserData: state => {
      return {
        ...initialState,
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
        console.log('Register fulfilled payload:', payload);
        state.userId = payload.uid;
        state.name = payload.displayName;
        state.email = payload.email;
        state.photoURL = payload.photoURL;
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
        console.log('Login fulfilled payload:', payload);
        state.userId = payload.uid;
        state.name = payload.displayName;
        state.email = payload.email;
        state.photoURL = payload.photoURL;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.photoURL = payload;
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
        state.photoURL = null;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(uploadAvatarAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatarAsync.fulfilled, (state, { payload }) => {
        state.photoURL = payload;
      })
      .addCase(updateDisplayNameAsync.fulfilled, (state, action) => {
        state.name = action.payload;
      })
      .addCase(changePasswordAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePasswordAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload;
      })
      .addCase(changePasswordAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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

export const {
  getCurrentUser,
  setUserFavorites,
  clearUserData,
  updateUserName,
} = authSlice.actions;
