// FILE: frontend/src/components/pricing/FeatureComparison.jsx
// PURPOSE: Feature comparison table

import { useSelector } from 'react-redux';
import { FiCheck, FiX } from 'react-icons/fi';
import { selectPricingPlans } from '../../store/pricingSlice';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows a side-by-side comparison of features.
 * It helps you see what you get with each plan.
 * 
 *  Technical Explanation:
 * Feature comparison table with checkmarks and X marks.
 * Shows all features across all plans with robust, unique mapping keys.
 */

const FeatureComparison = () => {
  const plansData = useSelector(selectPricingPlans);

  // 🛑 FIX: Extract the raw array out of the backend's response envelope safely
  const plans = Array.isArray(plansData) 
    ? plansData 
    : plansData?.data || [];

  // All possible features to compare
  const allFeatures = [
    'Transactions per month',
    'Budgets',
    'Data history',
    'Advanced analytics',
    'Receipt storage',
    'Export to CSV/PDF',
    'Email reports',
    'Priority support',
  ];

  // Map features to plan capabilities
  const getFeatureValue = (plan, feature) => {
    const featureMap = {
      'Transactions per month': plan?.tier === 'free' ? '50' : 'Unlimited',
      'Budgets': plan?.tier === 'free' ? '3' : 'Unlimited',
      'Data history': plan?.tier === 'free' ? '30 days' : 'Forever',
      'Advanced analytics': plan?.tier === 'premium',
      'Receipt storage': plan?.tier === 'premium',
      'Export to CSV/PDF': plan?.tier === 'premium',
      'Email reports': plan?.tier === 'premium',
      'Priority support': plan?.tier === 'premium',
    };
    return featureMap[feature];
  };

  // Check if feature is included (boolean)
  const isFeatureIncluded = (plan, feature) => {
    const value = getFeatureValue(plan, feature);
    return typeof value === 'boolean' ? value : true;
  };

  // 🛑 FIX: Check against the sanitized array length
  if (!plans || plans.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950/50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Feature Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              See what each plan offers at a glance.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Feature
                  </th>
                  {plans.map((plan, planIdx) => {
                    // 🛠️ FIX THE TH KEY WARNING: Fall back to tier name or column index if _id is missing
                    const safePlanKey = plan?._id || plan?.id || plan?.tier || `col-${planIdx}`;
                    
                    return (
                      <th
                        key={safePlanKey}
                        className={`text-center py-4 px-6 text-sm font-semibold ${
                          plan?.isPopular ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {plan?.name || plan?.tier || 'Plan'}
                        {plan?.isPopular && (
                          <span className="block text-xs text-secondary font-normal">
                            Most Popular
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => {
                  // Standardized row identifier
                  const safeRowKey = `row-${feature.toLowerCase().replace(/\s+/g, '-')}-${index}`;

                  return (
                    <tr
                      key={safeRowKey}
                      className={`border-b border-gray-200 dark:border-gray-800 ${
                        index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-950/30'
                      }`}
                    >
                      <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </td>
                      {plans.map((plan, planIdx) => {
                        // 🛠️ FIX THE TD DUPLICATE KEY WARNING: Combine dynamic properties for exact uniqueness
                        const planIdentifier = plan?._id || plan?.id || plan?.tier || planIdx;
                        
                        return (
                          <td
                            key={`${safeRowKey}-plan-${planIdentifier}`}
                            className="text-center py-3 px-6 text-sm"
                          >
                            {isFeatureIncluded(plan, feature) ? (
                              <FiCheck className="w-5 h-5 mx-auto text-primary" />
                            ) : (
                              <FiX className="w-5 h-5 mx-auto text-gray-400" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
            All plans include basic features like expense tracking and budget alerts.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FeatureComparison;