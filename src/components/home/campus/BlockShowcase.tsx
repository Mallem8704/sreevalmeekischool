'use client';

import { useState } from 'react';
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
  Compass,
} from 'lucide-react';
import { CAMPUS_BLOCKS, CampusBlock } from '@/lib/campusTourData';

export default function BlockShowcase() {
  const [activeModalBlock, setActiveModalBlock] = useState<CampusBlock | null>(null);

  return (
    <section
      id="academic-blocks"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
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
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-4"
          >
            EXPLORE OUR CAMPUS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Four specialized wings tailored to every stage of a student&apos;s growth—from foundational primary learning to rigorous board exam leadership and athletic prowess.
          </motion.p>
        </div>

        {/* 2x2 Luxury Grid of Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CAMPUS_BLOCKS.map((block, index) => {
            const blockNumber = `0${index + 1}`;
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group relative rounded-3xl bg-[#FAFAF7] dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Upper Image Section with Zoom */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-slate-900">
                  <Image
                    src={block.image}
                    alt={`${block.name} - ${block.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* High contrast gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-black tracking-widest uppercase">
                      BLOCK {blockNumber}
                    </span>
                    <button
                      onClick={() => setActiveModalBlock(block)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                      aria-label={`View enlarged photo of ${block.name}`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Title & Tagline */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-10 text-white">
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#F5E6C0] mb-1">
                      {block.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white drop-shadow-sm">
                      {block.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Tagline Callout */}
                    <p className="text-sm sm:text-base font-semibold text-[#0A1628] dark:text-white italic border-l-2 border-[#D4A853] pl-3">
                      &ldquo;{block.tagline}&rdquo;
                    </p>

                    {/* Detailed Paragraph */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {block.description}
                    </p>
                  </div>

                  {/* Feature Checkmarks List */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-2.5">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#B8860B] dark:text-[#FBBF24] block">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-2">
                      {block.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalBlock(block)}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] hover:text-[#0A1628] dark:hover:text-white transition-colors group/btn cursor-pointer"
                    >
                      <span>Explore Gallery & Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
