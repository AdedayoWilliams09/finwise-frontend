// FILE: frontend/src/components/layout/Header.jsx
// PURPOSE: Main header component

import React from 'react';
import Navbar from './Navbar';

/**
 *  Child Explanation:
 * The Header is the top part of every page.
 * It contains the navigation bar that helps you move around the website.
 * 
 *  Technical Explanation:
 * Header wraps the Navbar component. This allows for future header
 * customizations (like adding a notification bell or user avatar).
 */

const Header = () => {
  return <Navbar />;
};

export default Header;