import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-onyx text-warmWhite hover:bg-opacity-90 relative overflow-hidden group/btn',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-onyx rounded-full transition-all duration-500 relative overflow-hidden group/btn',
    ghost: 'text-onyx hover:bg-black/5 relative overflow-hidden group/btn',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg uppercase tracking-[0.2em] font-display italic',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-all duration-300 font-medium disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Gold Shimmer Sweep Animation */}
      <span className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer-sweep_0.6s_ease-in-out] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
    </button>
  );
};
