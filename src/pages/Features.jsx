import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Features = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="text-gray-600 mt-4">Coming soon...</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Features;