'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  FileText, 
  ArrowRight, 
  Maximize2, 
  Download, 
  X, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  CheckCircle2,
  Sparkles,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PamphletData {
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
  stats?: {
    rank1: string;
    above590?: string;
    above580?: string;
    above550?: string;
    totalPassed?: string;
  };
}

interface TopperProfile {
  year: string;
  yearShort: string;
  name: string;
  marks: string;
  total: string;
  percentage: string;
  rankBadge: string;
  board: string;
  subjects: string;
  image: string;
  quote: string;
  pamphlet?: PamphletData;
}

const toppers: TopperProfile[] = [
  {
    year: '2025–26 BATCH',
    yearShort: '2025–26',
    name: 'D. Janani',
    marks: '595',
    total: '/ 600',
    percentage: '99.2%',
    rankBadge: 'Town 1st Rank (2025–26)',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Maths • 100 in Physical Science • 99 in Social • 99 in English',
    image: '/extracted/star_achievers/janani_pure_person.jpg',
    quote: '“Valmeeki taught us to understand every concept deeply rather than memorizing. That made scoring 595/600 a natural result.”',
    pamphlet: {
      title: '2025–26 SSC Results Official Pamphlet',
      description: 'Official results brochure featuring Town 1st Rank D. Janani (595/600), Town 2nd Rank (594/600), Subject 100/100 toppers, and 27 years of academic distinction.',
      front: {
        src: '/images/pamphlets/pamphlet_2025_26_front.jpg',
        label: 'Front Side — Town 1st Rank D. Janani (595/600) & Star Achievers',
        subtitle: 'D. Janani 595/600, Town 2nd Rank 594/600, 100/100 Subject Achievers',
      },
      back: {
        src: '/images/pamphlets/pamphlet_2025_26_back.jpg',
        label: 'Back Side — Complete Batch Results Table',
        subtitle: 'Complete list of all candidates with marks, grades, and photo proofs',
      },
      stats: {
        rank1: 'D. Janani (595/600)',
        above590: '8+ Students',
        above580: '28+ Students',
        above550: '125+ Students',
        totalPassed: '100% Pass Record',
      },
    },
  },
  {
    year: '2024–25 BATCH',
    yearShort: '2024–25',
    name: 'C. Pujitha',
    marks: '597',
    total: '/ 600',
    percentage: '99.5%',
    rankBadge: 'Town 1st Rank (2024–25)',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Mathematics • 100 in Science • 99 in Social • 99 in English',
    image: '/extracted/star_achievers/c_pujitha_portrait.jpg',
    quote: '“Scoring 597/600 in SSC was possible because Valmeeki teachers gave personal guidance and regular test analysis every single week.”',
    pamphlet: {
      title: '2024–25 SSC Results Official Pamphlet',
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
      stats: {
        rank1: 'C. Pujitha (597/600)',
        above590: '10 Students',
        above580: '32 Students',
        above550: '130 Students',
        totalPassed: '263 Students (100% Pass)',
      },
    },
  },
  {
    year: '2023–24 BATCH',
    yearShort: '2023–24',
    name: 'G. Tejaswini',
    marks: '588',
    total: '/ 600',
    percentage: '98.0%',
    rankBadge: 'District 2nd Rank (2023–24)',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Maths • 99 in Social Studies • 97 in Science',
    image: '/images/school/school-event-8.jpg',
    quote: '“Daily spoken English assemblies and early IIT foundation coaching gave me self-belief to aim for the state top rank.”',
    pamphlet: {
      title: '2023–24 SSC Results Official Pamphlet',
      description: 'Original board examination results pamphlet for the 2023–24 batch documenting continuous 100% pass record, 30 students 580+, 132 students 550+.',
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
      stats: {
        rank1: 'G. Tejaswini (588/600)',
        above580: '30 Students',
        above550: '132 Students',
        totalPassed: '100% Pass Record',
      },
    },
  },
  {
    year: '2022–23 BATCH',
    yearShort: '2022–23',
    name: 'K. Bhanu Prakash',
    marks: '585',
    total: '/ 600',
    percentage: '97.5%',
    rankBadge: 'Town 1st Rank',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '99 in Mathematics • 98 in General Science • 97 in Telugu',
    image: '/images/school/school-event-1.jpg',
    quote: '“The faculty never treated education as memorization; they trained us to solve problems logically with calm discipline.”',
  },
  {
    year: '2021–22 BATCH',
    yearShort: '2021–22',
    name: 'M. Sneha Latha',
    marks: '582',
    total: '/ 600',
    percentage: '97.0%',
    rankBadge: 'Top Distinction',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '99 in Mathematics • 98 in English • 96 in Science',
    image: '/images/school/school-event-3.jpg',
    quote: '“Valmeeki gave us an environment where girls were encouraged to lead, speak on stage, and excel in every competitive exam.”',
  },
];

export default function TopperShowcase() {
  // Default to 2024–25 batch (index 1) or 2025–26 batch (index 0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeView, setActiveView] = useState<'pamphlet' | 'topper'>('pamphlet');
  const [pamphletSide, setPamphletSide] = useState<'front' | 'back'>('front');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const current = toppers[currentIndex];
  const hasPamphlet = Boolean(current.pamphlet);
  const activePamphletData = current.pamphlet
    ? pamphletSide === 'front'
      ? current.pamphlet.front
      : current.pamphlet.back
    : null;

  const nextTopper = () => {
    setCurrentIndex((prev) => (prev + 1) % toppers.length);
  };

  const prevTopper = () => {
    setCurrentIndex((prev) => (prev - 1 + toppers.length) % toppers.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setPamphletSide('front');
      } else if (e.key === 'ArrowRight') {
        setPamphletSide('back');
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
    <section 
      id="signature-results" 
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-white dark:bg-[#050D1A] text-[#0A1628] dark:text-white overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-200"
    >
      {/* Background Accent Grid & Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black tracking-widest uppercase shadow-sm">
                <Award className="w-3.5 h-3.5" />
                <span>CONSISTENCY • 28 YEARS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-[11px] font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>2026–27 Academic Session in Progress • Latest Board Results: 2025–26</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight uppercase text-[#0A1628] dark:text-white">
              5 YEARS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                A CONSISTENT STANDARD.
              </span>
            </h2>
          </div>

          {/* Controls: Mode Switcher + Year Tabs + Chevrons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* View Mode Toggle: Official Pamphlet vs Topper Spotlight */}
            <div className="inline-flex items-center bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 shadow-xs">
              <button
                onClick={() => setActiveView('pamphlet')}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeView === 'pamphlet'
                    ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#0A1628] shadow-sm font-black'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#0A1628] dark:text-[#0A1628]" />
                <span>Official Pamphlet</span>
                {hasPamphlet && (
                  <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                )}
              </button>

              <button
                onClick={() => setActiveView('topper')}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeView === 'topper'
                    ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-sm font-black'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                <span>Topper Profile</span>
              </button>
            </div>

            {/* Year Switcher Pills */}
            <div className="flex items-center bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 overflow-x-auto scrollbar-none">
              {toppers.map((t, idx) => (
                <button
                  key={t.year}
                  onClick={() => {
                    setCurrentIndex(idx);
                  }}
                  className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    currentIndex === idx
                      ? 'bg-[#D4A853] text-[#0A1628] shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                  }`}
                  title={`${t.yearShort} Results & Official Pamphlet`}
                >
                  <span>{t.yearShort}</span>
                  {t.pamphlet && (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-black">●</span>
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Chevrons */}
            <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
              <button
                onClick={prevTopper}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                aria-label="Previous Year"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTopper}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                aria-label="Next Year"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRIMARY VIEW: THE OFFICIAL RESULTS PAMPHLET (PLACED DIRECTLY IN SECTION)
        ========================================================================= */}
        {activeView === 'pamphlet' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`pamphlet-${current.year}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-br from-white via-[#FDFBF7] to-white dark:from-[#0A1628] dark:via-[#0F2044] dark:to-[#0A1628] border-2 border-[#D4A853]/40 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl overflow-hidden text-[#0A1628] dark:text-white"
            >
              {hasPamphlet && activePamphletData ? (
                <div>
                  {/* Pamphlet Top Action Bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#D4A853] text-[#0A1628] font-black text-xs uppercase tracking-wider">
                          {current.yearShort} Batch
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30">
                          {pamphletSide === 'front' ? 'Front Side (Toppers & Rankers)' : 'Back Side (Complete Marks List)'}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Original Published Scan • Ultra-HD 3600px</span>
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                        {current.pamphlet?.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {activePamphletData.subtitle}
                      </p>
                    </div>

                    {/* Front / Back Side Switcher + Fullscreen + Download */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
                        <button
                          onClick={() => setPamphletSide('front')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            pamphletSide === 'front'
                              ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                              : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                          <span>1. Front (Rankers)</span>
                        </button>
                        <button
                          onClick={() => setPamphletSide('back')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            pamphletSide === 'back'
                              ? 'bg-white dark:bg-[#152D5E] text-[#0A1628] dark:text-white shadow-xs font-black'
                              : 'text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                          <span>2. Back (All Marks)</span>
                        </button>
                      </div>

                      <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] font-black text-xs transition-colors shadow-sm cursor-pointer"
                        title="Open Fullscreen Ultra-HD Viewer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Fullscreen HD</span>
                      </button>

                      <a
                        href={activePamphletData.src}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-bold transition-colors cursor-pointer"
                        title="Download Original Scan"
                      >
                        <Download className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    </div>
                  </div>

                  {/* Main Scanned Pamphlet Image Container (Placed Directly in Section) */}
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] max-h-[800px] rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100 dark:bg-slate-900 border-2 border-[#D4A853]/40 shadow-xl group"
                  >
                    <Image
                      src={activePamphletData.src}
                      alt={`${current.pamphlet?.title} - ${activePamphletData.label}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      priority
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      quality={96}
                      unoptimized
                    />

                    {/* Hover Floating Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 rounded-full bg-[#0A1628]/90 text-white border border-[#D4A853]/40 shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-4 h-4 text-[#FBBF24]" />
                        <span>Click for Fullscreen Ultra-HD Zoom (Inspect Individual Marks)</span>
                      </div>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0A1628]/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/15 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                      <span>{current.yearShort} SSC Results Official Scan</span>
                    </div>

                    {/* Quick Flip Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPamphletSide(pamphletSide === 'front' ? 'back' : 'front');
                      }}
                      className="absolute right-3 top-3 px-3 py-1.5 rounded-lg bg-[#0A1628]/85 hover:bg-[#0A1628] text-white text-xs font-bold border border-white/15 flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                      title="Flip to other side"
                    >
                      <span>Flip to {pamphletSide === 'front' ? 'Back Side' : 'Front Side'}</span>
                      <RotateCcw className="w-3.5 h-3.5 text-[#FBBF24]" />
                    </button>
                  </div>

                  {/* Verified Results Highlights Bar for this Pamphlet */}
                  {current.pamphlet?.stats && (
                    <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                        <div>
                          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Town 1st Topper</span>
                          <strong className="text-[#0A1628] dark:text-white font-black">{current.pamphlet.stats.rank1}</strong>
                        </div>
                        {current.pamphlet.stats.above590 && (
                          <div>
                            <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">590+ Marks</span>
                            <strong className="text-[#B8860B] dark:text-[#FBBF24] font-black">{current.pamphlet.stats.above590}</strong>
                          </div>
                        )}
                        {current.pamphlet.stats.above580 && (
                          <div>
                            <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">580+ Marks</span>
                            <strong className="text-[#B8860B] dark:text-[#FBBF24] font-black">{current.pamphlet.stats.above580}</strong>
                          </div>
                        )}
                        {current.pamphlet.stats.above550 && (
                          <div>
                            <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">550+ Marks</span>
                            <strong className="text-emerald-600 dark:text-emerald-400 font-black">{current.pamphlet.stats.above550}</strong>
                          </div>
                        )}
                        {current.pamphlet.stats.totalPassed && (
                          <div>
                            <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Total Pass</span>
                            <strong className="text-emerald-600 dark:text-emerald-400 font-black">{current.pamphlet.stats.totalPassed}</strong>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setActiveView('topper')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#0A1628] dark:text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                        <span>View {current.name} Profile</span>
                      </button>
                    </div>
                  )}

                  {/* Bottom Footer Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-slate-600 dark:text-slate-400">
                      Currently viewing: <strong className="text-[#0A1628] dark:text-white">{activePamphletData.label}</strong>
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="text-[#B8860B] dark:text-[#FBBF24] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Names & Marks in Fullscreen HD</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Archival Record Card for Earlier Years (2022-23, 2021-22) */
                <div className="py-12 sm:py-16 text-center max-w-2xl mx-auto space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/30 flex items-center justify-center mx-auto text-[#B8860B] dark:text-[#FBBF24]">
                    <FileText className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#D4A853]/15 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-wider">
                      {current.year} ARCHIVAL RECORD
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mt-2">
                      Verified Marks Roll & Archive Record
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      Printed physical brochures for the {current.yearShort} batch are preserved in the school archive room. Top honors for this year include <strong>{current.name}</strong> scoring <strong>{current.marks}/600 ({current.percentage})</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-500 dark:text-slate-400">Board Record:</span>
                      <span className="font-bold text-[#0A1628] dark:text-white">{current.board}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-500 dark:text-slate-400">Town/District Rank:</span>
                      <span className="font-bold text-[#B8860B] dark:text-[#FBBF24]">{current.rankBadge}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-500 dark:text-slate-400">Key Distinctions:</span>
                      <span className="font-bold text-[#0A1628] dark:text-white">{current.subjects}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setCurrentIndex(1); // Switch to 2024-25
                        setActiveView('pamphlet');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      View 2024–25 Results Pamphlet
                    </button>
                    <button
                      onClick={() => {
                        setCurrentIndex(0); // Switch to 2025-26
                        setActiveView('pamphlet');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#0A1628] dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
                    >
                      View 2025–26 Results Pamphlet
                    </button>
                    <button
                      onClick={() => setActiveView('topper')}
                      className="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white font-bold text-xs cursor-pointer"
                    >
                      ← Back to Topper Spotlight
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* =========================================================================
            SECONDARY VIEW: TOPPER MAGAZINE PROFILE SPOTLIGHT
        ========================================================================= */}
        {activeView === 'topper' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={current.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-br from-white via-[#FDFBF7] to-white dark:from-[#0A1628] dark:via-[#0F2044] dark:to-[#0A1628] border-2 border-[#D4A853]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden text-[#0A1628] dark:text-white"
            >
              {/* Subtle Editorial Watermark Number */}
              <div className="absolute top-4 right-8 text-[120px] sm:text-[200px] font-black font-[family-name:var(--font-heading)] text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none leading-none">
                {current.marks}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Large Clean Portrait (Luxury Editorial Framing) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4A853]/50 bg-slate-100 dark:bg-slate-900 shadow-xl group">
                    <Image
                      src={current.image}
                      alt={`${current.name} - ${current.rankBadge}`}
                      fill
                      className="object-cover object-top brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Clean Bottom Label */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-3 py-1 rounded bg-[#D4A853] text-[#0A1628] text-xs font-black tracking-widest uppercase mb-1 shadow-md">
                        {current.rankBadge}
                      </span>
                      <h3 className="text-2xl font-black font-[family-name:var(--font-heading)]">
                        {current.name}
                      </h3>
                      <p className="text-xs text-white/90 font-medium">{current.board}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Oversized Result Typography & Editorial Story */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  {/* Year + Board Tag */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] font-black text-xs tracking-widest uppercase border border-[#D4A853]/30 dark:border-[#D4A853]/40">
                      {current.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {current.board}
                    </span>
                    {hasPamphlet && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-[11px] font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Official Results Pamphlet Included</span>
                      </span>
                    )}
                  </div>

                  {/* Oversized Result Number */}
                  <div>
                    <span className="block text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold mb-1">
                      Aggregate Board Score
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-[#0A1628] via-[#0A1628] to-[#B8860B] dark:from-white dark:via-white dark:to-[#FBBF24] leading-none">
                        {current.marks}
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-slate-500 dark:text-slate-400">{current.total}</span>
                      <span className="ml-4 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-sm sm:text-base font-black">
                        {current.percentage}
                      </span>
                    </div>
                  </div>

                  {/* Subject Distinctions */}
                  <div className="p-4 rounded-xl bg-[#FDFBF7] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-[#B8860B] dark:text-[#FBBF24]">
                      Verified Subject Distinction
                    </span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {current.subjects}
                    </p>
                  </div>

                  {/* Student Quote (Magazine Style) */}
                  <blockquote className="border-l-2 border-[#D4A853] pl-4 italic text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.quote}
                  </blockquote>

                  {/* Year-Wise Pamphlet Open Action & Archive Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {hasPamphlet ? (
                      <button
                        onClick={() => {
                          setActiveView('pamphlet');
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8C6D23] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View {current.yearShort} Official Results Pamphlet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setCurrentIndex(1); // Jump to 2024-25
                          setActiveView('pamphlet');
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View 2024–25 Pamphlet</span>
                      </button>
                    )}

                    {hasPamphlet && (
                      <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-bold transition-all cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4A853]" />
                        <span>Zoom Ultra-HD</span>
                      </button>
                    )}

                    <Link
                      href="/achievements"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] hover:text-[#0A1628] dark:hover:text-white uppercase tracking-wider transition-colors ml-auto cursor-pointer"
                    >
                      <span>Full Archive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* =========================================================================
          FULLSCREEN ULTRA-HD LIGHTBOX MODAL WITH ZOOM & PAN CONTROLS
      ========================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && activePamphletData && (
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
                {/* Year Switcher inside Modal */}
                <div className="flex items-center bg-white/10 p-0.5 rounded-lg border border-white/15 shrink-0">
                  {toppers.filter(t => t.pamphlet).map((t) => (
                    <button
                      key={t.year}
                      onClick={() => {
                        const targetIdx = toppers.findIndex(item => item.year === t.year);
                        if (targetIdx !== -1) {
                          setCurrentIndex(targetIdx);
                          setZoomLevel(1);
                        }
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                        current.year === t.year
                          ? 'bg-[#D4A853] text-[#0A1628]'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {t.yearShort}
                    </button>
                  ))}
                </div>

                <div className="min-w-0 hidden sm:block">
                  <h4 className="text-sm font-bold text-white truncate">
                    {current.pamphlet?.title} • {pamphletSide === 'front' ? 'Front Side' : 'Back Side'}
                  </h4>
                  <p className="text-xs text-white/60 truncate">
                    {activePamphletData.subtitle}
                  </p>
                </div>
              </div>

              {/* Controls: Side Switch, Zoom, Download, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Side Toggle inside modal */}
                <div className="inline-flex bg-white/10 p-0.5 rounded-lg border border-white/15">
                  <button
                    onClick={() => {
                      setPamphletSide('front');
                      setZoomLevel(1);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      pamphletSide === 'front' ? 'bg-[#D4A853] text-[#0A1628]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => {
                      setPamphletSide('back');
                      setZoomLevel(1);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      pamphletSide === 'back' ? 'bg-[#D4A853] text-[#0A1628]' : 'text-white/80 hover:text-white'
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

                {/* Download High Res */}
                <a
                  href={activePamphletData.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] flex items-center justify-center transition-colors cursor-pointer"
                  title="Download High-Resolution Scan"
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
                  src={activePamphletData.src}
                  alt={`${current.pamphlet?.title} - Fullscreen View`}
                  className="max-h-[88vh] max-w-[95vw] object-contain rounded-lg shadow-2xl select-none"
                />
              </div>
            </div>

            {/* Bottom Footer inside Lightbox */}
            <div className="p-3 bg-black/70 border-t border-white/10 text-center text-xs text-white/70 flex items-center justify-between px-4 sm:px-6">
              <button
                onClick={() => setPamphletSide(pamphletSide === 'front' ? 'back' : 'front')}
                className="text-[#FBBF24] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Flip to {pamphletSide === 'front' ? 'Back Side' : 'Front Side'}</span>
              </button>
              <span className="hidden sm:inline">
                Use Zoom buttons to inspect individual student marks, town ranks & faculty honors in 3600px Ultra-HD.
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
