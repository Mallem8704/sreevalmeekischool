'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  BookOpen,
  Brain,
  Sparkles,
  Trophy,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Pause,
  Play,
  ArrowRight,
} from 'lucide-react';

interface StatementItem {
  number: string;
  shortTitle: string;
  prefix: string;
  highlight: string;
  tagline: string;
  icon: typeof BookOpen;
  image: string;
  imageAlt: string;
  features: string[];
}

const statements: StatementItem[] = [
  {
    number: '01',
    shortTitle: 'LEARN',
    prefix: 'SPACES TO ',
    highlight: 'LEARN.',
    tagline: 'Well-ventilated, daylight-filled classrooms equipped with interactive 4K smart panels and ergonomic student seating.',
    icon: BookOpen,
    image: '/images/campus/digital_classroom.jpg',
    imageAlt: '4K Smart Digital Classrooms at Sree Valmeeki',
    features: [
      'Interactive 4K Smart Interactive Panels',
      'Ergonomic Posture-Supporting Benches',
      'Abundant Cross-Ventilation & Natural Daylight',
      'Acoustic-Optimized Classrooms for Crystal Clarity',
    ],
  },
  {
    number: '02',
    shortTitle: 'THINK',
    prefix: 'SPACES TO ',
    highlight: 'THINK.',
    tagline: 'Curiosity-driven science labs, competitive Olympiad study wings, and quiet analytical problem-solving chambers.',
    icon: Brain,
    image: '/images/campus/science_lab_faculty.jpg',
    imageAlt: 'Curiosity-Driven Science Labs & STEM Wing',
    features: [
      'Hands-on Physics, Chemistry & Biology Apparatus',
      'Integrated IIT-JEE & Olympiad Problem Solving Wings',
      'Analytical Mathematics Library & Think Tank',
      'Direct Mentorship from Senior Master Faculty',
    ],
  },
  {
    number: '03',
    shortTitle: 'GROW',
    prefix: 'SPACES TO ',
    highlight: 'GROW.',
    tagline: 'Shady neem tree courtyards, morning mass yoga sessions, and multi-acre athletic sports grounds under open skies.',
    icon: Sparkles,
    image: '/images/campus/playground_drone_aerial.jpg',
    imageAlt: 'Multi-Acre Athletic Grounds and Green Courtyard',
    features: [
      'Morning Open-Air Mass Yoga & Stage Assemblies',
      'Multi-Acre Athletic Grounds for Cricket, Volleyball & Track',
      '100+ Mature Neem Trees Offering Cool Microclimate',
      'Dedicated Play Spaces for Foundational Primary Students',
    ],
  },
  {
    number: '04',
    shortTitle: 'ACHIEVE',
    prefix: 'SPACES TO ',
    highlight: 'ACHIEVE.',
    tagline: 'Dedicated 10th Class SSC board excellence wing where town 1st ranks, 595/600 scores, and 28-year legacies are molded.',
    icon: Trophy,
    image: '/images/school/school-event-1.jpg',
    features: [
      'Specialized 10th Class Board Excellence Wing',
      'Personalized Target Tracking & Weakness Diagnosis',
      'Rigorous Mock Examination Drills & Time Mastery',
      'Proven 28-Year Legacy of Town 1st & 2nd Rankers',
    ],
    imageAlt: 'SSC Board Excellence Wing & Student Achievements',
  },
];

const AUTO_SLIDE_DURATION = 4500; // 4.5 seconds per slide

export default function SpacesThatSupportSuccess() {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeItem = statements[currentIndex];
  const Icon = activeItem.icon;

  const paginate = (newDirection: number) => {
    setSlide(([prev]) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = statements.length - 1;
      if (nextIndex >= statements.length) nextIndex = 0;
      return [nextIndex, newDirection];
    });
    setProgress(0);
  };

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const newDir = targetIndex > currentIndex ? 1 : -1;
    setSlide([targetIndex, newDir]);
    setProgress(0);
  };

  // Automatic slide progression with animated progress fill
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const stepIncrement = (stepMs / AUTO_SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAFAF7] dark:bg-[#070F1E] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Spaces That Support Success Slideshow"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A162808_1px,transparent_1px),linear-gradient(to_bottom,#0A162808_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            <span>SPACES THAT SUPPORT SUCCESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            WHERE ENVIRONMENT SHAPES EXCELLENCE
          </motion.h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Experience our 4 core academic spaces in an auto-advancing visual tour.
          </p>
        </div>

        {/* Interactive Top Slide Navigation Tabs with Animated Fill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8 max-w-4xl mx-auto">
          {statements.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-2xl p-3 sm:p-4 text-left border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#0A1628] border-[#D4A853] shadow-md shadow-[#D4A853]/10 scale-[1.02]'
                    : 'bg-white/60 dark:bg-white/5 border-slate-200/80 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {/* Active progress fill bar */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 top-0 bg-[#D4A853]/15 dark:bg-[#D4A853]/20 transition-all duration-75 pointer-events-none"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-black font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#D4A853] text-[#0A1628]'
                          : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-black uppercase tracking-wider font-[family-name:var(--font-heading)] ${
                        isActive
                          ? 'text-[#0A1628] dark:text-white'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.shortTitle}
                    </span>
                  </div>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            AUTO-SLIDING SHOWCASE CARD (Fits Compactly Within Standard Screen View)
        ========================================================================= */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0A1628] border-2 border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden min-h-[460px] sm:min-h-[480px] lg:min-h-[460px] flex flex-col justify-between">
          {/* Top ambient gold accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#B8860B]" />

          {/* Slide Content with AnimatePresence */}
          <div className="relative flex-1 p-6 sm:p-8 lg:p-10 flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left 7 Columns: Giant Typography & Tagline */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Badge + Icon */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-black font-mono tracking-widest text-[#B8860B] dark:text-[#FBBF24] px-3 py-1 rounded-lg bg-[#D4A853]/10 dark:bg-[#D4A853]/20 border border-[#D4A853]/30">
                      STEP {activeItem.number} OF 04
                    </span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-[#0A1628] dark:text-white text-xs font-bold">
                      <Icon className="w-4 h-4 text-[#D4A853]" />
                      <span>Verified Infrastructure</span>
                    </div>
                  </div>

                  {/* Headline matching screenshot */}
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-[1.05]">
                      <span>{activeItem.prefix}</span>
                      <span className="text-[#B8860B] dark:text-[#FBBF24] underline underline-offset-8 decoration-[#D4A853]/50">
                        {activeItem.highlight}
                      </span>
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-xl">
                    {activeItem.tagline}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {activeItem.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 Columns: Visual Image Frame */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-white/15 shadow-lg group">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider mb-1">
                        CAMPUS INFRASTRUCTURE
                      </span>
                      <p className="text-xs font-bold text-white line-clamp-1 drop-shadow">
                        {activeItem.imageAlt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Manual Controls, Play/Pause, and Progress Dots */}
          <div className="p-4 sm:p-5 bg-slate-50/90 dark:bg-white/5 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* Left: Previous / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/15 shadow-xs transition-colors cursor-pointer"
                aria-label="Previous space slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/15 shadow-xs transition-colors cursor-pointer"
                aria-label="Next space slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Pause/Play Toggle Button */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-[11px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/15 shadow-xs transition-colors cursor-pointer"
                aria-label={isPaused ? 'Resume auto-slideshow' : 'Pause auto-slideshow'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#10B981]" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#D4A853]" />
                    <span>Auto-Playing</span>
                  </>
                )}
              </button>
            </div>

            {/* Center: Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {statements.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#D4A853]'
                      : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right: Slide Counter */}
            <div className="text-xs font-black font-mono tracking-wider text-slate-500 dark:text-slate-400">
              <span className="text-[#0A1628] dark:text-white font-bold">{activeItem.number}</span>
              <span className="mx-1">/</span>
              <span>04</span>
            </div>
          </div>
        </div>

        {/* Bottom subtle divider line */}
        <div className="mt-12 max-w-lg mx-auto flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A853]/40 to-transparent" />
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#B8860B] dark:text-[#FBBF24]">
            KADIRI • ESTD 1999
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/40 via-[#D4A853]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
