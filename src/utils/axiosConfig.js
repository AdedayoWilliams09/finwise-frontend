// FILE: frontend/src/utils/axiosConfig.js
// PURPOSE: Configured Axios instance for API calls

import axios from 'axios';

/**
 * 🧒 Child Explanation:
 * This creates a special messenger (axios instance) that knows:
 * - The backend address (from .env file)
 * - To wait 10 seconds before giving up
 * - To write down every message sent and received (for debugging)
 * 
 * 👨‍💻 Technical Explanation:
 * Creates pre-configured Axios instance with:
 * - Base URL from environment variable (supports dev/prod)
 * - 10 second timeout to prevent hanging requests
 * - Request/response interceptors for logging
 */

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - logs every outgoing request
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`📤 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    console.log(`   Headers:`, config.headers);
    if (config.data) {
      console.log(`   Body:`, config.data);
    }
    return config;
  },
  (error) => {
    console.error(`📤 Request Error:`, error);
    return Promise.reject(error);
  }
);

// Response interceptor - logs every incoming response
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`📥 API Response: ${response.status} ${response.config.url}`);
    console.log(`   Data:`, response.data);
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error(`📥 Timeout Error: Request took longer than 10 seconds`);
    } else if (error.response) {
      console.error(`📥 Response Error: ${error.response.status} ${error.response.config?.url}`);
      console.error(`   Message:`, error.response.data?.message || error.message);
    } else if (error.request) {
      console.error(`📥 Network Error: No response received - is backend running?`);
    } else {
      console.error(`📥 Request Setup Error:`, error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;