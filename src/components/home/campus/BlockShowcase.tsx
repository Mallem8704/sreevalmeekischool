'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import { CAMPUS_BLOCKS, CampusBlock } from '@/lib/campusTourData';

const TAB_LABELS = [
  '01 TECHNO BLOCK',
  '02 10TH CLASS BLOCK',
  '03 ICON OLYMPIAD BLOCK',
  '04 SPORTS CAMPUS',
];

export default function BlockShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalBlock, setActiveModalBlock] = useState<CampusBlock | null>(null);

  const total = CAMPUS_BLOCKS.length;
  const currentBlock = CAMPUS_BLOCKS[activeIndex];

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Auto-slide every 6 seconds, pausing on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="academic-blocks"
      className="relative w-full py-16 sm:py-24 bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Building className="w-3.5 h-3.5 text-[#D4A853]" />
            DEDICATED ACADEMIC INFRASTRUCTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-3"
          >
            EXPLORE OUR CAMPUS BLOCKS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Four specialized wings tailored to every stage of a student&apos;s growth—from foundational primary learning to rigorous board exam leadership and athletic prowess.
          </motion.p>
        </div>

        {/* Interactive Tab Selectors (01 TECHNO BLOCK, 02 10TH CLASS BLOCK, 03 ICON OLYMPIAD BLOCK, 04 SPORTS CAMPUS) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
          {CAMPUS_BLOCKS.map((block, idx) => {
            const isActive = activeIndex === idx;
            const tabLabel = TAB_LABELS[idx] || `0${idx + 1} ${block.name}`;
            return (
              <button
                key={block.id}
                onClick={() => goToSlide(idx)}
                className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 cursor-pointer text-center ${
                  isActive
                    ? 'bg-[#D4A853] text-[#0A1628] shadow-lg shadow-[#D4A853]/25 border-2 border-[#D4A853] scale-[1.01]'
                    : 'bg-[#FAFAF7] dark:bg-[#070F1E] text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-white/10 hover:border-[#D4A853]/50 hover:text-[#0A1628] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5'
                }`}
                aria-label={`View ${tabLabel}`}
              >
                <span className="truncate">{tabLabel}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1628] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Compact Luxury Animated Slide Showcase Container (~500px Viewport) */}
        <div
          className="relative rounded-3xl bg-[#FAFAF7] dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated Slide Content */}
          <div className="relative min-h-[500px] lg:h-[500px] w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentBlock.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full lg:grid lg:grid-cols-12 flex flex-col"
              >
                {/* Left Side: Panoramic Block Image (col-span-7) */}
                <div className="relative w-full h-64 sm:h-72 lg:h-full lg:col-span-7 overflow-hidden bg-slate-900 group">
                  <Image
                    src={currentBlock.image}
                    alt={`${currentBlock.name} - ${currentBlock.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />

                  {/* Dynamic High-Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/60" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-black tracking-widest uppercase">
                        BLOCK 0{activeIndex + 1}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-bold">
                        {isPaused ? (
                          <>
                            <Pause className="w-2.5 h-2.5 text-[#D4A853]" /> Paused
                          </>
                        ) : (
                          <>
                            <Play className="w-2.5 h-2.5 text-[#D4A853]" /> Auto-Slide
                          </>
                        )}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalBlock(currentBlock)}
                      className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/95 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                      aria-label={`Enlarge photo of ${currentBlock.name}`}
                      title="Enlarge photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Title & Subtitle */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#F5E6C0] mb-1">
                      {currentBlock.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white drop-shadow-sm">
                      {currentBlock.name}
                    </h3>
                  </div>

                  {/* Left & Right Quick Image Controls on Mobile/Desktop */}
                  <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5 z-20">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 hover:text-[#D4A853] transition-colors cursor-pointer"
                      aria-label="Previous block"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 hover:text-[#D4A853] transition-colors cursor-pointer"
                      aria-label="Next block"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Luxury Details & Features (col-span-5) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#FAFAF7] dark:bg-[#070F1E] flex-1 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Header info */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#B8860B] dark:text-[#FBBF24]">
                        WING 0{activeIndex + 1} OF 04
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        Verified Campus
                      </span>
                    </div>

                    {/* Tagline Callout */}
                    <p className="text-sm sm:text-base font-semibold text-[#0A1628] dark:text-white italic border-l-2 border-[#D4A853] pl-3 leading-snug">
                      &ldquo;{currentBlock.tagline}&rdquo;
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {currentBlock.description}
                    </p>

                    {/* Key Architectural Highlights */}
                    <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-2">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#B8860B] dark:text-[#FBBF24] block">
                        KEY ARCHITECTURAL HIGHLIGHTS
                      </span>
                      <ul className="space-y-2">
                        {currentBlock.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Actions & Navigation */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalBlock(currentBlock)}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] hover:text-[#0A1628] dark:hover:text-white transition-colors group/btn cursor-pointer"
                    >
                      <span>Explore Gallery & Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Dot Indicators & Arrow buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 mr-1">
                        {CAMPUS_BLOCKS.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => goToSlide(dotIdx)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              dotIdx === activeIndex
                                ? 'w-6 bg-[#D4A853]'
                                : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                            }`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-1 sm:hidden">
                        <button
                          onClick={handlePrev}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          aria-label="Previous block"
                        >
                          <ChevronLeft className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          aria-label="Next block"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Enlarged Modal for Block Details */}
      <AnimatePresence>
        {activeModalBlock && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalBlock(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#0A1628] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalBlock(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={activeModalBlock.image}
                  alt={activeModalBlock.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D4A853] block mb-1">
                    {activeModalBlock.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight">
                    {activeModalBlock.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalBlock.description}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24] block">
                    Campus Features & Facilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalBlock.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-xs sm:text-sm font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end">
                  <button
                    onClick={() => setActiveModalBlock(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#0A1628] dark:bg-white text-white dark:text-[#0A1628] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
