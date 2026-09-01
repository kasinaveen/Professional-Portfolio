import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DeclarationSection: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#030712]/70 border border-slate-800 text-center space-y-4 backdrop-blur-md"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OFFICIAL STATEMENT</span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-sans italic max-w-2xl mx-auto leading-relaxed">
            "{PERSONAL_INFO.declaration}"
          </p>

          <div className="pt-2">
            <h4 className="text-base font-bold font-display text-white tracking-wide">
              {PERSONAL_INFO.name}
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              B.E. Computer Science &amp; Engineering &bull; Government College of Engineering, Sengipatti
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
