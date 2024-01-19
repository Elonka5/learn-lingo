import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { teacherReducer } from './Teachers/TeachersSlice';
import { filterReducer } from './filterSlice';
import { usersReducer } from './Auth/UserSlice';

const persistUserConfig = {
  key: 'auth',
  storage,
};

const persistedAuth = persistReducer(persistUserConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuth,
    teachers: teacherReducer,
    filter: filterReducer,
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export default store;
