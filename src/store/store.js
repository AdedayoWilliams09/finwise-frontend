// FILE: frontend/src/store/store.js
// PURPOSE: Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import aboutReducer from './aboutSlice';
import pricingReducer from './pricingSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    about: aboutReducer,
     pricing: pricingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});