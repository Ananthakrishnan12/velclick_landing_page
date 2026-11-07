import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioModal from '../components/PortfolioModal';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { portfolioCategories, portfolioProjects } from '../data/portfolio';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

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
      className="bg-brand-white dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Portfolio"
          title="Creative Work That Makes an Impact."
          highlightWord="Makes an Impact"
          description="Explore our sample case studies, client-delivered video productions, and digital campaigns designed to drive measurable growth."
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
                    ? 'bg-brand-black dark:bg-brand-gold text-brand-white dark:text-brand-black shadow-md border border-brand-gold/60 dark:border-brand-gold'
                    : 'bg-brand-ivory dark:bg-neutral-900 text-brand-charcoal dark:text-neutral-400 hover:text-brand-gold hover:bg-brand-ivory/80 dark:hover:bg-neutral-800 border border-brand-border/60 dark:border-neutral-800'
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
              onPlayVideo={(p) => setActiveVideo(p)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-neutral-400 dark:text-neutral-500">
          Want a high-converting AI commercial or custom campaign delivered for your business?{' '}
          <a
            href="#contact"
            className="text-brand-gold dark:text-brand-light-gold font-semibold underline hover:text-brand-black dark:hover:text-white transition-colors"
          >
            Request a personalized quotation & sample
          </a>
        </div>
      </div>

      {/* Case Study Detail Modal (for non-video projects) */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={handleEnquireFromModal}
        />
      )}

      {/* Interactive Video Player Modal (for client video samples) */}
      {activeVideo && (
        <VideoPlayerModal
          project={activeVideo}
          onClose={() => setActiveVideo(null)}
          onEnquire={handleEnquireFromModal}
        />
      )}
    </section>
  );
}
