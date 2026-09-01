import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';

interface EducationTimelineProps {
  playHover: () => void;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({ playHover }) => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          idPrefix="ACADEMICS"
          title="EDUCATION"
          subtitle="A strong academic foundation in core computer science principles and software engineering."
          accent="green"
        />

        <div className="relative max-w-4xl mx-auto mt-12 pl-6 sm:pl-8">
          {/* Scroll-Drawing Animated Vertical Line */}
          <div className="absolute left-0 sm:left-2 top-0 bottom-0 w-[2px] bg-slate-800">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-emerald-500 origin-top shadow-[0_0_10px_rgba(16,185,129,0.8)]"
            />
          </div>

          {/* Timeline Node Point */}
          <div className="absolute -left-[9px] sm:-left-[1px] top-6 w-5 h-5 rounded-full bg-[#020611] border-2 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onMouseEnter={playHover}
            className="p-6 sm:p-8 rounded-2xl bg-[#030712]/80 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.06)] transition-all duration-300 relative group"
          >
            {/* Degree & Year Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {EDUCATION_DATA.currentYear}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                  {EDUCATION_DATA.degree}
                </h3>
              </div>

              {/* Verified CGPA Pill */}
              <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-right">
                <div className="text-xl sm:text-2xl font-extrabold font-display text-emerald-400">
                  {EDUCATION_DATA.cgpa} / {EDUCATION_DATA.cgpaMax}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  CGPA &bull; {EDUCATION_DATA.semesterCoverage}
                </div>
              </div>
            </div>

            {/* Institution Info */}
            <div className="mt-4 space-y-2 text-sm text-slate-300 font-sans">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{EDUCATION_DATA.institution}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
