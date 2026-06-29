// FILE: frontend/src/components/home/PricingSection.jsx
// PURPOSE: Pricing comparison between Free and Premium plans

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import Button from '../common/Button';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows how much it costs to use Finwise.
 * There's a free version and a premium version with more features.
 * 
 *  Technical Explanation:
 * Pricing section with two plans: Free and Premium.
 * Highlights the differences and encourages upgrade.
 */

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with personal finance tracking.',
      features: [
        { included: true, text: '50 transactions per month' },
        { included: true, text: '3 budgets' },
        { included: true, text: 'Basic reports' },
        { included: true, text: '30-day data history' },
        { included: false, text: 'Receipt storage' },
        { included: false, text: 'Export to CSV/PDF' },
        { included: false, text: 'Email reports' },
      ],
      ctaText: 'Get Started',
      ctaLink: '/signup?plan=free',
      popular: false,
    },
    {
      name: 'Premium',
      price: '₦2,500',
      period: '/month',
      description: 'Full financial control with advanced features and insights.',
      features: [
        { included: true, text: 'Unlimited transactions' },
        { included: true, text: 'Unlimited budgets' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Unlimited data history' },
        { included: true, text: 'Receipt storage' },
        { included: true, text: 'Export to CSV/PDF' },
        { included: true, text: 'Email reports' },
      ],
      ctaText: 'Start Premium',
      ctaLink: '/signup?plan=premium',
      popular: true,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent{' '}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`
                relative p-8 rounded-2xl
                ${plan.popular 
                  ? 'bg-primary text-white shadow-xl scale-105 border-2 border-primary' 
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-secondary text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mt-2 text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    {feature.included ? (
                      <FiCheck className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    ) : (
                      <FiX className="w-5 h-5 mr-3 flex-shrink-0 text-gray-400 dark:text-gray-600" />
                    )}
                    <span className={feature.included 
                      ? (plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300')
                      : 'text-gray-400 dark:text-gray-600'
                    }>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <Link to={plan.ctaLink}>
                  <Button
                    variant={plan.popular ? 'secondary' : 'primary'}
                    fullWidth
                    size="lg"
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>

              {/* Trust Badge */}
              {plan.popular && (
                <p className="mt-4 text-xs text-white/60 text-center">
                  🔒 Secure payment powered by Paystack
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingSection;