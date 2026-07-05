// FILE: frontend/src/components/pricing/PricingCard.jsx
// PURPOSE: Individual pricing plan card

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';
import Button from '../common/Button';

/**
 *  Child Explanation:
 * This is a single pricing card showing one plan.
 * It shows the plan name, price, features, and a sign up button.
 * 
 *  Technical Explanation:
 * Pricing card component with plan details and CTA.
 * Highlights popular plan with special styling. Scaled to safely handle missing backend data.
 */

const PricingCard = ({ plan, isSelected, onSelect, index }) => {
  // 1. Establish a safe fallback tier if the backend object is completely empty
  const currentTier = plan?.tier || (index === 0 ? 'free' : 'premium');
  const isPopular = plan?.isPopular || currentTier === 'premium';

  // 2. Safe Extraction of prices from nested paths with robust offline defaults
  const monthlyAmount = plan?.price?.monthly ?? plan?.monthlyPrice ?? plan?.price ?? (currentTier === 'free' ? 0 : 2500);
  const yearlyAmount = plan?.price?.yearly ?? plan?.yearlyPrice ?? (currentTier === 'free' ? 0 : 25000);
  const currency = plan?.currency || 'NGN';

  // Format price safely without throwing runtime crashes
  const formatPrice = (amount) => {
    if (amount === 0 || currentTier === 'free') return 'Free';
    
    const formattedNum = typeof amount === 'number' 
      ? amount.toLocaleString() 
      : String(amount || 0);

    if (currency === 'NGN' || currency === '₦') {
      return `₦${formattedNum}`;
    }
    return `$${formattedNum}`;
  };

  // ROBUST FEATURE CHECK: Guarantees Premium features display correctly under all conditions
  const hasFeature = (feature) => {
    const normalizedTarget = feature.toLowerCase().trim();
    const isPremiumTier = currentTier === 'premium';

    // Explicitly guarantee premium features display correctly on the card framework
    if (isPremiumTier && [
      'unlimited transactions',
      'unlimited budgets',
      'advanced analytics',
      'unlimited data history',
      'priority support'
    ].includes(normalizedTarget)) {
      return true;
    }

    // Fallback lookup to backend feature strings if they exist
    if (!Array.isArray(plan?.features)) return false;
    return plan.features.some(f => {
      const featureString = typeof f === 'string' ? f : f?.name || '';
      return featureString.toLowerCase().trim() === normalizedTarget;
    });
  };

  // Common features for comparison
  const commonFeatures = [
    '50 transactions per month',
    'Unlimited transactions',
    '3 budgets',
    'Unlimited budgets',
    'Basic reports',
    'Advanced analytics',
    '30-day data history',
    'Unlimited data history',
    'Receipt storage',
    'Export to CSV/PDF',
    'Email reports',
    'Priority support',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative p-8 rounded-2xl flex flex-col justify-between h-full
        ${isPopular 
          ? 'bg-primary text-white shadow-xl scale-105 border-2 border-primary z-10' 
          : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
        }
        hover:shadow-2xl transition-all duration-300
      `}
    >
      <div>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 bg-secondary text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </span>
          </div>
        )}

        {/* Plan Name */}
        <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {plan?.name || (currentTier === 'free' ? 'Free' : 'Premium')}
        </h3>

        {/* Price */}
        <div className="mt-4 flex items-baseline">
          <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {formatPrice(monthlyAmount)}
          </span>
          {monthlyAmount > 0 && currentTier !== 'free' && (
            <span className={`ml-1 text-sm ${isPopular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
              /month
            </span>
          )}
        </div>

        {/* Yearly price note */}
        {yearlyAmount > 0 && currentTier !== 'free' && (
          <p className={`mt-1 text-sm ${isPopular ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>
            or {formatPrice(yearlyAmount)}/year (save 17%)
          </p>
        )}

        {/* Description */}
        {(plan?.description || currentTier === 'premium') && (
          <p className={`mt-3 text-sm ${isPopular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
            {plan?.description || 'Full financial control with advanced features and insights.'}
          </p>
        )}

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {commonFeatures.map((feature, i) => {
            const included = hasFeature(feature);
            // Only show features that are relevant to free plans to match your logic
            if (!included && currentTier === 'free') return null;
            
            return (
              <li key={i} className="flex items-center text-sm">
                {included ? (
                  <FiCheck className={`w-5 h-5 mr-3 flex-shrink-0 ${isPopular ? 'text-white' : 'text-primary'}`} />
                ) : (
                  <FiX className="w-5 h-5 mr-3 flex-shrink-0 text-gray-400 dark:text-gray-600" />
                )}
                <span className={included 
                  ? (isPopular ? 'text-white' : 'text-gray-700 dark:text-gray-300')
                  : 'text-gray-400 dark:text-gray-600'
                }>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Action Block */}
      <div>
        {/* CTA Button */}
        <div className="mt-8">
          <Link to={`/signup?plan=${currentTier}`}>
            <Button
              variant={isPopular ? 'secondary' : 'primary'}
              fullWidth
              size="lg"
              onClick={() => onSelect && onSelect(plan)}
            >
              {currentTier === 'free' ? 'Get Started' : 'Upgrade to Premium'}
            </Button>
          </Link>
        </div>

        {/* Trust Badge */}
        {isPopular && (
          <p className="mt-4 text-xs text-white/60 text-center">
            🔒 Secure payment powered by Paystack
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default PricingCard;