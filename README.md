# Finwise Frontend

Personal Finance Management System - Frontend Foundation

## Project Description

This is the frontend foundation for Finwise. This foundation includes:
- Vite React setup with Tailwind CSS 4.2.1
- Redux Toolkit for state management
- Axios configuration with interceptors
- Minimal App component (no pages yet)

## Quick Start

### Prerequisites
- Node.js 22 LTS or higher
- Backend server running (see backend README)

### Installation


# Clone the repository (or navigate to frontend folder)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev

### Environment Variables

Variable	          Example         	Purpose
VITE_API_URL	http://localhost:5000	Backend API URL

#### Variables must start with VITE_ to be exposed to the browser

### Testing Backend Connection
- Start backend server: cd backend && npm run dev

- Start frontend server: cd frontend && npm run dev

- Open browser to http://localhost:5173

- Open DevTools Console (F12)

- Click "Test Backend Connection" button

- Check console for successful response

#### Expected Console Output (Success):
 Test button clicked - sending request to backend...
 Testing backend connection...
 API Request: GET /api/test
 API Response: 200 /api/test
 Backend connection successful!

 #### Expected Console Output (Backend Off):
  Network Error: No response received - is backend running?
 Backend connection failed: Cannot connect to backend. Is the server running?

 ###  Folder Structure
 frontend/
├── src/
│   ├── store/
│   │   ├── store.js        # Redux store configuration
│   │   └── apiSlice.js     # API state management
│   ├── utils/
│   │   └── axiosConfig.js  # Axios instance with interceptors
│   ├── App.jsx             # Main component (heading + button)
│   ├── main.jsx            # Entry point with Redux Provider
│   └── index.css           # Tailwind CSS import
├── .env                    # Environment variables (not committed)
├── .env.example            # Example environment variables
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file

### Tailwind CSS 4.2.1 Verification
To verify Tailwind is working, the main heading should be:

- Large text (text-4xl)

- Bold font (font-bold)

- Blue color (text-blue-600)

### Troubleshooting

#### Tailwind Styles Not Applying
- Check that @import 'tailwindcss' is in src/index.css

- Verify @tailwindcss/vite plugin is in vite.config.js

- Restart dev server after configuration changes

#### API Connection Failed
- Ensure backend is running on port 5000

- Check VITE_API_URL in .env matches backend URL

- Check CORS: backend FRONTEND_URL should be http://localhost:5173

#### Redux DevTools Not Working
- Install Redux DevTools browser extension

- Store is configured with devTools: process.env.NODE_ENV !== 'production'

###  Related
* Check out the [Backend API Documentation](../backend/README.md) for details on the server architecture, database schemas, and endpoints.

### Technical Details

#### Redux State Structure
{
  api: {
    isLoading: boolean,    // true when testing connection
    lastTestResult: null | object,  // successful response
    error: null | string   // error message if failed
  }
}

#### Axios Interceptors
- Request interceptor: Logs all outgoing requests

- Response interceptor: Logs all responses and handles errors

- Timeout: 10 seconds


## Homepage (Public Landing Page)

### New Page
- **Homepage** (`/`) - Complete landing page with all sections

### New Components
- `components/common/Button.jsx` - Reusable button with variants
- `components/common/ThemeToggle.jsx` - Dark/light mode toggle
- `components/common/Container.jsx` - Centered container
- `components/common/Loader.jsx` - Loading spinner
- `components/layout/Navbar.jsx` - Main navigation
- `components/layout/HamburgerMenu.jsx` - Mobile menu drawer
- `components/layout/Header.jsx` - Header wrapper
- `components/layout/Footer.jsx` - Page footer
- `components/home/HeroSection.jsx` - Hero section
- `components/home/FeaturesSection.jsx` - Features grid
- `components/home/TestimonialsSection.jsx` - Testimonials carousel
- `components/home/PricingSection.jsx` - Pricing comparison
- `components/home/CTASection.jsx` - Final call-to-action

### New Dependencies

npm install react-router
npm install react-icons
npm install framer-motion
npm install react-hot-toast

### New Context
- contexts/ThemeContext.jsx - Theme management with localStorage

### New Routes

- / - Homepage

- /features - Features page (placeholder)

- /pricing - Pricing page (placeholder)

- /about - About page (placeholder)

- /contact - Contact page (placeholder)

- /login - Login page (placeholder)

- /signup - Signup page (placeholder)



##  About Page

### New Page
- **About Page** (`/about`) - Company information page with team and stats

### New Components
- `components/about/HeroSection.jsx` - About page hero with mission
- `components/about/StorySection.jsx` - Company origin story timeline
- `components/about/ValuesSection.jsx` - Core values grid (4 values)
- `components/about/TeamSection.jsx` - Team members grid (dynamic)
- `components/about/StatsSection.jsx` - Statistics counters (dynamic)

### New Redux Slice
- `store/aboutSlice.js` - About page state management
  - `fetchTeamMembers()` - Fetches team members from API
  - `fetchStats()` - Fetches system statistics
  - State: `teamMembers`, `stats`, `isLoading`, `error`

### New Environment Variables
- None added in this phase

### New API Endpoints Used
- `GET /api/public/team` - Fetch team members
- `GET /api/public/stats` - Fetch system statistics



##  Pricing Page

### New Page
- **Pricing Page** (`/pricing`) - Pricing plans and feature comparison

### New Components
- `components/pricing/PricingCard.jsx` - Individual plan card
- `components/pricing/PricingTable.jsx` - All plans grid
- `components/pricing/FeatureComparison.jsx` - Feature comparison table

### New Redux Slice
- `store/pricingSlice.js` - Pricing state management
  - `fetchPricingPlans()` - Fetches plans from API
  - `initializePayment()` - Initializes Paystack payment
  - `selectPlan()` - Selects a plan for subscription
  - State: `plans`, `selectedPlan`, `payment`, `isLoading`, `error`

### New Environment Variables
- `VITE_PAYSTACK_PUBLIC_KEY` - Paystack public key (for payment UI)

### New Dependencies

npm install react-paystack

### New API Endpoints Used
- GET /api/public/pricing - Fetch pricing plans

- POST /api/payment/initialize - Initialize payment

- GET /api/payment/verify/:reference - Verify payment