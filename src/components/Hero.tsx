import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';
import { businessDetails } from '../data/vehicles';

export const Hero: React.FC = () => {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#111513] text-white">
      {/* Background Cinematic Vehicle Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cars/hero-banner.webp"
          alt="Premium Self Drive Cars in Jamshedpur"
          className="w-full h-full object-cover object-center opacity-40 lg:opacity-45 scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Gradients matching drigo.in cinematic automotive lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#111513]/70 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-transparent"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#09090b]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-[#f7b900] inline-block"></span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#f7b900]">
              VK RIDES SELF DRIVE CAR
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-display"
          >
            Drive <span className="text-[#f7b900]">Your Way.</span>
          </motion.h1>

          {/* Supporting Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl font-bold text-zinc-100 font-display"
          >
            Premium self-drive cars available in Jamshedpur.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal"
          >
            Choose from a wide range of cars, select your vehicle and book your self-drive experience with VK Rides.
            Enjoy the freedom of taking the wheel without a chauffeur.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <button
              onClick={scrollToFleet}
              className="px-6 py-3.5 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-glow-amber hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <span>Explore Cars</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToBooking}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/15 transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
            >
              Book a Car
            </button>

            <a
              href={CONTACT_INFO.phoneLink}
              className="px-5 py-3.5 rounded-xl bg-[#0c6b51] hover:bg-[#094f3c] text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call {CONTACT_INFO.phone}</span>
            </a>
          </motion.div>

          {/* Trust Highlights Strip below Hero CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-zinc-300"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f7b900]"></span>
              <span className="font-semibold text-white">Jamshedpur Based</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5ee9b5]"></span>
              <span className="font-semibold text-white">{businessDetails.optionsCount} Vehicle Options</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f7b900]"></span>
              <span className="font-semibold text-white">Starting ₹1,400/Day</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5ee9b5]" />
              <span className="font-semibold text-white">Self Drive Freedom</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
