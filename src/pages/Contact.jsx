// FILE: frontend/src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-md w-full p-8 border border-gray-200 dark:border-gray-800 rounded-2xl animate-fade-in">
        <h1 className="text-3xl font-extrabold text-primary mb-2 text-center">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">Have questions? We'd love to hear from you.</p>
        <div className="space-y-4 text-center">
          <p className="font-medium text-secondary">support@finwise.example.com</p>
        </div>
      </div>
    </div>
  );
}