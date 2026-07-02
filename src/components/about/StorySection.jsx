// FILE: frontend/src/components/about/StorySection.jsx
// PURPOSE: Company origin story

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This tells the story of how Finwise was created.
 * It's like the "origin story" of a superhero.
 * 
 *  Technical Explanation:
 * Story section explaining the company's origin and motivation.
 * Includes key milestones in a timeline format.
 */

const StorySection = () => {
  const milestones = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Our founders realized that most Africans struggle with financial tracking. Traditional tools were expensive and complicated.',
      icon: FiHeart,
    },
    {
      year: '2024',
      title: 'Building the Solution',
      description: 'We assembled a team of engineers and designers to build a simple, powerful financial tool for everyone.',
      icon: FiUsers,
    },
    {
      year: '2025',
      title: 'Launch & Growth',
      description: 'Finwise launched to the public and quickly grew to 10,000+ users who love the simplicity and power of the platform.',
      icon: FiTrendingUp,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              How we went from an idea to a tool that helps thousands manage their finances.
            </p>
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                {/* Year */}
                <div className="sm:w-32 flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <milestone.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;