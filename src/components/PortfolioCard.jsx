import React from 'react';
import { Eye, Play, Sparkles, Video, Target, Layout, Palette, Building2, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const categoryIcons = {
  'AI Video Advertisements': Video,
  'Meta Ads Creatives': Target,
  'Portfolio Websites': Layout,
  'Promotional Designs': Palette,
};

export default function PortfolioCard({ project, onViewProject, onPlayVideo }) {
  const Icon = categoryIcons[project.category] || Sparkles;
  const isVideo = project.isVideo;

  const handleClick = () => {
    if (isVideo && onPlayVideo) {
      onPlayVideo(project);
    } else {
      onViewProject(project);
    }
  };

  return (
    <div className="group bg-brand-white dark:bg-brand-dark-card rounded-3xl overflow-hidden border border-brand-border/80 dark:border-neutral-800 shadow-card-soft dark:shadow-dark-card-soft hover:shadow-card-hover dark:hover:shadow-dark-card-hover hover:border-brand-gold/60 dark:hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail with Interactive Play / View Trigger */}
        <div
          onClick={handleClick}
          className="relative aspect-[16/10] bg-neutral-900 overflow-hidden flex items-center justify-center p-6 cursor-pointer select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-brand-black opacity-90" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl" />

          {/* Card Mockup Graphic */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-750 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-brand-light-gold font-medium">
                <Icon className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </span>

              {project.duration && (
                <span className="px-2 py-0.5 rounded-full bg-brand-gold/20 text-brand-light-gold text-[10px] font-bold border border-brand-gold/30 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>{project.duration}</span>
                </span>
              )}
            </div>

            {/* Central Graphic / Play Indicator */}
            <div className="my-auto py-2 text-center">
              {isVideo ? (
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-gradient text-brand-black shadow-gold-md group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current translate-x-0.5" />
                </div>
              ) : (
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-bold text-brand-white leading-snug line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Tech Tags */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {project.tech?.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-brand-gold/15 text-brand-light-gold text-[10px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-brand-black font-bold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              {isVideo ? (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Sample Video</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Client Delivery Badge */}
          {project.clientName && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] font-medium text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 max-w-full truncate">
              <Building2 className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="truncate">Client: <strong className="font-semibold">{project.clientName}</strong></span>
              <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-500" />
            </div>
          )}

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
            <span className="text-[11px] text-neutral-400 dark:text-neutral-400">{project.tag}</span>
          </div>

          <h3 className="text-lg font-bold text-brand-black dark:text-white mb-2 group-hover:text-brand-gold dark:group-hover:text-brand-light-gold transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-300 line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Button */}
      <div className="px-6 pb-6 pt-0">
        {isVideo ? (
          <Button
            onClick={() => onPlayVideo(project)}
            variant="primary"
            size="sm"
            icon={Play}
            className="w-full justify-center shadow-gold-sm"
          >
            Watch Video
          </Button>
        ) : (
          <Button
            onClick={() => onViewProject(project)}
            variant="secondary"
            size="sm"
            icon={Eye}
            className="w-full justify-center group-hover:border-brand-gold"
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );
}
