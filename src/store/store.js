// FILE: frontend/src/store/store.js
// PURPOSE: Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';

/**
 * 🧒 Child Explanation:
 * This creates the whiteboard (store) where we keep our information.
 * We tell it: "We have one section called 'api' for backend connection info."
 * 
 * 👨‍💻 Technical Explanation:
 * configureStore sets up Redux with good defaults:
 * - DevTools enabled in development
 * - Thunk middleware included by default
 * - Immutability checks in development
 */

export const store = configureStore({
  reducer: {
    api: apiReducer,  // Only one slice in foundation phase
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in dev
});