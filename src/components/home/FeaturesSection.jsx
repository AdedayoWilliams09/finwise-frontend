// FILE: frontend/src/components/home/FeaturesSection.jsx
// PURPOSE: Features grid showcasing core functionality

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiPieChart, 
  FiCamera, 
  FiDollarSign, 
  FiShield, 
  FiBell 
} from 'react-icons/fi';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This section shows all the cool things our app can do.
 * Each feature has an icon, a title, and a short description.
 * 
 *  Technical Explanation:
 * Features section with 6 feature cards in a grid.
 * Each card has an icon, title, and description.
 * Responsive: 3 columns on desktop, 2 on tablet, 1 on mobile.
 */

const FeaturesSection = () => {
  const features = [
    {
      icon: FiTrendingUp,
      title: 'Expense Tracking',
      description: 'Log every transaction in seconds. Never miss a payment or expense again.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: FiPieChart,
      title: 'Smart Budgets',
      description: 'Set monthly limits and get real-time alerts when you\'re getting close.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: FiCamera,
      title: 'Receipt Capture',
      description: 'Snap photos of receipts and we\'ll automatically organize them for you.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: FiDollarSign,
      title: 'Multi-Currency',
      description: 'Support for NGN, USD, GBP, EUR, and more. Track in your local currency.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
    {
      icon: FiShield,
      title: 'Bank-Level Security',
      description: 'Your data is encrypted and safe with enterprise-grade security standards.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      icon: FiBell,
      title: 'Smart Alerts',
      description: 'Get notified about unusual spending, bill due dates, and budget milestones.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
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
            Everything You Need to{' '}
            <span className="text-primary">Master Your Money</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful features designed to help you save more, spend less,
            and achieve your financial goals.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                p-6 rounded-xl
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                hover:shadow-lg hover:border-primary/20
                transition-all duration-300
                group
              "
            >
              {/* Icon */}
              <div className={`
                w-12 h-12 rounded-lg
                ${feature.bgColor}
                flex items-center justify-center
                mb-4
                group-hover:scale-110 transition-transform duration-300
              `}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;