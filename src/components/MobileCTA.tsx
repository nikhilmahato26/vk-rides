import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const MobileCTA: React.FC = () => {
  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-[#09090b]/95 border-t border-white/10 backdrop-blur-lg px-3 py-2.5 pb-[calc(env(safe-area-inset-bottom,0px)+0.65rem)] shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href={CONTACT_INFO.phoneLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0c6b51] text-white text-center active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-black text-center active:scale-95 transition-all font-bold"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-black" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* BOOK */}
        <button
          onClick={scrollToBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f7b900] text-[#09090b] text-center active:scale-95 transition-all font-bold shadow-glow-amber"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-black" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">BOOK</span>
        </button>
      </div>
    </div>
  );
};
