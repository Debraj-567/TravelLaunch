import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Topbar } from '../components/layout/Topbar';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

/**
 * Main Layout component for the Dashboard.
 * Orchestrates Sidebar, Topbar, Mobile Nav and Content area.
 */
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentPath }) => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      {/* Desktop Sidebar */}
      <Sidebar currentPath={currentPath} />

      {/* Main Content Wrapper */}
      <div className="flex flex-col md:pl-64 min-h-screen">
        {/* Top Header */}
        <Topbar currentPath={currentPath} />

        {/* Page Content */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentPath={currentPath} />
      </div>
    </div>
  );
};
