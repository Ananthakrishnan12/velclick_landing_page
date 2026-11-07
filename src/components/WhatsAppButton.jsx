import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '916379553564';
  const message = encodeURIComponent(
    'Hello VelClick Agency! I would like to inquire about digital marketing services for my business.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-2 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-xl p-3.5 max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-1.5 font-bold text-brand-black">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>VelClick Agency</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-brand-black p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-brand-charcoal text-[11px] leading-relaxed">
            Need a quick quotation or digital marketing advice? Click to chat with us directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-brand-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with VelClick Agency on WhatsApp"
      >
        {/* Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-white border-2 border-emerald-500 rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>
      </a>
    </div>
  );
}
