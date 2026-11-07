import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Target } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function About({ onKnowMoreClick }) {
  const points = [
    'Laser-targeted Facebook & Instagram campaigns',
    'High-retention AI video advertisements and reels',
    'Speed-optimized portfolio and business landing pages',
    'Local Google Business Profile rankings and discovery',
  ];

  return (
    <section
      id="about"
      className="bg-brand-white dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Gradient Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-gold/20 via-brand-light-gold/30 to-brand-gold/10 dark:from-brand-gold/30 dark:via-brand-gold/15 dark:to-brand-gold/5 rounded-3xl blur-xl" />

              {/* Graphic Card */}
              <div className="relative bg-brand-white dark:bg-brand-dark-card rounded-3xl p-6 sm:p-8 border border-brand-border/80 dark:border-neutral-800 shadow-2xl space-y-6">
                
                {/* Brand Logo Presentation */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="dark:bg-white/95 dark:px-2.5 dark:py-1 dark:rounded-xl dark:shadow-sm">
                    <img
                      src="/logo-tight.png"
                      alt="VelClick Agency Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-ivory dark:bg-neutral-800 text-brand-gold dark:text-brand-light-gold border border-brand-gold/30 dark:border-brand-gold/40">
                    Chennai, India
                  </span>
                </div>

                {/* Growth Strategy Metrics Box */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-brand-ivory/70 dark:bg-neutral-900 border border-brand-gold/25 dark:border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-black dark:text-white flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-brand-gold" />
                        Strategic Pillars
                      </span>
                      <span className="text-[11px] font-semibold text-brand-gold dark:text-brand-light-gold">
                        Core Values
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-brand-charcoal dark:text-neutral-300 font-medium pt-1">
                      <div className="p-2 rounded-xl bg-brand-white dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750">
                        1. Precision Targeting
                      </div>
                      <div className="p-2 rounded-xl bg-brand-white dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750">
                        2. AI Storytelling
                      </div>
                      <div className="p-2 rounded-xl bg-brand-white dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750">
                        3. Fast Execution
                      </div>
                      <div className="p-2 rounded-xl bg-brand-white dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750">
                        4. Sustainable Growth
                      </div>
                    </div>
                  </div>

                  {/* Trust Banner */}
                  <div className="p-4 rounded-2xl bg-brand-black dark:bg-neutral-950 text-brand-white flex items-center gap-3 shadow-md border border-neutral-800">
                    <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center text-brand-black shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-white">
                        100% Client-Focused
                      </h4>
                      <p className="text-xs text-neutral-300">
                        Tailored campaigns built around your unique business goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location indicator */}
                <div className="flex items-center justify-between text-xs text-brand-charcoal dark:text-neutral-400 pt-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    VelClick Agency Head Office
                  </span>
                  <span className="text-brand-gold dark:text-brand-light-gold font-bold">Chennai, TN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="About VelClick"
              title="Your Growth Is Our Mission."
              highlightWord="Mission"
              align="left"
              className="max-w-none"
            />

            <p className="text-base sm:text-lg text-brand-charcoal dark:text-neutral-300 leading-relaxed">
              At <strong className="text-brand-black dark:text-white font-semibold">VelClick Agency</strong>, we help businesses establish a stronger digital presence through creative AI videos, strategic advertising, professional websites and Google Business Profile solutions.
            </p>

            {/* Highlighting Quote Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-brand-ivory dark:bg-neutral-850/80 border-l-4 border-brand-gold shadow-sm">
              <p className="text-sm sm:text-base font-semibold text-brand-black dark:text-white italic leading-relaxed">
                "We combine creativity, technology and business-focused strategies to turn digital opportunities into meaningful growth."
              </p>
            </div>

            {/* Checklist of what VelClick delivers */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-brand-black dark:text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-brand-ivory dark:bg-neutral-800 border border-brand-gold flex items-center justify-center shrink-0 text-brand-gold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  if (onKnowMoreClick) onKnowMoreClick();
                  else {
                    const el = document.getElementById('process');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Know More About Us
              </Button>

              <Button
                href="https://wa.me/916379553564"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
