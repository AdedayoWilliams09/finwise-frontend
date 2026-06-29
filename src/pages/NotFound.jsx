// FILE: frontend/src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="text-center p-8 animate-float">
        <h1 className="text-9xl font-black text-primary/20">404</h1>
        <h2 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center justify-center font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark px-5 py-2.5 shadow-md">
          Back Home
        </Link>
      </div>
    </div>
  );
}