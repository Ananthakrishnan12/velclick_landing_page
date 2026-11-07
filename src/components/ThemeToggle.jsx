import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold ${
        isDark
          ? 'bg-neutral-800/90 border-brand-gold/40 text-brand-light-gold hover:bg-neutral-750 hover:border-brand-gold shadow-sm'
          : 'bg-brand-ivory border-brand-gold/30 text-brand-black hover:bg-amber-100/60 hover:text-brand-gold shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-brand-light-gold" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-brand-black" />
        )}
      </div>
    </button>
  );
}
