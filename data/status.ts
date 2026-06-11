import type { PackageStatus } from '../types/package';
import type { BookingStatus } from '../types/booking';
import type { BadgeProps } from '../types/components';

export interface StatusConfig {
  readonly label: string;
  readonly variant: BadgeProps['variant'];
}

export const PACKAGE_STATUS_CONFIG: Record<PackageStatus, StatusConfig> = {
  active: {
    label: 'Active',
    variant: 'success',
  },
  draft: {
    label: 'Draft',
    variant: 'default',
  },
} as const;

export const BOOKING_STATUS_CONFIG: Record<BookingStatus, StatusConfig> = {
  new: {
    label: 'New',
    variant: 'warning',
  },
  confirmed: {
    label: 'Confirmed',
    variant: 'success',
  },
  cancelled: {
    label: 'Cancelled',
    variant: 'error',
  },
} as const;
