import React from 'react';
import { Video, Target, Layout, MapPin, Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const iconMap = {
  Video: Video,
  Target: Target,
  Layout: Layout,
  MapPin: MapPin,
};

export default function ServiceCard({ service, onSelectService }) {
  const IconComponent = iconMap[service.iconName] || Target;

  const handleCtaClick = () => {
    if (onSelectService) {
      onSelectService(service.id);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="group relative bg-brand-white rounded-3xl p-7 sm:p-8 border border-brand-border/70 shadow-card-soft hover:shadow-card-hover hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        {/* Header with Icon & Badge */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-ivory border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-gold-gradient group-hover:text-brand-black group-hover:border-transparent transition-all duration-300 shadow-sm">
            <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {service.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-ivory text-brand-gold border border-brand-gold/30">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-medium text-brand-charcoal uppercase tracking-wider mb-3">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-brand-charcoal leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-100">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
            Key Capabilities:
          </p>
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <div className="w-4 h-4 rounded-full bg-brand-ivory border border-brand-gold/40 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {service.note && (
          <div className="mb-6 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900 leading-tight">
            <span className="font-semibold">Note: </span>{service.note}
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <Button
          onClick={handleCtaClick}
          variant="secondary"
          size="sm"
          icon={ArrowRight}
          className="w-full justify-between group-hover:bg-gold-gradient group-hover:text-brand-black group-hover:border-transparent transition-all"
        >
          <span>{service.ctaText}</span>
        </Button>
      </div>
    </div>
  );
}
