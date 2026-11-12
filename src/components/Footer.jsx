import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'AI Video Creation', href: '#services' },
    { name: 'Meta & Instagram Ads', href: '#services' },
    { name: 'Portfolio Websites', href: '#services' },
    { name: 'Google Business Profile', href: '#services' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-brand-white relative overflow-hidden border-t border-neutral-800">
      {/* Decorative subtle gold glow line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="inline-block bg-brand-white/95 p-3 rounded-2xl shadow-md border border-brand-gold/30 hover:border-brand-gold transition-all"
              aria-label="VelClick Agency Home"
            >
              <img
                src="/logo-tight.png"
                alt="VelClick Agency Gold Logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Your Growth. Our Click. We help businesses attract customers, establish authority, and achieve measurable growth with AI-powered video, laser-focused Meta ads, high-converting websites, and local SEO.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs uppercase tracking-wider text-brand-light-gold font-semibold">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-brand-light-gold uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-neutral-400 hover:text-brand-light-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-brand-light-gold uppercase">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => scrollTo(e, service.href)}
                    className="text-sm text-neutral-400 hover:text-brand-light-gold transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-brand-light-gold uppercase">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-neutral-300 hover:text-brand-light-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-750 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">WhatsApp & Call</span>
                  <span className="font-medium text-brand-white">+91 63795 53564</span>
                </div>
              </a>

              <a
                href="mailto:velclickagency@gmail.com"
                className="flex items-start gap-3 text-neutral-300 hover:text-brand-light-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-750 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Email Us</span>
                  <span className="font-medium text-brand-white break-all">velclickagency@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-neutral-400 pt-1">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-750 flex items-center justify-center shrink-0 text-brand-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Location</span>
                  <span className="text-neutral-300">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-brand-light-gold font-bold text-sm tracking-wide">
              VelClick Agency
            </span>
            <span>—</span>
            <span className="italic text-neutral-400">"Your Growth. Our Click."</span>
          </div>

          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} VelClick Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

