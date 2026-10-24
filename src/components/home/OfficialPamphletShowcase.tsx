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
  RotateCcw,
  Sparkles,
  Layers,
  Eye
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
    description: 'Official results brochure featuring Town 1st Rank D. Janani (595/600), Town 2nd Rank (594/600), Subject 100/100 toppers, and 27 years of academic distinction.',
    front: {
      src: '/images/pamphlets/pamphlet_2025_26_front.jpg',
      label: 'Front Side — Town 1st Rank D. Janani (595/600) & Star Achievers',
      subtitle: 'D. Janani 595/600, Town 2nd Rank 594/600, 100/100 Subject Achievers',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2025_26_back.jpg',
      label: 'Back Side — Complete Batch Results Table',
      subtitle: 'Complete list of candidates with marks, grades, and photographic proofs',
    },
  },
  {
    year: '2024–25',
    badge: 'Official Published Pamphlet',
    title: '2024–25 SSC Results Pamphlet',
    description: 'Official results brochure for 2024–25 featuring Town 1st Rank C. Pujitha (597/600), R. Jahnavi (593/600), S. Vaishnavi (592/600), 10 students above 590, 32 above 580, and 263 passed.',
    front: {
      src: '/images/pamphlets/pamphlet_2024_25_front.jpg',
      label: 'Front Side — Town 1st Rank C. Pujitha (597/600) & Top Rankers',
      subtitle: 'C. Pujitha 597/600, R. Jahnavi 593/600, S. Vaishnavi 592/600 • 10 Above 590, 32 Above 580',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2024_25_back.jpg',
      label: 'Back Side — Complete 263 Students Marks Directory',
      subtitle: 'Official 263 candidates marks roll (590+ 10 students, 580+ 32 students, 550+ 130 students)',
    },
  },
  {
    year: '2023–24',
    badge: 'Verified Archive',
    title: '2023–24 SSC Results Pamphlet',
    description: 'Original board examination results pamphlet for the 2023–24 batch documenting continuous 100% pass record, state distinctions, and town toppers.',
    front: {
      src: '/images/pamphlets/pamphlet_2023_24_front.jpg',
      label: 'Front Side — State & Town Distinction Achievers',
      subtitle: 'Board toppers, faculty mentorship highlights and achievements',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2023_24_back.jpg',
      label: 'Back Side — Complete Batch Directory',
      subtitle: 'Official student directory and merit records (30 students 580+, 132 students 550+)',
    },
  },
  {
    year: '2022–23',
    badge: 'Mass Vijayabheri • Verified Archive',
    title: '2022–23 SSC Results Pamphlet',
    description: 'Official SSC 2022–23 results pamphlet celebrating Valmeeki\'s mass triumph: out of 350 students, 96% pass record, 57 scored 550+, 147 scored 500+, led by Ramalingi Chowdary (585/600) and B. Hemalatha (584/600).',
    front: {
      src: '/images/pamphlets/pamphlet_2022_23_front.jpg',
      label: 'Front Side — Mass Vijayabheri & 585/600 Star Achievers',
      subtitle: 'Ramalingi Chowdary 585/600, B. Hemalatha 584/600, Yamini Devi 580/600 • 57 Above 550, 147 Above 500',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2022_23_back.jpg',
      label: 'Back Side — Complete Batch Merit Directory',
      subtitle: 'Official student directory with photographs, scores and distinction rolls for the 2022–23 batch',
    },
  },
  {
    year: '2021–22',
    badge: 'Historic Hat-Trick Record',
    title: '2021–22 SSC Results Pamphlet',
    description: 'Official SSC 2021–22 results pamphlet celebrating Valmeeki\'s historic hat-trick record: 95% pass rate among 301 students, 49 scored 550+, 128 scored 500+, led by U. Bhavana (589/600) and Himaja (586/600).',
    front: {
      src: '/images/pamphlets/pamphlet_2021_22_front.jpg',
      label: 'Front Side — Hat-Trick Record & 589/600 Top Achievers',
      subtitle: 'U. Bhavana 589/600, Himaja 586/600, Gothika 585/600, Shilpa 585/600 • 49 Above 550, 128 Above 500',
    },
    back: {
      src: '/images/pamphlets/pamphlet_2021_22_back.jpg',
      label: 'Back Side — Complete Batch Distinction Roll',
      subtitle: 'Official student marks and photo directory commemorating the distinction batch',
    },
  },
];

export default function OfficialPamphletShowcase() {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'front' | 'back'>('front');
  const [viewMode, setViewMode] = useState<'both' | 'single'>('both');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const currentBatch = PAMPHLETS[selectedYearIndex];
  const currentSideData = selectedSide === 'front' ? currentBatch.front : currentBatch.back;

  const openLightbox = (side: 'front' | 'back') => {
    setSelectedSide(side);
    setZoomLevel(1);
    setIsLightboxOpen(true);
  };

  const nextBatch = () => {
    setSelectedYearIndex((prev) => (prev + 1) % PAMPHLETS.length);
    setZoomLevel(1);
  };

  const prevBatch = () => {
    setSelectedYearIndex((prev) => (prev - 1 + PAMPHLETS.length) % PAMPHLETS.length);
    setZoomLevel(1);
  };

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
            <span>OFFICIAL RESULTS PAMPHLETS • 5 BATCH ARCHIVE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-tight tracking-tight uppercase text-[#0A1628] dark:text-white">
            PUBLISHED RESULTS PAMPHLETS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              VERIFIED ARCHIVE AS ISSUED
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-[family-name:var(--font-body)]">
            Explore authentic, published school pamphlets exactly as printed and released to parents. Every topper score, rank certificate, and individual student mark is documented with 100% transparency.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>2026–27 Academic Session Currently in Progress • Admissions Open</span>
          </div>
        </div>

        {/* Batch & Side Controls Bar */}
        <div className="bg-white dark:bg-[#0A1628] rounded-2xl p-3 sm:p-4 border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 mb-6 sm:mb-8">
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
                    onClick={() => {
                      setSelectedYearIndex(index);
                      setZoomLevel(1);
                    }}
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
                    {(batch.year === '2022–23' || batch.year === '2021–22') && (
                      <span className="px-1.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold uppercase">
                        Added
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View Mode & Side Toggle */}
            <div className="flex items-center gap-2">
              <div className="inline-flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => setViewMode('both')}
                  className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    viewMode === 'both'
                      ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                  title="Show both Front and Back pamphlets side-by-side"
                >
                  <Layers className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  <span>Both Sides</span>
                </button>
                <button
                  onClick={() => setViewMode('single')}
                  className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    viewMode === 'single'
                      ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                  title="Focus on one side at a time"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  <span>Single Focus</span>
                </button>
              </div>

              {/* Prev / Next Chevrons */}
              <div className="hidden sm:flex items-center gap-1">
                <button
                  onClick={prevBatch}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                  title="Previous Academic Batch"
                  aria-label="Previous Batch"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextBatch}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                  title="Next Academic Batch"
                  aria-label="Next Batch"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Batch Meta Header */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-[#D4A853]/15 dark:via-[#D4A853]/5 dark:to-transparent rounded-2xl p-4 sm:p-5 border border-[#D4A853]/30 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#D4A853] text-[#0A1628] font-black text-xs uppercase tracking-wider">
                  {currentBatch.year} Batch
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 text-xs font-bold">
                  {currentBatch.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ultra-HD Scanned Original Print</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                {currentBatch.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-4xl leading-relaxed">
                {currentBatch.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => openLightbox('front')}
                className="px-3.5 py-2 rounded-xl bg-[#0A1628] dark:bg-white/10 hover:bg-[#152D5E] dark:hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Fullscreen Gallery</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VIEW MODE 1: BOTH SIDES (SIDE-BY-SIDE ON DESKTOP, STACKED ON MOBILE)
        ========================================================================= */}
        {viewMode === 'both' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* 1. FRONT SIDE PAMPHLET CARD */}
            <div className="bg-white dark:bg-[#0A1628] rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-white/10 p-3 sm:p-5 shadow-xl shadow-black/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 text-xs font-black uppercase tracking-wider">
                      <FileText className="w-3 h-3" />
                      <span>1. FRONT SIDE • TOPPERS & STAR ACHIEVERS</span>
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {currentBatch.front.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => openLightbox('front')}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                    title="Fullscreen Zoom"
                  >
                    <Maximize2 className="w-4 h-4 text-[#B8860B] dark:text-[#D4A853]" />
                  </button>
                </div>

                {/* Pamphlet Image with Subtle Hover Zoom */}
                <div 
                  onClick={() => openLightbox('front')}
                  className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md group flex items-center justify-center"
                >
                  <Image
                    src={currentBatch.front.src}
                    alt={`${currentBatch.title} - Front Side`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={selectedYearIndex === 0}
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    quality={88}
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-[#0A1628]/95 text-white border border-[#D4A853]/50 shadow-2xl flex items-center gap-2 text-xs font-bold backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#FBBF24]" />
                      <span>Click for Fullscreen Ultra-HD Zoom</span>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#0A1628]/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                    <span>Front Side</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 dark:text-slate-400 truncate max-w-[220px] sm:max-w-none">
                  {currentBatch.front.label}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={currentBatch.front.src}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                    title="Download Front Pamphlet"
                  >
                    <Download className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  </a>
                  <button
                    onClick={() => openLightbox('front')}
                    className="px-3 py-1.5 rounded-lg bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] font-black transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Zoom HD</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. BACK SIDE PAMPHLET CARD */}
            <div className="bg-white dark:bg-[#0A1628] rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-white/10 p-3 sm:p-5 shadow-xl shadow-black/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 text-xs font-black uppercase tracking-wider">
                      <FileText className="w-3 h-3" />
                      <span>2. BACK SIDE • COMPLETE MERIT & MARKS ROLL</span>
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {currentBatch.back.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => openLightbox('back')}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                    title="Fullscreen Zoom"
                  >
                    <Maximize2 className="w-4 h-4 text-[#B8860B] dark:text-[#D4A853]" />
                  </button>
                </div>

                {/* Pamphlet Image with Subtle Hover Zoom */}
                <div 
                  onClick={() => openLightbox('back')}
                  className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md group flex items-center justify-center"
                >
                  <Image
                    src={currentBatch.back.src}
                    alt={`${currentBatch.title} - Back Side`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={selectedYearIndex === 0}
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    quality={88}
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-[#0A1628]/95 text-white border border-[#D4A853]/50 shadow-2xl flex items-center gap-2 text-xs font-bold backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#FBBF24]" />
                      <span>Click for Fullscreen Ultra-HD Zoom</span>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#0A1628]/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                    <span>Back Side</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 dark:text-slate-400 truncate max-w-[220px] sm:max-w-none">
                  {currentBatch.back.label}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={currentBatch.back.src}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                    title="Download Back Pamphlet"
                  >
                    <Download className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  </a>
                  <button
                    onClick={() => openLightbox('back')}
                    className="px-3 py-1.5 rounded-lg bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] font-black transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Zoom HD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
              VIEW MODE 2: SINGLE FOCUS VIEW (WITH SWITCH TABS)
          ========================================================================= */
          <div className="relative group bg-white dark:bg-[#0A1628] rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-white/10 p-3 sm:p-5 shadow-xl shadow-black/5 overflow-hidden">
            {/* Top Toggle Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1628] dark:text-white flex items-center gap-2">
                  <span>{currentBatch.title}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30">
                    {selectedSide === 'front' ? 'Front Side (Toppers)' : 'Back Side (Complete Directory)'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentSideData.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
                  <button
                    onClick={() => setSelectedSide('front')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      selectedSide === 'front'
                        ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                    }`}
                  >
                    <span>1. Front Side</span>
                  </button>
                  <button
                    onClick={() => setSelectedSide('back')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      selectedSide === 'back'
                        ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                    }`}
                  >
                    <span>2. Back Side</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Clickable Image Container */}
            <div 
              onClick={() => openLightbox(selectedSide)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11.5] max-h-[820px] rounded-xl sm:rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100 dark:bg-slate-900 flex items-center justify-center group"
            >
              <Image
                src={currentSideData.src}
                alt={`${currentBatch.title} - ${currentSideData.label}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority={selectedYearIndex === 0}
                className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                quality={88}
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

              {/* Side Switch Overlay */}
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

            {/* Bottom Card Footer */}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 dark:text-slate-400">
                Showing: <strong className="text-[#0A1628] dark:text-white">{currentSideData.label}</strong>
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={currentSideData.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => openLightbox(selectedSide)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#D4A853] text-[#0A1628] font-black shadow-xs hover:bg-[#B8860B] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            BROWSE ALL 5 BATCHES GALLERY GRID (COMPREHENSIVE ACCESS)
        ========================================================================= */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] uppercase text-[#0A1628] dark:text-white">
                5 Academic Batches In The Archive
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Click any academic batch to open and inspect its original published front and back results pamphlets in the interactive full-screen viewer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PAMPHLETS.map((batch, index) => {
              const isSelected = selectedYearIndex === index;
              return (
                <div
                  key={batch.year}
                  onClick={() => {
                    setSelectedYearIndex(index);
                    openLightbox('front');
                  }}
                  className={`rounded-2xl p-3 border transition-all cursor-pointer flex flex-col justify-between group hover:scale-[1.02] ${
                    isSelected
                      ? 'bg-amber-500/10 dark:bg-[#D4A853]/15 border-[#D4A853] shadow-md ring-2 ring-[#D4A853]/40'
                      : 'bg-white dark:bg-[#0A1628] border-slate-200 dark:border-white/10 hover:border-[#D4A853]/50 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Mini Image Preview */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 mb-2.5">
                      <Image
                        src={batch.front.src}
                        alt={`${batch.year} Pamphlet Thumbnail`}
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={80}
                      />
                      <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-[#0A1628]/90 text-white text-[9px] font-black uppercase">
                        {batch.year}
                      </div>
                      {index === 0 && (
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#D4A853] text-[#0A1628] text-[8px] font-black uppercase">
                          Latest
                        </div>
                      )}
                      {/* Hover Overlay with Open icon */}
                      <div className="absolute inset-0 bg-[#0A1628]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
                        <Maximize2 className="w-4 h-4 text-[#D4A853]" />
                        <span>Click to Open</span>
                      </div>
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-[#0A1628] dark:text-white line-clamp-1 group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors">
                      {batch.year} Batch
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-snug">
                      {batch.description}
                    </p>

                    {/* Quick Front / Back Side Buttons */}
                    <div className="flex items-center gap-1.5 mt-2.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedYearIndex(index);
                          openLightbox('front');
                        }}
                        className="flex-1 py-1 rounded-lg bg-slate-100 hover:bg-[#D4A853] dark:bg-white/10 dark:hover:bg-[#D4A853] text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-[#0A1628] text-[10px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                        title="Open Front Side in Lightbox"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Front Side</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedYearIndex(index);
                          openLightbox('back');
                        }}
                        className="flex-1 py-1 rounded-lg bg-slate-100 hover:bg-[#D4A853] dark:bg-white/10 dark:hover:bg-[#D4A853] text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-[#0A1628] text-[10px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                        title="Open Back Side in Lightbox"
                      >
                        <FileText className="w-3 h-3" />
                        <span>Back Side</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#B8860B] dark:text-[#FBBF24] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>2 Sides Scanned</span>
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] flex items-center gap-1">
                      <span>Open Fullscreen</span>
                      <Maximize2 className="w-3 h-3 text-[#D4A853]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =======================================================================
          FULLSCREEN LIGHTBOX MODAL WITH ZOOM, FLIP & PAN CAPABILITIES
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
            <div className="flex items-center justify-between p-3 sm:p-4 bg-black/70 border-b border-white/10 text-white shrink-0 z-20">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="px-2.5 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-xs font-black uppercase tracking-wider shrink-0">
                  {currentBatch.year} Batch
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-base font-bold text-white truncate">
                    {currentBatch.title} • {selectedSide === 'front' ? 'Front Side' : 'Back Side'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-white/60 truncate hidden sm:block">
                    {currentSideData.subtitle}
                  </p>
                </div>
              </div>

              {/* Controls: Zoom, Side Switch, Batch Switch, Download, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Front / Back Toggle inside modal */}
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

                {/* Batch Prev/Next in Lightbox */}
                <button
                  onClick={prevBatch}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Previous Batch"
                  aria-label="Previous Batch"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextBatch}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Next Batch"
                  aria-label="Next Batch"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Zoom Controls */}
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.5, 3))}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.5, 1))}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-[#FBBF24] flex items-center justify-center transition-colors cursor-pointer"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                {/* Direct Download */}
                <a
                  href={currentSideData.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] flex items-center justify-center transition-colors cursor-pointer"
                  title="Download High Resolution"
                  aria-label="Download Pamphlet"
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
            <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6 bg-black/95 cursor-grab active:cursor-grabbing">
              <div 
                className="relative transition-transform duration-200 ease-out origin-center flex items-center justify-center min-w-full min-h-full"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentSideData.src}
                  alt={`${currentBatch.title} - Fullscreen View`}
                  className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl select-none"
                />
              </div>
            </div>

            {/* Bottom Footer inside Lightbox */}
            <div className="p-3 bg-black/80 border-t border-white/10 text-center text-xs text-white/70 flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedSide(selectedSide === 'front' ? 'back' : 'front');
                    setZoomLevel(1);
                  }}
                  className="text-[#FBBF24] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Switch to {selectedSide === 'front' ? 'Back Side' : 'Front Side'}</span>
                </button>
              </div>
              <span className="hidden md:inline">
                Ultra-HD original scan • Preserved 100% aspect ratio • Arrow keys to flip
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
