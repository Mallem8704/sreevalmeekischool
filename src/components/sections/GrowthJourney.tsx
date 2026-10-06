'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { useAdminStore } from '@/lib/store';
import { growthMilestones } from '@/lib/data';

export default function GrowthJourney() {
  const storeMilestones = useAdminStore((s) => s.milestones);
  const milestones = storeMilestones && storeMilestones.length > 0 ? storeMilestones : growthMilestones;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden scroll-mt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#152D5E]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR JOURNEY • 1999 → 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white">
              1999 → 2026
            </h2>

            <p className="text-base sm:text-xl text-white/80 font-normal font-[family-name:var(--font-heading)] mt-2">
              27 Years. Thousands of Memories. One Valmeeki Family.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 hidden sm:inline">
              SCROLL TIMELINE
            </span>
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 sm:px-8 lg:px-12 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {milestones.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex-shrink-0 w-[290px] sm:w-[360px] md:w-[400px] snap-center group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853]/60 transition-all duration-300 shadow-2xl flex flex-col h-full">
              {/* Year Header & Badge */}
              <div className="p-5 pb-3 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                <span className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[#D4A853] tracking-tight">
                  {item.year}
                </span>
                {item.badge && (
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Photo Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
              </div>

              {/* Title & One-Line Story */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed font-[family-name:var(--font-body)]">
                    “{item.caption}”
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Milestone {idx + 1} of {milestones.length}</span>
                  <span className="text-[#D4A853] font-semibold">Valmeeki Legacy</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Finale Milestone Card: AND THE JOURNEY CONTINUES → */}
        <div className="flex-shrink-0 w-[290px] sm:w-[360px] snap-center">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#152D5E] to-[#0A1628] border border-[#D4A853]/60 p-7 sm:p-8 flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4A853] text-[#0A1628] flex items-center justify-center font-bold mb-6 shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#D4A853] block mb-2">
                TODAY & BEYOND
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
                AND THE JOURNEY CONTINUES →
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Be part of the next chapter of academic brilliance and leadership at Kadiri’s most trusted institution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15">
              <a
                href="#admissions"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
