// FILE: frontend/src/components/about/StatsSection.jsx
// PURPOSE: Statistics counter section

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../../store/aboutSlice';
import { FiUsers, FiDollarSign, FiActivity } from 'react-icons/fi';
import Container from '../common/Container';
import Loader from '../common/Loader';

/**
 *  Child Explanation:
 * This shows impressive numbers about our app.
 * It counts up like a digital display to show how big we are.
 * 
 *  Technical Explanation:
 * Stats section with animated counters.
 * Fetches data from the backend API.
 * Uses Framer Motion for entrance animations.
 */

const StatsSection = () => {
  const dispatch = useDispatch();
  const { stats, isLoading, error } = useSelector((state) => state.about);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  // Format large numbers with commas
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `₦${(num / 1000000000).toFixed(1)}B+`;
    }
    if (num >= 1000000) {
      return `₦${(num / 1000000).toFixed(1)}M+`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return `${num}+`;
  };

  const statItems = [
    {
      icon: FiUsers,
      label: 'Active Users',
      value: stats?.users || 0,
      format: (val) => `${(val / 1000).toFixed(1)}K+`,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: FiDollarSign,
      label: 'Tracked Transactions',
      value: stats?.transactions || 0,
      format: formatNumber,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: FiActivity,
      label: 'Uptime',
      value: stats?.uptime || 99.9,
      format: (val) => `${val}%`,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
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

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <Container>
          <div className="flex justify-center py-12">
            <Loader size="lg" />
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <Container>
          <div className="text-center py-12">
            <p className="text-red-500">Failed to load statistics.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                p-8 rounded-xl text-center
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                hover:shadow-lg transition-all duration-300
              "
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-full
                ${item.bgColor}
                flex items-center justify-center
                mx-auto mb-4
              `}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                {item.format(item.value)}
              </div>

              {/* Label */}
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default StatsSection;