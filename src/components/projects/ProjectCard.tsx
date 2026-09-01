import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../../types/portfolio';
import { 
  Github, ExternalLink, ArrowRight, Layers, Sparkles, 
  CheckCircle2, FolderGit2, Smartphone, Database, ZoomIn
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  playClick: () => void;
  playHover: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  playClick,
  playHover
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -y / 25,
      y: x / 25
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseEnter={playHover}
      onClick={() => {
        onSelect(project);
        playClick();
      }}
      className={`p-6 sm:p-7 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
        project.isMajorProject
          ? 'bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 border-cyber-green/50 shadow-[0_0_30px_rgba(0,255,102,0.15)] hover:border-cyber-green'
          : 'bg-slate-900/70 border-slate-800 hover:border-cyber-blue/50 hover:shadow-neon-blue'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-green/15 transition-all" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full font-mono text-[11px] font-bold bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
            {project.badge}
          </span>
          {project.webToMobile && (
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] text-cyber-violet bg-violet-950/60 border border-violet-800 font-semibold flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              WEB + ANDROID + iOS
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-100 group-hover:text-cyber-green transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-mono mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Features Preview */}
        <div className="space-y-1.5 mb-6">
          {project.features.slice(0, 3).map((f, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0 mt-0.5" />
              <span className="line-clamp-1">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech Stack & CTA */}
      <div className="pt-4 border-t border-slate-800/80 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-950/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md text-[10px] font-mono text-slate-500 bg-slate-950 border border-slate-800">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-mono pt-1">
          <span className="text-cyber-green font-bold flex items-center gap-1.5 group-hover:underline">
            <span>[ INSPECT ARCHITECTURE & DETAILS ]</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-slate-500 text-[10px]">PLACEHOLDERS READY</span>
        </div>
      </div>
    </motion.div>
  );
};
