// FILE: frontend/src/store/aboutSlice.js
// PURPOSE: Redux slice for About page state

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosConfig';

/**
 *  Child Explanation:
 * This is the section of our whiteboard for the About page.
 * It stores team member information and statistics.
 * 
 *  Technical Explanation:
 * About slice with async thunks for fetching team members and stats.
 * Manages loading states, data, and errors.
 */

// Async thunk for fetching team members
export const fetchTeamMembers = createAsyncThunk(
  'about/fetchTeamMembers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/public/team');
      return response.data.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Failed to fetch team members');
      } else if (error.request) {
        return rejectWithValue('Cannot connect to server. Please check your connection.');
      } else {
        return rejectWithValue(error.message || 'An error occurred');
      }
    }
  }
);

// Async thunk for fetching stats
export const fetchStats = createAsyncThunk(
  'about/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/public/stats');
      return response.data.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Failed to fetch stats');
      } else if (error.request) {
        return rejectWithValue('Cannot connect to server. Please check your connection.');
      } else {
        return rejectWithValue(error.message || 'An error occurred');
      }
    }
  }
);

// Initial state
const initialState = {
  teamMembers: [],
  stats: null,
  isLoading: false,
  error: null,
};

// Create slice
const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    clearAboutError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch team members
      .addCase(fetchTeamMembers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teamMembers = action.payload;
        state.error = null;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch team members';
      })
      // Fetch stats
      .addCase(fetchStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
        state.error = null;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch stats';
      });
  },
});

// Export actions
export const { clearAboutError } = aboutSlice.actions;

// Export selectors
export const selectTeamMembers = (state) => state.about.teamMembers;
export const selectStats = (state) => state.about.stats;
export const selectAboutLoading = (state) => state.about.isLoading;
export const selectAboutError = (state) => state.about.error;

// Export reducer
export default aboutSlice.reducer;