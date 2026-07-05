// FILE: frontend/src/pages/Pricing.jsx
// PURPOSE: Pricing page

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchPricingPlans } from '../store/pricingSlice';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PricingTable from '../components/pricing/PricingTable';
import FeatureComparison from '../components/pricing/FeatureComparison';
import Container from '../components/common/Container';

/**
 *  Child Explanation:
 * This is the Pricing page - it shows how much Finwise costs.
 * It has a header, pricing plans, feature comparison, and footer.
 * 
 *  Technical Explanation:
 * Pricing page component that fetches and displays pricing plans.
 * Includes hero section with pricing intro.
 */

const Pricing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPricingPlans());
  }, [dispatch]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pricing - Finwise Plans & Features</title>
        <meta 
          name="description" 
          content="Choose the perfect Finwise plan for your needs. Free and premium options available with flexible monthly and yearly pricing." 
        />
        <meta property="og:title" content="Pricing - Finwise Plans & Features" />
        <meta property="og:description" content="Choose the perfect Finwise plan for your needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                  Simple, Transparent{' '}
                  <span className="text-primary">Pricing</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Choose the plan that fits your needs. All plans come with a 14-day free trial.
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                  💳 All plans include secure payment via Paystack
                </p>
              </div>
            </Container>
          </section>

          {/* Pricing Cards */}
          <PricingTable />

          {/* Feature Comparison */}
          <FeatureComparison />

          {/* FAQ Teaser */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Have Questions?
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Check out our FAQ page for answers to common questions about pricing and features.
                </p>
                <a
                  href="/faq"
                  className="mt-6 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                >
                  Visit FAQ →
                </a>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;