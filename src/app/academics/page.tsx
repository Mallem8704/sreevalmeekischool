'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Compass,
  GraduationCap,
  Layers,
  Lightbulb,
  Microscope,
  Phone,
  Sparkles,
  Trophy,
  Users,
  Pause,
  Play,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

const academicStats = [
  { value: '100%', label: 'SSC Board Pass', sub: 'Consistent Distinction' },
  { value: 'Top 1%', label: 'Olympiad Rankers', sub: 'National & State' },
  { value: '100%', label: 'English Immersion', sub: 'Daily Stage Oratory' },
  { value: '1:20', label: 'Teacher-Student Ratio', sub: 'Focused Mentorship' },
];

const learningWings = [
  {
    id: 'pre-primary',
    stage: 'Pre-Primary Wing',
    grades: 'Nursery • LKG • UKG',
    headline: 'Wonder, Phonics & Play',
    summary:
      'Foundational joy through sensory play, activity labs, and natural phonetic language immersion.',
    image: '/images/school/school-event-11.jpg',
    highlights: ['Montessori Play Methods', 'Phonetic English Sounds', 'Motor Skill Labs', 'Nurturing Care Tutors'],
  },
  {
    id: 'primary',
    stage: 'Primary Wing',
    grades: 'Classes 1 to 5',
    headline: 'Concept Clarity & Numeracy',
    summary:
      'Building rock-solid math fundamentals, spoken English fluency, and curiosity-driven environmental science.',
    image: '/images/school/school-event-9.jpg',
    highlights: ['Mental Math Agility', 'Daily Reading Circle', 'Interactive Digital Lessons', 'Values & Ethics'],
  },
  {
    id: 'middle',
    stage: 'Middle School',
    grades: 'Classes 6 to 8',
    headline: 'Analytical & STEM Reasoning',
    summary:
      'Transition into formal scientific inquiry, hands-on physics and chemistry labs, and Olympiad logic.',
    image: '/images/school/school-event-10.jpg',
    highlights: ['Experimental Labs', 'Early IIT-JEE Foundation', 'Competitive Olympiads', 'Stage Debating'],
  },
  {
    id: 'high-school',
    stage: 'High School',
    grades: 'Classes 9 & 10',
    headline: 'Board Mastery & Competitive Triumph',
    summary:
      'Intensive SSC board preparation coupled with advanced IIT-JEE and NEET foundation modules.',
    image: '/images/school/school-event-1.jpg',
    highlights: ['100% Board Distinction', 'Structured Mock Series', 'Doubt Clearing Clinics', 'Career Counseling'],
  },
];

interface ExcellencePillar {
  id: string;
  num: string;
  title: string;
  tabTitle: string;
  badge: string;
  desc: string;
  detailedText: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
  image: string;
  actionText: string;
  actionHref: string;
  icon: typeof Brain;
}

const excellencePillars: ExcellencePillar[] = [
  {
    id: 'iit-jee',
    num: '01',
    title: 'IIT-JEE & NEET Foundation',
    tabTitle: 'IIT & NEET Prep',
    badge: 'Flagship Program',
    desc: 'Integrated with regular syllabus from Class 6 onwards to train analytical problem-solving and numerical speed.',
    detailedText:
      'Our early competitive foundation equips students with mathematical deduction, physics principles, and analytical logic. With daily concept problem sets, students build competitive exam aptitude long before high school boards.',
    highlights: [
      'Advanced Mathematics, Physics & Chemistry from Class 6',
      'Timed speed-drills & multiple-choice analytical logic',
      'Seamless alignment with SSC State & National syllabus',
    ],
    metric: 'Classes 6 to 10',
    metricLabel: 'Eligibility Stage',
    image: '/images/school/school-event-1.jpg',
    actionText: 'Explore IIT Curriculum',
    actionHref: '/academics/iit-foundation',
    icon: Brain,
  },
  {
    id: 'spoken-english',
    num: '02',
    title: 'Spoken English & Stage Fluency',
    tabTitle: 'Stage & English',
    badge: 'Confidence Focus',
    desc: 'Daily morning stage assemblies train every child in elocution, debate, and fluent English presentation.',
    detailedText:
      'Speaking without fear is a superpower taught from day one. Every child regularly ascends the podium to host assemblies, deliver speeches, and recite poetry, backed by 100% English campus communication.',
    highlights: [
      'Daily morning mic rotation for every student',
      'Inter-house parliamentary debating & extempore',
      'Accent training & active conversational immersion',
    ],
    metric: 'Daily Mic Turns',
    metricLabel: 'Public Speaking',
    image: '/images/school/school-event-4.jpg',
    actionText: 'View Language Pedagogy',
    actionHref: '/about',
    icon: Users,
  },
  {
    id: 'smart-classrooms',
    num: '03',
    title: 'Smart Digital Classrooms',
    tabTitle: 'Digital Classrooms',
    badge: 'Interactive Tech',
    desc: 'High-definition digital smart boards bring complex physics, biology, and math concepts to life in 3D.',
    detailedText:
      'Abstract formulas and biological mechanisms become intuitive through high-definition interactive animations. Teachers demonstrate live simulations so students visualize concepts instead of memorizing text.',
    highlights: [
      'Interactive touch displays in all academic sections',
      '3D audio-visual diagrams and scientific animations',
      'Enhanced student retention & interactive participation',
    ],
    metric: '100% Smart Boards',
    metricLabel: 'Tech Infrastructure',
    image: '/images/school/school-event-12.jpg',
    actionText: 'See Smart Labs',
    actionHref: '/campus',
    icon: Sparkles,
  },
  {
    id: 'science-expo',
    num: '04',
    title: 'Hands-on Science & STEM Expo',
    tabTitle: 'STEM Science Expo',
    badge: 'Practical Science',
    desc: 'Students create functioning working models in robotics, solar energy, and electronics at our annual Science Fair.',
    detailedText:
      'We believe science is best learned with hands covered in experiment materials. Students invent working solar circuits, hydraulic lifts, and botanical exhibits presented to parents and community judges.',
    highlights: [
      'Dedicated physics, chemistry, and biology experimental kits',
      'Annual science exhibition featuring student-built working models',
      'Scientific method: hypothesis, observation & conclusion',
    ],
    metric: 'Annual Expo',
    metricLabel: 'Practical Innovation',
    image: '/images/school/school-event-9.jpg',
    actionText: 'Browse Science Expo',
    actionHref: '/gallery',
    icon: Microscope,
  },
];

const hallOfFame = [
  {
    name: 'V. Keerthana',
    score: '592 / 600',
    badge: 'Rank 01 • State Distinction',
    exam: 'SSC Board 2025',
    image: '/images/school/school-event-7.jpg',
  },
  {
    name: 'G. Tejaswini',
    score: '588 / 600',
    badge: 'Rank 02 • Top Honors',
    exam: 'SSC Board 2024',
    image: '/images/school/school-event-8.jpg',
  },
  {
    name: 'K. Bhanu Prakash',
    score: '585 / 600',
    badge: 'Rank 03 • Mathematics Centum',
    exam: 'SSC Board 2025',
    image: '/images/school/school-event-1.jpg',
  },
  {
    name: 'M. Sneha Latha',
    score: '582 / 600',
    badge: 'Rank 04 • Science Topper',
    exam: 'SSC Board 2024',
    image: '/images/school/school-event-3.jpg',
  },
];

export default function AcademicsPage() {
  const [activeWing, setActiveWing] = useState(0);

  // Excellence Pillars Slider State
  const [activePillar, setActivePillar] = useState(0);
  const [pillarDirection, setPillarDirection] = useState(1);
  const [isPillarPaused, setIsPillarPaused] = useState(false);
  const [pillarProgress, setPillarProgress] = useState(0);
  const pillarDuration = 5000; // 5s slide rotation

  const currentPillar = excellencePillars[activePillar];
  const PillarIcon = currentPillar.icon;

  const goToPillar = (idx: number) => {
    if (idx === activePillar) return;
    setPillarDirection(idx > activePillar ? 1 : -1);
    setActivePillar(idx);
    setPillarProgress(0);
  };

  const handleNextPillar = () => {
    setPillarDirection(1);
    setActivePillar((prev) => (prev + 1) % excellencePillars.length);
    setPillarProgress(0);
  };

  const handlePrevPillar = () => {
    setPillarDirection(-1);
    setActivePillar((prev) => (prev - 1 + excellencePillars.length) % excellencePillars.length);
    setPillarProgress(0);
  };

  // Auto-play timer for excellence pillars
  useEffect(() => {
    if (isPillarPaused) return;

    const stepMs = 50;
    const stepIncrement = (stepMs / pillarDuration) * 100;

    const timer = setInterval(() => {
      setPillarProgress((prev) => {
        if (prev >= 100) {
          setPillarDirection(1);
          setActivePillar((c) => (c + 1) % excellencePillars.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [activePillar, isPillarPaused]);

  const pillarVariants = {
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
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200/80 dark:border-white/10 bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] transition-colors duration-200">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/school/school-event-12.jpg"
              alt="Sree Valmeeki School Interactive Science and Academic Learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-15 dark:opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] dark:from-[#050D1A] via-[#FDFBF7]/90 dark:via-[#050D1A]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#050D1A] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs sm:text-sm font-bold mb-6 tracking-wide uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                <span>Nursery to Class 10 • Concept-First Pedagogy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white leading-tight mb-6"
              >
                Igniting Intellect. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  Engineering Futures.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
              >
                Where classroom concepts transform into working inventions, fearless stage speaking, and state-level board distinction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] hover:text-white dark:hover:text-[#0A1628] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] border border-[#0A1628] dark:border-[#FBBF24]"
                >
                  <span>Enroll for 2026–27</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academics/iit-foundation"
                  className="inline-flex items-center gap-2 bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/15 shadow-sm transition-all duration-300"
                >
                  <Brain className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>IIT Foundation Details</span>
                </Link>
              </motion.div>
            </div>

            {/* Stat Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-200/80 dark:border-white/10"
            >
              {academicStats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0A1628] rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-colors"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-[#B8860B] dark:text-[#FBBF24] mb-1">
                    {item.value}
                  </p>
                  <p className="text-[#0A1628] dark:text-white font-bold text-sm sm:text-base">{item.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4 LEARNING STAGES: INTERACTIVE SHOWCASE */}
        <section className="py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#050D1A] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                PROGRESSIVE STAGES
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                Structured Learning Wings
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                Tailored cognitive milestones from Nursery through Class 10.
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {learningWings.map((wing, idx) => {
                const isActive = activeWing === idx;
                return (
                  <button
                    key={wing.id}
                    onClick={() => setActiveWing(idx)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] shadow-md shadow-[#0A1628]/10 scale-105 border border-[#0A1628] dark:border-[#FBBF24]'
                        : 'bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/15 shadow-sm'
                    }`}
                  >
                    {wing.stage}
                  </button>
                );
              })}
            </div>

            {/* Selected Wing Detail Card */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Visual Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md bg-slate-100 dark:bg-black/40">
                  <Image
                    src={learningWings[activeWing].image}
                    alt={learningWings[activeWing].headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0A1628]/95 border border-slate-200 dark:border-white/10 text-[#0A1628] dark:text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {learningWings[activeWing].grades}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                    {learningWings[activeWing].stage}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white mt-1 mb-4">
                    {learningWings[activeWing].headline}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {learningWings[activeWing].summary}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {learningWings[activeWing].highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-[#0A1628] dark:text-[#FBBF24] hover:text-[#B8860B] dark:hover:text-[#FCD34D] font-bold text-sm group transition-colors"
                  >
                    <span>Apply for {learningWings[activeWing].grades}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED EXCELLENCE PILLARS: INTERACTIVE SLIDING SHOWCASE */}
        <section
          aria-label="Signature Programs and Excellence Pillars"
          className="py-16 sm:py-20 bg-[#FDFBF7] dark:bg-[#0A1628] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200 overflow-hidden"
          onMouseEnter={() => setIsPillarPaused(true)}
          onMouseLeave={() => setIsPillarPaused(false)}
          onTouchStart={() => setIsPillarPaused(true)}
          onTouchEnd={() => setIsPillarPaused(false)}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
              <div>
                <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                  DISTINCTIVE PEDAGOGY
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                  Signature Programs
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-md">
                Carefully engineered learning systems that give Valmeeki students a competitive head start.
              </p>
            </div>

            {/* Top Interactive Program Selector Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none mb-6 sm:mb-8">
              {excellencePillars.map((item, idx) => {
                const isActive = activePillar === idx;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToPillar(idx)}
                    className={`group shrink-0 flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] shadow-md shadow-[#0A1628]/10 scale-105 border border-[#0A1628] dark:border-[#FBBF24]'
                        : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10'
                    }`}
                    aria-label={`View ${item.title}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4A853] dark:text-[#0A1628]' : 'text-[#B8860B] dark:text-[#FBBF24]'}`} />
                    <span>{item.tabTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Showcase Card (Compact Height, Slide Animated) */}
            <div className="relative bg-white dark:bg-[#050D1A] border border-slate-200/90 dark:border-white/10 rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
              {/* Progress Bar Indicator */}
              <div className="w-full h-1 bg-slate-100 dark:bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#FBBF24] transition-all duration-75"
                  style={{ width: `${pillarProgress}%` }}
                />
              </div>

              {/* Animated Slide Body */}
              <div className="relative min-h-[460px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
                <AnimatePresence custom={pillarDirection} mode="wait">
                  <motion.div
                    key={currentPillar.id}
                    custom={pillarDirection}
                    variants={pillarVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
                  >
                    {/* Left Image Showcase Column */}
                    <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[280px] lg:min-h-[440px] overflow-hidden bg-slate-100 dark:bg-black/40">
                      <Image
                        src={currentPillar.image}
                        alt={currentPillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        priority
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/85 via-black/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="w-9 h-9 rounded-xl bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/20 flex items-center justify-center text-xs font-black text-[#0A1628] dark:text-white shadow-sm font-[family-name:var(--font-heading)]">
                          {currentPillar.num}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold shadow-sm">
                          {currentPillar.badge}
                        </span>
                      </div>

                      {/* Floating Metric Pill */}
                      <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3 rounded-2xl bg-white/95 dark:bg-[#0A1628]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#D4A853]/20 dark:bg-[#D4A853]/25 flex items-center justify-center text-[#B8860B] dark:text-[#FBBF24]">
                            <PillarIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">
                              {currentPillar.metricLabel}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white">
                              {currentPillar.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content Details Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-[#050D1A]">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-2 text-[#B8860B] dark:text-[#FBBF24]">
                            <PillarIcon className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-wider">
                              Signature Program {currentPillar.num} of 04
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                            0{activePillar + 1} / 0{excellencePillars.length}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white mb-1">
                            {currentPillar.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-[#B8860B] dark:text-[#FBBF24]">
                            {currentPillar.desc}
                          </p>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                          {currentPillar.detailedText}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-2 pt-1 pb-2">
                          {currentPillar.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Controls & Navigation */}
                      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                        {/* Action Link */}
                        <Link
                          href={currentPillar.actionHref}
                          className="inline-flex items-center gap-2 bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white dark:hover:text-[#0A1628] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm border border-[#0A1628] dark:border-[#FBBF24] active:scale-95"
                        >
                          <span>{currentPillar.actionText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {/* Slide Navigation Controls */}
                        <div className="flex items-center gap-3">
                          {/* Left Arrow */}
                          <button
                            type="button"
                            onClick={handlePrevPillar}
                            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-[#0A1628] hover:text-white dark:hover:bg-[#FBBF24] dark:hover:text-[#0A1628] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                            aria-label="Previous Program"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          {/* Pagination Dots */}
                          <div className="flex items-center gap-1.5" role="tablist" aria-label="Program slide pagination">
                            {excellencePillars.map((item, idx) => {
                              const isDotActive = idx === activePillar;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => goToPillar(idx)}
                                  role="tab"
                                  aria-selected={isDotActive}
                                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    isDotActive
                                      ? 'w-7 bg-[#B8860B] dark:bg-[#FBBF24]'
                                      : 'w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                                  }`}
                                  aria-label={`Go to ${item.title}`}
                                />
                              );
                            })}
                          </div>

                          {/* Right Arrow */}
                          <button
                            type="button"
                            onClick={handleNextPillar}
                            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-[#0A1628] hover:text-white dark:hover:bg-[#FBBF24] dark:hover:text-[#0A1628] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                            aria-label="Next Program"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Pause / Play Button */}
                          <button
                            type="button"
                            onClick={() => setIsPillarPaused((prev) => !prev)}
                            className="w-8 h-8 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label={isPillarPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
                            title={isPillarPaused ? 'Play' : 'Pause'}
                          >
                            {isPillarPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Preview Thumbnail Strip (Allows parents to see and jump to any program) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
              {excellencePillars.map((item, idx) => {
                const isActive = idx === activePillar;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToPillar(idx)}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-white dark:text-[#0A1628] border-[#0A1628] dark:border-[#FBBF24] shadow-md scale-[1.02]'
                        : 'bg-white dark:bg-[#0A1628] text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isActive
                            ? 'bg-[#D4A853] dark:bg-[#0A1628] text-[#0A1628] dark:text-[#FBBF24]'
                            : 'bg-[#D4A853]/15 text-[#B8860B] dark:text-[#FBBF24]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#0A1628]'
                            : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {item.num}
                      </span>
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                        isActive ? 'text-[#D4A853] dark:text-[#0A1628]' : 'text-[#0A1628] dark:text-white'
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-[11px] line-clamp-1 mt-0.5 ${
                        isActive ? 'text-white/80 dark:text-[#0A1628]/80' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* HALL OF FAME / PROVEN RESULTS SNAPSHOT */}
        <section className="py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#050D1A] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                PROVEN ACADEMIC DISTINCTION
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                Hall of Distinction
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                Uncompromising scholastic consistency across state-level board exams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hallOfFame.map((student, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl text-center flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4A853] mb-4 shadow-md bg-slate-100 dark:bg-black/40">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 dark:border-[#D4A853]/40 font-bold mb-2">
                    {student.badge}
                  </span>
                  <h4 className="font-bold text-[#0A1628] dark:text-white text-lg">{student.name}</h4>
                  <p className="text-[#B8860B] dark:text-[#FBBF24] font-black text-xl font-[family-name:var(--font-heading)] mt-1">
                    {student.score}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{student.exam}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white hover:text-[#B8860B] dark:hover:text-[#FBBF24] bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/15 px-6 py-3 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-colors"
              >
                <span>View All Verified Student Achievements</span>
                <ChevronRight className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ACADEMIC CTA BANNER */}
        <section className="py-16 sm:py-20 bg-[#FDFBF7] dark:bg-[#050D1A] transition-colors duration-200">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-xs font-bold uppercase tracking-wider mb-4">
                ADMISSIONS OPEN 2026–27
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white mb-6">
                Give Your Child the Valmeeki Academic Edge.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 font-normal">
                Limited seats per section to ensure focused teacher mentorship and personalized doubt resolution.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center gap-2 border border-[#0A1628] dark:border-[#FBBF24]"
                >
                  <span>Apply for Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919440468838"
                  className="bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold px-7 py-4 rounded-xl border border-slate-200 dark:border-white/15 shadow-sm transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Call Admissions: +91 94404 68838</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
