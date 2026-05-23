import React from 'react';
import { cn } from '../ui/ui.utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable container for dashboard pages.
 * Handles responsive padding and consistent spacing rhythm.
 */
export const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <main 
      className={cn(
        "flex-1 w-full max-w-7xl mx-auto",
        "px-4 py-6 md:px-8 md:py-8",
        "pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-8", // Enhanced clearance for mobile nav
        className
      )}
    >
      {children}
    </main>
  );
};
