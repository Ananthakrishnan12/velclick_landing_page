import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position for sticky styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'portfolio', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-sm dark:shadow-neutral-950/50 border-b border-brand-border dark:border-neutral-800 py-2.5'
          : 'bg-brand-white/90 dark:bg-brand-dark/90 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Preserving original logo & aspect ratio */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-xl transition-all"
            aria-label="VelClick Agency Home"
          >
            <div className="dark:bg-white/95 dark:px-2.5 dark:py-1 dark:rounded-xl dark:shadow-md transition-all">
              <img
                src="/logo-tight.png"
                alt="VelClick Agency"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-brand-black dark:text-brand-white font-semibold'
                      : 'text-brand-charcoal dark:text-neutral-300 hover:text-brand-gold dark:hover:text-brand-light-gold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-gold-gradient rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle + CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle Button (Top Right in Navbar) */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <div className="hidden sm:flex items-center gap-3">
              <Button
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                className="font-medium shadow-gold-sm"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-black dark:text-brand-white hover:text-brand-gold hover:bg-brand-ivory dark:hover:bg-neutral-800 md:hidden focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-brand-border dark:border-neutral-800 bg-brand-white dark:bg-brand-dark-surface ${
          isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-brand-ivory dark:bg-neutral-800 text-brand-gold dark:text-brand-light-gold font-semibold border-l-4 border-brand-gold pl-3'
                    : 'text-brand-black dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 hover:text-brand-gold'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-brand-gold" />}
              </a>
            );
          })}

          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
            <Button
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              className="w-full justify-center"
            >
              Let's Talk
            </Button>
            <a
              href="tel:+916379553564"
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-brand-charcoal dark:text-neutral-400 hover:text-brand-gold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91 63795 53564</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
