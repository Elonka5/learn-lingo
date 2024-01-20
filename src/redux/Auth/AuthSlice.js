import { createSlice } from '@reduxjs/toolkit';
import {
  changePasswordAsync,
  loginThunk,
  logoutThunk,
  registerThunk,
  updateDisplayNameThunk,
  uploadAvatarThunk,
} from './AuthThunk';
import { getFavoritesTeachers } from '../Favorite/FavoriteThunk';

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
    getCurrentUser: (state, { payload }) => {
      state.userId = payload.userId;
      state.name = payload.name;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    setUserFavorites: (state, { payload }) => ({
      ...state,
      favorites: payload,
    }),
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
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
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
      .addCase(getFavoritesTeachers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getFavoritesTeachers.fulfilled, (state, { payload }) => {
        state.favorites = payload;
        state.isLoading = false;
      })
      .addCase(getFavoritesTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
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
      .addCase(uploadAvatarThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatarThunk.fulfilled, (state, { payload }) => {
        state.photoURL = payload;
        state.isLoading = false;
      })
      .addCase(uploadAvatarThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateDisplayNameThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateDisplayNameThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload;
      })
      .addCase(updateDisplayNameThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(changePasswordAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePasswordAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload;
      })
      .addCase(changePasswordAsync.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // .addCase(updateUserProfileAsync.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(updateUserProfileAsync.fulfilled, (state, { payload }) => {
      //   state.name = payload;
      // })
      // .addCase(updateUserProfileAsync.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      .addCase('UPDATE_FAVORITES_AFTER_ADDITION', (state, { payload }) => {
        const { id } = payload;
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [id]: payload,
          },
        };
      })
      .addCase('UPDATE_FAVORITES_AFTER_REMOVAL', (state, { payload }) => {
        const updatedFavorites = { ...state.favorites };
        delete updatedFavorites[payload];
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
