import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? 'bg-brand-white dark:bg-brand-dark-card border-brand-gold/70 shadow-gold-sm'
                : 'bg-brand-white/80 dark:bg-neutral-900/90 border-brand-border/70 dark:border-neutral-800 hover:border-brand-gold/40'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-brand-black dark:text-brand-white pr-4">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-semibold ${
                  isOpen ? 'bg-gold-gradient text-brand-black' : 'bg-brand-ivory dark:bg-neutral-800 text-brand-gold dark:text-brand-light-gold'
                }`}>
                  0{index + 1}
                </span>
                <span>{item.question}</span>
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-brand-gold text-brand-white'
                    : 'bg-brand-ivory dark:bg-neutral-800 text-brand-charcoal dark:text-neutral-300'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-sm text-brand-charcoal dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 animate-in fade-in duration-200">
                <p className="pl-10">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
