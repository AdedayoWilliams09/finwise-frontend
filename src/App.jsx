// FILE: frontend/src/App.jsx
// PURPOSE: Main app with RouterProvider

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './router';

/**
 * 🧒 Child Explanation:
 * This is the main app. It sets up the router and shows toasts (notifications).
 * 
 * 👨‍💻 Technical Explanation:
 * App component with RouterProvider for routing.
 * Toaster for toast notifications.
 */

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#10B981',
              color: '#fff',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#EF4444',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
}

export default App;