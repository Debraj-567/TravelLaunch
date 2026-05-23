import type React from 'react';

/**
 * Programmatic SPA navigation without a library.
 * Updates the URL and dispatches a 'pushstate' event for App.tsx to catch.
 */
export const navigate = (href: string) => {
  window.history.pushState({}, '', href);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};

/**
 * Higher-order function to handle link clicks for SPA navigation.
 */
export const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  navigate(href);
};
