'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

/**
 * Replays the intro from anywhere in the application (e.g. Footer).
 * By default when replayed from footer, it plays the full campus video film.
 */
export const replayIntroVideo = (mode: 'cinematic' | 'video' = 'video') => {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.removeItem('svhs_intro_seen');
      sessionStorage.setItem('svhs_intro_mode', mode);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent('svhs_replay_intro', { detail: { mode } }));
  }
};

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [mode, setMode] = useState<'cinematic' | 'video'>('cinematic');
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(3);
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem('svhs_intro_seen', 'true');
    } catch {
      // storage unavailable
    }
    onComplete();
  }, [onComplete]);

  // Check if replayed specifically in video mode
  useEffect(() => {
    try {
      const savedMode = sessionStorage.getItem('svhs_intro_mode');
      if (savedMode === 'video') {
        setMode('video');
        sessionStorage.removeItem('svhs_intro_mode');
      }
    } catch {
      // ignore
    }
  }, []);

  // Keyboard accessibility: Escape, Space, or Enter instantly enters the site
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Cinematic timer (strict 2.2s auto-dismiss with guaranteed setTimeout fallback)
  useEffect(() => {
    if (mode !== 'cinematic') return;

    const autoDismissTimer = setTimeout(() => {
      handleFinish();
    }, 2200);

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => Math.max(0, prev - 1));
    }, 700);

    return () => {
      clearTimeout(autoDismissTimer);
      clearInterval(interval);
    };
  }, [mode, handleFinish]);

  // Video playback tracking
  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(pct);
    }
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <motion.div
      key="cinematic-intro-root"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      onClick={handleFinish}
      className="fixed inset-0 z-[100] bg-[#050D1A] flex items-center justify-center overflow-hidden select-none cursor-pointer"
      aria-label="Welcome to Sree Valmeeki School - Click anywhere to enter website"
    >
      {/* Top Right Instant Skip / Enter Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleFinish();
        }}
        className="absolute top-4 right-4 z-50 px-4 py-2 rounded-full bg-white/15 hover:bg-[#D4A853] hover:text-[#0A1628] text-white border border-white/20 text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
      >
        <span>Enter Website</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* =========================================================================
          MODE A: THE PRESTIGE CINEMATIC BRAND REVEAL (Default)
      ========================================================================= */}
      {mode === 'cinematic' && (
        <>
          {/* Ambient Lighting & Luxury Glow */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,_#0F2044_0%,_#07101E_60%,_#050D1A_100%] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4A853]/12 rounded-full blur-[140px] pointer-events-none" />

          {/* Subtle Rotating Astronomical / Compass Ring for Academic Prestige */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border border-[#D4A853]/15 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full border border-white/5 pointer-events-none animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />


          {/* Centerpiece: Sree Valmeeki School Prestige Heraldic Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-2xl"
          >
            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/35 text-[#D4A853] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-ping" />
              <span>ESTD. 1999 • KADIRI, AP</span>
            </motion.div>

            {/* School Crest / Emblem Medallion */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#D4A853]/50 bg-[#D4A853]/10 shadow-[0_0_60px_rgba(212,168,83,0.35)] flex items-center justify-center p-2 mb-4"
            >
              <Image
                src="/images/logo/valmeeki_emblem.svg"
                alt="Sree Valmeeki High School Emblem"
                fill
                sizes="112px"
                className="object-contain p-2 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                priority
                unoptimized
              />
            </motion.div>

            {/* Main Institution Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF5DC] to-[#E8C97D] drop-shadow-[0_4px_24px_rgba(212,168,83,0.3)]"
            >
              SREE VALMEEKI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="font-[family-name:var(--font-body)] text-xs sm:text-sm md:text-base text-slate-300 tracking-[0.25em] uppercase font-semibold mt-1"
            >
              HIGH SCHOOL &amp; IIT FOUNDATION ACADEMY
            </motion.p>

            {/* The 3 Core Academic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center justify-center gap-2.5 sm:gap-4 mt-5 text-[11px] sm:text-xs font-bold tracking-widest text-slate-400"
            >
              <span className="text-white/90">EDUCATION</span>
              <span className="text-[#D4A853] text-[8px] font-black">◆</span>
              <span className="text-white/90">DISCIPLINE</span>
              <span className="text-[#D4A853] text-[8px] font-black">◆</span>
              <span className="text-white/90">CONFIDENCE</span>
            </motion.div>

            {/* 28-Year Legacy Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-4 flex items-center gap-1.5 text-xs text-[#D4A853] font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
              <span>28 YEARS OF ACADEMIC EXCELLENCE (1999 — 2026)</span>
            </motion.div>

            {/* Tap Anywhere Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-[11px] text-slate-400 font-medium tracking-wide"
            >
              Entering in {secondsRemaining}s • Tap anywhere to explore
            </motion.p>
          </motion.div>

          {/* Bottom Golden Progress Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.0, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-[#D4A853] via-[#FFF5DC] to-[#B8860B] shadow-[0_0_12px_rgba(212,168,83,0.9)]"
            />
          </div>
        </>
      )}

      {/* =========================================================================
          MODE B: THE 10-SECOND CINEMATIC CAMPUS FILM (Interactive)
      ========================================================================= */}
      {mode === 'video' && (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleFinish}
            className="w-full h-full object-cover"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/85 via-transparent to-[#0A1628]/90 pointer-events-none" />

          {/* Top Bar with School Crest & Controls */}
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full p-1 border border-[#D4A853]/40 bg-[#D4A853]/10 shadow-md">
                <Image
                  src="/images/logo/valmeeki_emblem.svg"
                  alt="Sree Valmeeki School Crest"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm tracking-wider uppercase">
                  SREE VALMEEKI HIGH SCHOOL
                </span>
                <span className="text-[#D4A853] text-[10px] font-semibold tracking-widest uppercase">
                  ESTD. 1999 • KADIRI
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={toggleAudio}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-3 py-2 rounded-full border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-white/80" />
                    <span className="hidden sm:inline">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span className="hidden sm:inline text-[#D4A853]">Playing Sound</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#0A1628] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Enter Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Video Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/15 overflow-hidden z-20">
            <div
              style={{ width: `${videoProgress}%` }}
              className="h-full bg-gradient-to-r from-[#D4A853] via-[#FFF5DC] to-[#B8860B] transition-all duration-150"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
