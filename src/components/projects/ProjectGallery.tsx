import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, ZoomIn, 
  Layers
} from 'lucide-react';

export interface GalleryImage {
  url: string;
  title?: string;
  caption: string;
  description?: string;
  technicalSignificance?: string;
}

interface ProjectGalleryProps {
  images?: string[];
  screenshots?: Array<{
    url: string;
    title?: string;
    caption: string;
    description?: string;
    technicalSignificance?: string;
    isPlaceholder?: boolean;
  }>;
  projectName?: string;
  title?: string;
  accentColor?: 'emerald' | 'cyan' | 'violet' | 'pink';
  onOpenLightbox?: (imageUrl: string, caption: string, allImages?: GalleryImage[], initialIndex?: number) => void;
  playClick?: () => void;
  playHover?: () => void;
}

interface ImageDimensionInfo {
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'landscape' | 'portrait' | 'square';
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(3px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
      filter: { duration: 0.25 }
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(3px)',
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
      filter: { duration: 0.2 }
    }
  })
};

const ACCENT_STYLES = {
  emerald: {
    border: 'border-emerald-500/40 hover:border-emerald-400',
    activeBorder: 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
    dotActive: 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] w-7',
    dotInactive: 'bg-slate-700 hover:bg-slate-500',
    btn: 'hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    headerGlow: 'from-emerald-400 via-cyan-400 to-emerald-300'
  },
  cyan: {
    border: 'border-cyan-500/40 hover:border-cyan-400',
    activeBorder: 'border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
    dotActive: 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] w-7',
    dotInactive: 'bg-slate-700 hover:bg-slate-500',
    btn: 'hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    headerGlow: 'from-cyan-400 via-emerald-400 to-cyan-300'
  },
  violet: {
    border: 'border-violet-500/40 hover:border-violet-400',
    activeBorder: 'border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]',
    dotActive: 'bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] w-7',
    dotInactive: 'bg-slate-700 hover:bg-slate-500',
    btn: 'hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/50',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    headerGlow: 'from-violet-400 via-pink-400 to-violet-300'
  },
  pink: {
    border: 'border-pink-500/40 hover:border-pink-400',
    activeBorder: 'border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
    dotActive: 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.8)] w-7',
    dotInactive: 'bg-slate-700 hover:bg-slate-500',
    btn: 'hover:bg-pink-500/20 hover:text-pink-300 hover:border-pink-500/50',
    badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    headerGlow: 'from-pink-400 via-violet-400 to-pink-300'
  }
};

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images = [],
  screenshots = [],
  projectName,
  accentColor = 'emerald',
  onOpenLightbox,
  playClick,
  playHover
}) => {
  // Normalize items to standard GalleryImage array
  const galleryItems: GalleryImage[] = React.useMemo(() => {
    if (screenshots && screenshots.length > 0) {
      return screenshots.map((s, idx) => ({
        url: s.url,
        title: s.title || s.caption || `Screen ${idx + 1}`,
        caption: s.caption || `Screen ${idx + 1}`,
        description: s.description || s.caption,
        technicalSignificance: s.technicalSignificance
      }));
    }
    if (images && images.length > 0) {
      return images.map((url, idx) => ({
        url,
        title: `Screen ${idx + 1}`,
        caption: `Screen ${idx + 1}`,
        description: '',
        technicalSignificance: undefined
      }));
    }
    return [];
  }, [images, screenshots]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<Record<string, ImageDimensionInfo>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const style = ACCENT_STYLES[accentColor] || ACCENT_STYLES.emerald;
  const currentItem = galleryItems[currentIndex];
  const total = galleryItems.length;

  // Analyze image dimensions dynamically
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, url: string) => {
    const img = e.currentTarget;
    const width = img.naturalWidth || 1920;
    const height = img.naturalHeight || 1080;
    const aspectRatio = width / (height || 1);
    const orientation: 'landscape' | 'portrait' | 'square' = 
      aspectRatio >= 1.2 ? 'landscape' : aspectRatio <= 0.85 ? 'portrait' : 'square';

    setDimensions(prev => ({
      ...prev,
      [url]: { width, height, aspectRatio, orientation }
    }));
  };

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % total);
    if (playClick) playClick();
  }, [total, playClick]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + total) % total);
    if (playClick) playClick();
  }, [total, playClick]);

  const goToIndex = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    if (playClick) playClick();
  };

  // Optional Autoplay (5.5 seconds) with interaction pause
  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [total, isPaused, handleNext]);

  // Touch Swipe Handlers (preserving vertical pan-y scroll)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (diffX > minSwipeDistance) {
      handleNext();
    } else if (diffX < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  if (galleryItems.length === 0) {
    return null;
  }

  const currentDim = currentItem ? dimensions[currentItem.url] : undefined;

  return (
    <div 
      ref={containerRef}
      className="p-4 sm:p-6 rounded-3xl bg-[#030712]/90 border border-slate-800/90 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gallery Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl border ${style.badge} flex items-center justify-center`}>
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold font-display tracking-wider text-white uppercase flex items-center gap-2">
              <span>PROJECT OVERVIEW GALLERY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </h4>
            {projectName && (
              <p className="text-[11px] font-mono text-slate-400">
                {projectName} &bull; Image Viewer
              </p>
            )}
          </div>
        </div>

        {/* Gallery Status Badges */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {currentDim && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
              {currentDim.orientation.toUpperCase()} &bull; {currentDim.width} &times; {currentDim.height}
            </span>
          )}
          <span className={`px-3 py-1 rounded-xl border font-bold text-xs ${style.badge}`}>
            {currentIndex + 1} / {total}
          </span>
        </div>
      </div>

      {/* Main Image Viewport Canvas */}
      <div 
        className="relative w-full rounded-2xl overflow-hidden bg-[#02050e] border border-slate-800/90 shadow-inner min-h-[380px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center select-none"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center p-3 sm:p-5"
          >
            {/* Clickable Image (Contain with No Distortion, Maximized View) */}
            <div 
              onClick={() => {
                if (onOpenLightbox && currentItem) {
                  onOpenLightbox(currentItem.url, currentItem.caption, galleryItems, currentIndex);
                  if (playClick) playClick();
                }
              }}
              className="relative max-w-full max-h-[55vh] sm:max-h-[62vh] flex items-center justify-center cursor-pointer group"
            >
              <img
                src={currentItem.url}
                alt={currentItem.title || currentItem.caption}
                onLoad={(e) => handleImageLoad(e, currentItem.url)}
                className={`max-w-full max-h-[50vh] sm:max-h-[60vh] w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.015] border border-slate-800/70 ${
                  currentDim?.orientation === 'portrait' ? 'max-w-xs sm:max-w-sm' : ''
                }`}
                onError={(e) => {
                  console.warn("Gallery image failed to load:", currentItem.url);
                }}
              />

              {/* Hover Inspect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px] pointer-events-none">
                <div className="p-3 rounded-2xl bg-black/80 border border-white/20 text-white flex items-center gap-2 shadow-2xl">
                  <ZoomIn className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-bold tracking-wide">Click to Expand Fullscreen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Directional Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              onMouseEnter={playHover}
              aria-label="Previous project image"
              className={`absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl bg-black/75 hover:bg-black/95 text-white border border-slate-700/80 ${style.btn} backdrop-blur-md transition-all shadow-xl z-20 cursor-pointer`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              onMouseEnter={playHover}
              aria-label="Next project image"
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl bg-black/75 hover:bg-black/95 text-white border border-slate-700/80 ${style.btn} backdrop-blur-md transition-all shadow-xl z-20 cursor-pointer`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Controls: Indicators & Thumbnail Ribbon */}
      {total > 1 && (
        <div className="space-y-3 pt-1">
          {/* Animated Indicator Dots */}
          <div className="flex items-center justify-center gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                onMouseEnter={playHover}
                aria-label={`Jump to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? style.dotActive : `w-2 ${style.dotInactive}`
                }`}
              />
            ))}
          </div>

          {/* Mini Thumbnail Ribbon */}
          <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-1 custom-scrollbar px-1">
            {galleryItems.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  onMouseEnter={playHover}
                  aria-label={`Select screenshot ${idx + 1}`}
                  className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-slate-900 ${
                    isSelected ? style.activeBorder : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title || item.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
