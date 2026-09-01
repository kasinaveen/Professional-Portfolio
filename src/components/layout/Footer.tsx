import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { Phone, Linkedin, Mail, Download, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  playClick: () => void;
  playHover: () => void;
}

export const Footer: React.FC<FooterProps> = ({ playClick, playHover }) => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-800/80 py-12 font-sans text-xs text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-display">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              Computer Science &amp; Engineering &bull; Government College of Engineering, Sengipatti <br />
              <span className="text-emerald-400 font-medium">Full-Stack Developer</span> &bull; <span className="text-cyan-400 font-medium">App Developer</span> &bull; <span className="text-amber-400 font-medium">Java Developer</span>
            </p>
          </div>

          {/* Minimal Social & Contact Navigation */}
          <div className="flex flex-wrap items-center gap-5 text-slate-300 font-mono text-xs">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              onClick={playClick}
              onMouseEnter={playHover}
              className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              onClick={playClick}
              onMouseEnter={playHover}
              className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call ({SOCIAL_LINKS.phone})</span>
            </a>

            <a
              href={SOCIAL_LINKS.resumePdf}
              download="Kasi_Naveen_K_Resume.pdf"
              onClick={playClick}
              onMouseEnter={playHover}
              className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={playHover}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 transition-all ml-auto md:ml-4 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>KASI NAVEEN K &bull; PORTFOLIO</span>
          </div>

          <div>
            <span>&copy; 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
