import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../types/portfolio';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { 
  X, Github, ExternalLink, FileText, CheckCircle2, 
  Cpu, Layers, Sparkles, Terminal, Smartphone, Database, ZoomIn, Image as ImageIcon 
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string, caption: string, allImages?: Array<{ url: string; caption: string }>, initialIndex?: number) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenLightbox
}) => {
  useBodyScrollLock(!!project);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto overscroll-contain"
        style={{ overscrollBehavior: 'contain' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full bg-[#030712] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col justify-between overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6 shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {project.badge}
                </span>
                {project.webToMobile && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 font-semibold flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    <span>WEB + ANDROID + iOS</span>
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-400 transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto space-y-6 pr-1 custom-scrollbar">
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                SYSTEM OVERVIEW:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                TECHNOLOGIES & PROTOCOLS:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            {project.architectureOverview && (
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  DATA FLOW & ARCHITECTURE PIPELINE:
                </h4>
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                  {project.architectureOverview}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                CORE SYSTEM CAPABILITIES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((f, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-sans leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Overview Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <ImageIcon className="w-4 h-4" />
                  PROJECT OVERVIEW GALLERY:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => onOpenLightbox(s.url, s.caption, project.screenshots, idx)}
                      className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 cursor-pointer hover:border-emerald-400 transition-all"
                    >
                      <div className="h-44 rounded-xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={s.url}
                          alt={s.title || s.caption}
                          className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            console.warn("Failed to load project modal image:", s.url);
                          }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                          <ZoomIn className="w-6 h-6 text-emerald-400 mb-1" />
                          <span className="font-mono text-xs text-white font-bold">{s.title || s.caption}</span>
                          <span className="font-mono text-[10px] text-emerald-300 mt-1">[Click to inspect]</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer with ONLY VALID Links */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs shrink-0 mt-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.liveDemoUrl && project.liveDemoUrl.startsWith('http') && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && project.githubUrl.startsWith('http') && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.apkUrl && project.apkUrl.startsWith('http') && (
                <a
                  href={project.apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors ml-auto"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
