// FILE: frontend/src/main.jsx
// PURPOSE: React entry point with Redux Provider

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

/**
 * 🧒 Child Explanation:
 * Provider wraps our entire app and gives every component
 * access to the Redux whiteboard (store).
 * 
 * 👨‍💻 Technical Explanation:
 * Provider is a React component from react-redux that makes
 * the Redux store available to any nested components that need it.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);