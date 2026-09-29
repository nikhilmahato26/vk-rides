import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface FeaturedVehiclesProps {
  onSelectCar?: (carName: string) => void;
}

export const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({ onSelectCar }) => {
  const featured = [
    {
      name: 'Scorpio N',
      category: 'SUV',
      price: 5000,
      image: '/images/cars/scorpio-n.webp',
      badge: 'Flagship Powerhouse',
      description: 'The Big Daddy of SUVs. Supreme road presence, robust dynamics, and executive 7-seater comfort for long drives.',
      cta: 'Book Scorpio N',
      specs: ['7 Seats', 'Flagship SUV', 'High Stance', 'Luxury Cabin'],
    },
    {
      name: 'Thar',
      category: 'SUV',
      price: 4500,
      image: '/images/cars/thar.webp',
      badge: 'Adventure Icon',
      description: 'The undisputed king of rugged style. Unmatched road presence that commands attention anywhere in Jharkhand.',
      cta: 'Book Thar',
      specs: ['4 Seats', 'Bold Stance', 'Iconic Styling', 'High Clearance'],
    },
    {
      name: 'Scorpio S11',
      category: 'SUV',
      price: 3500,
      image: '/images/cars/scorpio-s11.webp',
      badge: 'Proven Classic',
      description: 'Legendary muscular road presence, high driving posture, and massive interior room for family and group travel.',
      cta: 'Book Scorpio S11',
      specs: ['7 Seats', 'Heavy Duty', 'High Clearance', 'Proven Reliability'],
    },
  ];

  const handleBook = (carName: string) => {
    if (onSelectCar) {
      onSelectCar(carName);
    }
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#111513] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7b900]/15 border border-[#f7b900]/30 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 fill-[#f7b900]" />
            Signature Vehicles
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Featured <span className="text-[#f7b900]">SUVs</span>
          </h2>

          <p className="mt-3 text-base text-zinc-300 font-normal">
            Our most sought-after flagship SUVs offering commanding road presence and self-drive capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/40 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-300"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#f7b900] text-[#09090b] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  {car.badge}
                </span>
              </div>

              {/* Large Vehicle Image */}
              <div className="relative w-full aspect-[16/10] bg-[#0c100e] overflow-hidden flex items-center justify-center p-4">
                <img
                  src={car.image}
                  alt={`Self drive ${car.name} in Jamshedpur`}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transform group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {car.category}
                      </span>
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight group-hover:text-[#f7b900] transition-colors">
                        {car.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-black text-[#f7b900] font-display">
                        ₹{car.price.toLocaleString('en-IN')}
                      </div>
                      <span className="text-xs text-zinc-400 font-medium">per day</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {car.description}
                  </p>

                  {/* Spec pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {car.specs.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleBook(car.name)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-extrabold text-sm flex items-center justify-center gap-2 shadow-glow-amber transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{car.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={generateWhatsAppLink(car.name, car.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-center text-xs font-bold text-zinc-300 hover:text-white"
                  >
                    Direct WhatsApp Enquiry →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
