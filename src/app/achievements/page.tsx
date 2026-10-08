'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { Sparkles, Trophy, Award, X, ChevronRight, Filter } from 'lucide-react';
import { verifiedAchievements, academicToppers, AchievementItem } from '@/lib/data';
import StarAchieversSection from '@/components/home/StarAchieversSection';

const categories = [
  'ALL',
  'ACADEMICS',
  'SSC RESULTS',
  'OLYMPIADS',
  'SPORTS',
  'CULTURAL',
  'COMPETITIONS',
  'AWARDS',
];

const years = ['ALL YEARS', '2026', '2025', '2024', '2023', '2022'];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL YEARS');
  const [activeModalItem, setActiveModalItem] = useState<AchievementItem | null>(null);

  const featured = verifiedAchievements[0];

  const filteredAchievements = verifiedAchievements.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesYear =
      selectedYear === 'ALL YEARS' || item.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#050D1A] text-white selection:bg-[#D4A853] selection:text-[#0A1628]">
      <ScrollProgress />
      <Header />

      {/* Hero: THE WALL OF EXCELLENCE with Collage Background */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-20 px-4">
        {/* Collage Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 h-full w-full">
            {[1, 2, 4, 7, 8, 9, 10, 12].map((num) => (
              <div key={num} className="relative w-full h-full">
                <Image
                  src={`/images/school/school-event-${num}.jpg`}
                  alt="Valmeeki Achievement Collage"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/85 to-[#050D1A]/95" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_20%,_#050D1A_80%]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-5 shadow-lg"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORING OUR CHAMPIONS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight leading-tight mb-4"
          >
            THE WALL OF EXCELLENCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-white/80 font-[family-name:var(--font-heading)] max-w-xl"
          >
            Every Medal. Every Rank. Every Achievement. <br />
            <span className="text-[#D4A853]">A Valmeeki Story.</span>
          </motion.p>
        </div>
      </section>

      {/* Featured Achievement: 70% Image / 30% Information */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#D4A853] block mb-4">
          FEATURED PRIDE OF VALMEEKI
        </span>

        <div className="relative rounded-3xl overflow-hidden bg-[#0A1628] border border-[#D4A853]/50 shadow-2xl grid grid-cols-1 lg:grid-cols-12 group">
          {/* 70% Visual Frame */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.achievement}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent lg:hidden" />
          </div>

          {/* 30% Information Frame */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0A1628]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>{featured.level}</span>
              </div>

              <span className="text-xs text-white/50 font-mono block mb-1">
                YEAR {featured.year} • {featured.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-2 leading-tight">
                {featured.studentName}
              </h3>
              <p className="text-xs text-[#D4A853] font-bold uppercase tracking-wider mb-4">
                {featured.classGrade} • {featured.marksOrRank}
              </p>

              <p className="text-sm text-white/80 leading-relaxed font-[family-name:var(--font-body)]">
                {featured.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>Verified School Record</span>
              <span className="text-[#D4A853] font-semibold">Distinction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence: Magazine Cover Style Toppers in Horizontal Scroll */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#D4A853] block mb-2">
              BOARD MERIT LIST
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              ACADEMIC EXCELLENCE TOPPERS
            </h2>
          </div>
          <span className="text-xs text-white/50 hidden sm:inline font-mono">
            MAGAZINE MERIT SERIES
          </span>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          {academicToppers.map((topper, idx) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[240px] sm:w-[280px] snap-center group rounded-3xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853] transition-all shadow-xl flex flex-col justify-end aspect-[3/4] relative"
            >
              <Image
                src={topper.image}
                alt={topper.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />

              {/* Magazine Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {topper.rank}
                </span>
                <span className="text-[10px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                  {topper.year}
                </span>
              </div>

              {/* Magazine Bottom Overlay */}
              <div className="relative z-10 p-5">
                <span className="text-xs text-[#D4A853] font-bold tracking-wider uppercase block">
                  SCORE: {topper.marks}
                </span>
                <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white">
                  {topper.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Official Star Achievers & Hall of 250 Scholars Interactive Section */}
      <StarAchieversSection />

      {/* Categories & Year Timeline Filter Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4A853] text-[#0A1628] shadow-md shadow-[#D4A853]/20'
                    : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Year Timeline Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs text-white/50 font-mono uppercase mr-1">Year:</span>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setSelectedYear(y)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedYear === y
                    ? 'bg-white/20 text-[#D4A853] border border-[#D4A853]/60'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Pinterest Style Visual Achievement Wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853] transition-all duration-300 shadow-xl cursor-pointer flex flex-col aspect-[4/5]"
            >
              <Image
                src={item.image}
                alt={item.achievement}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />

              {/* Year & Category Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#D4A853] text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {item.category}
                </span>
                <span className="text-xs font-mono font-bold text-white/80">
                  {item.year}
                </span>
              </div>

              {/* Bottom Info Card */}
              <div className="relative z-10 p-6 mt-auto">
                <span className="text-xs text-[#D4A853] font-bold uppercase tracking-wider block mb-1">
                  {item.studentName} • {item.classGrade}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white leading-snug mb-1">
                  {item.achievement}
                </h3>
                <span className="text-xs text-white/50 flex items-center gap-1 mt-2 group-hover:text-[#D4A853] transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-[#0A1628] border border-white/25 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.achievement}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#0A1628] border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#D4A853] uppercase tracking-wider">
                    {activeModalItem.level} • {activeModalItem.category} • {activeModalItem.year}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/90">
                    {activeModalItem.classGrade}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">
                  {activeModalItem.studentName}
                </h3>

                <h4 className="text-base sm:text-lg text-[#D4A853] font-semibold mb-3">
                  {activeModalItem.achievement}
                </h4>

                <p className="text-sm text-white/80 leading-relaxed font-[family-name:var(--font-body)]">
                  {activeModalItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
