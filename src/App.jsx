import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import TrustSection from './sections/TrustSection';
import Services from './sections/Services';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project) => {
    setSelectedService(project.category);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-white dark:bg-brand-dark text-brand-black dark:text-neutral-100 flex flex-col font-sans selection:bg-brand-light-gold selection:text-brand-black transition-colors duration-300">
      {/* Sticky Navigation Bar with Theme Toggle in Top Right */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero onConsultationClick={handleConsultation} />

        {/* Section 3: Trust & Value Indicators */}
        <TrustSection />

        {/* Section 4: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 5: About VelClick */}
        <About onKnowMoreClick={() => {
          const el = document.getElementById('process');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Section 6: Portfolio Gallery with Filters */}
        <Portfolio onSelectProject={handleSelectProject} />

        {/* Section 7: How We Work (Process Timeline) */}
        <Process />

        {/* Section 8: Pricing Solutions */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Section 9: Testimonials */}
        <Testimonials />

        {/* Section 10: Frequently Asked Questions */}
        <FAQ />

        {/* Section 11: Contact Section */}
        <Contact
          initialService={selectedService}
          initialPlan={selectedPlan}
        />
      </main>

      {/* Section 12: Premium Black Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
