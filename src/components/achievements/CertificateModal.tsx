import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Award } from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  issuer: string;
  certificateUrl: string;
  description: string;
  tags?: string[];
  playClick: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  issuer,
  certificateUrl,
  description,
  tags = [],
  playClick,
}) => {
  useBodyScrollLock(isOpen);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPdf = certificateUrl.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-hidden overscroll-contain"
        style={{ overscrollBehavior: 'contain' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            playClick();
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] max-h-[85vh] sm:max-h-[88vh] bg-[#030712] border border-emerald-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden p-3 sm:p-5"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold font-display text-white truncate">
                  {title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono truncate">
                  {issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isPdf && (
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Original PDF</span>
                </a>
              )}
              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-400 transition-colors"
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Content Display - NO SCROLLING, FIT TO VIEWPORT */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0 overflow-hidden">
            {isPdf ? (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <iframe
                  src={certificateUrl}
                  title={title}
                  className="w-full h-[60vh] rounded-xl border border-slate-800 bg-slate-950"
                />
              </div>
            ) : (
              <img
                src={certificateUrl}
                alt={title}
                className="max-w-full max-h-[62vh] sm:max-h-[68vh] md:max-h-[70vh] w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform"
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  console.warn("Failed to load certificate image:", certificateUrl);
                  (e.currentTarget as HTMLImageElement).src = '/images/certificates/hackathon-2nd-prize.png';
                }}
              />
            )}
          </div>

          {/* Footer Bar */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0 text-xs font-sans text-slate-400">
            <p className="line-clamp-1 text-slate-300 text-[11px] sm:text-xs">
              {description}
            </p>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto font-mono text-[11px]">
              <span className="text-emerald-400 font-bold">Verified Credential</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-500">[ESC to close]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
