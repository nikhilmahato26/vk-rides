import React from 'react';
import { motion } from 'framer-motion';
import { Car, Compass, Tag, PhoneCall } from 'lucide-react';
import { quickHighlights } from '../data/services';

export const QuickHighlights: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Car,
    Compass,
    Tag,
    PhoneCall,
  };

  return (
    <section className="py-12 bg-[#09090b] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Car;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#f7b900]/15 flex items-center justify-center text-[#f7b900] shrink-0 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed font-normal">
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
