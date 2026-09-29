import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Car } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/#fleet' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-[#09090b]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#f7b900]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f7b900] to-[#e5aa00] flex items-center justify-center text-black font-extrabold shadow-glow-amber transition-transform duration-200 group-hover:scale-105">
              <Car className="w-5 h-5 text-[#09090b]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-display">
                  VK <span className="text-[#f7b900]">RIDES</span>
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#f7b900] animate-pulse"></span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                SELF DRIVE CAR RENTAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavClick(link.path);
                      }
                    }}
                    className="text-sm font-medium text-zinc-300 hover:text-[#f7b900] transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#f7b900] font-semibold'
                      : 'text-zinc-300 hover:text-[#f7b900]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0c6b51] hover:bg-[#094f3c] text-white text-xs font-semibold transition-all shadow-sm"
              title="Call VK Rides"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>

            <a
              href="#booking"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 rounded-lg bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-glow-amber hover:shadow-lg active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={CONTACT_INFO.phoneLink}
              aria-label="Call VK Rides"
              className="p-2 rounded-lg bg-[#0c6b51] text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#111513] border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavClick(link.path);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="text-base font-medium text-zinc-200 hover:text-[#f7b900] py-1 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-[#f7b900] py-1 border-b border-white/5"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={CONTACT_INFO.phoneLink}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c6b51] text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp VK Rides</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full text-center py-3 rounded-xl bg-[#f7b900] text-[#09090b] font-bold text-sm tracking-wide shadow-glow-amber"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
