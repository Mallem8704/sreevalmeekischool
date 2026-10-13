'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Maximize2,
  Settings,
} from 'lucide-react';
import Image from 'next/image';

interface VisualHeroProps {
  onOpenAdmissions?: () => void;
}

export default function VisualHero({ onOpenAdmissions }: VisualHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(12); // subtle visual progress %
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Video time update for progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const scrollToCampus = () => {
    const element = document.getElementById('campus');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#03101E] text-white pt-[56px] sm:pt-[60px] md:pt-0">
      {/* 
        Container Height:
        - Mobile: Native 16:9 or auto height with zero video crop
        - Desktop: 78vh to 84vh cinematic frame matching reference mockup
      */}
      <div className="relative w-full aspect-video sm:aspect-[16/9] md:aspect-auto md:min-h-[78vh] lg:min-h-[82vh] md:h-[82vh] flex flex-col justify-end overflow-hidden">
        {/* Background Video Layer with Fallback Poster */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/campus/campus_drone_aerial.jpg"
            alt="Sree Valmeeki English Medium High School Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover w-full h-full brightness-[0.95] contrast-[1.05]"
          />
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.92] contrast-[1.05]"
          >
            <source src="/hero-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
            <source src="/hero-desktop.mp4" type="video/mp4" />
          </video>

          {/* Master Cinematic Gradient Scrim matching reference screenshot */}
          {/* Top Scrim (for Header contrast) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#03101E]/80 via-transparent to-transparent h-32 pointer-events-none" />

          {/* Left Narrative Scrim (ensures text readability over bright campus) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#03101E]/90 via-[#03101E]/55 to-transparent pointer-events-none" />

          {/* Bottom Scrim for control strip & bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03101E]/95 via-[#03101E]/30 to-transparent pointer-events-none" />
        </div>

        {/* Top-Right Values Watermark (Visible on Desktop, matching reference) */}
        <div className="hidden lg:flex absolute top-28 right-8 xl:right-16 z-20 flex-col items-end gap-1.5 pointer-events-none text-right">
          {['DISCIPLINE', 'CONFIDENCE', 'COMPASSION', 'LIFELONG LEARNERS'].map((val, idx) => (
            <span
              key={val}
              className="text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              {val}
            </span>
          ))}
        </div>

        {/* Right Floating Admissions Badge (matching reference mockup) */}
        <div className="hidden sm:block absolute top-1/2 sm:top-[45%] right-6 lg:right-12 xl:right-16 -translate-y-1/2 z-20">
          <motion.button
            type="button"
            onClick={onOpenAdmissions}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#06172A]/85 hover:bg-[#06172A] border border-[#D8A53C]/50 backdrop-blur-xl shadow-2xl shadow-black/60 transition-all cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D8A53C] to-[#B8860B] flex items-center justify-center text-[#03101E] shadow-md shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col pr-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">
                Admissions Open
              </span>
              <span className="text-sm font-black tracking-wider text-[#F0C66A] font-[family-name:var(--font-heading)]">
                2026–27
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#D8A53C] group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Main Left Hero Typography (Desktop & Tablet) */}
        <div className="hidden md:block relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-left space-y-3 lg:space-y-4"
          >
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] lg:text-[11px] font-black tracking-[0.22em] uppercase text-white/90 drop-shadow-md">
                EDUCATION • CHARACTER • OPPORTUNITY • A BRIGHTER TOMORROW
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-[family-name:var(--font-heading)] leading-[1.02] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              <span className="block text-white">THE</span>
              <span className="block text-white">VALMEEKI</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F0C66A] via-[#D8A53C] to-[#E8C97D]">
                EXPERIENCE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-white/95 font-semibold tracking-wide drop-shadow-md">
              Where Learning Meets Possibility.
            </p>

            {/* Metadata Single Row */}
            <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm text-white/80 font-medium tracking-wide drop-shadow-sm pt-0.5">
              <span>Nursery to Class 10</span>
              <span className="text-[#D8A53C]">•</span>
              <span>English Medium</span>
              <span className="text-[#D8A53C]">•</span>
              <span>AP State Board</span>
              <span className="text-[#D8A53C]">•</span>
              <span>Kadiri</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs lg:text-sm uppercase tracking-wider shadow-xl shadow-[#D8A53C]/30 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToCampus}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs lg:text-sm uppercase tracking-wider border border-white/25 backdrop-blur-md hover:border-white/50 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#D8A53C] fill-[#D8A53C]" />
                <span>Explore Campus</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Clean In-Frame Mini-Copy Overlay (Zero Crop, Blue Moon Match) */}
        <div className="block md:hidden absolute bottom-3 left-3 right-3 z-20 pointer-events-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <span className="block text-[#F0C66A] font-black text-[10px] uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              EDUCATION • DISCIPLINE • CONFIDENCE
            </span>
            <h1 className="block text-white font-black text-xl font-[family-name:var(--font-heading)] leading-none tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              THE VALMEEKI <span className="text-[#F0C66A]">EXPERIENCE</span>
            </h1>
            <p className="block text-[#F8F5EE] font-semibold text-[11px] leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Nursery to Class 10 • English Medium • AP State Board • Kadiri
            </p>
            <div className="pt-1.5 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="px-4 py-1.5 rounded-full bg-[#D8A53C] text-[#03101E] font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
              >
                Enroll Now
              </button>
              <button
                type="button"
                onClick={scrollToCampus}
                className="px-3.5 py-1.5 rounded-full bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/25 backdrop-blur-md active:scale-95 transition-all flex items-center gap-1"
              >
                <span>Campus Tour</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Top-Right Audio & Playback Controls */}
        <div className="block md:hidden absolute top-2.5 right-2.5 z-20 pointer-events-auto">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleSound}
              className="p-1.5 rounded-full bg-[#03101E]/80 text-[#F0C66A] border border-[#D8A53C]/40 backdrop-blur-md shadow-md active:scale-95"
              aria-label={isMuted ? 'Unmute Campus Film' : 'Mute Campus Film'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#F0C66A]" />}
            </button>
            <button
              type="button"
              onClick={togglePlay}
              className="p-1.5 rounded-full bg-[#03101E]/80 text-[#F0C66A] border border-[#D8A53C]/40 backdrop-blur-md shadow-md active:scale-95"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-white/70" /> : <Play className="w-3.5 h-3.5 text-[#F0C66A]" />}
            </button>
          </div>
        </div>

        {/* 
          Bottom Video Player Controls Strip (Matching Reference Mockup Screenshot)
          Desktop & Tablet layout: [ ⏸ ] [ 🔊 ] 0:09 / 1:24 A Campus That Inspires — Watch Our Story [ 1x ] [ ⚙ ] [ ⛶ ]
        */}
        <div className="hidden md:flex relative z-20 w-full bg-[#03101E]/85 backdrop-blur-md border-t border-white/10 px-6 lg:px-12 py-2.5 items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1 hover:text-[#D8A53C] transition-colors cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            <button
              type="button"
              onClick={toggleSound}
              className="p-1 hover:text-[#D8A53C] transition-colors cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-white/60" /> : <Volume2 className="w-4 h-4 text-[#D8A53C]" />}
            </button>

            <span className="text-[11px] font-mono text-white/60">0:09 / 1:24</span>

            <span className="text-white/30">•</span>

            <span className="text-[11px] font-bold tracking-wide text-white/90">
              A Campus That Inspires — Watch Our Story
            </span>
          </div>

          {/* Right Video Quality / Fullscreen Indicators */}
          <div className="flex items-center gap-3 text-[11px] font-medium text-white/60">
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono text-[10px]">1x</span>
            <button
              type="button"
              onClick={() => {
                if (videoRef.current?.requestFullscreen) {
                  videoRef.current.requestFullscreen().catch(() => {});
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
              title="Fullscreen"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
