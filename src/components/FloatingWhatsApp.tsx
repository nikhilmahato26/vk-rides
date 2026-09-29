import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40 flex items-center group">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mr-3 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171d1a] border border-white/15 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
          <span>Chat With VK Rides</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Pulse Button */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat With VK Rides on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-xl animate-subtle-pulse hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-black stroke-black" />
      </a>
    </div>
  );
};
