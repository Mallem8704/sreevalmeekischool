'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MoveDown, Award, Sparkles, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

interface AchievementHeroProps {
  onOpenAdmissions: () => void;
}

export default function AchievementHero({ onOpenAdmissions }: AchievementHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050D1A] flex flex-col justify-between text-white pt-24 sm:pt-28 pb-12 sm:pb-16">
      {/* Background Video / Photographic Layer */}
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

        {/* Cinematic Deep Navy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-[#050D1A]/70" />

        {/* Ambient Decorative Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1E3A8A]/20 rounded-full blur-3xl" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Typography & Proof */}
          <div className="lg:col-span-7 xl:col-span-7 text-left space-y-6">
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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

            {/* Giant Primary Headline: "RESULTS THAT SPEAK FOR US." */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] leading-[0.98] tracking-tight uppercase text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
                <span>RESULTS</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
                  THAT SPEAK
                </span> <br />
                <span>FOR US.</span>
              </h1>
            </motion.div>

            {/* Extremely Short, High-Impact Punchline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-xl leading-relaxed"
            >
              <strong className="text-white font-bold">27 Years.</strong> Generations of Students. A Legacy of Achievement in Kadiri.
            </motion.p>

            {/* Strategic CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#signature-results"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#050D1A] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[0_10px_35px_rgba(212,168,83,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore Our Achievements</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/25 backdrop-blur-md transition-all cursor-pointer hover:border-white/50"
              >
                <span>Admissions 2026–27</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Topper Spotlight Card (Digital Hall of Excellence) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A853]/25 via-transparent to-[#1E3A8A]/30 rounded-3xl blur-2xl transform -rotate-1 pointer-events-none" />

            {/* Editorial Showcase Card */}
            <div className="relative bg-[#0A1628]/90 border border-[#D4A853]/40 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Corner Watermark */}
              <div className="absolute -top-10 -right-10 text-[120px] font-black font-[family-name:var(--font-heading)] text-white/[0.03] select-none pointer-events-none">
                #1
              </div>

              {/* Top Card Badge */}
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

              {/* Hero Student Portrait in Magazine Profile Style */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden mb-4 border border-white/15 bg-[#0F2044]">
                <Image
                  src="/extracted/star_achievers/janani_face.jpg"
                  alt="D. Janani - Sree Valmeeki School Town 1st Ranker"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-90" />

                {/* Floating Ranker Badge on Photo */}
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

              {/* Mini Highlights Ticker Grid */}
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

      {/* Bottom Floating Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 w-full flex items-center justify-center pt-6"
      >
        <a
          href="#signature-results"
          className="group inline-flex flex-col items-center gap-1.5 text-white/50 hover:text-[#D4A853] text-[11px] font-bold tracking-[0.25em] uppercase transition-colors"
        >
          <span>Scroll To Discover</span>
          <MoveDown className="w-4 h-4 animate-bounce text-[#D4A853]" />
        </a>
      </motion.div>
    </section>
  );
}
