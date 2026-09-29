import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#111513] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest">
              Direct Assistance
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Get In <span className="text-[#f7b900]">Touch</span>
            </h2>

            <div className="p-6 sm:p-8 bg-[#171d1a] border border-white/10 rounded-3xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  {CONTACT_INFO.businessName}
                </h3>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {CONTACT_INFO.subtitle}
                </span>
              </div>

              <div className="space-y-4 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase font-semibold block">Location</span>
                    <span className="text-base font-bold text-white">{CONTACT_INFO.location}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f7b900] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase font-semibold block">Phone</span>
                    <a
                      href={CONTACT_INFO.phoneLink}
                      className="text-base font-bold text-white hover:text-[#f7b900] transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#5ee9b5] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-zinc-400 uppercase font-semibold block">Email</span>
                    <a
                      href={CONTACT_INFO.emailLink}
                      className="text-base font-bold text-white hover:text-[#5ee9b5] transition-colors truncate block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="flex-1 min-w-[130px] py-3 px-4 rounded-xl bg-[#0c6b51] hover:bg-[#094f3c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={CONTACT_INFO.emailLink}
                  className="flex-1 min-w-[130px] py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-zinc-300" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Map Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest">
              Regional Service
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Self Drive Car Rental in <span className="text-[#f7b900]">Jamshedpur</span>
            </h2>

            <div className="bg-[#171d1a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#f7b900]" />
                  <span className="text-sm font-bold text-white">Jamshedpur, Jharkhand</span>
                </div>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#f7b900] hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>

              {/* Embedded Google Map centered on Jamshedpur */}
              <div className="w-full h-80 bg-[#111513]">
                <iframe
                  title="VK Rides Self Drive Car Rental Location Jamshedpur"
                  src={CONTACT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 bg-[#111513] text-xs text-zinc-400 flex items-center justify-between">
                <span>Serving all local travel and outstation requirements across Jharkhand.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
