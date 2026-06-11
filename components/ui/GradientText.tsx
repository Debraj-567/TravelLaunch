import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r from-onyx via-gold to-onyx bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
