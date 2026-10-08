'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Shield,
  CheckCircle2,
  Maximize2,
  Navigation,
} from 'lucide-react';
import { CAMPUS_HOTSPOTS, Hotspot } from '@/lib/campusTourData';

export default function CampusArchitectureHotspots() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(CAMPUS_HOTSPOTS[0]);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  const currentIndex = CAMPUS_HOTSPOTS.findIndex((h) => h.id === selectedHotspot.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CAMPUS_HOTSPOTS.length;
    setSelectedHotspot(CAMPUS_HOTSPOTS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + CAMPUS_HOTSPOTS.length) % CAMPUS_HOTSPOTS.length;
    setSelectedHotspot(CAMPUS_HOTSPOTS[prevIdx]);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFAF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[180px] pointer-events-none" />

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
            <Navigation className="w-3.5 h-3.5 text-[#D4A853]" />
            INTERACTIVE CAMPUS BLUEPRINT & HOTSPOTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            EXPLORE CAMPUS ARCHITECTURE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto"
          >
            Click or tap any pulsing gold coordinate on our aerial map to reveal each dedicated academic and athletic facility.
          </motion.p>
        </div>

        {/* Mobile-Friendly Swipeable Pill Selector */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
          {CAMPUS_HOTSPOTS.map((hotspot, idx) => {
            const isSelected = selectedHotspot.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setSelectedHotspot(hotspot)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0A1628] text-white dark:bg-[#D4A853] dark:text-[#0A1628] shadow-md scale-102 ring-2 ring-[#D4A853]/40'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-[#D4A853]'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-[#D4A853] text-[#0A1628] text-[10px] font-mono flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{hotspot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Aerial Blueprint Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Map Aerial Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-300 dark:border-white/15 bg-slate-900 shadow-2xl aspect-[16/10] sm:aspect-[16/10] w-full group select-none">
              {/* Aerial Image Background */}
              <Image
                src="/images/campus/campus_drone_aerial.jpg"
                alt="Sree Valmeeki Campus Aerial Map"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-90 transition-transform duration-700 ease-out"
              />

              {/* Blueprint Grid Overlay & Tint */}
              <div className="absolute inset-0 bg-[#0A1628]/35 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

              {/* Top Bar HUD Info */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  MAP NAVIGATION ACTIVE
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-slate-300 text-[10px] font-mono">
                  SCALE: MULTI-ACRE BOUNDARY
                </span>
              </div>

              {/* Pulsing Gold Pin Hotspots */}
              {CAMPUS_HOTSPOTS.map((hotspot, idx) => {
                const isSelected = selectedHotspot.id === hotspot.id;
                const isHovered = hoveredHotspot === hotspot.id;

                return (
                  <div
                    key={hotspot.id}
                    style={{
                      left: `${hotspot.coords.x}%`,
                      top: `${hotspot.coords.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group/pin cursor-pointer"
                    onClick={() => setSelectedHotspot(hotspot)}
                    onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                  >
                    {/* Pulsing outer wave */}
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-10 h-10 rounded-full bg-[#D4A853] ${
                          isSelected ? 'animate-ping opacity-75' : 'opacity-30 group-hover/pin:opacity-75'
                        }`}
                      />

                      {/* Main Pin Disc */}
                      <button
                        type="button"
                        className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold font-mono text-xs shadow-xl transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#D4A853] text-[#0A1628] ring-4 ring-white/90 scale-115 shadow-[#D4A853]/60'
                            : 'bg-[#0A1628] text-white border-2 border-[#D4A853] hover:scale-110 hover:bg-[#D4A853] hover:text-[#0A1628]'
                        }`}
                      >
                        {idx + 1}
                      </button>

                      {/* Hover Tooltip Card */}
                      <AnimatePresence>
                        {(isHovered || isSelected) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-11 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-40 hidden sm:block"
                          >
                            <div className="px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-[#D4A853]/50 text-white shadow-2xl">
                              <p className="text-[11px] font-black uppercase text-[#FBBF24]">
                                {hotspot.title}
                              </p>
                              <p className="text-[9px] text-slate-300 uppercase tracking-widest font-mono">
                                {hotspot.category}
                              </p>
                            </div>
                            {/* Little downward arrowhead */}
                            <div className="w-2 h-2 bg-black/90 border-r border-b border-[#D4A853]/50 rotate-45 mx-auto -mt-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Instructions strip */}
              <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#FBBF24]" />
                  SELECT A PIN TO INSPECT ZONE
                </span>
                <span>{selectedHotspot.coords.x}% X / {selectedHotspot.coords.y}% Y</span>
              </div>
            </div>
          </div>

          {/* Detailed Hotspot Inspector Card (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHotspot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-none relative overflow-hidden"
              >
                {/* Gold Glow Top Right */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4A853]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Hotspot Photo Preview */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 shadow-md border border-slate-100 dark:border-white/5">
                  <Image
                    src={selectedHotspot.image}
                    alt={selectedHotspot.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[10px] font-black uppercase tracking-wider">
                    {selectedHotspot.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-[10px] font-mono font-bold">
                    Zone #{currentIndex + 1} of {CAMPUS_HOTSPOTS.length}
                  </span>
                </div>

                {/* Hotspot Details */}
                <div>
                  <div className="flex items-center gap-2 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-widest mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VERIFIED CAMPUS WING</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-tight">
                    {selectedHotspot.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {selectedHotspot.description}
                  </p>
                </div>

                {/* Navigation Next/Prev Controls */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                      title="Previous Zone"
                      aria-label="Previous Zone"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                      title="Next Zone"
                      aria-label="Next Zone"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                      {currentIndex + 1} / {CAMPUS_HOTSPOTS.length}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Operational Daily
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
