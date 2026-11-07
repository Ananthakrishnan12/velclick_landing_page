import React, { useEffect } from 'react';
import { X, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function PortfolioModal({ project, onClose, onEnquire }) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-brand-white rounded-3xl shadow-2xl border border-brand-gold/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-ivory/50">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-black mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200/60 text-brand-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Demo Notice Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Portfolio Demonstration Asset: </span>
              This case study illustrates VelClick Agency's creative methodology and technical delivery standards. We deliver custom, tailored assets for every business client.
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-brand-charcoal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables List */}
          {project.deliverables && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Included Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-ivory/60 border border-brand-border text-xs text-neutral-800"
                  >
                    <Check className="w-4 h-4 text-brand-gold shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies / Frameworks Used */}
          {project.tech && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Disciplines & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-brand-border bg-brand-ivory/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/916379553564?text=${encodeURIComponent(
              `Hi VelClick Agency! I saw your portfolio work on "${project.title}" and would like to discuss something similar for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-brand-white text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <Button
            onClick={() => {
              onClose();
              if (onEnquire) onEnquire(project);
            }}
            variant="primary"
            size="sm"
            icon={ArrowRight}
            className="w-full sm:w-auto justify-center"
          >
            Request Quotation
          </Button>
        </div>
      </div>
    </div>
  );
}
