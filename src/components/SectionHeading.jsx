import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlightWord,
  description,
  align = 'center',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            light
              ? 'bg-brand-white/10 text-brand-light-gold border-brand-light-gold/30'
              : 'bg-brand-ivory text-brand-gold border-brand-gold/30 shadow-xs'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-bold leading-tight tracking-tight mb-4 ${
            light ? 'text-brand-white' : 'text-brand-black'
          }`}
        >
          {highlightWord && title.includes(highlightWord) ? (
            <>
              {title.split(highlightWord)[0]}
              <span className="gold-gradient-text">{highlightWord}</span>
              {title.split(highlightWord)[1]}
            </>
          ) : (
            title
          )}
        </h2>
      )}

      {description && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? 'text-neutral-300' : 'text-brand-charcoal'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
