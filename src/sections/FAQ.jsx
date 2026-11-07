import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/faq';
import { MessageCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-brand-white dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked Questions."
          highlightWord="Questions"
          description="Everything you need to know about our services, collaboration model, and onboarding process."
          className="mb-14 sm:mb-16"
        />

        {/* Accordion Component */}
        <FAQAccordion items={faqs} />

        {/* Have more questions banner */}
        <div className="mt-14 max-w-xl mx-auto text-center p-6 rounded-3xl bg-brand-ivory dark:bg-brand-dark-card border border-brand-gold/30 dark:border-brand-gold/40">
          <h4 className="text-base font-bold text-brand-black dark:text-white mb-1">
            Still have questions?
          </h4>
          <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-300 mb-4">
            We are always here to help. Reach out directly via WhatsApp for instant answers.
          </p>
          <a
            href="https://wa.me/916379553564"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-brand-white text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
