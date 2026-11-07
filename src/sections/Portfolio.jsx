import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioModal from '../components/PortfolioModal';
import { portfolioCategories, portfolioProjects } from '../data/portfolio';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return portfolioProjects;
    }
    return portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleEnquireFromModal = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-brand-white py-20 sm:py-28 relative overflow-hidden border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Portfolio"
          title="Creative Work That Makes an Impact."
          highlightWord="Makes an Impact"
          description="Explore our sample case studies and design prototypes demonstrating our capabilities across video, advertising, and web architecture."
          className="mb-10 sm:mb-12"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  isActive
                    ? 'bg-brand-black text-brand-white shadow-md border border-brand-gold/60'
                    : 'bg-brand-ivory text-brand-charcoal hover:text-brand-gold hover:bg-brand-ivory/80 border border-brand-border/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onViewProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          Showing {filteredProjects.length} demonstration projects. Need a bespoke design or campaign for your business?{' '}
          <a
            href="#contact"
            className="text-brand-gold font-semibold underline hover:text-brand-black transition-colors"
          >
            Request a personalized sample
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={handleEnquireFromModal}
        />
      )}
    </section>
  );
}
