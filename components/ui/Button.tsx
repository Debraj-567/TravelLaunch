import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-slate-900 text-white hover:bg-black shadow-md',
    outline: 'border border-slate-200 text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg font-bold rounded-2xl',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 font-semibold disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

