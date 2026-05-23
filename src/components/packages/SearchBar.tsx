import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../ui/ui.utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Controlled SearchBar component.
 * Features a clean icon integration and a clear button.
 */
export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search packages...",
  className 
}) => {
  return (
    <div className={cn("relative flex-1 group", className)}>
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
        <Search className="h-4 w-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-card border border-border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary placeholder:text-muted-foreground/60"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};
