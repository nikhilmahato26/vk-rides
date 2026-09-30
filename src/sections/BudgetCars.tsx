import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

interface BudgetCarsProps {
  onSelectCar?: (carName: string) => void;
}

export const BudgetCars: React.FC<BudgetCarsProps> = ({ onSelectCar }) => {
  const budgetCars = [
    {
      name: 'Alto',
      category: 'Hatchback',
      price: 1400,
      image: '/images/cars/alto.webp',
      badge: 'Lowest Daily Rate',
      highlight: 'Best for local Jamshedpur commutes & errands',
    },
    {
      name: 'Ignis',
      category: 'Hatchback',
      price: 1600,
      image: '/images/cars/ignis.webp',
      badge: 'Urban Compact',
      highlight: 'High ground clearance & distinctive styling',
    },
    {
      name: 'Swift',
      category: 'Hatchback',
      price: 1800,
      image: '/images/cars/swift.webp',
      badge: 'Most Popular',
      highlight: 'Responsive handling & great fuel efficiency',
    },
    {
      name: 'Punch',
      category: 'SUV',
      price: 2000,
      image: '/images/cars/punch.webp',
      badge: 'Micro SUV',
      highlight: 'High seating stance & 5-star crash safety rating',
    },
    {
      name: 'Baleno',
      category: 'Hatchback',
      price: 2000,
      image: '/images/cars/baleno.webp',
      badge: 'Premium Comfort',
      highlight: 'Generous cabin space & wide passenger seats',
    },
    {
      name: 'Dzire',
      category: 'Sedan',
      price: 2000,
      image: '/images/cars/dzire.webp',
      badge: 'Compact Sedan',
      highlight: 'Dedicated trunk space for luggage & travel bags',
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
    <section className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#5ee9b5] uppercase tracking-widest mb-3">
              <Tag className="w-3.5 h-3.5" />
              Pocket-Friendly Rentals
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Affordable <span className="text-[#5ee9b5]">Self-Drive</span> Cars
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-300">
              Low daily rates starting from just ₹1,400/day. Drive at your own pace without driver costs.
            </p>
          </div>

          <button
            onClick={scrollToFleet}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <span>Explore Affordable Cars</span>
            <ArrowRight className="w-4 h-4 text-[#5ee9b5]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {budgetCars.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#171d1a] border border-white/10 hover:border-[#5ee9b5]/40 rounded-2xl p-4 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#5ee9b5] uppercase tracking-wider">
                    {car.badge}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                    {car.category}
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] bg-[#111513] rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3">
                  <img
                    src={car.image}
                    alt={`Affordable self drive ${car.name}`}
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
                  className="px-3 py-1.5 rounded-lg bg-[#5ee9b5] hover:bg-[#4dd2a0] text-black font-bold text-xs transition-colors shadow-sm cursor-pointer"
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
