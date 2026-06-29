// FILE: frontend/src/components/common/Loader.jsx
// PURPOSE: Loading spinner component

import React from 'react';

const Loader = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          border-4 border-primary/20 border-t-primary
          rounded-full animate-spin
        `}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;