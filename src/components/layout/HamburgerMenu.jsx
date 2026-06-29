// FILE: frontend/src/components/layout/HamburgerMenu.jsx
// PURPOSE: Mobile navigation drawer

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 *  Child Explanation:
 * When you click the three lines (hamburger) on a phone,
 * this menu slides in from the right side with all the navigation links.
 * 
 *  Technical Explanation:
 * HamburgerMenu is a slide-in drawer for mobile navigation.
 * Uses Framer Motion for smooth entrance/exit animations.
 * Closes when a link is clicked or overlay is tapped.
 */

const HamburgerMenu = ({ isOpen, onClose }) => {
  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="
              fixed top-0 right-0 bottom-0 w-72
              bg-white dark:bg-gray-950
              shadow-2xl z-50
              flex flex-col
            "
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-bold text-primary">Finwise</span>
              <button
                onClick={onClose}
                className="
                  p-2 rounded-lg
                  text-gray-600 hover:text-gray-900
                  dark:text-gray-300 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition-all duration-200
                  min-h-[44px] min-w-[44px]
                "
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="
                    block py-3 px-4 rounded-lg
                    text-gray-700 hover:text-gray-900
                    dark:text-gray-300 dark:hover:text-white
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-all duration-200
                    text-base font-medium
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Drawer Footer - CTA Buttons */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <Link to="/login" onClick={handleLinkClick}>
                <button className="
                  w-full py-3 px-4 rounded-lg
                  text-gray-700 dark:text-gray-300
                  border border-gray-300 dark:border-gray-700
                  hover:bg-gray-50 dark:hover:bg-gray-800
                  transition-all duration-200
                  font-medium text-base
                  min-h-[44px]
                ">
                  Log In
                </button>
              </Link>
              <Link to="/signup" onClick={handleLinkClick}>
                <button className="
                  w-full py-3 px-4 rounded-lg
                  bg-primary text-white
                  hover:bg-primary-dark
                  transition-all duration-200
                  font-medium text-base
                  min-h-[44px]
                  shadow-md hover:shadow-lg
                ">
                  Sign Up Free
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;