import React from 'react';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';

const icons = [Search, Compass, Rocket, TrendingUp];

export default function ProcessStep({ step, index, total }) {
  const Icon = icons[index % icons.length];
  const isLast = index === total - 1;

  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connected Line for Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-light-gold/40 to-brand-gold/60 z-0" />
      )}

      {/* Numbered Gold Indicator */}
      <div className="relative z-10 w-18 h-18 rounded-2xl bg-brand-white border-2 border-brand-gold shadow-gold-sm group-hover:shadow-gold-md group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-2 mb-6">
        <span className="text-xs font-bold text-brand-gold tracking-wider">
          {step.number}
        </span>
        <div className="text-brand-black group-hover:text-brand-gold transition-colors mt-0.5">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-xs">
        <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2 group-hover:text-brand-gold transition-colors">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
