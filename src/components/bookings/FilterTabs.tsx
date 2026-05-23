import React from 'react';
import { cn } from '../ui/ui.utils';
import type { BookingStatus } from '../../types/booking';

interface FilterTabsProps {
  selectedStatus: BookingStatus | 'all';
  onStatusChange: (status: BookingStatus | 'all') => void;
}

/**
 * FilterTabs component for Bookings.
 * Allows filtering by all or specific booking statuses.
 */
export const FilterTabs: React.FC<FilterTabsProps> = ({ selectedStatus, onStatusChange }) => {
  const tabs: { label: string; value: BookingStatus | 'all' }[] = [
    { label: 'All Bookings', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Confirmed', value: 'confirmed' },
    { label: 'Cancelled', value: 'cancelled' },
  ];

  return (
    <div className="flex items-center p-1 bg-muted/50 rounded-xl w-full sm:w-fit overflow-x-auto no-scrollbar touch-pan-x">
      <div className="flex items-center min-w-max">
        {tabs.map((tab) => {
          const isActive = selectedStatus === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => onStatusChange(tab.value)}
              className={cn(
                "px-4 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap",
                isActive 
                  ? "bg-card text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
