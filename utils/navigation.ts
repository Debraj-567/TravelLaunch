import type React from 'react';

/**
 * Programmatic navigation helper kept for the legacy dashboard.
 */
export const navigate = (href: string) => {
  window.location.assign(href);
};

/**
 * Let Next handle dashboard links through normal anchor navigation.
 */
export const handleLinkClick = (_e: React.MouseEvent<HTMLAnchorElement>, _href: string) => {
  // Intentionally empty.
};
