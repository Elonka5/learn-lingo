import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const teachersRef = ref(db, 'teachers');

      const snapshot = await get(teachersRef);

      // Перевірте, чи існує об'єкт вчителів
      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        console.log(teachersData);
        return teachersData;
      } else {
        return {};
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
