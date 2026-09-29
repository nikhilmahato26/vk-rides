import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseItems } from '../data/services';
import { ShieldCheck, Layers, Tag, Key, PhoneCall, Wallet } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Layers, Tag, Key, PhoneCall, Wallet];

  return (
    <section className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Value Proposition
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Choose <span className="text-[#f7b900]">VK Rides?</span>
          </h2>

          <p className="mt-3 text-base text-zinc-300">
            Dedicated self-drive car rental in Jamshedpur focusing on clear rates and honest service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseItems.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/30 rounded-2xl p-6 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#f7b900]/15 flex items-center justify-center text-[#f7b900] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-300">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
