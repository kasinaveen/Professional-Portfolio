import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward, Sparkles } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

const LOADING_STAGES = [
  "Initializing...",
  "Loading developer profile...",
  "Loading skills...",
  "Loading projects...",
  "Loading achievements...",
  "Preparing portfolio..."
];

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already visited in this browser session
    const hasBooted = sessionStorage.getItem('kasi-portfolio-booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    const intervalTime = 380; // Fast and elegant sequence
    const totalStages = LOADING_STAGES.length;

    const interval = setInterval(() => {
      setStageIndex((prev) => {
        const next = prev + 1;
        const currentProgress = Math.min(Math.round(((next + 1) / totalStages) * 100), 100);
        setProgress(currentProgress);

        if (next >= totalStages - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            sessionStorage.setItem('kasi-portfolio-booted', 'true');
            setTimeout(onComplete, 600);
          }, 500);
        }
        return Math.min(next, totalStages - 1);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('kasi-portfolio-booted', 'true');
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-14 bg-[#020611] text-white select-none overflow-hidden"
        >
          {/* Subtle Ambient Cosmic Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Header with Skip Button */}
          <div className="w-full max-w-4xl flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                PORTFOLIO EXPERIENCE
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 hover:border-emerald-500/50 bg-slate-900/60 text-slate-400 hover:text-white text-xs font-mono transition-all"
            >
              <span>Skip</span>
              <FastForward className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>

          {/* Center Brand Block */}
          <div className="text-center relative z-10 space-y-4 max-w-2xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>WELCOME</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display">
                KASI NAVEEN K
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 font-medium tracking-wide">
                Computer Science &amp; Engineering
              </p>
            </motion.div>

            {/* Current Loading Stage Label */}
            <div className="h-8 flex items-center justify-center pt-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stageIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs sm:text-sm font-mono text-emerald-400 tracking-wider"
                >
                  {LOADING_STAGES[stageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Sleek Progress Line */}
          <div className="w-full max-w-md relative z-10 space-y-2">
            <div className="w-full h-[3px] bg-slate-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span>EXPLORING SYSTEM</span>
              <span className="text-emerald-400 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
