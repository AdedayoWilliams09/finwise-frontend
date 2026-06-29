// FILE: frontend/src/components/layout/Navbar.jsx
// PURPOSE: Main navigation with responsive design

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';
import HamburgerMenu from './HamburgerMenu';
import logoDark from '../../assets/icons/logo-dark.svg';
import logoLight from '../../assets/icons/logo-light.svg';

/**
 *  Child Explanation:
 * This is the top bar of our website. It has our logo on the left,
 * links in the middle, and buttons on the right.
 * When you scroll down, it gets a solid background so you can always see it.
 * 
 *  Technical Explanation:
 * Navbar with sticky positioning and scroll-based background.
 * Desktop: horizontal nav links + CTA buttons.
 * Mobile: hamburger menu icon + drawer.
 */

const Navbar = () => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nav links configuration
  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled || isMenuOpen ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isDark ? logoLight : logoDark}
              alt="Finwise"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="
                  text-gray-600 hover:text-gray-900
                  dark:text-gray-300 dark:hover:text-white
                  transition-colors duration-200
                  text-sm font-medium
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Sign Up Free
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2 rounded-lg
                text-gray-600 hover:text-gray-900
                dark:text-gray-300 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-all duration-200
                min-h-[44px] min-w-[44px]
                focus:outline-none focus:ring-2 focus:ring-primary
              "
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Navbar;