import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const CTASection: React.FC = () => {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#111513] to-[#09090b]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f7b900]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-4">
          Self Drive In Jamshedpur
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Find Your Car. <span className="text-[#f7b900]">Start Your Journey.</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
          Choose from a wide range of self-drive cars available in Jamshedpur.
          Daily rentals starting from ₹1,400/day. Direct enquiry via WhatsApp or phone.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToFleet}
            className="px-7 py-3.5 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-sm sm:text-base flex items-center gap-2 shadow-glow-amber transition-all active:scale-95"
          >
            <span>Explore Cars</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm sm:text-base flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={CONTACT_INFO.phoneLink}
            className="px-7 py-3.5 rounded-xl bg-[#0c6b51] hover:bg-[#094f3c] text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call {CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
