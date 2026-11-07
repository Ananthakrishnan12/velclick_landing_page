import React from 'react';
import { Lightbulb, Target, Cpu, TrendingUp } from 'lucide-react';

export default function TrustSection() {
  const valueIndicators = [
    {
      title: 'Creative Solutions',
      subtitle: 'Original, thumb-stopping design',
      icon: Lightbulb,
    },
    {
      title: 'Business-Focused Strategy',
      subtitle: 'Commercial objectives first',
      icon: Target,
    },
    {
      title: 'Modern AI Technology',
      subtitle: 'Smart video & creative tools',
      icon: Cpu,
    },
    {
      title: 'Growth-Oriented Approach',
      subtitle: 'Continuous campaign scaling',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-brand-white py-10 sm:py-12 border-y border-brand-border/70 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {valueIndicators.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === valueIndicators.length - 1;

            return (
              <div
                key={item.title}
                className={`relative flex flex-col sm:flex-row items-center text-center sm:text-left gap-3.5 sm:gap-4 p-2 ${
                  !isLast ? 'lg:border-r lg:border-brand-gold/25 lg:pr-6' : ''
                }`}
              >
                {/* Gold Circular Icon */}
                <div className="w-12 h-12 rounded-full bg-brand-ivory border-2 border-brand-gold flex items-center justify-center shrink-0 text-brand-gold shadow-xs transition-transform duration-300 hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-brand-black leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-charcoal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
