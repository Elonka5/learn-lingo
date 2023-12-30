import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);

      await updateProfile(auth.currentUser, { displayName: body.name });
      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logInThunk',
  async (body, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      const { uid, displayName, email } = userCredential.user;
      return { uid, displayName, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
