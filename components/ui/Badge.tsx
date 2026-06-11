import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sage' | 'onyx' | 'success' | 'warning' | 'error' | 'default';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const variants = {
    gold: 'bg-gold/10 text-gold border-gold/20',
    sage: 'bg-sage/10 text-sage border-sage/20',
    onyx: 'bg-onyx/10 text-onyx border-onyx/20',
    success: 'bg-green-500/10 text-green-500 border-green-500/20',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    error: 'bg-red-500/10 text-red-500 border-red-500/20',
    default: 'bg-white/10 text-white/70 border-white/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
