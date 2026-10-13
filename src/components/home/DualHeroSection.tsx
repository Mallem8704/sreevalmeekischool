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
  const containerRef = useRef<HTMLDivElement>(null);

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
    const target = document.getElementById('about');
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

  // Pause video when scrolled out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        } else if (entry.isIntersecting && isPlaying && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying]);

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
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050D1A] text-white select-none pt-[56px] sm:pt-[60px] md:pt-0 md:min-h-screen"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* =======================================================================
          TOP FLOATING DUAL SLIDE SWITCHER & CONTROLS (UNIFIED HARMONIOUS BAR)
      ======================================================================= */}
      <div className="hidden md:flex absolute top-20 sm:top-24 left-0 right-0 z-30 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
        {/* Left: Subtle Tour Status Indicator */}
        <div className="hidden md:flex items-center gap-2 pointer-events-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-[#D4A853]/30 text-[#D4A853] text-[10px] sm:text-[11px] font-black tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-[#D4A853]" />
            {activeSlide === 0 ? 'SLIDE 01 • CAMPUS FILM' : 'SLIDE 02 • PROVEN RESULTS'}
          </span>
        </div>

        {/* Center: Slide Switcher Tabs with integrated Chevron controls */}
        <div className="pointer-events-auto inline-flex items-center gap-1 p-1 rounded-full bg-[#0A1628]/85 backdrop-blur-xl border border-[#D4A853]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] mx-auto md:mx-0">
          <button
            type="button"
            onClick={prevSlide}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer active:scale-95"
            title="Previous Slide"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              setDirection(-1);
              setActiveSlide(0);
            }}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeSlide === 0
                ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#050D1A] shadow-md shadow-[#D4A853]/30 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Film className="w-3 h-3" />
            <span>01 Campus Film</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setDirection(1);
              setActiveSlide(1);
            }}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeSlide === 1
                ? 'bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#050D1A] shadow-md shadow-[#D4A853]/30 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Trophy className="w-3 h-3" />
            <span>02 Proven Results</span>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer active:scale-95"
            title="Next Slide"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Sound & Playback Controls for Video */}
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {activeSlide === 0 && (
            <>
              <button
                type="button"
                onClick={toggleSound}
                className="p-1.5 sm:p-2 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white/90 hover:text-[#D4A853] border border-[#D4A853]/40 backdrop-blur-md shadow-md transition-all cursor-pointer active:scale-95"
                title={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
                aria-label={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4A853]" />}
              </button>

              <button
                type="button"
                onClick={togglePlayback}
                className="p-1.5 sm:p-2 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white/90 hover:text-[#D4A853] border border-[#D4A853]/40 backdrop-blur-md shadow-md transition-all cursor-pointer active:scale-95"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-white/70" /> : <Play className="w-3.5 h-3.5 text-[#D4A853]" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* =======================================================================
          SLIDE CONTAINER WITH ANIMATE PRESENCE (HORIZONTAL SLIDING)
      ======================================================================= */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {activeSlide === 0 ? (
          /* ===================================================================
              SLIDE 1: BLUE MOON STYLE EXPANSIVE CAMPUS HERO
          =================================================================== */
          <motion.div
            key="slide-video"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full z-10"
          >
            {/* 16:9 Native Aspect Ratio on Mobile (Zero Crop, 100% Video Visible), Full Viewport on Desktop */}
            <div className="relative w-full aspect-video sm:aspect-[16/9] md:aspect-auto md:min-h-screen md:h-screen md:flex md:flex-col md:justify-end md:pb-20 md:px-12 overflow-hidden">
              {/* Background Video Layer with Instant Poster First */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <Image
                  src="/hero-poster.webp"
                  alt="Sree Valmeeki School Campus"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover w-full h-full md:scale-105 opacity-90 brightness-100 contrast-105"
                />
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  className="object-cover w-full h-full md:scale-105 opacity-90 brightness-100 contrast-105 filter"
                >
                  <source src="/hero-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
                  <source src="/hero-desktop.mp4" type="video/mp4" />
                </video>

                {/* Overlays: Desktop Scrim vs Mobile Subtle Bottom Scrim (Exact Blue Moon: 180deg transparent to dark) */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#050D1A]/85 via-[#050D1A]/40 to-transparent" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#050D1A]/95 via-transparent to-black/20" />
                <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-[#021129]/95 via-[#021129]/30 to-transparent" />
              </div>

              {/* Mobile Top-Right Audio & Playback Controls inside 16:9 video frame */}
              <div className="block md:hidden absolute top-2.5 right-2.5 z-20 pointer-events-auto">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="p-1.5 rounded-full bg-[#0A1628]/85 text-white hover:text-[#FBBF24] border border-[#FBBF24]/40 backdrop-blur-md shadow-md active:scale-95 transition-all cursor-pointer"
                    title={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
                    aria-label={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#FBBF24]" />}
                  </button>
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="p-1.5 rounded-full bg-[#0A1628]/85 text-white hover:text-[#FBBF24] border border-[#FBBF24]/40 backdrop-blur-md shadow-md active:scale-95 transition-all cursor-pointer"
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-white/70" /> : <Play className="w-3.5 h-3.5 text-[#FBBF24]" />}
                  </button>
                </div>
              </div>

              {/* Mobile Mini-Copy Overlay inside 16:9 frame (Exact Blue Moon .hero-mini-copy) */}
              <div className="block md:hidden absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 z-20 pointer-events-auto text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-0.5 sm:space-y-1"
                >
                  <span className="block text-[#FBBF24] font-black text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    ADMISSIONS OPEN 2026–27
                  </span>
                  <h1 className="block text-white font-black text-base sm:text-xl font-[family-name:var(--font-heading)] leading-none tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Sree Valmeeki High School
                  </h1>
                  <p className="block text-[#EEF6FF] font-bold text-[10px] sm:text-xs leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    Nursery to Class 10 • AP State Board • Kadiri
                  </p>
                  <div className="pt-1.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onOpenAdmissions}
                      className="px-4 py-1.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-lg shadow-[#FBBF24]/30 active:scale-95 transition-all cursor-pointer"
                    >
                      Enroll Now
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-white/25 backdrop-blur-md active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Trophy className="w-3 h-3 text-[#FBBF24]" />
                      <span>02 Results →</span>
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Desktop Hero Block: Anchored in Lower-Left with Wide Open Campus */}
              <div className="hidden md:block relative z-10 w-full max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl text-left space-y-3 sm:space-y-4"
                >
                  {/* Yellow/Gold Eyebrow Badge (Exact Blue Moon Style) */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#FBBF24] font-black text-xs sm:text-sm tracking-[0.2em] uppercase drop-shadow-md">
                      ADMISSIONS OPEN 2026–27
                    </span>
                  </div>

                  {/* Main Institution Title (Bold, Monumental, Crisp) */}
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-[family-name:var(--font-heading)] text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                    Sree Valmeeki <br className="hidden sm:inline" />
                    <span className="text-white">High School</span>
                  </h1>

                  {/* Subtitle / Focus Areas (Exact Blue Moon Style) */}
                  <p className="text-sm sm:text-base md:text-lg text-white/95 font-bold tracking-wide drop-shadow-md">
                    Building Strong Foundations • Creating Brighter Futures
                  </p>

                  <p className="text-xs sm:text-sm text-white/80 font-semibold tracking-wider uppercase drop-shadow-sm">
                    Nursery to Class 10 • AP State Board • IIT Foundation &amp; Olympiad Academy • Kadiri
                  </p>

                  {/* Action CTA Buttons (Vibrant Gold Rounded Pill like Blue Moon) */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={onOpenAdmissions}
                      className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FBBF24]/30 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
                    >
                      Enroll Now
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/25 backdrop-blur-md hover:border-white/50 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Trophy className="w-4 h-4 text-[#FBBF24]" />
                      <span>Proven Results →</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Sub-Hero Bar (Directly below 16:9 video frame on mobile) */}
            <div className="flex md:hidden items-center justify-between px-4 py-2.5 bg-[#081220] border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-white/90 tracking-wide">
                  28 Yrs of Excellence • Kadiri
                </span>
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[#FBBF24] text-[11px] font-black uppercase tracking-wider border border-[#FBBF24]/30 active:scale-95 transition-all cursor-pointer"
              >
                <Trophy className="w-3 h-3 text-[#FBBF24]" />
                <span>02 Results →</span>
              </button>
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
            className="relative w-full min-h-[580px] md:min-h-screen flex flex-col justify-between pt-4 sm:pt-16 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 z-10"
          >
            {/* Mobile Top Switcher for Slide 2 */}
            <div className="flex md:hidden items-center justify-between px-3 py-2 -mx-4 -mt-4 mb-4 bg-[#081220] border-b border-white/10 text-xs">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FBBF24] text-[11px] font-black uppercase tracking-wider border border-[#FBBF24]/30 active:scale-95 cursor-pointer"
              >
                <Film className="w-3 h-3 text-[#FBBF24]" />
                <span>← 01 Campus Film</span>
              </button>
              <span className="text-[10px] font-bold text-[#D4A853] uppercase tracking-wider">
                Slide 02 • Proven Results
              </span>
            </div>
            {/* Background Photographic & Ambient Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <Image
                src="/images/school/school-event-3.jpg"
                alt="Sree Valmeeki School Celebration"
                fill
                sizes="100vw"
                className="object-cover w-full h-full scale-105 opacity-40 brightness-90 contrast-110 filter"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-[#050D1A]/70" />

              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1E3A8A]/20 rounded-full blur-3xl" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Results Headline & Proof */}
                <div className="lg:col-span-7 xl:col-span-7 text-left space-y-5">
                  {/* Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap items-center gap-2.5 sm:gap-3"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                      EST. 1999 • KADIRI
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                      <Trophy className="w-3.5 h-3.5 text-[#FBBF24]" />
                      28 YEARS OF EXCELLENCE
                    </span>
                  </motion.div>

                  {/* Headline: RESULTS THAT SPEAK FOR US. */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black font-[family-name:var(--font-heading)] leading-[1.06] tracking-tight uppercase text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] max-w-3xl">
                      <span>RESULTS THAT</span> <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
                        SPEAK FOR US.
                      </span>
                    </h1>
                  </motion.div>

                  {/* Punchline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-white/80 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-xl leading-relaxed"
                  >
                    <strong className="text-white font-bold">28 Years.</strong> Generations of Students. A Legacy of Achievement in Kadiri.
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
                        sizes="(max-width: 640px) 100vw, 420px"
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
      {/* Left Arrow (Slide Left) - Displayed only on ultra-wide screens where side margins are spacious */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden 2xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0A1628]/75 hover:bg-[#D4A853] text-white hover:text-[#050D1A] border border-[#D4A853]/40 backdrop-blur-xl items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
        title={activeSlide === 0 ? 'Switch to Results' : 'Switch to Campus Film'}
        aria-label="Previous Hero Slide"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right Arrow (Slide Right) - Displayed only on ultra-wide screens where side margins are spacious */}
      <button
        type="button"
        onClick={nextSlide}
        className="hidden 2xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0A1628]/75 hover:bg-[#D4A853] text-white hover:text-[#050D1A] border border-[#D4A853]/40 backdrop-blur-xl items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
        title={activeSlide === 0 ? 'Switch to Results' : 'Switch to Campus Film'}
        aria-label="Next Hero Slide"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* =======================================================================
          BOTTOM FLOATING DOWNWARD SLIDE BUTTON ("SLIDE DOWN TO EXPLORE")
      ======================================================================= */}
      <div className="hidden md:flex absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 items-center justify-center pointer-events-none">
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

      {/* =======================================================================
          PINNED RIGHT EDGE VERTICAL TAB (BLUE MOON SIGNATURE CONVERSION ELEMENT)
      ======================================================================= */}
      <button
        type="button"
        onClick={onOpenAdmissions}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#0A1628]/95 hover:bg-[#FBBF24] text-white hover:text-[#0A1628] border-l border-y border-[#D4A853]/50 rounded-l-xl py-3.5 px-2 shadow-2xl transition-all cursor-pointer group flex-col items-center gap-1.5 active:scale-95"
        title="Open Admissions Enquiry"
        aria-label="Enroll Now"
      >
        <span className="text-[10px] font-black tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 group-hover:tracking-wider transition-all">
          Enroll Now
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-[#FBBF24] group-hover:text-[#0A1628] transition-colors" />
      </button>
    </div>
  );
}
