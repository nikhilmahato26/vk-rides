import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, ArrowUpRight } from 'lucide-react';
import type { Vehicle } from '../types';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectForBooking?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectForBooking }) => {
  const whatsappUrl = generateWhatsAppLink(vehicle.name, vehicle.pricePerDay);

  const handleBookNow = () => {
    if (onSelectForBooking) {
      onSelectForBooking(vehicle.name);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoryColors: Record<string, string> = {
    SUV: 'bg-amber-500/15 text-[#f7b900] border-amber-500/30',
    Sedan: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    Hatchback: 'bg-emerald-500/15 text-[#5ee9b5] border-emerald-500/30',
    MPV: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/40 rounded-2xl overflow-hidden shadow-card transition-all duration-300"
    >
      {/* Category & Seats Header */}
      <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between pointer-events-none">
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${
            categoryColors[vehicle.category] || 'bg-white/10 text-white border-white/20'
          }`}
        >
          {vehicle.category}
        </span>
        {vehicle.seats && (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
            <Users className="w-3 h-3 text-[#f7b900]" />
            <span>{vehicle.seats} Seats</span>
          </span>
        )}
      </div>

      {/* Image Container with Zoom effect */}
      <div className="relative w-full aspect-[16/10] bg-[#111513] overflow-hidden flex items-center justify-center p-3">
        <div className="absolute inset-0 bg-gradient-to-t from-[#171d1a] via-transparent to-transparent z-[1]"></div>
        <img
          src={vehicle.image}
          alt={`VK Rides Self Drive ${vehicle.name} Jamshedpur`}
          loading="lazy"
          className="w-full h-full object-contain object-center transform group-hover:scale-108 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/cars/hero-banner.webp';
          }}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-display group-hover:text-[#f7b900] transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Daily Rental
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#f7b900] font-display">
                ₹{vehicle.pricePerDay.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-zinc-400 font-medium">/day</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Enquire ${vehicle.name} on WhatsApp`}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-zinc-300 hover:text-[#25D366] transition-all"
            aria-label={`Enquire ${vehicle.name} on WhatsApp`}
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={handleBookNow}
            className="w-full py-2.5 px-3 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-xs flex items-center justify-center gap-1.5 shadow-glow-amber transition-all active:scale-95 cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
