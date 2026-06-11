import type { LucideIcon } from 'lucide-react';

export interface DashboardStat {
  readonly title: string;
  readonly value: string | number;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly trend?: {
    readonly value: number;
    readonly isPositive: boolean;
  };
}
