// FILE: frontend/src/components/common/ThemeToggle.jsx
// PURPOSE: Dark/light mode toggle button

import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 *  Child Explanation:
 * This is a light switch button. Click it to make the screen dark like night,
 * or click again to make it bright like day.
 * 
 *  Technical Explanation:
 * ThemeToggle uses the ThemeContext to toggle between light and dark modes.
 * Shows sun/moon icons based on current theme.
 */

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg
        text-gray-600 hover:text-gray-900
        dark:text-gray-300 dark:hover:text-white
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-all duration-200
        min-h-[44px] min-w-[44px]
        focus:outline-none focus:ring-2 focus:ring-primary
        ${className}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;