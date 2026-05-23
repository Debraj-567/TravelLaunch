import { useState, useEffect } from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import PackagesPage from './pages/PackagesPage';
import BookingsPage from './pages/BookingsPage';
import { ROUTES } from './data/navigation';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync with browser navigation for a basic library-agnostic routing feel
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Custom event for programmatic navigation if needed
    window.addEventListener('pushstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  /**
   * Simple router logic to render the active page
   */
  const renderPage = () => {
    switch (currentPath) {
      case ROUTES.DASHBOARD:
        return <DashboardPage />;
      case ROUTES.PACKAGES:
        return <PackagesPage />;
      case ROUTES.BOOKINGS:
        return <BookingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardLayout currentPath={currentPath}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;
