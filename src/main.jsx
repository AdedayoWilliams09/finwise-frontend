// FILE: frontend/src/main.jsx
// PURPOSE: React entry point with ThemeProvider and Redux

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store/store';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

/**
 * 🧒 Child Explanation:
 * This is the entry point. It wraps the app with:
 * - Redux Provider (for state management)
 * - Theme Provider (for dark/light mode)
 * - Helmet Provider (for SEO)
 * 
 * 👨‍💻 Technical Explanation:
 * Multiple providers for different concerns:
 * - Redux: global state
 * - Theme: dark mode
 * - Helmet: SEO meta tags
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);