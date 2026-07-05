// FILE: frontend/src/components/pricing/PricingTable.jsx
// PURPOSE: Pricing plans grid

import { useSelector } from 'react-redux';
import { selectPricingPlans, selectPricingLoading } from '../../store/pricingSlice';
import PricingCard from './PricingCard';
import Loader from '../common/Loader';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows all pricing plans in a grid.
 * It gets the plans from the database and displays them.
 * 
 *  Technical Explanation:
 * Pricing table component that displays all plans.
 * Uses Redux state for data and loading states.
 */

const PricingTable = () => {
  const plans = useSelector(selectPricingPlans);
  const isLoading = useSelector(selectPricingLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader size="lg" />
      </div>
    );
  }

  if (!plans || plans.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No pricing plans available. Please check back later.
        </p>
      </div>
    );
  }

  // Sort plans: popular first, then by order
  const sortedPlans = [...plans].sort((a, b) => {
    if (a.isPopular && !b.isPopular) return -1;
    if (!a.isPopular && b.isPopular) return 1;
    return (a.order || 0) - (b.order || 0);
  });

  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sortedPlans.map((plan, index) => {
            //  COMPOSITE FALLBACK KEY: Ensures unique virtual DOM identities
            const safePlanKey = plan?._id || plan?.id || plan?.tier || `plan-idx-${index}`;

            return (
              <PricingCard
                key={safePlanKey}
                plan={plan}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PricingTable;