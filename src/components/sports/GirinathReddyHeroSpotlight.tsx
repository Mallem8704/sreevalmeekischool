'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShieldCheck,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface GirinathPhoto {
  id: string;
  tabLabel: string;
  pill: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
}

const GIRINATH_PHOTOS: GirinathPhoto[] = [
  {
    id: 'dhoni',
    tabLabel: 'WITH MS DHONI',
    pill: 'WORLD CUP CAPTAIN',
    title: 'Sharing Moments with Legend MS Dhoni',
    subtitle: 'From Kadiri to the Pinnacle of Indian Cricket',
    image: '/images/sports/girinath_reddy_with_ms_dhoni.jpg',
    caption:
      'Valmeeki alumnus Girinath Reddy seated alongside Indian cricket icon & World Cup winning captain MS Dhoni.',
  },
  {
    id: 'kohli',
    tabLabel: 'WITH VIRAT KOHLI',
    pill: 'BCCI / NCA CAMP',
    title: 'Alongside Modern Maestro Virat Kohli',
    subtitle: 'First-Class Preparation at the Highest Level',
    image: '/images/sports/girinath_reddy_with_virat_kohli.jpg',
    caption:
      'Girinath Reddy in Team India / NCA blue jersey with legendary batting maestro Virat Kohli at the BCCI camp.',
  },
  {
    id: 'action',
    tabLabel: 'MATCH ACTION',
    pill: 'FIRST-CLASS BATSMAN',
    title: 'Flawless Form on the Ranji Pitch',
    subtitle: 'Technique & Temperament Forged at Valmeeki',
    image: '/images/sports/girinath_reddy_ranji_cricket_action.jpg',
    caption:
      'Girinath Reddy executing a textbook forward drive with his DSC bat on the championship turf ground.',
  },
];

export default function GirinathReddyHeroSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const current = GIRINATH_PHOTOS[activeIndex];

  // Auto-advance slides every 5.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GIRINATH_PHOTOS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1628] via-[#0F2044] to-[#1E3A8A] text-white p-4 sm:p-8 md:p-12 border border-[#D4A853]/40 shadow-2xl my-6 sm:my-8">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner / Eyebrow */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4A853]/20 border border-[#D4A853]/50 flex items-center justify-center text-[#D4A853] shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D4A853] block">
              PRIDE OF SREE VALMEEKI • FIRST-CLASS CRICKET
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black font-[family-name:var(--font-heading)] text-white tracking-tight break-words">
              MEET OUR RANJI PLAYER: GIRINATH REDDY
            </h2>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-sm">
          <Star className="w-3.5 h-3.5 fill-[#D4A853] text-[#D4A853]" />
          <span>Ranji Trophy Star Alumnus</span>
        </div>
      </div>

      {/* Main Grid: Visual Frame + Editorial Story */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Column: Interactive Tabbed Visual Stage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Dynamic Interactive Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {GIRINATH_PHOTOS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  idx === activeIndex
                    ? 'bg-[#D4A853] text-[#0A1628] shadow-lg font-black scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10'
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          {/* Main Visual Display */}
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black/40 border border-white/20 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Badge & Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-[10px] font-black tracking-wider uppercase mb-1.5 shadow-sm">
                    {current.pill}
                  </span>
                  <h3 className="text-base sm:text-xl font-black font-[family-name:var(--font-heading)] leading-snug drop-shadow-md">
                    {current.title}
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-1 drop-shadow-sm mt-0.5">
                    {current.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Lightbox Trigger Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-md"
              aria-label="Expand photo full size"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Arrows */}
            <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + GIRINATH_PHOTOS.length) % GIRINATH_PHOTOS.length)
                }
                className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md pointer-events-auto transition-transform hover:scale-110 cursor-pointer border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % GIRINATH_PHOTOS.length)
                }
                className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md pointer-events-auto transition-transform hover:scale-110 cursor-pointer border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Credentials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-black tracking-[0.2em] text-[#D4A853] uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              AUTHENTIC VALMEEKI ALUMNI LEGACY
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-white leading-tight">
              From Kadiri School Grounds to First-Class Ranji Glory.
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Girinath Reddy began his cricketing journey right here on the sports grounds of Sree Valmeeki School. Through relentless discipline, exceptional work ethic, and school mentorship, he rose to represent Andhra Pradesh in First-Class Ranji Trophy cricket.
            </p>

            {/* Highlighted Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[#D4A853] font-black text-sm block">Ranji Trophy</span>
                <span className="text-[11px] text-slate-300">Andhra First-Class Cricketer</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[#D4A853] font-black text-sm block">Legends Circle</span>
                <span className="text-[11px] text-slate-300">Trained with Dhoni & Kohli</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[#D4A853] font-black text-sm block">Valmeeki Foundation</span>
                <span className="text-[11px] text-slate-300">Shaped by school discipline</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[#D4A853] font-black text-sm block">Kadiri’s Inspiration</span>
                <span className="text-[11px] text-slate-300">Role model for every student</span>
              </div>
            </div>
          </div>

          {/* Inspirational Tagline */}
          <div className="p-4 rounded-2xl bg-[#D4A853]/15 border border-[#D4A853]/40">
            <p className="text-xs sm:text-sm text-[#FDFBF7] font-semibold italic leading-relaxed">
              &ldquo;Sree Valmeeki School doesn&apos;t just teach sports — we build character and dreams that reach the highest national arenas.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center text-white max-w-xl">
                <h4 className="text-lg font-black font-[family-name:var(--font-heading)]">
                  {current.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">{current.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
