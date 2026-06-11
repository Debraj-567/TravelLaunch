import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sage' | 'onyx';
}

export const Badge = ({ children, variant = 'gold' }: BadgeProps) => {
  const variants = {
    gold: 'bg-gold/10 text-gold border-gold/20',
    sage: 'bg-sage/10 text-sage border-sage/20',
    onyx: 'bg-onyx/10 text-onyx border-onyx/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
};
