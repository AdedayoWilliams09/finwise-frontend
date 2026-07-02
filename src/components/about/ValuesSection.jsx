// FILE: frontend/src/components/about/ValuesSection.jsx
// PURPOSE: Core values grid

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiUsers, 
  FiZap, 
  FiTrendingUp 
} from 'react-icons/fi';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows the 4 core values that guide our company.
 * It's like our "rule book" for how we work.
 * 
 *  Technical Explanation:
 * Values section with 4 core values cards.
 * Each value has an icon, title, and description.
 */

const ValuesSection = () => {
  const values = [
    {
      icon: FiShield,
      title: 'Trust & Security',
      description: 'We treat your financial data with the same care as our own. Bank-level encryption keeps your information safe.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: FiUsers,
      title: 'User First',
      description: 'Every feature we build is designed with our users in mind. Your feedback shapes our roadmap.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: FiZap,
      title: 'Innovation',
      description: 'We constantly push boundaries to create simple, powerful tools that make financial tracking effortless.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
    {
      icon: FiTrendingUp,
      title: 'Financial Empowerment',
      description: 'We believe everyone deserves access to tools that help them achieve financial freedom and independence.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The principles that guide everything we do at Finwise.
          </p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                p-6 rounded-xl text-center
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                hover:shadow-lg hover:border-primary/20
                transition-all duration-300
                group
              "
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-full
                ${value.bgColor}
                flex items-center justify-center
                mx-auto mb-4
                group-hover:scale-110 transition-transform duration-300
              `}>
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ValuesSection;