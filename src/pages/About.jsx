// FILE: frontend/src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl text-center p-8 animate-slide-up">
        <h1 className="text-4xl font-extrabold text-primary mb-4">About Finwise</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          We are on a mission to democratize financial literacy and wealth management tools, making smart budgeting accessible to everyone everywhere.
        </p>
      </div>
    </div>
  );
}