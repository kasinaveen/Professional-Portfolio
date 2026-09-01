import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  playClick?: () => void;
  playHover?: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'journey', label: 'Journey' },
  { id: 'learning', label: 'Learning' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  playClick,
  playHover,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (playClick) playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-6 py-2.5 sm:py-3.5 transition-all duration-500 pointer-events-none flex justify-center">
      {/* Top Navigation Bar: WIDER & PROMINENT when at scrollY=0, COMPACT when scrolled */}
      <div
        className={`mx-auto rounded-2xl sm:rounded-3xl transition-all duration-500 ease-out pointer-events-auto flex items-center justify-between ${
          isScrolled
            ? 'w-[min(92vw,1040px)] px-3.5 sm:px-6 py-2 bg-[#030712]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'w-[min(96vw,1280px)] px-4 sm:px-8 py-3.5 sm:py-4 bg-[#030712]/60 backdrop-blur-md border border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.15)]'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('hero')}
          onMouseEnter={playHover}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
          aria-label="Scroll to Hero"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-white group-hover:text-emerald-300 transition-colors block">
              KASI NAVEEN K
            </span>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-sans tracking-wide">
              CSE &bull; Software Engineer
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 transition-all duration-300">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={playHover}
                className={`relative rounded-xl font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isScrolled ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-xs xl:text-sm'
                } ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Resume CTA */}
          <a
            href={SOCIAL_LINKS.resumePdf}
            download="Kasi_Naveen_K_Resume.pdf"
            onClick={() => {
              if (playClick) playClick();
            }}
            onMouseEnter={playHover}
            className={`inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-black font-sans text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer ${
              isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (playClick) playClick();
            }}
            className="lg:hidden p-2 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-3 right-3 max-w-lg mx-auto pointer-events-auto rounded-3xl bg-[#030712]/95 backdrop-blur-2xl border border-slate-800 p-4 shadow-2xl space-y-3 z-50"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-semibold'
                      : 'bg-slate-900/50 border border-slate-800/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={SOCIAL_LINKS.resumePdf}
                download="Kasi_Naveen_K_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <span className="text-[11px] font-mono text-slate-500">CGPA 8.9 &bull; CSE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
