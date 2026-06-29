// FILE: frontend/src/components/common/Container.jsx
// PURPOSE: Centered container with max width and padding

import React from 'react';

/**
 *  Child Explanation:
 * This is like a tray that holds everything in the middle.
 * It makes sure content doesn't stretch too wide on big screens.
 * 
 *  Technical Explanation:
 * Container provides consistent horizontal padding and max-width.
 * Ensures content is centered and readable on all screen sizes.
 */

const Container = ({ 
  children, 
  className = '', 
  maxWidth = '7xl',
  padding = true 
}) => {
  const maxWidthClasses = {
    'sm': 'max-w-screen-sm',
    'md': 'max-w-screen-md',
    'lg': 'max-w-screen-lg',
    'xl': 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`
      mx-auto
      ${maxWidthClasses[maxWidth] || maxWidthClasses['7xl']}
      ${paddingClasses}
      ${className}
    `.trim()}>
      {children}
    </div>
  );
};

export default Container;