import React from 'react';
import { StatusBadge as UIStatusBadge } from '../ui/StatusBadge';
import { PACKAGE_STATUS_CONFIG } from '../../data/status';
import type { PackageStatus } from '../../types/package';

interface StatusBadgeProps {
  status: PackageStatus;
  className?: string;
}

/**
 * Domain-specific StatusBadge for Packages.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = PACKAGE_STATUS_CONFIG[status];
  
  return (
    <UIStatusBadge 
      label={config.label} 
      variant={config.variant} 
      className={className} 
    />
  );
};
