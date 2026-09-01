import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export interface LightboxImageItem {
  url: string;
  title?: string;
  caption: string;
  description?: string;
  technicalSignificance?: string;
}

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  caption: string;
  allImages?: LightboxImageItem[];
  initialIndex?: number;
  onClose: () => void;
  playClick?: () => void;
  playHover?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  caption,
  allImages = [],
  initialIndex = 0,
  onClose,
  playClick,
  playHover
}) => {
  useBodyScrollLock(isOpen);

  // Normalize images list
  const imageList: LightboxImageItem[] = React.useMemo(() => {
    if (allImages && allImages.length > 0) {
      return allImages;
    }
    if (imageUrl) {
      return [{ url: imageUrl, caption: caption || 'Screenshot' }];
    }
    return [];
  }, [allImages, imageUrl, caption]);

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      if (allImages && allImages.length > 0) {
        const foundIdx = allImages.findIndex(img => img.url === imageUrl);
        setCurrentIndex(foundIdx >= 0 ? foundIdx : initialIndex);
      } else {
        setCurrentIndex(0);
      }
    }
  }, [isOpen, imageUrl, allImages, initialIndex]);

  const handleNext = useCallback(() => {
    if (imageList.length <= 1) return;
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % imageList.length);
    if (playClick) playClick();
  }, [imageList.length, playClick]);

  const handlePrev = useCallback(() => {
    if (imageList.length <= 1) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + imageList.length) % imageList.length);
    if (playClick) playClick();
  }, [imageList.length, playClick]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || imageList.length === 0) return null;

  const currentImg = imageList[currentIndex] || imageList[0];
  const total = imageList.length;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto overscroll-contain"
        style={{ overscrollBehavior: 'contain' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
            if (playClick) playClick();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-6xl w-full bg-[#030712] border border-emerald-500/40 rounded-3xl p-4 sm:p-6 shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col justify-between max-h-[96vh] overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Layers className="w-4 h-4" />
              <span>PROJECT OVERVIEW GALLERY</span>
              {total > 1 && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px]">
                  {currentIndex + 1} of {total}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                if (playClick) playClick();
              }}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-400 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Screenshot Canvas with Directional Slide & Contain Fitting */}
          <div className="relative rounded-2xl overflow-hidden bg-[#02050e] border border-slate-800 p-2 sm:p-4 flex items-center justify-center min-h-[320px] max-h-[78vh] select-none">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentImg.url}
                custom={direction}
                initial={{ x: direction > 0 ? 80 : -80, opacity: 0, scale: 0.97 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: direction > 0 ? -80 : 80, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={currentImg.url}
                  alt={currentImg.title || currentImg.caption || 'Project view'}
                  className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-slate-800/80"
                  onError={(e) => {
                    console.warn("Failed to load lightbox image:", currentImg.url);
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Buttons in Lightbox */}
            {total > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  onMouseEnter={playHover}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-2xl bg-black/75 hover:bg-emerald-500 text-white hover:text-black border border-slate-700/80 transition-all shadow-2xl z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleNext}
                  onMouseEnter={playHover}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-2xl bg-black/75 hover:bg-emerald-500 text-white hover:text-black border border-slate-700/80 transition-all shadow-2xl z-20 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Clean Controls Footer */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Click outside or press [ESC] to exit</span>
            <button
              onClick={() => {
                onClose();
                if (playClick) playClick();
              }}
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-xs transition-colors cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              CLOSE VIEWER
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
