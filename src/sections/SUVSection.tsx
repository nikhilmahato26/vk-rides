import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface SUVSectionProps {
  onSelectCar?: (carName: string) => void;
}

export const SUVSection: React.FC<SUVSectionProps> = ({ onSelectCar }) => {
  const suvs = [
    {
      name: 'Thar ROXX',
      price: 5500,
      image: '/images/cars/thar-roxx.webp',
      badge: 'Flagship 5-Door',
      sub: '₹5,500 / day',
    },
    {
      name: 'Scorpio N',
      price: 5000,
      image: '/images/cars/scorpio-n.webp',
      badge: 'Flagship SUV',
      sub: '₹5,000 / day',
    },
    {
      name: 'Thar',
      price: 4500,
      image: '/images/cars/thar.webp',
      badge: 'Iconic 4x4',
      sub: '₹4,500 / day',
    },
    {
      name: 'Fortuner',
      price: 8000,
      image: '/images/cars/fortuner.webp',
      badge: 'Full-Size Luxury',
      sub: '₹8,000 / day',
    },
    {
      name: 'XUV 700',
      price: 3000,
      image: '/images/cars/xuv700.webp',
      badge: 'High-Tech Luxury',
      sub: '₹3,000 / day',
    },
    {
      name: 'Safari',
      price: 3000,
      image: '/images/cars/safari.webp',
      badge: 'Executive 7-Seater',
      sub: '₹3,000 / day',
    },
  ];

  const handleBook = (name: string) => {
    if (onSelectCar) {
      onSelectCar(name);
    }
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden text-white border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f7b900]/5 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0c6b51]/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-[#f7b900]" />
            SUV & Adventure
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            Ready for the <span className="text-[#f7b900]">Open Road?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal">
            Choose an SUV for your next drive and experience the journey on your own terms.
          </p>
        </div>

        {/* 6 Featured SUVs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suvs.map((suv, idx) => (
            <motion.div
              key={suv.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/40 rounded-2xl p-5 flex flex-col justify-between group shadow-card transition-all"
            >
              <div>
                <span className="text-[10px] font-bold text-[#f7b900] uppercase tracking-wider block mb-2">
                  {suv.badge}
                </span>

                <div className="relative w-full aspect-[16/10] bg-[#111513] rounded-xl overflow-hidden flex items-center justify-center p-3 mb-4">
                  <img
                    src={suv.image}
                    alt={suv.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">
                  {suv.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#f7b900] font-display">
                    ₹{suv.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-zinc-400">/day</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => handleBook(suv.name)}
                  className="w-full py-2.5 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-xs flex items-center justify-center gap-1.5 shadow-glow-amber transition-all cursor-pointer"
                >
                  <span>Book {suv.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={generateWhatsAppLink(suv.name, suv.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-1.5 text-[11px] font-semibold text-zinc-400 hover:text-white"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visually Strong Price Range Highlight Strip */}
        <div id="pricing" className="mt-16 bg-[#171d1a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#f7b900] uppercase tracking-widest">
              Clear Daily Rental Range
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              Rental Options for Every Requirement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Starting From */}
            <div className="bg-[#111513] border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Starting From
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#5ee9b5] font-display mt-1">
                  ₹1,400 <span className="text-sm sm:text-base font-normal text-zinc-400">/ Day</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-200">
                  Vehicle: <strong className="text-white">Alto (Hatchback)</strong>
                </div>
              </div>

              <div className="w-24 sm:w-32 aspect-video bg-[#171d1a] rounded-xl p-2 flex items-center justify-center shrink-0">
                <img src="/images/cars/alto.webp" alt="Alto" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Premium SUV */}
            <div className="bg-[#111513] border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Premium SUV Flagship
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#f7b900] font-display mt-1">
                  ₹5,500 <span className="text-sm sm:text-base font-normal text-zinc-400">/ Day</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-200">
                  Vehicle: <strong className="text-white">Thar ROXX (5-Door)</strong>
                </div>
              </div>

              <div className="w-24 sm:w-32 aspect-video bg-[#171d1a] rounded-xl p-2 flex items-center justify-center shrink-0">
                <img src="/images/cars/thar-roxx.webp" alt="Thar ROXX" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
