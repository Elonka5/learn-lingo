import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';

export const sendUserDataThunk = createAsyncThunk(
  'auth/sendUserData',
  async (userData, { rejectWithValue }) => {
    try {
      const usersCollectionRef = collection(firestore, 'users');
      await addDoc(usersCollectionRef, userData);

      return 'Data sent successfully';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
