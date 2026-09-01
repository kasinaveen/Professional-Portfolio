import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GridBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 dark:opacity-30" />

      {/* Interactive Flashlight Glow Blob */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 102, 0.4) 0%, rgba(0, 240, 255, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Ambient Pulsing Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyber-green/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyber-blue/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-cyber-violet/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,10,0.85)_80%)] dark:block hidden" />
    </div>
  );
};
