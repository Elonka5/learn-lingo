import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './TeachersThunk';

const initialState = {
  teachersData: [],
  isLoading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    clearTeachersList(state) {
      state.teachersData = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachersData = payload;
      })
      .addCase(fetchTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const teacherReducer = teacherSlice.reducer;
export const { clearTeachersList } = teacherSlice.actions;
