import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Video } from 'lucide-react';
import Button from '../components/Button';

export default function Hero({ onConsultationClick }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-brand-white dark:bg-brand-dark transition-colors duration-300"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hero-glow dark:bg-hero-glow-dark pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-brand-light-gold/15 dark:bg-brand-gold/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ivory dark:bg-neutral-900 border border-brand-gold/30 dark:border-brand-gold/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100">
                DIGITAL MARKETING & CREATIVE SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold text-brand-black dark:text-white tracking-tight leading-[1.12]">
              We Help{' '}
              <span className="gold-gradient-text drop-shadow-xs">
                Businesses Grow
              </span>{' '}
              with Smart Digital Marketing.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-charcoal dark:text-neutral-300 max-w-2xl leading-relaxed">
              Creative digital solutions to help your business attract customers, build a strong online presence, and achieve sustainable growth.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onConsultationClick) onConsultationClick();
                  else scrollTo('#contact');
                }}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto text-center"
              >
                Get Free Consultation
              </Button>

              <Button
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#services');
                }}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Value Highlights Pill Row */}
            <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-brand-charcoal dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black dark:text-white">Strategic Meta Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black dark:text-white">AI Video Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black dark:text-white">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/20 via-brand-light-gold/30 to-brand-gold/10 dark:from-brand-gold/30 dark:via-brand-gold/20 dark:to-brand-gold/10 rounded-3xl blur-xl opacity-75" />

              {/* Visual Card Container - Formatted to Fit Perfectly */}
              <div className="relative bg-brand-white dark:bg-neutral-900 rounded-3xl border border-brand-border/80 dark:border-neutral-800 shadow-2xl overflow-hidden p-3 sm:p-4">
                
                {/* 3D Illustration Graphic (Laptop with Ads Dashboard, Launching Rocket, Meta symbols, fluid gold waves) */}
                <div className="relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center border border-neutral-100 dark:border-neutral-800">
                  <img
                    src="/images/hero-visual-3d.png"
                    alt="VelClick Digital Marketing Analytics Dashboard and Rocket Illustration"
                    className="w-full h-auto object-contain max-h-[360px] sm:max-h-[420px] transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>

                {/* Sub-card Performance Highlights */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-brand-ivory dark:bg-neutral-800 border border-brand-gold/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gold-gradient flex items-center justify-center text-brand-black shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-charcoal dark:text-neutral-400 block font-medium">ROI Focus</span>
                      <span className="font-bold text-brand-black dark:text-white">4.8X ROAS</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-brand-ivory dark:bg-neutral-800 border border-brand-gold/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-charcoal dark:text-neutral-400 block font-medium">Creatives</span>
                      <span className="font-bold text-brand-black dark:text-white">AI Video Ads</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline Card Below Visual */}
              <div className="mt-3.5 p-3 rounded-2xl bg-brand-ivory dark:bg-neutral-900 border border-brand-gold/30 dark:border-brand-gold/40 flex items-center justify-between text-xs sm:text-sm text-brand-black dark:text-white shadow-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Your Growth. Our Click.
                </span>
                <span className="text-brand-charcoal dark:text-neutral-400 font-medium">VelClick Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
