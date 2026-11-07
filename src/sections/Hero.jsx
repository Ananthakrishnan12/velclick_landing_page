import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Video, Target } from 'lucide-react';
import Button from '../components/Button';

export default function Hero({ onConsultationClick }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-brand-white"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hero-glow pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-brand-light-gold/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ivory border border-brand-gold/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs sm:text-xs font-bold uppercase tracking-wider text-brand-black">
                DIGITAL MARKETING & CREATIVE SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold text-brand-black tracking-tight leading-[1.12]">
              We Help{' '}
              <span className="gold-gradient-text drop-shadow-xs">
                Businesses Grow
              </span>{' '}
              with Smart Digital Marketing.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-charcoal max-w-2xl leading-relaxed">
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
            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-brand-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black">Strategic Meta Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black">AI Video Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-brand-black">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/20 via-brand-light-gold/30 to-brand-gold/10 rounded-3xl blur-xl opacity-75" />

              {/* Visual Container */}
              <div className="relative bg-brand-white rounded-3xl border border-brand-border/80 shadow-2xl overflow-hidden p-2 sm:p-3">
                {/* 3D Illustration Graphic (3D Laptop, Rocket, Meta symbols, fluid gold waves) */}
                <img
                  src="/images/hero-visual-3d.png"
                  alt="VelClick Digital Marketing Analytics Dashboard and Rocket Illustration"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Floating Metric Badge 1 (Top Left) */}
                <div className="absolute top-6 left-6 bg-brand-white/95 backdrop-blur-md rounded-2xl p-3 border border-brand-gold/40 shadow-lg hidden sm:flex items-center gap-3 animate-float-slow">
                  <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center text-brand-black font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-charcoal block">
                      Targeted Performance
                    </span>
                    <span className="text-sm font-extrabold text-brand-black">
                      4.8X ROAS Potential
                    </span>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Bottom Right) */}
                <div className="absolute bottom-6 right-6 bg-brand-white/95 backdrop-blur-md rounded-2xl p-3 border border-brand-gold/40 shadow-lg hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-ivory border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-charcoal block">
                      Creative Innovation
                    </span>
                    <span className="text-sm font-extrabold text-brand-black">
                      AI Video Ads
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagline Card Below Visual on Mobile */}
              <div className="mt-4 p-3 rounded-2xl bg-brand-ivory border border-brand-gold/30 flex items-center justify-between text-xs sm:text-sm text-brand-black">
                <span className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Your Growth. Our Click.
                </span>
                <span className="text-brand-charcoal font-medium">VelClick Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
