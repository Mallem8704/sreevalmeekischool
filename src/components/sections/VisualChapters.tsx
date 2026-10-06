'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { visualChapters } from '@/lib/data';

export default function VisualChapters() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentChapter = visualChapters[activeIdx];

  return (
    <section id="academics" className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal & Visual First */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VALMEEKI EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
              FIVE CHAPTERS OF GROWTH
            </h2>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {visualChapters.map((ch, idx) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-[#D4A853] text-[#0A1628] shadow-lg shadow-[#D4A853]/20'
                    : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <span>{ch.chapterNumber} {ch.action}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Full-Screen Visual Chapter Frame */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/60">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentChapter.image}
                alt={currentChapter.overlayText}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/85 via-transparent to-transparent hidden sm:block" />

              {/* Overlay Content: Minimal & Punchy */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 max-w-xl z-10">
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.3em] uppercase text-[#D4A853] block mb-2">
                  CHAPTER {currentChapter.chapterNumber} • {currentChapter.action}
                </span>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-2 drop-shadow-md">
                  {currentChapter.overlayText}
                </h3>

                <p className="text-xs sm:text-base text-white/80 font-normal font-[family-name:var(--font-body)]">
                  {currentChapter.subtext}
                </p>
              </div>

              {/* Next Chapter Quick Cue */}
              <div className="absolute bottom-6 right-6 z-10 hidden sm:block">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % visualChapters.length)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 backdrop-blur-md text-xs font-medium transition-all cursor-pointer"
                >
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
