// FILE: frontend/src/components/home/CTASection.jsx
// PURPOSE: Final call-to-action section

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This is the final push - it says "Sign up now!"
 * It's like the last page of a book that makes you want to take action.
 * 
 *  Technical Explanation:
 * Final CTA section with a compelling message and signup button.
 * Appears at the bottom of the homepage.
 */

const CTASection = () => {
  return (
    <section className="py-20 bg-primary dark:bg-primary-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join thousands of users who are already saving money and achieving
            their financial goals with Finwise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" size="lg">
                Start Free Trial →
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            No credit card required. Free forever for basic features.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;