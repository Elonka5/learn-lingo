import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);
      // const user = UserCredentialImpl.user;

      await updateProfile(auth.currentUser, { displayName: body.name });
      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
