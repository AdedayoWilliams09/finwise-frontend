// FILE: frontend/src/store/pricingSlice.js
// PURPOSE: Redux slice for pricing page

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosConfig';

/**
 *  Child Explanation:
 * This manages pricing data on our whiteboard.
 * It fetches plans from the backend and remembers which plan you selected.
 * 
 *  Technical Explanation:
 * Pricing slice with async thunks for fetching plans.
 * Manages selected plan for subscription flow.
 */

// Async thunk for fetching pricing plans
export const fetchPricingPlans = createAsyncThunk(
  'pricing/fetchPlans',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/public/pricing');
      
      //  FORCE STRIP AXIOS ENVELOPE: Always return the raw data payload from the server
      return response?.data !== undefined ? response.data : response;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Failed to fetch pricing plans');
      } else if (error.request) {
        return rejectWithValue('Cannot connect to server. Please check your connection.');
      } else {
        return rejectWithValue(error.message || 'An error occurred');
      }
    }
  }
);

// Async thunk for initializing payment
export const initializePayment = createAsyncThunk(
  'pricing/initializePayment',
  async ({ planTier, email, amount }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/payment/initialize', {
        planTier,
        email,
        amount,
      });
      return response?.data !== undefined ? response.data : response;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Failed to initialize payment');
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
  plans: [],
  selectedPlan: null,
  isLoading: false,
  error: null,
  payment: {
    isLoading: false,
    data: null,
    error: null,
  },
};

// Create slice
const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
      // Save to localStorage for persistence
      localStorage.setItem('selectedPlan', JSON.stringify(action.payload));
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
      localStorage.removeItem('selectedPlan');
    },
    clearPricingError: (state) => {
      state.error = null;
    },
    clearPaymentState: (state) => {
      state.payment = {
        isLoading: false,
        data: null,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch pricing plans
      .addCase(fetchPricingPlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPricingPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        
        const payload = action.payload;
        let extractedPlans = [];
        
        //  COMPREHENSIVE UNWRAPPING MATRIX
        if (Array.isArray(payload)) {
          extractedPlans = payload;
        } else if (Array.isArray(payload?.data)) {
          extractedPlans = payload.data;
        } else if (payload?.data && typeof payload.data === 'object') {
          // If payload.data itself is an object containing tier keys (free, premium, etc.)
          extractedPlans = Object.values(payload.data);
        } else if (payload && typeof payload === 'object') {
          // Fallback parsing for flat responses
          const values = Object.values(payload).filter(val => val && typeof val === 'object');
          if (values.length > 0) {
            extractedPlans = values;
          }
        }
        
        // Final sanity check: map object keys to include an automatic 'tier' field if missing
        state.plans = extractedPlans.map((plan, index) => ({
          ...plan,
          // Guarantee structural properties are populated for rendering engines
          tier: plan.tier || plan.id || plan.name?.toLowerCase() || `tier-${index}`
        }));
        
        state.error = null;
        
        // If no selected plan, set default (premium if exists)
        if (!state.selectedPlan && state.plans.length > 0) {
          const premium = state.plans.find(p => p.tier === 'premium');
          if (premium) {
            state.selectedPlan = premium;
          } else {
            state.selectedPlan = state.plans[0];
          }
        }
      })
      .addCase(fetchPricingPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch pricing plans';
      })
      
      // Initialize payment
      .addCase(initializePayment.pending, (state) => {
        state.payment.isLoading = true;
        state.payment.error = null;
      })
      .addCase(initializePayment.fulfilled, (state, action) => {
        state.payment.isLoading = false;
        state.payment.data = action.payload;
        state.payment.error = null;
      })
      .addCase(initializePayment.rejected, (state, action) => {
        state.payment.isLoading = false;
        state.payment.error = action.payload || 'Failed to initialize payment';
      });
  },
});

// Export actions
export const { 
  selectPlan, 
  clearSelectedPlan, 
  clearPricingError,
  clearPaymentState,
} = pricingSlice.actions;

// Export selectors
export const selectPricingPlans = (state) => state.pricing.plans;
export const selectSelectedPlan = (state) => state.pricing.selectedPlan;
export const selectPricingLoading = (state) => state.pricing.isLoading;
export const selectPricingError = (state) => state.pricing.error;
export const selectPaymentState = (state) => state.pricing.payment;

// Export reducer
export default pricingSlice.reducer;