import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const teachersRef = ref(db, 'teachers');

      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        return teachersData;
      } else {
        return {};
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
