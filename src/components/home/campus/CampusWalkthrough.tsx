'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Compass,
  Maximize2,
  X,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { WALKTHROUGH_SCENES, WalkthroughScene } from '@/lib/campusTourData';

export default function CampusWalkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeScene: WalkthroughScene = WALKTHROUGH_SCENES[activeIndex];
  const SCENE_DURATION_MS = 6500;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % WALKTHROUGH_SCENES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + WALKTHROUGH_SCENES.length) % WALKTHROUGH_SCENES.length);
    setProgress(0);
  }, []);

  const handleSelectStep = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  // Auto-advance timer with progress tracking
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / SCENE_DURATION_MS) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isLightboxOpen, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape' && isLightboxOpen) setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isLightboxOpen]);

  return (
    <section
      id="campus-walkthrough"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FAFAF7] dark:bg-[#070F1E] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4A853]" />
            7-SCENE INTERACTIVE CAMPUS WALKTHROUGH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-4"
          >
            TAKE A GUIDED VIRTUAL TOUR.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            From the grand entrance gate and tree-shaded corridors to interactive digital classrooms and our sports arena—experience life at Sree Valmeeki.
          </motion.p>
        </div>

        {/* 1. Interactive 7-Step Switcher Bar */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile horizontal scroll / Desktop flex */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 scrollbar-none snap-x justify-start lg:justify-between px-1">
            {WALKTHROUGH_SCENES.map((scene, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={scene.step}
                  onClick={() => handleSelectStep(idx)}
                  className={`relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-xl border transition-all duration-300 shrink-0 snap-start text-left focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#0A1628] border-[#D4A853] text-[#0A1628] dark:text-white shadow-lg shadow-[#D4A853]/10 scale-[1.02]'
                      : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white hover:bg-white dark:hover:bg-white/10'
                  }`}
                  aria-label={`Scene ${scene.step}: ${scene.title}`}
                >
                  {/* Step Numeral */}
                  <span
                    className={`font-mono text-xs font-black px-1.5 py-0.5 rounded transition-colors ${
                      isActive
                        ? 'bg-[#D4A853] text-[#0A1628]'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {scene.step}
                  </span>

                  {/* Scene Title */}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold tracking-tight uppercase whitespace-nowrap">
                      {scene.title}
                    </span>
                    <span className="hidden xl:inline text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                      {scene.badge}
                    </span>
                  </div>

                  {/* Active Step Bottom Progress Line */}
                  {isActive && isAutoPlaying && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A853] rounded-b-xl overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress / 100 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Generous Viewport Image Display with Editorial Captioning */}
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 shadow-2xl">
          {/* Main Display Grid: Large Visual Left + Editorial Panel Right (or Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] sm:min-h-[640px]">
            {/* Visual Canvas (8 cols on lg) */}
            <div className="relative lg:col-span-8 min-h-[380px] sm:min-h-[480px] lg:min-h-full overflow-hidden bg-black group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.step}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeScene.image}
                    alt={`${activeScene.title} - ${activeScene.headline}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* High-contrast subtle image vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 hidden lg:block" />
                </motion.div>
              </AnimatePresence>

              {/* Top Visual Badges on Image */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
                  SCENE {activeScene.step} OF 07
                </span>
                <span className="px-3 py-1 rounded-full bg-[#D4A853]/90 backdrop-blur-md text-[#0A1628] text-[11px] font-black tracking-wider uppercase hidden sm:inline">
                  {activeScene.badge}
                </span>
              </div>

              {/* Lightbox / Zoom Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-all cursor-pointer"
                aria-label="Expand image in high resolution"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Quick Image Navigation Arrows (Overlay) */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Next scene"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Editorial Captioning Column (4 cols on lg) */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-[#0A1628] border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.step}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  className="space-y-6"
                >
                  {/* Scene Pill & Big Step Watermark */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.25em] uppercase text-[#B8860B] dark:text-[#FBBF24]">
                      {activeScene.title}
                    </span>
                    <span className="text-4xl sm:text-5xl font-black font-mono text-slate-200 dark:text-white/10">
                      {activeScene.step}
                    </span>
                  </div>

                  {/* Editorial Headline */}
                  <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-tight">
                    {activeScene.headline}
                  </h3>

                  {/* Accent Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-transparent rounded-full" />

                  {/* Scene Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {activeScene.description}
                  </p>

                  {/* Verified Facility Highlights */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                      <span>Verified on-campus infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <Sparkles className="w-4 h-4 text-[#D4A853] shrink-0" />
                      <span>Dedicated mentors and faculty oversight</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Playback & Timeline Controls */}
              <div className="pt-8 mt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                {/* Auto-play toggle */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={isAutoPlaying ? 'Pause automatic walkthrough' : 'Resume automatic walkthrough'}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>Auto Tour: ON</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>Auto Tour: PAUSED</span>
                    </>
                  )}
                </button>

                {/* Progress Indicators (Dots) */}
                <div className="flex items-center gap-1.5">
                  {WALKTHROUGH_SCENES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectStep(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === activeIndex
                          ? 'w-6 bg-[#D4A853]'
                          : 'w-1.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                      }`}
                      aria-label={`Jump to scene ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close fullscreen modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={activeScene.image}
                  alt={activeScene.headline}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="text-[#D4A853] text-xs font-black uppercase tracking-widest block mb-1">
                  {activeScene.title} • SCENE {activeScene.step}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                  {activeScene.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
                  {activeScene.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
