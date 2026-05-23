import React from 'react';
import { NAVIGATION_CONFIG } from '../../data/navigation';
import type { NavItem } from '../../types/navigation';
import { handleLinkClick } from '../../utils/navigation';

interface MobileBottomNavProps {
  currentPath: string;
}

/**
 * Mobile-only bottom navigation bar.
 * Designed for thumb-friendly reach and high-clarity interactions.
 */
export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPath }) => {
  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] z-50"
      aria-label="Mobile Navigation"
    >
      <div className="flex justify-around items-center">
        {NAVIGATION_CONFIG.mainNav.map((item: NavItem) => {
          const isActive = currentPath === item.href;
          
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`
                flex flex-col items-center justify-center gap-1 min-w-[64px] py-1 px-2 rounded-xl transition-colors
                ${isActive 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'}
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} />
              <span className="text-[10px] font-medium leading-none">
                {item.title}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
