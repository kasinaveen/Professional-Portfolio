import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuickStatsProps {
  playHover: () => void;
}

const STATS_ITEMS = [
  {
    value: "8.9 / 10",
    label: "CGPA",
    subtext: "Up to 4th Semester",
    icon: GraduationCap,
    accent: "emerald",
    glow: "rgba(16,185,129,0.3)"
  },
  {
    value: "3rd Year",
    label: "B.E. CSE",
    subtext: "GCE Sengipatti, Thanjavur",
    icon: Sparkles,
    accent: "cyan",
    glow: "rgba(6,182,212,0.3)"
  },
  {
    value: "Java",
    label: "Primary Language",
    subtext: "NPTEL Certified Core & OOP",
    icon: Code2,
    accent: "amber",
    glow: "rgba(245,158,11,0.3)"
  },
  {
    value: "2",
    label: "Hackathon Participations",
    subtext: "Rapid Prototype Engineering",
    icon: Trophy,
    accent: "violet",
    glow: "rgba(139,92,246,0.3)"
  },
  {
    value: "2nd Prize",
    label: "BIT, Erode",
    subtext: "Game Prototype Innovation",
    icon: Award,
    accent: "pink",
    glow: "rgba(236,72,153,0.3)"
  }
];

export const QuickStats: React.FC<QuickStatsProps> = ({ playHover }) => {
  return (
    <section id="metrics" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {STATS_ITEMS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={playHover}
                className="group relative p-4 sm:p-5 rounded-2xl bg-[#030712]/70 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top corner indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Stat Big Value */}
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
