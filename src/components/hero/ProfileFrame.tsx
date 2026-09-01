import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ProfileFrameProps {
  playHover: () => void;
}

export const ProfileFrame: React.FC<ProfileFrameProps> = ({ playHover }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Ambient Pulsing Cosmic Glow behind Frame */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-violet-600/20 rounded-full blur-3xl opacity-75 animate-pulse pointer-events-none" />

      {/* Main Responsive Circle Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={playHover}
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{ perspective: 1000 }}
        className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px] xl:w-[390px] xl:h-[390px] aspect-square rounded-full p-2 group cursor-pointer"
      >
        {/* Animated Outer Tech Rings */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-500" />
        <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-500/30 animate-[spin_35s_linear_infinite]" />
        <div className="absolute -inset-4 rounded-full border border-violet-500/20 opacity-60" />

        {/* Circular Profile Image Container - STRICT ROUND CLIPPING */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-emerald-400/60 shadow-2xl">
          <img
            src={PERSONAL_INFO.profileImage}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%'
            }}
            onError={(e) => {
              console.warn("Profile image failed to load:", PERSONAL_INFO.profileImage);
              (e.currentTarget as HTMLImageElement).src = '/images/profile.png';
            }}
          />

          {/* Subtle Futuristic Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Mini Tech Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1.5 right-3 sm:right-5 px-3.5 py-1.5 rounded-full bg-[#030712]/95 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] backdrop-blur-md flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono font-semibold text-emerald-300">
            Java Specialist
          </span>
        </motion.div>
      </motion.div>

      {/* Required Text Near Image: Building. Learning. Innovating. */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 tracking-wider shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span className="text-emerald-400 font-semibold">Building.</span>
        <span className="text-cyan-400 font-semibold">Learning.</span>
        <span className="text-violet-400 font-semibold">Innovating.</span>
      </motion.div>
    </div>
  );
};
