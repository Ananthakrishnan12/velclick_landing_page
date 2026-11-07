import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProcessStep from '../components/ProcessStep';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Understand Your Business',
      description: 'We analyze your commercial goals, customer profiles, competitive landscape, and specific conversion objectives.',
    },
    {
      number: '02',
      title: 'Plan Your Strategy',
      description: 'We formulate a tailored action plan covering creative messaging, ad targeting, web architecture, and timelines.',
    },
    {
      number: '03',
      title: 'Create & Execute',
      description: 'Our team crafts the high-converting ad copy, AI video assets, web layouts, and launches campaigns with precision.',
    },
    {
      number: '04',
      title: 'Improve & Grow',
      description: 'We continuously review engagement and conversion data to optimize performance, lower costs, and scale your growth.',
    },
  ];

  return (
    <section
      id="process"
      className="bg-brand-ivory dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="How We Work"
          title="Simple Process. Smart Execution."
          highlightWord="Smart Execution"
          description="A structured, transparent roadmap from initial consultation to continuous digital growth."
          className="mb-16 sm:mb-20"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
