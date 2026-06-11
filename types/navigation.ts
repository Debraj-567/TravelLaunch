import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  readonly title: string;
  readonly href: string;
  readonly icon: LucideIcon;
}

export interface SidebarConfig {
  readonly mainNav: readonly NavItem[];
}
