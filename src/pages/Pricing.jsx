// FILE: frontend/src/pages/Pricing.jsx
import React from 'react';

export default function Pricing() {
  return (
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="text-center max-w-xl p-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose the plan that fits your financial journey. No hidden fees.</p>
        <div className="mt-8 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Pro Plan Placeholder</span>
          <p className="text-5xl font-black mt-2">$9<span className="text-base font-normal text-gray-500">/mo</span></p>
        </div>
      </div>
    </div>
  );
}