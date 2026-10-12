'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface FelicitationPhoto {
  id: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
  caption: string;
  badge: string;
}

const FELICITATION_PHOTOS: FelicitationPhoto[] = [
  {
    id: 'photo-hero',
    src: '/images/achievements/ssc_2026_felicitation_hero.jpg',
    alt: 'D. Janani receiving AP SSC 2026 Town 1st Rank felicitation memento from Sree Valmeeki School leadership',
    tag: 'TOWN 1ST FELICITATION',
    badge: '595 / 600 • TOWN 1ST RANK',
    title: 'Recognizing Town Benchmark Excellence',
    description:
      'D. Janani receiving the official AP SSC 2026 felicitation memento (595/600) from Founder Sri P. Jaya Rami Reddy, Director Mr. P. Pavan Kumar Reddy, and school leadership.',
    caption: 'D. Janani (595/600) • Kadiri Town 1st Rank Felicitation',
  },
  {
    id: 'photo-ceremony',
    src: '/images/achievements/ssc_2026_felicitation_ceremony.jpg',
    alt: 'Sree Valmeeki School AP SSC 10th Class Results 2026 official felicitation ceremony on campus',
    tag: 'CAMPUS CEREMONY',
    badge: 'OFFICIAL 2026 BANNER PROOF',
    title: 'Proud Moments of Excellence',
    description:
      'The official Sree Valmeeki School felicitation ceremony celebrating student achievements in the AP SSC (10th Class) Results 2026 on MPL Road, Kadiri.',
    caption: 'Official AP SSC 2026 Results Felicitation Ceremony • Sree Valmeeki Campus',
  },
];

const VERIFIED_STATS = [
  {
    value: '595',
    suffix: '/ 600',
    label: 'TOWN 1ST RANK',
    subtext: 'D. Janani • 99.2% Aggregate',
  },
  {
    value: '594',
    suffix: '/ 600',
    label: 'TOWN 2ND RANK',
    subtext: 'B. Mounika Bai • 99.0% Score',
  },
  {
    value: '590',
    suffix: '/ 600',
    label: 'TOP DISTRICT SCORERS',
    subtext: 'C. Bhanu Prakash & Scholars',
  },
  {
    value: '7+',
    suffix: 'STUDENTS',
    label: '580+ BENCHMARK',
    subtext: 'High Distinction Club',
  },
  {
    value: '100%',
    suffix: 'PASS',
    label: 'AP SSC 2026',
    subtext: 'Scholastic Consistency',
  },
];

export default function SSCFelicitationShowcase() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % FELICITATION_PHOTOS.length
    );
  }, []);

  const showPrev = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + FELICITATION_PHOTOS.length) % FELICITATION_PHOTOS.length
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section
      id="ssc-2026-achievements"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Subtle Background Ambiance */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* =======================================================================
            SECTION HEADER
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[10px] sm:text-xs font-black tracking-[0.22em] uppercase mb-4 sm:mb-5 shadow-sm"
          >
            <Trophy className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>2026 SSC ACHIEVEMENTS</span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.9rem,4.5vw,3.6rem)] font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-[1.08] mb-3 sm:mb-4"
            >
              PROUD MOMENTS. <br className="hidden sm:inline" />
              REAL ACHIEVEMENT.
            </motion.h2>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto font-normal"
          >
            Celebrating the outstanding performance of Sree Valmeeki students in the 2026 AP SSC examinations.
          </motion.p>
        </div>

        {/* =======================================================================
            CINEMATIC SPLIT EDITORIAL LAYOUT (DESKTOP) / IMMERSIVE STACK (MOBILE)
        ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16">
          {/* -------------------------------------------------------------------
              IMAGE 1 — HERO ACHIEVEMENT MOMENT (Dominant ~60% Width on Desktop)
          ------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div
              onClick={() => setActiveLightboxIndex(0)}
              className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[#0A1628] border border-slate-200/90 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-none hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 cursor-pointer flex-1"
            >
              <Image
                src={FELICITATION_PHOTOS[0].src}
                alt={FELICITATION_PHOTOS[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top sm:object-[center_20%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Gentle gradient overlay for contrast, preserving student & certificates */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Top Badge: Verified Felicitation */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-[#D4A853]/50 text-[#FBBF24] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                  <Award className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>2026 AP SSC Felicitation</span>
                </span>
              </div>

              {/* Top Right Zoom Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-left">
                <span className="text-[10px] sm:text-xs font-bold text-[#FBBF24] uppercase tracking-widest block mb-1">
                  KADIRI TOWN 1ST RANK CEREMONY
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] leading-snug drop-shadow-md">
                  D. Janani • 595 / 600
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-lg line-clamp-2">
                  Receiving the official 2026 honor memento from Founder Sri P. Jaya Rami Reddy & Director Mr. P. Pavan Kumar Reddy.
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] text-[#D4A853] font-semibold">
                  <span>Click to view full photograph</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              IMAGE 2 — SUPPORTING ACHIEVEMENT MOMENT (~40% Width on Desktop)
          ------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div
              onClick={() => setActiveLightboxIndex(1)}
              className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[#0A1628] border border-slate-200/90 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-none hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 cursor-pointer flex-1"
            >
              <Image
                src={FELICITATION_PHOTOS[1].src}
                alt={FELICITATION_PHOTOS[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Gentle gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Top Badge: Institutional Proof */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-[#D4A853]/50 text-[#FBBF24] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>Official Campus Felicitation</span>
                </span>
              </div>

              {/* Top Right Zoom Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-left">
                <span className="text-[10px] sm:text-xs font-bold text-[#FBBF24] uppercase tracking-widest block mb-1">
                  OFFICIAL INSTITUTIONAL BANNER PROOF
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-[family-name:var(--font-heading)] leading-snug drop-shadow-md">
                  Celebrating Top Scholastic Ranks
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-2">
                  Official stage felicitation of top SSC scorers with town rankers and faculty mentors on campus.
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] text-[#D4A853] font-semibold">
                  <span>Click to inspect ceremony</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================================
            COMPACT VERIFIED RESULT PROOF STRIP (ONLY EXISTING PROJECT DATA)
        ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] dark:shadow-none"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-white/5">
            {VERIFIED_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  i > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#B8860B] dark:text-[#FBBF24]">
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-0.5 font-[family-name:var(--font-heading)]">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip on Mobile and Desktop */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Verified AP SSC Board Results from Sree Valmeeki School Official Records</span>
            </div>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <span>View All 2026 Achievements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =======================================================================
          FULLSCREEN EDITORIAL LIGHTBOX MODAL
      ======================================================================= */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
            onClick={closeLightbox}
          >
            {/* Lightbox Top Bar */}
            <div
              className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-widest">
                  {FELICITATION_PHOTOS[activeLightboxIndex].tag}
                </span>
                <span className="text-white/60 text-xs font-mono">
                  {activeLightboxIndex + 1} of {FELICITATION_PHOTOS.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close Fullscreen View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh] max-h-[850px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={FELICITATION_PHOTOS[activeLightboxIndex].src}
                  alt={FELICITATION_PHOTOS[activeLightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D4A853] text-white hover:text-[#0A1628] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D4A853] text-white hover:text-[#0A1628] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Caption */}
            <div
              className="relative z-20 w-full max-w-3xl mx-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-white text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] mb-1">
                {FELICITATION_PHOTOS[activeLightboxIndex].title}
              </h4>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                {FELICITATION_PHOTOS[activeLightboxIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
