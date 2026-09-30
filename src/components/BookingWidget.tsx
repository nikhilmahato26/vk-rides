import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Car, ArrowRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';

interface BookingWidgetProps {
  onSearch?: (carId: string) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('Jamshedpur');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00 AM');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('10:00 AM');
  const [selectedCar, setSelectedCar] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(selectedCar);
    }
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 mb-10">
      <div className="bg-[#171d1a] border border-white/10 rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f7b900]"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f7b900]">
                QUICK ENQUIRY
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-display">
              Find Your Ride
            </h2>
          </div>
          <p className="text-xs text-zinc-400">
            Select your tentative dates and preferred vehicle in Jamshedpur
          </p>
        </div>

        <form onSubmit={handleSearch} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {/* Pickup Location */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#f7b900]" />
              Pickup Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Jamshedpur / Bistupur"
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none placeholder:text-zinc-500"
            />
          </div>

          {/* Pickup Date */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#f7b900]" />
              Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none scheme-dark"
            />
          </div>

          {/* Pickup Time */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#f7b900]" />
              Pickup Time
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
            >
              <option value="08:00 AM" className="bg-[#171d1a] text-white">08:00 AM</option>
              <option value="09:00 AM" className="bg-[#171d1a] text-white">09:00 AM</option>
              <option value="10:00 AM" className="bg-[#171d1a] text-white">10:00 AM</option>
              <option value="12:00 PM" className="bg-[#171d1a] text-white">12:00 PM</option>
              <option value="02:00 PM" className="bg-[#171d1a] text-white">02:00 PM</option>
              <option value="04:00 PM" className="bg-[#171d1a] text-white">04:00 PM</option>
              <option value="06:00 PM" className="bg-[#171d1a] text-white">06:00 PM</option>
            </select>
          </div>

          {/* Return Date */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#f7b900]" />
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none scheme-dark"
            />
          </div>

          {/* Return Time */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#f7b900]" />
              Return Time
            </label>
            <select
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
            >
              <option value="08:00 AM" className="bg-[#171d1a] text-white">08:00 AM</option>
              <option value="10:00 AM" className="bg-[#171d1a] text-white">10:00 AM</option>
              <option value="12:00 PM" className="bg-[#171d1a] text-white">12:00 PM</option>
              <option value="02:00 PM" className="bg-[#171d1a] text-white">02:00 PM</option>
              <option value="04:00 PM" className="bg-[#171d1a] text-white">04:00 PM</option>
              <option value="06:00 PM" className="bg-[#171d1a] text-white">06:00 PM</option>
              <option value="08:00 PM" className="bg-[#171d1a] text-white">08:00 PM</option>
            </select>
          </div>

          {/* Select Car & Submit */}
          <div className="bg-[#111513] border border-white/10 rounded-xl p-3 flex flex-col justify-center focus-within:border-[#f7b900] transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Car className="w-3 h-3 text-[#f7b900]" />
              Select Car
            </label>
            <select
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer truncate"
            >
              <option value="all" className="bg-[#171d1a] text-white">All {vehicles.length} Vehicles</option>
              {vehicles.map((v) => (
                <option key={v.id} value={v.id} className="bg-[#171d1a] text-white">
                  {v.name} (₹{v.pricePerDay.toLocaleString('en-IN')}/day)
                </option>
              ))}
            </select>
          </div>

          {/* Search CTA */}
          <div className="sm:col-span-2 lg:col-span-6 flex items-center justify-end pt-1">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-glow-amber transition-all active:scale-95 cursor-pointer"
            >
              <span>Check Cars & Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
