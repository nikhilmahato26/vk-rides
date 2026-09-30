import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Car } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';

export const Footer: React.FC = () => {
  const popularVehicles = [
    { name: 'Thar ROXX', price: '₹5,500/day' },
    { name: 'Fortuner', price: '₹5,500/day' },
    { name: 'Scorpio N', price: '₹5,000/day' },
    { name: 'Thar', price: '₹4,500/day' },
    { name: 'Innova Crysta', price: '₹3,500/day' },
    { name: 'XUV 700', price: '₹3,000/day' },
    { name: 'Safari', price: '₹3,000/day' },
    { name: 'Nexon', price: '₹2,500/day' },
  ];

  return (
    <footer className="bg-[#09090b] border-t border-white/10 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f7b900] to-[#e5aa00] flex items-center justify-center text-black font-extrabold shadow-glow-amber">
                <Car className="w-5 h-5 text-[#09090b]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  VK <span className="text-[#f7b900]">RIDES</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                  SELF DRIVE CAR RENTAL
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Self-drive car rental in Jamshedpur with a wide selection of vehicles for different travel requirements.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#f7b900]" />
                Jamshedpur, Jharkhand
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-display mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#f7b900] transition-colors">Home</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#f7b900] transition-colors">Cars & Fleet</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#f7b900] transition-colors">Daily Pricing</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#f7b900] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f7b900] transition-colors">About VK Rides</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#f7b900] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Vehicles */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-display mb-4">
              Popular Vehicles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs">
              {popularVehicles.map((item) => (
                <a
                  key={item.name}
                  href={`#fleet`}
                  className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-zinc-300 hover:text-white group"
                >
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-[#f7b900] font-mono font-medium text-[11px] group-hover:underline">
                    {item.price}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-display mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-[#f7b900] shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase font-semibold">Phone</div>
                    <div className="font-bold text-white">{CONTACT_INFO.phoneFormatted}</div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT_INFO.emailLink}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4 text-[#5ee9b5] shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-zinc-400 uppercase font-semibold">Email</div>
                    <div className="font-bold text-white truncate">{CONTACT_INFO.email}</div>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-300">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase font-semibold">Location</div>
                    <div className="font-bold text-white">{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing disclaimer in footer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-zinc-400 text-center">
          <p>
            Rental prices shown are based on the supplied daily rates. Availability and rental terms should be confirmed at the time of booking.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© 2026 VK Rides Self Drive Car. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Built for Self Drive Travel in Jamshedpur</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
