import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoPA67SzGYasnRtnpU1vP-s4B2YMCZTKY",
  authDomain: "learn-lingo-api-1262b.firebaseapp.com",
  projectId: "learn-lingo-api-1262b",
  storageBucket: "learn-lingo-api-1262b.appspot.com",
  messagingSenderId: "682401051887",
  appId: "1:682401051887:web:0d79e9b60ddc35fae9571a",
    databaseURL:
      "https://learn-lingo-api-1262b-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const auth = getAuth(app);

export { auth };
