// FILE: frontend/src/pages/Home.jsx
// PURPOSE: Main homepage with all sections

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';

/**
 *  Child Explanation:
 * This is the homepage - the first page people see.
 * It has all the sections: hero, features, testimonials, pricing, and a final CTA.
 * 
 *  Technical Explanation:
 * Homepage component that assembles all sections.
 * Includes Helmet for SEO meta tags.
 * Uses lazy loading for sections below the fold.
 */

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Finwise - Take Control of Your Finances</title>
        <meta 
          name="description" 
          content="Track expenses, set budgets, and achieve your financial goals with Finwise - the smart personal finance companion." 
        />
        <meta property="og:title" content="Finwise - Personal Finance Management" />
        <meta property="og:description" content="Take control of your finances. Save smarter, live better." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;