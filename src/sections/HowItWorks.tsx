import React from 'react';
import { motion } from 'framer-motion';
import { howItWorksSteps } from '../data/services';
import { Car, FileText, PhoneCall, Key } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [Car, FileText, PhoneCall, Key];

  return (
    <section id="how-it-works" className="py-20 bg-[#111513] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
            Simple 4-Step Process
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            How It <span className="text-[#f7b900]">Works</span>
          </h2>

          <p className="mt-3 text-base text-zinc-300">
            A straightforward enquiry and booking process designed for hassle-free self-drive travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Car;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#171d1a] border border-white/10 hover:border-[#f7b900]/30 rounded-2xl p-6 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-[#f7b900]/15 text-[#f7b900] font-black text-sm flex items-center justify-center font-display border border-[#f7b900]/30">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-[11px] font-semibold text-[#f7b900]">
                  <span>Step {step.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
