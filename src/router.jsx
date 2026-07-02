// FILE: frontend/src/router.jsx
// PURPOSE: React Router configuration with lazy loading

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from './components/common/Loader';

/**
 *  Child Explanation:
 * This is our map of pages. It says:
 * - "/" shows the Home page
 * - If someone goes to a page that doesn't exist, show a 404 page
 * 
 *  Technical Explanation:
 * Lazy loading for code splitting - pages are loaded only when needed.
 * Suspense shows a loading fallback while the page loads.
 */

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));


// For now, create placeholder components for other routes
const Features = lazy(() => import('./pages/Features'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader />
  </div>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/features',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Features />
      </Suspense>
    ),
  },
  {
    path: '/pricing',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Pricing />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<PageLoader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;