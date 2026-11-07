import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
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
          ? 'bg-brand-white/95 backdrop-blur-md shadow-sm border-b border-brand-border py-2.5'
          : 'bg-brand-white/90 backdrop-blur-sm border-b border-neutral-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Preserving original logo & aspect ratio */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md"
            aria-label="VelClick Agency Home"
          >
            <img
              src="/logo-tight.png"
              alt="VelClick Agency"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              loading="eager"
            />
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
                      ? 'text-brand-black font-semibold'
                      : 'text-brand-charcoal hover:text-brand-gold'
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

          {/* Right Action Button */}
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
          <div className="flex items-center gap-2 md:hidden">
            <Button
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5 sm:hidden"
            >
              Let's Talk
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-black hover:text-brand-gold hover:bg-brand-ivory focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-brand-border bg-brand-white ${
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
                    ? 'bg-brand-ivory text-brand-gold font-semibold border-l-4 border-brand-gold pl-3'
                    : 'text-brand-black hover:bg-neutral-50 hover:text-brand-gold'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-brand-gold" />}
              </a>
            );
          })}

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
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
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-brand-charcoal hover:text-brand-gold"
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
