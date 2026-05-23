import React from 'react';
import { Card } from '../ui/Card';
import type { DashboardStat } from '../../types/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../ui/ui.utils';

interface StatCardProps {
  stat: DashboardStat;
  className?: string;
}

/**
 * Reusable StatCard component for the Dashboard.
 * Displays a single metric with an icon, title, value, and optional trend.
 */
export const StatCard: React.FC<StatCardProps> = ({ stat, className }) => {
  const { title, value, icon: Icon, description, trend } = stat;

  return (
    <Card className={cn("p-5 sm:p-6 flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between">
        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </div>
        {trend && (
          <div 
            className={cn(
              "flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:py-1 rounded-full",
              trend.isPositive 
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" 
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            ) : (
              <TrendingDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            )}
            <span>{trend.value}%</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-tight">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            {value}
          </h3>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground/70 line-clamp-1">
          {description}
        </p>
      </div>
    </Card>
  );
};
