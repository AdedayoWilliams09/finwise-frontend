// FILE: frontend/src/components/about/HeroSection.jsx
// PURPOSE: About page hero section with mission statement

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This is the top part of the About page.
 * It says "We're Finwise" and tells our mission.
 * 
 *  Technical Explanation:
 * Hero section for About page with mission statement.
 * Uses Framer Motion for entrance animations.
 */

const HeroSection = () => {
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
      relative pt-32 pb-20
      bg-gradient-to-br from-primary/10 via-transparent to-secondary/10
      dark:from-primary/5 dark:to-secondary/5
      overflow-hidden
    ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium dark:bg-primary/20 mb-6"
          >
            About Finwise
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Our Mission:{' '}
            <span className="text-primary">Financial Freedom</span>
            <br />
            for Everyone
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We believe that managing your finances shouldn't be complicated.
            Finwise was built to make financial tracking simple, intuitive,
            and accessible to everyone — from students to business owners.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;