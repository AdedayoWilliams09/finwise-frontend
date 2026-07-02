// FILE: frontend/src/pages/About.jsx
// PURPOSE: About page with all sections

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/about/HeroSection';
import StorySection from '../components/about/StorySection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import StatsSection from '../components/about/StatsSection';
import CTASection from '../components/home/CTASection';

/**
 *  Child Explanation:
 * This is the About page - it tells visitors who we are and what we do.
 * It has sections about our mission, story, values, team, and stats.
 * 
 *  Technical Explanation:
 * About page component that assembles all sections.
 * Uses Helmet for SEO meta tags.
 * Reuses CTASection from homepage for consistency.
 */

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Finwise - Our Mission & Team</title>
        <meta 
          name="description" 
          content="Learn about Finwise - our mission to make financial tracking simple and accessible for everyone. Meet our team and see our impact." 
        />
        <meta property="og:title" content="About Finwise - Our Mission & Team" />
        <meta property="og:description" content="Learn about Finwise and our mission to help everyone achieve financial freedom." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <StorySection />
          <ValuesSection />
          <StatsSection />
          <TeamSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;