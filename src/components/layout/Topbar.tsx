import React from 'react';
import { NAVIGATION_CONFIG, SECONDARY_NAV_CONFIG } from '../../data/navigation';

interface TopbarProps {
  currentPath: string;
}

/**
 * Topbar component.
 * Displays the dynamic page title and company context.
 */
export const Topbar: React.FC<TopbarProps> = ({ currentPath }) => {
  // Derive page title from navigation config
  const allNavItems = [
    ...NAVIGATION_CONFIG.mainNav,
    ...SECONDARY_NAV_CONFIG.mainNav,
  ];
  
  const activeItem = allNavItems.find(item => item.href === currentPath);
  const pageTitle = activeItem?.title || 'Dashboard';

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-4 md:px-8">
      <div className="flex items-center gap-4">
        {/* Mobile-only logo indicator */}
        <div className="md:hidden h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">T</span>
        </div>
        
        <h1 className="text-lg font-semibold text-foreground tracking-tight">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Placeholder for common header actions like notifications or search */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Online
        </div>
      </div>
    </header>
  );
};
