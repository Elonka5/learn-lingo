import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './AuthThunk';

const initialState = {
  userId: null,
  email: null,
  name: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

// const initialState = {
//   userId: null,
//   login: null,
//   email: null,
//   isAuth: false,
//   isAuthLoading: false,
// };

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
      });
  },
});

export const authReducer = authSlice.reducer;

export const { getCurrentUser } = authSlice.actions;
