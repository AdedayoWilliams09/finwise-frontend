// FILE: frontend/src/components/common/Button.jsx
// PURPOSE: Reusable button with variants and loading state

import React from 'react';

/**
 *  Child Explanation:
 * This is a magic button that can look different ways.
 * It can be big or small, blue or white, and can show a spinning circle when busy.
 * 
 *  Technical Explanation:
 * Button component with variants: primary, secondary, outline, ghost.
 * Supports loading state, full width, and custom classes.
 * Minimum touch target: 44x44px for accessibility.
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-[44px] min-w-[44px]
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-primary text-white
      hover:bg-primary-dark
      focus:ring-primary
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary-dark
      focus:ring-secondary
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary hover:text-white
      focus:ring-primary
    `,
    ghost: `
      text-gray-600 hover:text-gray-900
      hover:bg-gray-100
      dark:text-gray-300 dark:hover:text-white
      dark:hover:bg-gray-800
      focus:ring-gray-400
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Combine all classes
  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyles}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClassName}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;