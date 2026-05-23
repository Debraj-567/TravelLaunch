import { LayoutDashboard, Package, CalendarDays, Settings, HelpCircle } from 'lucide-react';
import type { SidebarConfig } from '../types/navigation';

export const ROUTES = {
  DASHBOARD: '/',
  PACKAGES: '/packages',
  BOOKINGS: '/bookings',
  SETTINGS: '/settings',
  HELP: '/help',
} as const;

export const NAVIGATION_CONFIG: SidebarConfig = {
  mainNav: [
    {
      title: 'Dashboard',
      href: ROUTES.DASHBOARD,
      icon: LayoutDashboard,
    },
    {
      title: 'Packages',
      href: ROUTES.PACKAGES,
      icon: Package,
    },
    {
      title: 'Bookings',
      href: ROUTES.BOOKINGS,
      icon: CalendarDays,
    },
  ],
} as const;

export const SECONDARY_NAV_CONFIG: SidebarConfig = {
  mainNav: [
    {
      title: 'Settings',
      href: ROUTES.SETTINGS,
      icon: Settings,
    },
    {
      title: 'Help Center',
      href: ROUTES.HELP,
      icon: HelpCircle,
    },
  ],
} as const;
