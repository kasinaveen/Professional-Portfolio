import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  idPrefix: string;
  title: string;
  subtitle?: string;
  accent?: 'green' | 'blue' | 'violet' | 'pink';
  tag?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  idPrefix,
  title,
  subtitle,
  accent = 'green',
  tag
}) => {
  const accentClasses = {
    green: {
      text: 'text-emerald-400',
      badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      line: 'from-emerald-400',
      glow: 'shadow-[0_0_12px_rgba(16,185,129,0.8)]'
    },
    blue: {
      text: 'text-cyan-400',
      badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
      line: 'from-cyan-400',
      glow: 'shadow-[0_0_12px_rgba(6,182,212,0.8)]'
    },
    violet: {
      text: 'text-violet-400',
      badge: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
      line: 'from-violet-400',
      glow: 'shadow-[0_0_12px_rgba(139,92,246,0.8)]'
    },
    pink: {
      text: 'text-pink-400',
      badge: 'border-pink-500/30 bg-pink-500/10 text-pink-400',
      line: 'from-pink-400',
      glow: 'shadow-[0_0_12px_rgba(236,72,153,0.8)]'
    }
  }[accent];

  return (
    <div className="mb-12 md:mb-16">
      {/* Top Prefix Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-3 font-mono text-xs"
      >
        <span className={`px-3 py-1 rounded-full border text-[11px] font-semibold flex items-center gap-1.5 ${accentClasses.badge}`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{idPrefix}</span>
        </span>
        {tag && (
          <span className="text-slate-400 text-[11px] font-mono">
            &bull; {tag}
          </span>
        )}
      </motion.div>

      {/* Main Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-slate-300 mt-2 max-w-3xl font-sans leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Animated Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`mt-4 h-[2px] w-full bg-gradient-to-r ${accentClasses.line} via-slate-800 to-transparent origin-left`}
      />
    </div>
  );
};
