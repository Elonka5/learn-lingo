import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBoPA67SzGYasnRtnpU1vP-s4B2YMCZTKY',
  authDomain: 'learn-lingo-api-1262b.firebaseapp.com',
  projectId: 'learn-lingo-api-1262b',
  storageBucket: 'learn-lingo-api-1262b.appspot.com',
  messagingSenderId: '682401051887',
  appId: '1:682401051887:web:0d79e9b60ddc35fae9571a',
  databaseURL:
    'https://learn-lingo-api-1262b-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const dbRef = ref;
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const storage = getStorage(app);
