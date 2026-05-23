import React from 'react';
import { NAVIGATION_CONFIG, SECONDARY_NAV_CONFIG } from '../../data/navigation';
import type { NavItem } from '../../types/navigation';
import { handleLinkClick } from '../../utils/navigation';

interface SidebarProps {
  currentPath: string;
}

/**
 * Desktop Sidebar component.
 * Features a modern SaaS-style layout with navigation groups.
 */
export const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  const renderNavItem = (item: NavItem) => {
    const isActive = currentPath === item.href;
    
    return (
      <a
        key={item.href}
        href={item.href}
        onClick={(e) => handleLinkClick(e, item.href)}
        className={`
          flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors
          ${isActive 
            ? 'bg-secondary text-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}
        `}
        aria-current={isActive ? 'page' : undefined}
      >
        <item.icon className={`h-4 w-4 ${isActive ? 'text-foreground' : 'text-muted-foreground/70'}`} />
        <span>{item.title}</span>
      </a>
    );
  };

  return (
    <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-border bg-card">
      {/* Logo Section */}
      <div className="flex h-16 items-center px-6 border-b border-border/50">
        <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">T</span>
        </div>
        <span className="ml-3 font-semibold text-foreground tracking-tight">Travelzada</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        {/* Main Navigation */}
        <nav className="space-y-1" aria-label="Main Navigation">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-2">
            Management
          </p>
          {NAVIGATION_CONFIG.mainNav.map(renderNavItem)}
        </nav>

        {/* Secondary Navigation */}
        <nav className="space-y-1" aria-label="Secondary Navigation">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-2">
            System
          </p>
          {SECONDARY_NAV_CONFIG.mainNav.map(renderNavItem)}
        </nav>
      </div>

      {/* Footer / User Section placeholder */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Admin User</span>
            <span className="text-xs text-muted-foreground">DMC Partner</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
