// FILE: frontend/src/components/home/TestimonialsSection.jsx
// PURPOSE: Testimonials carousel with user reviews

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows what other people think about our app.
 * It's like reading reviews before buying something.
 * The testimonials slide automatically or you can click the arrows.
 * 
 *  Technical Explanation:
 * Testimonials carousel with auto-slide and manual navigation.
 * Shows 3 testimonials on desktop, 1 on mobile.
 * Uses Framer Motion for slide animations.
 */

const TestimonialsSection = () => {
  // Sample testimonials (will be replaced with API data)
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=48&background=4F46E5&color=fff',
      rating: 5,
      quote: 'Finwise has completely transformed how I manage my finances. I went from living paycheck to paycheck to saving 30% of my income within 3 months!',
    },
    {
      id: 2,
      name: 'Michael Okafor',
      role: 'Small Business Owner',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Okafor&size=48&background=10B981&color=fff',
      rating: 5,
      quote: 'The receipt capture feature is a game changer. I used to lose receipts all the time, now everything is organized and searchable.',
    },
    {
      id: 3,
      name: 'Chioma Eze',
      role: 'Software Engineer',
      avatar: 'https://ui-avatars.com/api/?name=Chioma+Eze&size=48&background=8B5CF6&color=fff',
      rating: 4,
      quote: 'I love the budget tracking. Setting monthly limits and getting alerts when I\'m close has helped me cut unnecessary spending significantly.',
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Digital Nomad',
      avatar: 'https://ui-avatars.com/api/?name=David+Chen&size=48&background=F59E0B&color=fff',
      rating: 5,
      quote: 'Managing finances in multiple currencies is so easy with Finwise. It automatically converts everything to my base currency.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Join thousands of satisfied users who have taken control of their finances.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="
                    p-6 rounded-xl
                    bg-gray-50 dark:bg-gray-900
                    border border-gray-200 dark:border-gray-800
                  "
                >
                  {/* Avatar and Name */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="
              absolute -left-4 top-1/2 -translate-y-1/2
              p-2 rounded-full
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-lg
              hover:bg-gray-50 dark:hover:bg-gray-800
              transition-all duration-200
              min-h-[44px] min-w-[44px]
              hidden md:flex items-center justify-center
            "
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="
              absolute -right-4 top-1/2 -translate-y-1/2
              p-2 rounded-full
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-lg
              hover:bg-gray-50 dark:hover:bg-gray-800
              transition-all duration-200
              min-h-[44px] min-w-[44px]
              hidden md:flex items-center justify-center
            "
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;