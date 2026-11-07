import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { pricingPlans } from '../data/pricing';

export default function Pricing({ onSelectPlan }) {
  const handlePlanSelect = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="pricing"
      className="bg-brand-white dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tailored Packages"
          title="Choose the Right Solution for Your Business."
          highlightWord="Right Solution"
          description="Every business has unique requirements. We structure our packages around your specific deliverables and growth stage."
          className="mb-8"
        />

        {/* Pricing Notice */}
        <div className="max-w-xl mx-auto mb-14 text-center p-3.5 rounded-2xl bg-brand-ivory dark:bg-neutral-900 border border-brand-gold/30 dark:border-brand-gold/40 text-xs text-brand-charcoal dark:text-neutral-300">
          <span className="font-bold text-brand-black dark:text-white">Transparent Scoping: </span>
          Final quotations are tailored based on your campaign scope, ad budget scale, and creative volume.
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? 'bg-brand-white dark:bg-neutral-900 border-2 border-brand-gold shadow-gold-md dark:shadow-dark-card-hover scale-100 lg:-translate-y-2'
                    : 'bg-brand-white dark:bg-neutral-900 border border-brand-border/80 dark:border-neutral-800 shadow-card-soft dark:shadow-dark-card-soft hover:shadow-card-hover dark:hover:shadow-dark-card-hover hover:border-brand-gold/50'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-brand-black text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    {!isPopular && (
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-brand-black dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-brand-charcoal dark:text-neutral-300 mt-1 min-h-[32px]">
                      {plan.headline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="pb-6 mb-6 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-brand-black dark:text-white gold-gradient-text">
                      {plan.priceDisplay}
                    </div>
                    <span className="text-[11px] text-neutral-400 dark:text-neutral-500 block mt-1">
                      Customized to your exact requirements
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-400">
                      Included Deliverables:
                    </p>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-brand-ivory dark:bg-neutral-800 border border-brand-gold/40 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Button
                    onClick={() => handlePlanSelect(plan)}
                    variant={isPopular ? 'primary' : 'secondary'}
                    size="md"
                    icon={ArrowRight}
                    className="w-full justify-center"
                  >
                    Request a Quote
                  </Button>
                  <p className="text-[11px] text-center text-neutral-400 dark:text-neutral-500 mt-2">
                    Best for: {plan.bestFor}
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
