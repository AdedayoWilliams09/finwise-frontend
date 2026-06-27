// FILE: frontend/src/store/apiSlice.js
// PURPOSE: Redux slice for API communication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosConfig";

/**
 * Child Explanation:
 * This is an async action - like sending a message and waiting for a reply.
 * We ask the backend: "Are you there? Can we talk?"
 * The backend answers "yes" or says nothing (error).
 *
 * Technical Explanation:
 * createAsyncThunk automatically generates pending/fulfilled/rejected action types.
 * We only have one thunk for testing the connection.
 * No other state is managed in this slice.
 */

// Async thunk for testing backend connection
export const testBackendConnection = createAsyncThunk(
  "api/testConnection", // Action type prefix
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/test");
      return response.data;
    } catch (error) {
      // Return custom error message for better UX
      if (error.response) {
        // Server responded with error status
        return rejectWithValue(
          error.response.data?.message || "Server error occurred",
        );
      } else if (error.request) {
        // No response received
        return rejectWithValue(
          "Cannot connect to backend. Is the server running?",
        );
      } else {
        // Request setup error
        return rejectWithValue(error.message || "Request failed");
      }
    }
  },
);

// Initial state
const initialState = {
  isLoading: false,
  lastTestResult: null,
  error: null,
};

// Create the slice
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    clearTestResult: (state) => {
      state.lastTestResult = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Test connection - pending
      .addCase(testBackendConnection.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        console.log(" Testing backend connection...");
      })
      // Test connection - fulfilled (success)
      .addCase(testBackendConnection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lastTestResult = action.payload;
        state.error = null;
        console.log(" Backend connection successful!", action.payload);
      })
      // Test connection - rejected (failed)
      .addCase(testBackendConnection.rejected, (state, action) => {
        state.isLoading = false;
        state.lastTestResult = null;
        state.error = action.payload || action.error.message;
        console.error(" Backend connection failed:", state.error);
      });
  },
});

// Export actions
export const { clearTestResult } = apiSlice.actions;

// Export selectors for easy state access
export const selectApiLoading = (state) => state.api.isLoading;
export const selectApiResult = (state) => state.api.lastTestResult;
export const selectApiError = (state) => state.api.error;

// Export reducer for store configuration
export default apiSlice.reducer;
