import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { StatCard } from '../components/dashboard/StatCard';
import { DASHBOARD_STATS } from '../data/dashboard';
import { Button } from '../components/ui/Button';
import { Plus, Download, Filter } from 'lucide-react';

/**
 * Dashboard Page component.
 * Serves as the primary landing page for the application.
 */
const DashboardPage: React.FC = () => {
  return (
    <PageContainer>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Dashboard Overview
          </h2>
          <p className="text-muted-foreground text-sm">
            Welcome back, Travelzada! Here's what's happening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="secondary" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>

      {/* Dashboard Content Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Activity Feed Placeholder</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-1">
              Charts and recent activities will be integrated here in the next phase.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your recent alerts will appear here.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
