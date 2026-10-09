'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  MoveDown,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Trophy,
  Award,
  Film,
  CheckCircle2,
  ShieldCheck,
  Star,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';

interface DualHeroSectionProps {
  onOpenAdmissions: () => void;
}

export default function DualHeroSection({ onOpenAdmissions }: DualHeroSectionProps) {
  // 0: Cinematic Video Hero | 1: Proven Results Hero
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Touch Swipe Handling for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      // Swiped Left -> go to next slide
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> go to prev slide
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleScrollDown = () => {
    const target = document.getElementById('star-achievers') || document.getElementById('signature-results');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Slide animation variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-[#050D1A] text-white select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* =======================================================================
          TOP FLOATING DUAL SLIDE SWITCHER TABS
      ======================================================================= */}
      <div className="absolute top-24 sm:top-28 left-0 right-0 z-30 flex items-center justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-1.5 p-1 rounded-full bg-[#0A1628]/80 backdrop-blur-xl border border-[#D4A853]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          {/* Tab 0: Cinematic Video */}
          <button
            type="button"
            onClick={() => {
              setDirection(-1);
              setActiveSlide(0);
            }}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeSlide === 0
                ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#050D1A] shadow-md shadow-[#D4A853]/30 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>01 Campus Film</span>
          </button>

          {/* Tab 1: Hall of Excellence Results */}
          <button
            type="button"
            onClick={() => {
              setDirection(1);
              setActiveSlide(1);
            }}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeSlide === 1
                ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#050D1A] shadow-md shadow-[#D4A853]/30 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>02 Proven Results</span>
          </button>
        </div>
      </div>

      {/* =======================================================================
          SLIDE CONTAINER WITH ANIMATE PRESENCE (HORIZONTAL SLIDING)
      ======================================================================= */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {activeSlide === 0 ? (
          /* ===================================================================
              SLIDE 1: CINEMATIC CAMPUS VIDEO HERO
          =================================================================== */
          <motion.div
            key="slide-video"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full min-h-screen flex flex-col justify-between pt-36 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 z-10"
          >
            {/* Background Video Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                poster="/images/campus/campus_drone_aerial.jpg"
                className="object-cover w-full h-full scale-105 opacity-85 brightness-95 contrast-105 filter"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              {/* Overlays for Rich Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A]/95 via-[#050D1A]/75 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-[#050D1A]/70" />
            </div>

            {/* Video Controls (Audio Toggle & Pause) */}
            <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSound}
                className="p-2 sm:p-2.5 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white/90 hover:text-[#D4A853] border border-[#D4A853]/40 backdrop-blur-md shadow-lg transition-all cursor-pointer"
                title={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
                aria-label={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-[#D4A853]" />}
              </button>

              <button
                type="button"
                onClick={togglePlayback}
                className="p-2 sm:p-2.5 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white/90 hover:text-[#D4A853] border border-[#D4A853]/40 backdrop-blur-md shadow-lg transition-all cursor-pointer"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white/70" /> : <Play className="w-4 h-4 text-[#D4A853]" />}
              </button>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Bold Cinematic Statement */}
                <div className="lg:col-span-7 xl:col-span-8 text-left space-y-6">
                  {/* Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap items-center gap-2.5"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 text-[#D4A853] text-[11px] sm:text-xs font-black tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                      ESTD. 1999 • KADIRI
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                      <Film className="w-3.5 h-3.5 text-[#FBBF24]" />
                      OFFICIAL CAMPUS TOUR FILM
                    </span>
                  </motion.div>

                  {/* Primary Cinematic Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] leading-[0.98] tracking-tight uppercase text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
                      <span>BUILDING STRONG</span> <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
                        FOUNDATIONS.
                      </span> <br />
                      <span>CREATING BRIGHTER FUTURES.</span>
                    </h1>
                  </motion.div>

                  {/* Supporting Paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-white/85 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-2xl leading-relaxed"
                  >
                    For over <strong className="text-white font-bold">28 years</strong>, Sree Valmeeki High School has nurtured knowledge, discipline, and confidence — preparing students for school, competitive examinations, and life beyond the classroom.
                  </motion.p>

                  {/* Action CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
                  >
                    <button
                      type="button"
                      onClick={onOpenAdmissions}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#050D1A] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[0_10px_35px_rgba(212,168,83,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      <span>Apply For Admission 2026–27</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/25 backdrop-blur-md transition-all cursor-pointer hover:border-white/50"
                    >
                      <span>Slide To Proven Results →</span>
                    </button>
                  </motion.div>
                </div>

                {/* Right Column: Floating Campus Quality Card */}
                <div className="lg:col-span-5 xl:col-span-4 hidden lg:block">
                  <div className="p-6 rounded-3xl bg-[#0A1628]/85 border border-[#D4A853]/40 shadow-2xl backdrop-blur-xl space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#D4A853]" />
                        <span className="text-xs font-black uppercase tracking-wider text-white">
                          ADMISSIONS 2026–27
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/20 px-2 py-0.5 rounded-full border border-[#10B981]/40">
                        Open Now
                      </span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                        <span className="text-white/85">Nursery to Class 10 (AP State Board)</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                        <span className="text-white/85">Integrated IIT Foundation & Olympiad Wings</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                        <span className="text-white/85">4K Smart Digital Classrooms & Science Labs</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                        <span className="text-white/85">Safe GPS-Monitored Bus Fleet across Kadiri</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenAdmissions}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#050D1A] font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer shadow-md"
                      >
                        Enquire For Seat Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quick Strip on Video Slide */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 border-t border-white/10 hidden md:flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-6">
                <span>ESTD. 1999 • KADIRI</span>
                <span>•</span>
                <span>ENGLISH MEDIUM</span>
                <span>•</span>
                <span>100% BOARD PASS BENCHMARK</span>
                <span>•</span>
                <span>TOWN 1ST & 2ND RECORD RANKS</span>
              </div>
              <div className="text-[#D4A853] font-bold">
                Slide 01 of 02 • Campus Film
              </div>
            </div>
          </motion.div>
        ) : (
          /* ===================================================================
              SLIDE 2: CURRENT RESULTS & HALL OF EXCELLENCE HERO
          =================================================================== */
          <motion.div
            key="slide-results"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full min-h-screen flex flex-col justify-between pt-36 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 z-10"
          >
            {/* Background Photographic & Ambient Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/school/school-event-3.jpg"
                className="object-cover w-full h-full scale-105 opacity-40 brightness-90 contrast-110 filter"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-[#050D1A]/70" />

              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1E3A8A]/20 rounded-full blur-3xl" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Results Headline & Proof */}
                <div className="lg:col-span-7 xl:col-span-7 text-left space-y-6">
                  {/* Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap items-center gap-2.5 sm:gap-3"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] text-[11px] sm:text-xs font-black tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                      EST. 1999 • KADIRI
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                      <Trophy className="w-3.5 h-3.5 text-[#FBBF24]" />
                      27 YEARS OF EXCELLENCE
                    </span>
                  </motion.div>

                  {/* Headline: RESULTS THAT SPEAK FOR US. */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] leading-[0.98] tracking-tight uppercase text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
                      <span>RESULTS</span> <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
                        THAT SPEAK
                      </span> <br />
                      <span>FOR US.</span>
                    </h1>
                  </motion.div>

                  {/* Punchline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-white/80 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-xl leading-relaxed"
                  >
                    <strong className="text-white font-bold">27 Years.</strong> Generations of Students. A Legacy of Achievement in Kadiri.
                  </motion.p>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
                  >
                    <a
                      href="#star-achievers"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#050D1A] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[0_10px_35px_rgba(212,168,83,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      <span>Explore Our Achievements</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                    <button
                      type="button"
                      onClick={prevSlide}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/25 backdrop-blur-md transition-all cursor-pointer hover:border-white/50"
                    >
                      <span>← Slide To Campus Video</span>
                    </button>
                  </motion.div>
                </div>

                {/* Right Column: Editorial Topper Spotlight Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="lg:col-span-5 xl:col-span-5 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A853]/25 via-transparent to-[#1E3A8A]/30 rounded-3xl blur-2xl transform -rotate-1 pointer-events-none" />

                  <div className="relative bg-[#0A1628]/90 border border-[#D4A853]/40 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
                    <div className="absolute -top-10 -right-10 text-[120px] font-black font-[family-name:var(--font-heading)] text-white/[0.03] select-none pointer-events-none">
                      #1
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 flex items-center justify-center text-[#D4A853]">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase font-black tracking-widest text-[#D4A853]">
                            Verified Board Honor
                          </span>
                          <span className="block text-xs font-bold text-white/90">
                            State & District Benchmark
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-md bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[11px] font-black uppercase tracking-wider">
                        SSC Board
                      </span>
                    </div>

                    {/* Student Portrait */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden mb-4 border border-white/15 bg-[#0F2044]">
                      <Image
                        src="/extracted/star_achievers/janani_face.jpg"
                        alt="D. Janani - Sree Valmeeki School Town 1st Ranker"
                        fill
                        priority
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-90" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#D4A853] text-[#050D1A] text-[10px] font-black tracking-widest uppercase mb-1">
                            Town 1st Rank
                          </span>
                          <h2 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] drop-shadow-md">
                            D. Janani
                          </h2>
                          <span className="text-xs text-white/80 font-medium">SSC 2026 Town Record</span>
                        </div>

                        <div className="text-right">
                          <span className="block text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#FBBF24] leading-none">
                            595
                          </span>
                          <span className="text-[10px] text-white/70 uppercase tracking-widest">/ 600</span>
                        </div>
                      </div>
                    </div>

                    {/* Mini Highlights Ticker */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
                      <div className="p-2 rounded-xl bg-white/[0.04]">
                        <span className="block text-base sm:text-lg font-black text-white font-[family-name:var(--font-heading)]">
                          99.2%
                        </span>
                        <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">
                          Aggregate
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04]">
                        <span className="block text-base sm:text-lg font-black text-[#D4A853] font-[family-name:var(--font-heading)]">
                          100/100
                        </span>
                        <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">
                          Maths & Sci
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04]">
                        <span className="block text-base sm:text-lg font-black text-white font-[family-name:var(--font-heading)]">
                          Kadiri
                        </span>
                        <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">
                          Town Top
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 border-t border-white/10 hidden md:flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-6">
                <span>ESTD. 1999 • KADIRI</span>
                <span>•</span>
                <span>HALL OF EXCELLENCE</span>
                <span>•</span>
                <span>TOWN 1ST & 2ND RANKS</span>
                <span>•</span>
                <span>200+ DISTINCTION ACHIEVERS</span>
              </div>
              <div className="text-[#D4A853] font-bold">
                Slide 02 of 02 • Proven Results
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =======================================================================
          FLOATING LEFT & RIGHT SLIDE NAVIGATION ARROWS
      ======================================================================= */}
      {/* Left Arrow (Slide Left) */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A1628]/75 hover:bg-[#D4A853] text-white hover:text-[#050D1A] border border-[#D4A853]/40 backdrop-blur-xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
        title={activeSlide === 0 ? 'Switch to Results' : 'Switch to Campus Film'}
        aria-label="Previous Hero Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right Arrow (Slide Right) */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A1628]/75 hover:bg-[#D4A853] text-white hover:text-[#050D1A] border border-[#D4A853]/40 backdrop-blur-xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
        title={activeSlide === 0 ? 'Switch to Results' : 'Switch to Campus Film'}
        aria-label="Next Hero Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* =======================================================================
          BOTTOM FLOATING DOWNWARD SLIDE BUTTON ("SLIDE DOWN TO EXPLORE")
      ======================================================================= */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex items-center justify-center pointer-events-none">
        <button
          type="button"
          onClick={handleScrollDown}
          className="pointer-events-auto group inline-flex flex-col items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A1628]/60 hover:bg-[#0A1628]/90 border border-white/10 hover:border-[#D4A853]/60 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg"
        >
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white/70 group-hover:text-[#FBBF24] transition-colors">
            Slide Down To Explore
          </span>
          <MoveDown className="w-4 h-4 text-[#D4A853] animate-bounce" />
        </button>
      </div>
    </div>
  );
}
