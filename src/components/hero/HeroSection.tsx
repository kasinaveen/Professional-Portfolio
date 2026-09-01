import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { ProfileFrame } from './ProfileFrame';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Terminal, Code2, Layers, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  playClick: () => void;
  playHover: () => void;
  playTerminalKey: () => void;
  playSuccess: () => void;
}

const ROTATING_ROLES = [
  "FULL-STACK DEVELOPER",
  "APP DEVELOPER",
  "JAVA DEVELOPER",
  "SOFTWARE ENGINEER IN THE MAKING"
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  playClick,
  playHover,
  playSuccess,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Narrative & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge: Elegant Intro Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>3RD YEAR B.E. CSE &bull; 8.9 CGPA</span>
            </motion.div>

            {/* Main Heading: KASI NAVEEN K */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                KASI NAVEEN K
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium tracking-wide">
                Computer Science &amp; Engineering Student
              </p>
            </motion.div>

            {/* Rotating Dynamic Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-violet-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-sm sm:text-base md:text-lg font-bold tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                >
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>{ROTATING_ROLES[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Resume-Accurate Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
            >
              I am a motivated and technically skilled 3rd-year Computer Science and Engineering student with a strong academic record of <strong className="text-emerald-400 font-semibold">8.9 CGPA</strong> up to the end of the 4th semester.
              I have experience in full-stack web development and application development, with hands-on experience building complete software solutions from frontend interfaces to backend services and databases.
            </motion.p>

            {/* Programming Proficiency Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <span className="text-xs font-mono text-slate-400 mr-1">Proficient in:</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/50 text-emerald-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                Java (Primary)
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-xs">
                Python
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs">
                C
              </span>
            </motion.div>

            {/* 3 Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4"
            >
              {/* Button 1: VIEW MY WORK */}
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={playHover}
                className="group relative px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: DOWNLOAD RESUME */}
              <a
                href={SOCIAL_LINKS.resumePdf}
                download="Kasi_Naveen_K_Resume.pdf"
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-slate-100 font-sans font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-md"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Button 3: LET'S CONNECT */}
              <button
                onClick={() => scrollTo('contact')}
                onMouseEnter={playHover}
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-100 font-sans font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>LET'S CONNECT</span>
              </button>
            </motion.div>

            {/* Secondary Social Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-slate-400"
            >
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 text-slate-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-1.5 hover:text-emerald-400 text-slate-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{SOCIAL_LINKS.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Personal Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <ProfileFrame playHover={playHover} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
