import { Package, CalendarClock, FileText, Users } from 'lucide-react';
import type { DashboardStat } from '../types/dashboard';

/**
 * Mock data for Dashboard stats.
 * Aligned with the specific assignment requirements.
 */
export const DASHBOARD_STATS: readonly DashboardStat[] = [
  {
    title: 'Total Packages',
    value: '12',
    icon: Package,
    description: 'Active travel packages',
    trend: { value: 8, isPositive: true },
  },
  {
    title: 'Pending Bookings',
    value: '4',
    icon: CalendarClock,
    description: 'Awaiting confirmation',
    trend: { value: 2, isPositive: false },
  },
  {
    title: 'Open Quotations',
    value: '7',
    icon: FileText,
    description: 'Pending agent responses',
    trend: { value: 15, isPositive: true },
  },
  {
    title: 'Travel Agents',
    value: '3',
    icon: Users,
    description: 'Active partner agents',
  },
] as const;
