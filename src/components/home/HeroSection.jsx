// FILE: frontend/src/components/home/HeroSection.jsx
// PURPOSE: Hero section with headline, subheadline, and CTAs

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This is the first thing people see when they visit.
 * It says "Welcome! Here's what we do!" with a big title and buttons.
 * 
 *  Technical Explanation:
 * Hero section with value proposition, CTA buttons, and trust badges.
 * Uses motion animations for entrance effects.
 */

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="
      relative min-h-screen
      flex items-center
      bg-gradient-to-br from-primary/10 via-transparent to-secondary/10
      dark:from-primary/5 dark:to-secondary/5
      overflow-hidden
    ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <Container className="relative z-10 py-20 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="
              inline-flex items-center px-4 py-1.5
              bg-primary/10 text-primary
              rounded-full text-sm font-medium
              dark:bg-primary/20
            ">
              🎉 Trusted by 10,000+ users
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold tracking-tight
              text-gray-900 dark:text-white
              leading-tight
            "
          >
            Take Control of Your{' '}
            <span className="text-primary">Finances</span>.
            <br />
            Save Smarter, Live Better.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="
              mt-6 text-lg sm:text-xl
              text-gray-600 dark:text-gray-300
              max-w-3xl mx-auto
              leading-relaxed
            "
          >
            Track expenses, set budgets, and achieve your financial goals
            with Finwise — the smart personal finance companion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start Free Trial →
              </Button>
            </Link>
            <Link to="#demo">
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span>4.8/5 rating</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • 
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bank-level security</span>
            </div>
          </motion.div>

          {/* Dashboard Preview Placeholder */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                <p className="text-sm">Dashboard Preview</p>
                <p className="text-xs text-gray-400">(Full dashboard coming in Phase 3)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;