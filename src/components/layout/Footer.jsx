// FILE: frontend/src/components/layout/Footer.jsx
// PURPOSE: Page footer with links and social icons

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaYoutube 
} from 'react-icons/fa';
import logoDark from '../../assets/icons/logo-dark.svg';
import logoLight from '../../assets/icons/logo-light.svg';

/**
 *  Child Explanation:
 * The footer is like the bottom of a book page.
 * It has links to other parts of the website and social media buttons.
 * 
 *  Technical Explanation:
 * Footer component with company info, quick links, and social media.
 * Responsive: 4 columns on desktop, stacks on mobile.
 */

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  // Quick links configuration
  const quickLinks = [
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const supportLinks = [
    { to: '/faq', label: 'FAQ' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/cookies', label: 'Cookie Policy' },
  ];

  const socialLinks = [
    { Icon: FaTwitter, href: 'https://twitter.com/finwise', label: 'Twitter' },
    { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/finwise', label: 'LinkedIn' },
    { Icon: FaGithub, href: 'https://github.com/finwise', label: 'GitHub' },
    { Icon: FaYoutube, href: 'https://youtube.com/finwise', label: 'YouTube' },
  ];

  return (
    <footer className="
      bg-white dark:bg-gray-950
      border-t border-gray-200 dark:border-gray-800
      mt-auto
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={isDark ? logoLight : logoDark}
                alt="Finwise"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Take control of your finances. Save smarter, live better.
              Track expenses, set budgets, and achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 rounded-lg
                    text-gray-600 hover:text-gray-900
                    dark:text-gray-400 dark:hover:text-white
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-all duration-200
                    min-h-[44px] min-w-[44px]
                    flex items-center justify-center
                  "
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="
                      text-sm text-gray-600 dark:text-gray-400
                      hover:text-primary dark:hover:text-primary-light
                      transition-colors duration-200
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="
                      text-sm text-gray-600 dark:text-gray-400
                      hover:text-primary dark:hover:text-primary-light
                      transition-colors duration-200
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Trust Badges */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Trust & Security
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bank-level encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10,000+ trusted users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Finwise. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;