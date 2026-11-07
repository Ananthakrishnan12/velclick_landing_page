import React from 'react';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-brand-ivory dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Client Feedback"
          title="What Our Clients Say."
          highlightWord="Clients Say"
          description="We take immense pride in genuine client partnerships and measurable business outcomes."
          className="mb-14 sm:mb-16"
        />

        {/* Development Placeholder State (No Fake Reviews or Fake Stars) */}
        <div className="max-w-3xl mx-auto bg-brand-white dark:bg-brand-dark-card rounded-3xl p-8 sm:p-12 border border-brand-gold/40 shadow-card-soft dark:shadow-dark-card-soft text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-ivory dark:bg-neutral-850 border-2 border-brand-gold/50 flex items-center justify-center mx-auto text-brand-gold shadow-sm">
            <HeartHandshake className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-black dark:text-brand-white">
              Client Feedback In Progress
            </h3>
            <p className="text-sm sm:text-base text-brand-charcoal dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
              At VelClick Agency, we hold ourselves to authentic business ethics. Verified client case studies and testimonials will be published here upon completion of our current client campaign review cycles.
            </p>
          </div>

          {/* Value Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-left">
            <div className="p-3.5 rounded-2xl bg-brand-ivory/60 dark:bg-neutral-900 border border-brand-border dark:border-neutral-800">
              <span className="text-xs font-bold text-brand-black dark:text-white block mb-1">
                Zero Fake Reviews
              </span>
              <p className="text-[11px] text-brand-charcoal dark:text-neutral-400 leading-snug">
                100% genuine feedback from real paying businesses only.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-brand-ivory/60 dark:bg-neutral-900 border border-brand-border dark:border-neutral-800">
              <span className="text-xs font-bold text-brand-black dark:text-white block mb-1">
                Milestone Reports
              </span>
              <p className="text-[11px] text-brand-charcoal dark:text-neutral-400 leading-snug">
                Every client receives comprehensive analytics and honest ROI metrics.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-brand-ivory/60 dark:bg-neutral-900 border border-brand-border dark:border-neutral-800">
              <span className="text-xs font-bold text-brand-black dark:text-white block mb-1">
                Direct Communication
              </span>
              <p className="text-[11px] text-brand-charcoal dark:text-neutral-400 leading-snug">
                Dedicated WhatsApp and phone access for responsive collaboration.
              </p>
            </div>
          </div>

          {/* Partner Call to Action */}
          <div className="pt-2">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              Ready to build a successful digital campaign with us?
            </p>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="inline-flex"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
