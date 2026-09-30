import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, KeyRound, Layers, CalendarDays, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Jamshedpur-Based Service',
      desc: 'Local self-drive car rental located right in Jamshedpur, Jharkhand.',
    },
    {
      icon: KeyRound,
      title: 'Self-Drive Rentals',
      desc: 'Complete freedom to drive yourself on your own schedule without a chauffeur.',
    },
    {
      icon: Layers,
      title: 'Multiple Vehicle Categories',
      desc: 'From economical hatchbacks to spacious MPVs and commanding SUVs.',
    },
    {
      icon: CalendarDays,
      title: 'Daily Rental Options',
      desc: 'Clear, transparent daily rental pricing from ₹1,400/day to ₹8,000/day.',
    },
    {
      icon: PhoneCall,
      title: 'Easy Enquiry & Booking',
      desc: 'Direct communication via WhatsApp and phone call for fast confirmation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Core Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest">
              About VK Rides
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-display">
              Your Car. <span className="text-[#f7b900]">Your Journey.</span> Your Freedom.
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                VK Rides Self Drive Car provides self-drive rental options in Jamshedpur, offering customers a wide selection of cars for different travel requirements. From economical hatchbacks to SUVs and premium vehicles, customers can choose the vehicle that fits their journey.
              </p>
              <p className="text-sm text-zinc-400">
                Whether you need a reliable hatchback for city errands, a comfortable MPV for family trips, or a bold SUV for outstation drives, VK Rides gives you the keys to travel with full privacy and flexibility.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#fleet"
                className="px-6 py-3 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-sm transition-all shadow-glow-amber active:scale-95"
              >
                View Available Fleet
              </a>
              <a
                href={CONTACT_INFO.phoneLink}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Feature Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#f7b900]/15 flex items-center justify-center text-[#f7b900] mb-3 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
