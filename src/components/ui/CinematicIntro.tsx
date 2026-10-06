'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const replayIntroVideo = () => {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.removeItem('svhs_intro_seen');
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent('svhs_replay_intro'));
  }
};

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  // Stages:
  // 0: "SINCE 1999"
  // 1: "27 YEARS OF EXCELLENCE"
  // 2: Official Logo Reveal
  // 3: "SREE VALMEEKI E.M SCHOOL"
  // 4: Dissolve & Morph into Homepage
  const [stage, setStage] = useState(0);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      sessionStorage.setItem('svhs_intro_seen', 'true');
    } catch {
      // storage unavailable
    }
    onComplete();
  };

  useEffect(() => {
    const t0 = setTimeout(() => setStage(1), 1400); // 1.4s -> 27 Years
    const t1 = setTimeout(() => setStage(2), 3000); // 3.0s -> Official Logo
    const t2 = setTimeout(() => setStage(3), 4600); // 4.6s -> Full Name
    const t3 = setTimeout(() => handleFinish(), 6500); // 6.5s -> Smooth Dissolve

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[100] bg-[#0A1628] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_rgba(21,45,94,0.6)_0%,_#0A1628_80%] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top right Skip Intro button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={handleFinish}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase transition-all shadow-lg hover:border-[#D4A853]/50 cursor-pointer active:scale-95"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Cinematic Sequence */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="stage-0"
              initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/50 block mb-2 font-mono">
                FOUNDED IN KADIRI
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                SINCE 1999
              </h2>
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A853]">
                  1999 — 2026
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
                27 YEARS OF EXCELLENCE
              </h2>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, y: -15 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 p-3 backdrop-blur-xl border border-white/30 shadow-[0_0_50px_rgba(212,168,83,0.4)]">
                <Image
                  src="/logo-256.png"
                  alt="Sree Valmeeki School Emblem"
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                  priority
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A853]">
                ACADEMIC LEGACY
              </span>
            </motion.div>
          )}

          {stage >= 3 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative w-64 sm:w-80 h-16 sm:h-20 bg-white/95 px-4 py-2 rounded-2xl shadow-2xl border border-white/60 mb-5">
                <Image
                  src="/sree-valmeeki-main-logo-transparent.png"
                  alt="Sree Valmeeki E.M School"
                  fill
                  sizes="320px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-white/90 mb-1">
                KADIRI, ANDHRA PRADESH
              </span>
              <span className="text-xs text-[#D4A853] font-medium tracking-[0.2em] uppercase">
                WHERE EVERY JOURNEY BEGINS WITH A STRONG FOUNDATION
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6.5, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-[#D4A853] via-[#FFF5DC] to-[#B8860B] shadow-[0_0_12px_rgba(212,168,83,0.9)]"
        />
      </div>
    </motion.div>
  );
}
