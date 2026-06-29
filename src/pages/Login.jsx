// FILE: frontend/src/pages/Login.jsx
import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4">
      <div className="max-w-md w-full p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50/30 dark:bg-gray-900/30 animate-slide-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Log in to access your financial dashboard</p>
        <div className="h-10 w-full bg-primary/10 text-primary text-xs font-semibold rounded flex items-center justify-center">
          Authentication Form Coming in the Next Phase
        </div>
      </div>
    </div>
  );
}