'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { campusSlides } from '@/lib/data';

export default function CampusStory() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = campusSlides[activeIdx];

  const next = () => setActiveIdx((prev) => (prev + 1) % campusSlides.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + campusSlides.length) % campusSlides.length);

  return (
    <section id="campus" className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FACILITIES & INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
              EXPLORE OUR CAMPUS
            </h2>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer active:scale-95"
              aria-label="Previous facility"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer active:scale-95"
              aria-label="Next facility"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Large Facility Showcase Slide */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/85 via-transparent to-transparent hidden sm:block" />

              {/* Floating Content */}
              <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 max-w-xl z-10">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A853] block mb-2 font-mono">
                  {current.tag} • 0{activeIdx + 1} / 0{campusSlides.length}
                </span>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-2 drop-shadow-md">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-lg text-white/90 font-medium font-[family-name:var(--font-body)]">
                  “{current.oneLiner}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Indicator Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {campusSlides.map((slide, idx) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-white/15 border-[#D4A853] text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-[10px] font-mono text-[#D4A853] block mb-0.5">0{idx + 1}</span>
              <span className="text-xs font-bold font-[family-name:var(--font-heading)] block line-clamp-1">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
