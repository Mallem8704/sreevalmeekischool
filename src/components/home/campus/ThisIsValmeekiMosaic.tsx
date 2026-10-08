'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Layers,
} from 'lucide-react';
import { PHOTO_MOSAIC, MosaicPhoto } from '@/lib/campusTourData';

const categories: Array<MosaicPhoto['category'] | 'ALL'> = [
  'ALL',
  'BUILDINGS',
  'CLASSROOMS',
  'SMART LEARNING',
  'SPORTS',
  'TRANSPORT',
  'ACTIVITIES',
  'EVENTS',
];

export default function ThisIsValmeekiMosaic() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'ALL'
    ? PHOTO_MOSAIC
    : PHOTO_MOSAIC.filter((p) => p.category === selectedCategory);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  // Responsive Span Helper
  const getSpanClasses = (span: MosaicPhoto['span'], isFiltered: boolean) => {
    if (isFiltered) {
      // In single-category filtered views, keep uniform cards for cleaner balance
      return 'col-span-1 row-span-1 min-h-[260px]';
    }
    switch (span) {
      case 'col-span-2 row-span-2':
        return 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2 md:row-span-2 min-h-[260px] sm:min-h-[460px]';
      case 'col-span-2 row-span-1':
        return 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1 min-h-[240px]';
      case 'col-span-1 row-span-2':
        return 'col-span-1 md:col-span-1 row-span-1 md:row-span-2 min-h-[260px] md:min-h-[460px]';
      default:
        return 'col-span-1 row-span-1 min-h-[240px]';
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFAF7] dark:bg-[#070F1E] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Camera className="w-3.5 h-3.5 text-[#D4A853]" />
            A LIVING ARCHIVE OF MEMORIES, ACADEMICS, AND SPIRIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            THIS IS VALMEEKI.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto"
          >
            Real snapshots from daily school assemblies, modern science labs, inter-house matches, and award ceremonies.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A1628] text-white dark:bg-[#D4A853] dark:text-[#0A1628] shadow-md scale-102 ring-2 ring-[#D4A853]/30'
                      : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Magazine Editorial Mosaic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] sm:auto-rows-[230px] md:auto-rows-[240px] gap-4 sm:gap-5 grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              const spanClasses = getSpanClasses(photo.span, selectedCategory !== 'ALL');

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-[#D4A853]/60 transition-all duration-300 bg-slate-900 ${spanClasses}`}
                >
                  {/* Photo Canvas */}
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[10px] font-black uppercase tracking-wider">
                      {photo.category}
                    </span>
                  </div>

                  {/* Zoom indicator icon top right on hover */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 text-white">
                    <h3 className="text-sm sm:text-base font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white line-clamp-1 group-hover:text-[#FBBF24] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-300 line-clamp-2 font-medium">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Gold bottom line hover indicator */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-[0.25em] block mb-1">
              ARCHIVE OF 28 YEARS
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white">
              MORE THAN A CAMPUS. A PLACE FULL OF MOMENTS.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-xl">
              Explore hundreds of unfiltered photographs, sports tournaments, science exhibitions, and annual festival days.
            </p>
          </div>

          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A1628] text-white dark:bg-[#D4A853] dark:text-[#0A1628] text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-[#1E3A8A] dark:hover:bg-[#E5BC64] shadow-md transition-all hover:scale-102 cursor-pointer"
          >
            <span>VIEW FULL SCHOOL GALLERY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Top Bar Controls */}
            <div
              className="flex items-center justify-between z-20 text-white max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-xs font-black uppercase tracking-wider font-mono">
                  {activePhoto.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Photo {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close Lightbox (Esc)"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Photo Viewer with Prev / Next */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
                title="Previous Photo (Left Arrow)"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Photo Display */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
                title="Next Photo (Right Arrow)"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Footer */}
            <div
              className="max-w-4xl w-full mx-auto text-center z-20 text-white pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white">
                {activePhoto.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-medium">
                {activePhoto.caption}
              </p>
              <div className="mt-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                USE ARROW KEYS ← → TO NAVIGATE • ESC TO CLOSE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
