'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  Target,
  Award,
  MessageCircle,
  Shield,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Pause,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface AcademicSystem {
  num: string;
  pillLabel: string;
  badge: string;
  title: string;
  shortLine: string;
  detailedText: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
  icon: typeof BookOpen;
  actionText: string;
  actionHref: string;
}

const systems: AcademicSystem[] = [
  {
    num: '01',
    pillLabel: 'Strong Foundations',
    badge: 'Nursery – Primary Focus',
    title: 'Strong Foundations',
    shortLine: 'Concept-first mastery from Nursery to Primary so no child struggles later.',
    detailedText:
      'We replace rote memorization with sensorial inquiry, mental numeracy games, and phonics immersion. By grounding every fundamental concept early, students cultivate organic curiosity and self-assurance.',
    highlights: [
      'Montessori sensorial methods & phonics immersion',
      'Mental numeracy labs & spatial geometry kits',
      'Zero-rote conceptual clarity before Class 1',
    ],
    metricLabel: 'Foundational Metric',
    metricValue: '100% Concept Mastery',
    image: '/images/school/school-event-12.jpg',
    icon: BookOpen,
    actionText: 'Explore Primary Curriculum',
    actionHref: '/academics',
  },
  {
    num: '02',
    pillLabel: 'Experienced Faculty',
    badge: 'Mentorship Excellence',
    title: 'Experienced Faculty',
    shortLine: 'Mentors with up to 15+ years experience who know every student by name.',
    detailedText:
      'Our dedicated educators are compassionate subject authorities who recognize every child’s cognitive pace. Through low teacher-student ratios, they deliver individualized guidance and daily remedial encouragement.',
    highlights: [
      '1:20 focused teacher-student mentorship ratio',
      'Daily individualized doubt clearing clinics',
      'Continuous teacher pedagogical excellence workshops',
    ],
    metricLabel: 'Faculty Pedagogy',
    metricValue: '15+ Years Avg. Experience',
    image: '/images/school/school-event-7.jpg',
    icon: Users,
    actionText: 'Meet Our Educators',
    actionHref: '/about',
  },
  {
    num: '03',
    pillLabel: 'IIT Foundation',
    badge: 'Classes 6 to 10',
    title: 'IIT Foundation',
    shortLine: 'Early analytical problem solving and competitive exam logic from Class 6.',
    detailedText:
      'Integrated into the regular academic timetable, this program builds speed, logical rigor, and multi-step deduction in physics, chemistry, and mathematics to prepare students early for JEE & NEET standards.',
    highlights: [
      'Class 6 onwards structured competitive syllabus',
      'Higher-order thinking & speed calculation drill',
      'Weekly diagnostic objective & subjective testing',
    ],
    metricLabel: 'Competitive Track',
    metricValue: 'Integrated From Class 6',
    image: '/images/school/school-event-9.jpg',
    icon: Target,
    actionText: 'View IIT Program',
    actionHref: '/academics/iit-foundation',
  },
  {
    num: '04',
    pillLabel: 'Olympiad Preparation',
    badge: 'Scholastic Contests',
    title: 'Olympiad Preparation',
    shortLine: 'Science and Mathematics competitive training that goes far beyond textbooks.',
    detailedText:
      'Specialized coaching for national and international contests including NSTSE, Science Olympiad Foundation (SOF), and Mathematical Olympiads, developing lateral problem-solving instincts.',
    highlights: [
      'Curated Olympiad problem sets & mentor sessions',
      'Aptitude development & scientific application skills',
      'Consistent state & district rank holders',
    ],
    metricLabel: 'State Benchmark',
    metricValue: 'Top 1% Rankers',
    image: '/images/school/school-event-1.jpg',
    icon: Award,
    actionText: 'View Student Honors',
    actionHref: '/achievements',
  },
  {
    num: '05',
    pillLabel: 'Spoken English',
    badge: 'Elocution & Stage',
    title: 'Spoken English & Stage Fluency',
    shortLine: 'Daily stage assemblies, debate practice, and 100% spoken English immersion.',
    detailedText:
      'Every child takes the microphone. Daily assembly news reading, elocution debates, vocabulary building, and an all-English campus environment instill fearless public presence from an early age.',
    highlights: [
      'Mandatory daily morning microphone turns for all',
      'Interactive parliamentary debate & storytelling',
      '100% campus English communicative environment',
    ],
    metricLabel: 'Oral Proficiency',
    metricValue: '100% English Immersion',
    image: '/images/school/school-event-4.jpg',
    icon: MessageCircle,
    actionText: 'See Language Pedagogy',
    actionHref: '/academics',
  },
  {
    num: '06',
    pillLabel: 'Discipline & Habits',
    badge: 'Character Formation',
    title: 'Discipline & Consistency',
    shortLine: 'Character, moral values, and regular structured study routines.',
    detailedText:
      'True academic triumph is built on wholesome habits. We cultivate punctuality, ethical integrity, daily revision discipline, and mutual respect, empowering students with lifelong character strength.',
    highlights: [
      'Structured daily prep & homework review schedules',
      'Moral values, humility & mutual respect culture',
      'Cleanliness, sportsmanship & personal responsibility',
    ],
    metricLabel: 'Core Ethos',
    metricValue: 'Lifelong Character',
    image: '/images/school/school-event-11.jpg',
    icon: Shield,
    actionText: 'Read Valmeeki Ethos',
    actionHref: '/about',
  },
];

export default function AcademicSystemStory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 4500; // 4.5 seconds auto-advance

  const currentItem = systems[currentIndex];
  const IconComponent = currentItem.icon;

  const goToSlide = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setProgress(0);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % systems.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + systems.length) % systems.length);
    setProgress(0);
  };

  // Auto-advance interval
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const stepIncrement = (stepMs / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrentIndex((current) => (current + 1) % systems.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="academic-system"
      aria-label="Academic System & Pedagogy"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4A853]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Compact and Impactful */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/45 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>PEDAGOGY & METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-2 sm:mb-3">
            THE SYSTEM BEHIND THE RESULTS.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Excellence is not an accident. It is engineered every day inside our classrooms through 6 proven pillars.
          </p>
        </div>

        {/* Top Interactive Tab Selector Strip (Horizontal Scroll on Mobile) */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {systems.map((item, idx) => {
              const isActive = idx === currentIndex;
              const TabIcon = item.icon;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group relative shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] shadow-md shadow-[#0A1628]/10 dark:shadow-[#FBBF24]/10 scale-105 border border-[#0A1628] dark:border-[#FBBF24]'
                      : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                  aria-label={`View Pillar ${item.num}: ${item.pillLabel}`}
                >
                  <TabIcon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-[#D4A853] dark:text-[#0A1628]' : 'text-[#B8860B] dark:text-[#FBBF24]'
                    }`}
                  />
                  <span>
                    <span className="opacity-60 mr-1">{item.num}.</span>
                    {item.pillLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Sliding Showcase Card (Fits Comfortably in Viewport) */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Top subtle golden accent line with active slide indicator */}
          <div className="relative w-full h-1 bg-slate-100 dark:bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#FBBF24] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slide Body */}
          <div className="relative overflow-hidden min-h-[480px] sm:min-h-[440px] lg:min-h-[460px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentItem.num}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
              >
                {/* Left Visual Image Column (5 Cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[300px] lg:min-h-[460px] overflow-hidden bg-slate-100 dark:bg-black/50">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1628]/40 hidden lg:block" />

                  {/* Badges on Top of Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-10 h-10 rounded-2xl bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/20 flex items-center justify-center text-sm font-black text-[#0A1628] dark:text-white shadow-md font-[family-name:var(--font-heading)]">
                      {currentItem.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0A1628]/85 dark:bg-black/70 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {currentItem.badge}
                    </span>
                  </div>

                  {/* Corner Floating Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3 rounded-2xl bg-white/95 dark:bg-[#0A1628]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#D4A853]/20 dark:bg-[#D4A853]/25 flex items-center justify-center text-[#B8860B] dark:text-[#FBBF24]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">
                          {currentItem.metricLabel}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white">
                          {currentItem.metricValue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content Column (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-[#0A1628]">
                  <div className="space-y-4">
                    {/* Pillar Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 text-[#B8860B] dark:text-[#FBBF24]">
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-wider">
                          Pillar {currentItem.num} of 06
                        </span>
                      </div>

                      {/* Micro slide indicator */}
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                        0{currentIndex + 1} / 0{systems.length}
                      </span>
                    </div>

                    {/* Headline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] uppercase tracking-tight leading-tight">
                        {currentItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#B8860B] dark:text-[#FBBF24] mt-1">
                        {currentItem.shortLine}
                      </p>
                    </div>

                    {/* Detailed Body Paragraph */}
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {currentItem.detailedText}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-1 pb-2">
                      {currentItem.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action & Sliding Navigation Controls */}
                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                    {/* Action Button */}
                    <Link
                      href={currentItem.actionHref}
                      className="inline-flex items-center gap-2 bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white dark:hover:text-[#0A1628] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm border border-[#0A1628] dark:border-[#FBBF24] active:scale-95"
                    >
                      <span>{currentItem.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Navigation Controls: Prev, Dots, Next, Pause */}
                    <div className="flex items-center gap-3">
                      {/* Left Arrow */}
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-[#0A1628] hover:text-white dark:hover:bg-[#FBBF24] dark:hover:text-[#0A1628] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                        aria-label="Previous Academic System"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Pagination Dots */}
                      <div className="flex items-center gap-1.5" role="tablist" aria-label="System slide pagination">
                        {systems.map((item, idx) => {
                          const isDotActive = idx === currentIndex;
                          return (
                            <button
                              key={item.num}
                              type="button"
                              onClick={() => goToSlide(idx)}
                              role="tab"
                              aria-selected={isDotActive}
                              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                isDotActive
                                  ? 'w-7 bg-[#B8860B] dark:bg-[#FBBF24]'
                                  : 'w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                              }`}
                              aria-label={`Go to slide ${idx + 1}: ${item.pillLabel}`}
                            />
                          );
                        })}
                      </div>

                      {/* Right Arrow */}
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-[#0A1628] hover:text-white dark:hover:bg-[#FBBF24] dark:hover:text-[#0A1628] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                        aria-label="Next Academic System"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Play / Pause Toggle Button */}
                      <button
                        type="button"
                        onClick={() => setIsPaused((prev) => !prev)}
                        className="w-8 h-8 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                        aria-label={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
                        title={isPaused ? 'Play' : 'Pause'}
                      >
                        {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
