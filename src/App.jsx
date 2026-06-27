// FILE: frontend/src/App.jsx
// PURPOSE: Minimal App component - ONLY heading and test button
// NO pages, NO layouts, NO routing

import { useDispatch, useSelector } from 'react-redux';
import { testBackendConnection, selectApiLoading, selectApiResult, selectApiError } from './store/apiSlice';

/**
 * 🧒 Child Explanation:
 * This is our main room. It has:
 * - A big title (heading)
 * - A button that says "Test Backend Connection"
 * - When you click the button, it asks the backend "Are you there?"
 * - The answer appears in the browser console (not on screen)
 * 
 * 👨‍💻 Technical Explanation:
 * This component uses Redux hooks to dispatch actions and select state.
 * On button click, it dispatches the testBackendConnection thunk.
 * Results are logged to console - no UI updates beyond that.
 * No useEffect - user must click button to test.
 */

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectApiLoading);
  const result = useSelector(selectApiResult);
  const error = useSelector(selectApiError);

  const handleTestConnection = () => {
    console.log('🔘 Test button clicked - sending request to backend...');
    dispatch(testBackendConnection());
  };

  // Log results when they change (for debugging)
  if (result) {
    console.log('📦 Last test result:', result);
  }
  if (error) {
    console.log('⚠️ Last error:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Main heading with Tailwind CSS classes */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Finwise
      </h1>
      
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Personal Finance Management System
      </p>
      
      {/* Test button - touch-friendly size (min-h-[44px] min-w-[44px]) */}
      <button
        onClick={handleTestConnection}
        disabled={isLoading}
        className={`
          min-h-[44px] min-w-[44px] px-6 py-3 rounded-lg font-semibold
          transition-all duration-200
          ${isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
          }
          text-white shadow-md hover:shadow-lg
        `}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Testing...
          </span>
        ) : (
          'Test Backend Connection'
        )}
      </button>
      
      {/* Optional: Show connection status indicator */}
      <div className="mt-8 text-sm text-gray-500">
        Open browser console (F12) to see API responses
      </div>
    </div>
  );
}

export default App;