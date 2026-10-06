'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Volume2, VolumeX, ArrowRight, Award } from 'lucide-react';

export interface IntroVideoLauncherProps {
  onComplete: () => void;
  duration?: number; // duration in ms, default 7000ms (strict 7s)
}

/**
 * Global helper to replay the intro video anytime
 */
export const replayIntroVideo = () => {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.removeItem('svhs_intro_played');
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent('svhs_replay_intro'));
  }
};

export default function IntroVideoLauncher({
  onComplete,
  duration = 7000,
}: IntroVideoLauncherProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(duration / 1000));
  const hasCompletedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    try {
      sessionStorage.setItem('svhs_intro_played', 'true');
    } catch {
      // ignore storage access issues
    }
    onComplete();
  }, [onComplete]);

  // Keyboard shortcut: Press Escape or Space to skip intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleComplete]);

  // Video Autoplay & Muted property synchronization
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch((err) => {
        // Autoplay may be restricted by some browser policies until user interaction
        console.warn('Intro video autoplay waiting for user interaction:', err);
      });
    }
  }, [isMuted]);

  // Strict duration counter & smooth progress bar
  useEffect(() => {
    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      const remaining = Math.max(0, Math.ceil((duration - elapsed) / 1000));
      setSecondsLeft(remaining);

      if (elapsed >= duration) {
        handleComplete();
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, handleComplete]);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextState = !isMuted;
      videoRef.current.muted = nextState;
      setIsMuted(nextState);
      if (!nextState) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <motion.div
      key="svhs-intro-video-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#0A1628] flex items-center justify-center overflow-hidden select-none"
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onEnded={handleComplete}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays to guarantee readable controls and deep contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/85 via-transparent to-[#0A1628]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(10,22,40,0.55)_100%] pointer-events-none" />

      {/* Top Bar with School Branding & Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex items-center justify-between z-20 pointer-events-auto">
        {/* Subtle Branding */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(212,168,83,0.35)] shrink-0">
            <Image
              src="/logo-256.png"
              alt="Sree Valmeeki School Crest"
              fill
              sizes="44px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm tracking-widest uppercase drop-shadow-md">
              SREE VALMEEKI E.M. SCHOOL
            </span>
            <span className="text-[#D4A853] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              EST. 1999 • 27 YEARS OF EXCELLENCE
            </span>
          </div>
        </div>

        {/* Audio Toggle & Skip Intro Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleAudio}
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer shadow-md hover:border-white/30 active:scale-95"
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/80" />
                <span className="hidden sm:inline text-white/90">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D4A853]" />
                <span className="hidden sm:inline text-[#D4A853]">Sound On</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleComplete}
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:border-white/30 hover:shadow-white/10 active:scale-95 group"
          >
            <span>Skip Intro</span>
            <span className="text-[#D4A853] font-mono font-bold text-[11px]">
              {secondsLeft}s
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#D4A853]" />
          </button>
        </div>
      </div>

      {/* Bottom Center / Corner Badge & Countdown */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A1628]/75 backdrop-blur-md border border-[#D4A853]/40 shadow-xl pointer-events-auto">
          <Award className="w-4 h-4 text-[#D4A853]" />
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            27 Years of Excellence in Education
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline text-[#D4A853] text-xs font-medium">
            Admissions Open 2026–27
          </span>
        </div>

        <div className="text-[11px] text-white/70 tracking-widest uppercase font-mono pointer-events-auto">
          Entering Website in <span className="text-[#D4A853] font-bold">{secondsLeft}s</span>
        </div>
      </div>

      {/* Bottom Sleek Progress Bar with Golden Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30">
        <div
          className="h-full bg-gradient-to-r from-[#D4A853] via-[#FCE49E] to-[#D4A853] transition-all duration-75 ease-linear"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 14px rgba(212, 168, 83, 0.95), 0 0 6px rgba(212, 168, 83, 0.6)',
          }}
        />
      </div>
    </motion.div>
  );
}
