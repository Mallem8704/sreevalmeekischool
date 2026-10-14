'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Maximize2, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface PamphletBatch {
  year: string;
  badge: string;
  title: string;
  description: string;
  front: {
    src: string;
    label: string;
    subtitle: string;
  };
  back: {
    src: string;
    label: string;
    subtitle: string;
  };
}

const PAMPHLETS: PamphletBatch[] = [
  {
    year: '2025–26',
    badge: 'Latest Board Results • 2026–27 Session in Progress',
    title: '2025–26 SSC Results Pamphlet',
    description: 'Official results brochure featuring Town 1st Rank C. Pujitha (597/600), Y. Jashmitha (594/600), Subject 100/100 toppers, and complete list of 263 successful candidates.',
    front: {
      src: '/images/pamphlets/pamphlet_2025_26_front.jpg',
      label: 'Front Side — Town 1st, 2nd & Subject Toppers',
      subtitle: 'C. Pujitha 597/600, Y. Jashmitha 594/600, 100/100 Subject Achievers',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2025_26_back.jpg',
      label: 'Back Side — Complete Batch Results Table (263 Students)',
      subtitle: 'Complete list of all 263 candidates with marks, grades, and photo proofs',
    },
  },
  {
    year: '2024–25',
    badge: 'Verified Archive',
    title: '2024–25 SSC Results Pamphlet',
    description: 'Official results brochure for 2024–25 academic year displaying town & mandal rankers, distinction holders, and comprehensive results breakdown.',
    front: {
      src: '/images/pamphlets/pamphlet_2024_25_front.jpg',
      label: 'Front Side — Top Rankers & Highlights',
      subtitle: 'Outstanding performers and distinction rank holders',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2024_25_back.jpg',
      label: 'Back Side — Student Roll & Marks Directory',
      subtitle: 'Official marks roll and academic achievements summary',
    },
  },
  {
    year: '2023–24',
    badge: 'Verified Archive',
    title: '2023–24 SSC Results Pamphlet',
    description: 'Original board examination results pamphlet for the 2023–24 batch documenting continuous 100% pass record and state distinctions.',
    front: {
      src: '/images/pamphlets/pamphlet_2023_24_front.jpg',
      label: 'Front Side — State & Town Distinction Achievers',
      subtitle: 'Board toppers, faculty mentorship highlights and achievements',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2023_24_back.jpg',
      label: 'Back Side — Complete Batch Directory',
      subtitle: 'Official student directory and merit records',
    },
  },
];

export default function OfficialPamphletShowcase() {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'front' | 'back'>('front');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const currentBatch = PAMPHLETS[selectedYearIndex];
  const currentSideData = selectedSide === 'front' ? currentBatch.front : currentBatch.back;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setSelectedSide('front');
      } else if (e.key === 'ArrowRight') {
        setSelectedSide('back');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <section id="official-pamphlets" className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#FDFBF7] dark:bg-[#081220] text-[#0A1628] dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-200">
      {/* Decorative Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>OFFICIAL RESULTS PAMPHLETS • ORIGINAL PRINTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-tight tracking-tight uppercase text-[#0A1628] dark:text-white">
            PUBLISHED RESULTS PAMPHLETS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              VERIFIED ARCHIVE AS ISSUED
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-[family-name:var(--font-body)]">
            Explore the authentic, published school pamphlets exactly as released to parents and public. Every topper score, rank certificate, and individual student mark is documented with 100% transparency.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>2027–28 Academic Session Currently in Progress • Admissions Open 2027–28</span>
          </div>
        </div>

        {/* Batch & Side Controls Bar */}
        <div className="bg-white dark:bg-[#0A1628] rounded-2xl p-3 sm:p-4 border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Batch Year Switcher Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 mr-1 hidden sm:inline">
                Batch:
              </span>
              {PAMPHLETS.map((batch, index) => {
                const isSelected = selectedYearIndex === index;
                return (
                  <button
                    key={batch.year}
                    onClick={() => setSelectedYearIndex(index)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#0A1628] shadow-md shadow-[#D4A853]/25 font-black scale-[1.02]'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{batch.year} Batch</span>
                    {index === 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#0A1628] text-[#FBBF24] text-[9px] font-black uppercase">
                        Latest
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Front / Back Side Toggle */}
            <div className="flex items-center gap-2">
              <div className="inline-flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedSide('front')}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedSide === 'front'
                      ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  <span>Front Side (Rankers)</span>
                </button>
                <button
                  onClick={() => setSelectedSide('back')}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedSide === 'back'
                      ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  <span>Back Side (All Students)</span>
                </button>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-bold transition-colors cursor-pointer"
                title="Fullscreen Zoom View"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                <span>Zoom HD</span>
              </button>

              {/* Direct Download Button */}
              <a
                href={currentSideData.src}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A1628] dark:bg-white/10 hover:bg-[#152D5E] dark:hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                title="Download High-Resolution Image"
              >
                <Download className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

        {/* Current Pamphlet Info Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1628] dark:text-white flex items-center gap-2">
              <span>{currentBatch.title}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30">
                {selectedSide === 'front' ? 'Front Side' : 'Back Side'}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {currentSideData.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Ultra-HD 3200px Scanned Original</span>
          </div>
        </div>

        {/* Main Pamphlet Image Display Card */}
        <div className="relative group bg-white dark:bg-[#0A1628] rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-white/10 p-2 sm:p-4 shadow-xl shadow-black/5 overflow-hidden">
          {/* Clickable Image with Zoom Overlay Hint */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11.5] max-h-[820px] rounded-xl sm:rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100 dark:bg-slate-900 flex items-center justify-center group"
          >
            <Image
              src={currentSideData.src}
              alt={`${currentBatch.title} - ${currentSideData.label}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={selectedYearIndex === 0}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
              quality={95}
              unoptimized
            />

            {/* Hover Floating Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="px-4 py-2 rounded-full bg-[#0A1628]/90 text-white border border-[#D4A853]/40 shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 className="w-4 h-4 text-[#FBBF24]" />
                <span>Click for Fullscreen Ultra-HD Zoom</span>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0A1628]/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/15 flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
              <span>{currentBatch.year} SSC Results Pamphlet</span>
            </div>

            {/* Side Switch Arrow Overlays (Mobile / Quick Click) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSide(selectedSide === 'front' ? 'back' : 'front');
              }}
              className="absolute right-3 top-3 px-3 py-1.5 rounded-lg bg-[#0A1628]/85 hover:bg-[#0A1628] text-white text-xs font-bold border border-white/15 flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              title="Flip to other side"
            >
              <span>Flip to {selectedSide === 'front' ? 'Back Side' : 'Front Side'}</span>
              <RotateCcw className="w-3.5 h-3.5 text-[#FBBF24]" />
            </button>
          </div>

          {/* Bottom Card Action Footer */}
          <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Showing: <strong className="text-[#0A1628] dark:text-white">{currentSideData.label}</strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedSide('front')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                  selectedSide === 'front'
                    ? 'bg-amber-100 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border-[#D4A853]/40'
                    : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                1. Front (Rankers)
              </button>
              <button
                onClick={() => setSelectedSide('back')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                  selectedSide === 'back'
                    ? 'bg-amber-100 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border-[#D4A853]/40'
                    : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                2. Back (All Marks)
              </button>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#D4A853] text-[#0A1628] font-bold shadow-xs hover:bg-[#B8860B] transition-colors cursor-pointer flex items-center gap-1"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          FULLSCREEN LIGHTBOX MODAL WITH ZOOM & PAN CAPABILITIES
      ======================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Lightbox Top Control Bar */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-black/60 border-b border-white/10 text-white shrink-0 z-20">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="px-2.5 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-xs font-black uppercase tracking-wider shrink-0">
                  {currentBatch.year} Batch
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {currentBatch.title} • {selectedSide === 'front' ? 'Front Side' : 'Back Side'}
                  </h4>
                  <p className="text-xs text-white/60 truncate hidden sm:block">
                    {currentSideData.subtitle}
                  </p>
                </div>
              </div>

              {/* Controls: Zoom, Side Switch, Download, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Side Toggle inside modal */}
                <div className="inline-flex bg-white/10 p-0.5 rounded-lg border border-white/15 mr-1">
                  <button
                    onClick={() => {
                      setSelectedSide('front');
                      setZoomLevel(1);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      selectedSide === 'front' ? 'bg-[#D4A853] text-[#0A1628]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSide('back');
                      setZoomLevel(1);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      selectedSide === 'back' ? 'bg-[#D4A853] text-[#0A1628]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Back
                  </button>
                </div>

                {/* Zoom In / Out */}
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.5, 3))}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.5, 1))}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-[#FBBF24] flex items-center justify-center transition-colors cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                {/* Download */}
                <a
                  href={currentSideData.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] flex items-center justify-center transition-colors cursor-pointer"
                  title="Download High Resolution"
                >
                  <Download className="w-4 h-4" />
                </a>

                {/* Close (X) */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 hover:bg-red-500 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                  title="Close (Esc)"
                  aria-label="Close Fullscreen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable / Zoomable High-Res Image Canvas */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6 bg-black/90 cursor-grab active:cursor-grabbing">
              <div 
                className="relative transition-transform duration-200 ease-out origin-center flex items-center justify-center min-w-full min-h-full"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentSideData.src}
                  alt={`${currentBatch.title} - Fullscreen View`}
                  className="max-h-[88vh] max-w-[95vw] object-contain rounded-lg shadow-2xl select-none"
                />
              </div>
            </div>

            {/* Bottom Footer inside Lightbox */}
            <div className="p-3 bg-black/70 border-t border-white/10 text-center text-xs text-white/70 flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedSide(selectedSide === 'front' ? 'back' : 'front')}
                  className="text-[#FBBF24] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Switch to {selectedSide === 'front' ? 'Back Side' : 'Front Side'}</span>
                </button>
              </div>
              <span>
                Tip: Use Zoom buttons or double-tap to inspect individual marks and names in Ultra-HD.
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="text-white hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
