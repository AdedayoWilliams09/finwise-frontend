// FILE: frontend/src/store/store.js
// PURPOSE: Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import aboutReducer from './aboutSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    about: aboutReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});