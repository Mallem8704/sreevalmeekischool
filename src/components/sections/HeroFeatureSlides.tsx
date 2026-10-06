'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Users,
  Award,
  Trophy,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Play,
} from 'lucide-react';

interface Slide {
  id: string;
  action: string; // e.g. "Learn.", "Lead.", "Excel.", "Thrive."
  pillar: string;
  tagline: string;
  headline: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
  icon: typeof BookOpen;
  color: string;
}

const slides: Slide[] = [
  {
    id: 'learn',
    action: 'Learn.',
    pillar: 'Concept-Driven Academic Mastery',
    tagline: 'SMART DIGITAL CLASSROOMS & EXPERIENTIAL LABS',
    headline: 'Igniting Inquiring Minds Through Conceptual Understanding',
    description:
      'We transcend rote memorization with digital interactive boards, hands-on science laboratories, and structured concept mastery from Nursery through Class 10. Every child develops critical thinking and deep subject comprehension.',
    highlights: [
      'Interactive Smart Digi-Boards in Every Classroom',
      'Hands-On Physics, Chemistry & Biology Laboratories',
      'Personalized Academic Mentorship & Remedial Care',
    ],
    metricLabel: 'Board Exam Record',
    metricValue: '100% Pass Rate',
    image: '/images/school/school-event-9.jpg',
    icon: BookOpen,
    color: '#D4A853',
  },
  {
    id: 'lead',
    action: 'Lead.',
    pillar: 'Character, Ethics & Public Speaking',
    tagline: 'DAILY MORNING ASSEMBLY STAGE & ENGLISH IMMERSION',
    headline: 'Molding Articulate Voices & Ethical Leaders',
    description:
      'Through daily morning assembly stage speaking, debate forums, 100% English communicative immersion, and moral character education, our students develop confidence, composure, and ethical judgment.',
    highlights: [
      'Daily Stage Speaking & Assembly Leadership',
      'Spoken English Fluency & Accent Cultivation',
      'Values-Based Moral Education & Civic Responsibility',
    ],
    metricLabel: 'Communication Focus',
    metricValue: 'Daily Stage Presence',
    image: '/images/school/school-event-4.jpg',
    icon: Users,
    color: '#E8C97D',
  },
  {
    id: 'excel',
    action: 'Excel.',
    pillar: 'IIT-JEE, NEET & Olympiad Foundation',
    tagline: 'EARLY COMPETITIVE EXCELLENCE FROM CLASS 6',
    headline: 'Early Foundation for National Competitive Benchmarks',
    description:
      'Our integrated foundation program trains students in advanced mathematics, analytical reasoning, and scientific methodology. Students gain the competitive edge needed for IIT-JEE, NEET, and national Olympiads.',
    highlights: [
      'Structured IIT-JEE & NEET Foundation Curriculum',
      'National & State Science / Math Olympiad Training',
      'Weekly Problem-Solving & Analytical Reasoning Sessions',
    ],
    metricLabel: 'Academic Legacy',
    metricValue: '27 Years Track Record',
    image: '/images/school/school-event-1.jpg',
    icon: Award,
    color: '#D4A853',
  },
  {
    id: 'thrive',
    action: 'Thrive.',
    pillar: 'Sports, Arts & Holistic Well-Being',
    tagline: 'VALMEEKI PREMIER LEAGUE & CULTURAL ACADEMY',
    headline: 'Champions on the Field, Holistic Achievers in Life',
    description:
      'Sprawling sports facilities featuring cricket, volleyball, athletics, martial arts, yoga, and classical dance build physical endurance, team resilience, and creative expression in every student.',
    highlights: [
      'Valmeeki Premier League (VPL) Annual Sports Meet',
      'Yoga, Athletics, Cricket & Volleyball Coaching',
      'Grand Annual Day Celebrations & Performing Arts',
    ],
    metricLabel: 'Sports & Arts',
    metricValue: 'State-Level Trophies',
    image: '/images/school/school-event-2.jpg',
    icon: Trophy,
    color: '#E8C97D',
  },
];

export default function HeroFeatureSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 6000; // 6s per slide

  const currentSlide = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  // Autoplay timer with progress
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section
      id="philosophy"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0E1E36] to-[#0A1628] text-white overflow-hidden border-t border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#152D5E]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4A853]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: The exact words requested by the user */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SREE VALMEEKI PROMISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-3 sm:mb-4"
          >
            Building Strong Foundations.{' '}
            <span className="block bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              Creating Brighter Futures.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-base sm:text-lg text-white/80"
          >
            <span className="font-semibold text-white/90">Nurturing Students to:</span>
            <span className="font-bold text-[#D4A853] font-[family-name:var(--font-heading)] text-xl sm:text-2xl border-b-2 border-[#D4A853] pb-0.5">
              {currentSlide.action}
            </span>
          </motion.div>
        </div>

        {/* Interactive Slide Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const Icon = slide.icon;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setProgress(0);
                }}
                className={`group relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-[#152D5E]/90 to-[#0A1628]/95 border-[#D4A853] shadow-lg shadow-[#D4A853]/10 ring-1 ring-[#D4A853]/50'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-[#D4A853] text-[#0A1628]'
                          : 'bg-white/10 text-white/70 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isActive ? 'text-[#D4A853]' : 'text-white/60'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <span
                    className={`font-bold font-[family-name:var(--font-heading)] text-sm sm:text-base ${
                      isActive ? 'text-white' : 'text-white/80'
                    }`}
                  >
                    {slide.action}
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-white/60 line-clamp-1">
                  {slide.pillar}
                </p>

                {/* Progress bar inside active tab */}
                {isActive && (
                  <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4A853] to-[#FFF5DC] transition-all duration-75 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Slide Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A1628]/85 border border-white/20 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Rich Content */}
              <div className="lg:col-span-7 p-5 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4">
                    <span>{currentSlide.tagline}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] leading-snug text-white mb-3 sm:mb-4">
                    {currentSlide.headline}
                  </h3>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                    {currentSlide.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 mb-8">
                    {currentSlide.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls & CTAs */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-[11px] text-white/50 uppercase tracking-wider block">
                        {currentSlide.metricLabel}
                      </span>
                      <span className="text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] text-[#D4A853]">
                        {currentSlide.metricValue}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#admissions"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:brightness-105 active:scale-95 transition-all"
                    >
                      <span>Enquire for Admissions</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <Link
                      href="/academics"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Slide Real Photo with Glass Badges */}
              <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full">
                <div className="relative w-full h-full min-h-[340px]">
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-transparent to-transparent lg:block hidden" />

                  {/* Corner Badge */}
                  <div className="absolute top-5 right-5 backdrop-blur-md bg-[#0A1628]/75 border border-white/20 px-3.5 py-1.5 rounded-xl text-white shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
                    <span className="text-xs font-semibold text-white/90">
                      Real Campus Life • Kadiri
                    </span>
                  </div>

                  {/* Bottom Image Overlay Pill */}
                  <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-[#0A1628]/80 border border-white/20 p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#D4A853] font-bold uppercase tracking-wider block">
                          VALMEEKI PEDAGOGY
                        </span>
                        <span className="text-sm font-bold text-white">
                          Nurturing Students to: {currentSlide.action}
                        </span>
                      </div>
                      <span className="text-xs text-white/60">
                        0{currentIndex + 1} / 0{slides.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Prev / Next Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
