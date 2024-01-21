import { createSlice } from '@reduxjs/toolkit';
import { sendUserDataThunk } from './UserDataThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendUserDataThunk.pending, state => {
        state.isloading = true;
      })
      .addCase(sendUserDataThunk.fulfilled, state => {
        state.isloading = false;
      })
      .addCase(sendUserDataThunk.rejected, (state, { payload }) => {
        state.isloading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = userSlice.reducer;
