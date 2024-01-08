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
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachersData = payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const teacherReducer = teacherSlice.reducer;
export const { clearTeachersList } = teacherSlice.actions;
