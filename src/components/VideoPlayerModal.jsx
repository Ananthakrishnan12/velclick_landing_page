import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, MessageCircle, Play, Pause, Volume2, Sparkles, Building2 } from 'lucide-react';
import Button from './Button';

export default function VideoPlayerModal({ project, onClose, onEnquire }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isYouTube =
    project.videoUrl &&
    (project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be'));
  const isVimeo = project.videoUrl && project.videoUrl.includes('vimeo.com');

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return url;
  };

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isVertical ? 'max-w-lg' : 'max-w-4xl'
        } bg-brand-white dark:bg-brand-dark-card rounded-3xl shadow-2xl border border-brand-gold/50 overflow-hidden flex flex-col max-h-[92vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-brand-border dark:border-neutral-800 flex items-center justify-between bg-brand-ivory/60 dark:bg-neutral-900">
          <div className="flex items-center gap-2.5 flex-wrap pr-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-ivory dark:bg-neutral-800 text-brand-gold border border-brand-gold/30">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span>{project.category}</span>
            </span>

            {project.clientName && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Client: <strong>{project.clientName}</strong></span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500 ml-0.5" />
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-brand-black dark:text-neutral-200 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {isYouTube || isVimeo ? (
            <div className={`w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <iframe
                src={getEmbedUrl(project.videoUrl)}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.videoUrl ? (
            <div className={`w-full ${isVertical ? 'aspect-[9/16] max-h-[60vh]' : 'aspect-video max-h-[65vh]'} flex items-center justify-center bg-black`}>
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnail}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            /* Fallback if no video URL is provided yet */
            <div className="aspect-video w-full flex flex-col items-center justify-center p-8 text-center bg-neutral-900 text-neutral-300">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center text-brand-gold mb-3 animate-pulse">
                <Play className="w-7 h-7 translate-x-0.5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Video Preview Ready
              </h4>
              <p className="text-xs text-neutral-400 max-w-sm mb-4">
                Client video showcase for <span className="text-brand-light-gold font-semibold">{project.clientName || 'VelClick Client'}</span>. Place your <code className="text-brand-light-gold">.mp4</code> file in <code className="text-brand-light-gold">public/videos/</code> or provide a video URL to stream.
              </p>
              <div className="text-[11px] px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-400 border border-neutral-700">
                Duration: {project.duration || '0:30'} • Format: {project.aspectRatio || '16:9'}
              </div>
            </div>
          )}
        </div>

        {/* Video Information & CTA Footer */}
        <div className="p-5 sm:p-6 bg-brand-white dark:bg-brand-dark-card border-t border-brand-border dark:border-neutral-800 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-brand-black dark:text-white">
                {project.title}
              </h3>
              {project.clientName && (
                <p className="text-xs text-brand-gold font-medium mt-0.5">
                  Delivered project for {project.clientName}
                </p>
              )}
            </div>

            {project.duration && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-ivory dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-brand-gold/30 shrink-0 self-start sm:self-auto">
                Duration: {project.duration}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          {project.deliverables && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-brand-ivory dark:bg-neutral-800/80 text-brand-black dark:text-neutral-200 border border-brand-border dark:border-neutral-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`https://wa.me/916379553564?text=${encodeURIComponent(
                `Hi VelClick Agency! I saw the client video "${project.title}" created for ${project.clientName || 'your client'} and would like to order a similar video for my business.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-brand-white text-xs font-semibold shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire for a Similar Video</span>
            </a>

            <Button
              onClick={() => {
                onClose();
                if (onEnquire) onEnquire(project);
              }}
              variant="primary"
              size="sm"
              className="w-full sm:w-auto justify-center"
            >
              Get Free Quotation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
