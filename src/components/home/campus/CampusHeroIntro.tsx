'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowDown,
  Compass,
  Building2,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface CampusHeroIntroProps {
  onExploreClick?: () => void;
}

export default function CampusHeroIntro({ onExploreClick }: CampusHeroIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in some browsers
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const target = document.getElementById('campus-walkthrough') || document.getElementById('walkthrough');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] text-white">
      {/* 1. Background Video with Fallback Poster Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* High-Resolution Fallback Poster Image */}
        <Image
          src="/images/campus/campus_drone_aerial.jpg"
          alt="Sree Valmeeki Campus Drone Aerial View"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Cinematic Background Video */}
        {!videoError && (
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            muted={isMuted}
            loop
            playsInline
            autoPlay
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Multi-Layer Cinematic Contrast Gradients */}
        {/* Deep bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-[#0A1628]/30" />
        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-transparent to-transparent opacity-80" />
        {/* Radial center glow & warm gold tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0A1628_100%)] opacity-70" />
        <div className="absolute inset-0 bg-[#0F2044]/25 mix-blend-multiply" />
      </div>

      {/* Decorative Architectural Grid Lines (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Media Playback Controls (Top Right Desktop Floating Pill) */}
      <div className="absolute top-8 right-6 sm:right-10 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all text-xs">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause campus background video' : 'Play campus background video'}
          className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors focus:outline-none"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="text-[11px] font-medium uppercase tracking-wider">
            {isPlaying ? 'Live Video' : 'Paused'}
          </span>
        </button>
        <span className="w-px h-3 bg-white/20" />
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="hover:text-[#D4A853] transition-colors focus:outline-none p-0.5"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center">
        {/* Gold Pill Badge: 'EXPLORE SREE VALMEEKI' */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#D4A853]/20 backdrop-blur-md border border-[#D4A853]/60 text-[#F5E6C0] text-xs sm:text-sm font-black uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,168,83,0.25)] mb-6 sm:mb-8"
        >
          <GraduationCap className="w-4 h-4 text-[#D4A853]" />
          <span>EXPLORE SREE VALMEEKI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse" />
        </motion.div>

        {/* Large Headline (2 distinct lines) */}
        <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white drop-shadow-md"
          >
            A CAMPUS BUILT FOR LEARNING.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2D6] via-[#D4A853] to-[#C49A3C] drop-shadow-[0_2px_15px_rgba(212,168,83,0.3)]"
          >
            WHERE EDUCATION COMES TO LIFE.
          </motion.h2>
        </div>

        {/* Supporting Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-sm mb-10 sm:mb-12"
        >
          Step into 28 years of academic distinction across our green campus, smart digital classrooms, and dedicated learning blocks.
        </motion.p>

        {/* Action Buttons & Fast Anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollDown}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#0A1628] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_25px_rgba(212,168,83,0.4)] hover:shadow-[0_6px_30px_rgba(212,168,83,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#0A1628]" />
            <span>Start Virtual Walkthrough</span>
          </button>

          <a
            href="#academic-blocks"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:border-[#D4A853]/60 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-[#D4A853]" />
            <span>Explore Academic Blocks</span>
          </a>
        </motion.div>

        {/* Campus Quick Metrics Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-mono text-[#D4A853]">28+</span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
              Years of Legacy
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-mono text-white">MULTI-ACRE</span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
              Eco-Friendly Campus
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-mono text-[#D4A853]">25+</span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
              Smart Panels
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-mono text-white">10+</span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
              Safe Yellow Buses
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Cue: 'SCROLL TO EXPLORE ↓' with subtle bounce animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={handleScrollDown}
      >
        <button
          className="flex flex-col items-center gap-2 text-slate-300 hover:text-[#D4A853] transition-colors focus:outline-none"
          aria-label="Scroll down to explore campus"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-300 group-hover:text-[#D4A853] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
            }}
            className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#D4A853] flex items-center justify-center bg-white/5 backdrop-blur-sm transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 text-white group-hover:text-[#D4A853] transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
