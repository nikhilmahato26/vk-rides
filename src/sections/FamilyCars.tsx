import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

interface FamilyCarsProps {
  onSelectCar?: (carName: string) => void;
}

export const FamilyCars: React.FC<FamilyCarsProps> = ({ onSelectCar }) => {
  const familyCars = [
    {
      name: 'Ertiga',
      category: 'MPV',
      price: 2500,
      seats: '7 Seater',
      image: '/images/cars/ertiga.webp',
      highlight: 'Dedicated three rows with foldable rear seats for luggage',
    },
    {
      name: 'XL6',
      category: 'MPV',
      price: 2500,
      seats: '6 Seater',
      image: '/images/cars/xl6.webp',
      highlight: 'Premium captain seats in the second row for ultimate comfort',
    },
    {
      name: 'Kia Carens',
      category: 'MPV',
      price: 2500,
      seats: '7 Seater',
      image: '/images/cars/carens.webp',
      highlight: 'Spacious recreation vehicle with generous family legroom',
    },
    {
      name: 'Grand Vitara',
      category: 'SUV',
      price: 2800,
      seats: '5 Seater',
      image: '/images/cars/grand-vitara.webp',
      highlight: 'Ultra-smooth suspension and refined highway cruiser',
    },
    {
      name: 'Creta',
      category: 'SUV',
      price: 3000,
      seats: '5 Seater',
      image: '/images/cars/creta.webp',
      highlight: 'India’s favorite family SUV with unmatched cabin comfort',
    },
  ];

  const handleCarClick = (name: string) => {
    if (onSelectCar) {
      onSelectCar(name);
    }
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#111513] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              Family & Group Travel
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Comfortable Cars for <span className="text-purple-400">Family Trips</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-300">
              Spacious 6-seater and 7-seater MPVs along with plush premium SUVs for relaxed journeys.
            </p>
          </div>

          <button
            onClick={scrollToFleet}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <span>Explore Family Cars</span>
            <ArrowRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {familyCars.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#171d1a] border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                    {car.seats}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                    {car.category}
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] bg-[#111513] rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3">
                  <img
                    src={car.image}
                    alt={`Family self drive ${car.name}`}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight">
                  {car.name}
                </h3>

                <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2">
                  {car.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Daily Rate
                  </span>
                  <span className="text-xl font-black text-white font-display">
                    ₹{car.price.toLocaleString('en-IN')}
                    <span className="text-[10px] font-normal text-zinc-400">/day</span>
                  </span>
                </div>

                <button
                  onClick={() => handleCarClick(car.name)}
                  className="px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  Book
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
