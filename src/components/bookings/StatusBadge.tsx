import React from 'react';
import { StatusBadge as UIStatusBadge } from '../ui/StatusBadge';
import { BOOKING_STATUS_CONFIG } from '../../data/status';
import type { BookingStatus } from '../../types/booking';

interface StatusBadgeProps {
  status: BookingStatus;
  className?: string;
}

/**
 * Domain-specific StatusBadge for Bookings.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = BOOKING_STATUS_CONFIG[status];
  
  return (
    <UIStatusBadge 
      label={config.label} 
      variant={config.variant} 
      className={className} 
    />
  );
};
