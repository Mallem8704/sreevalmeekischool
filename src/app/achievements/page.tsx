'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { Sparkles, Trophy, Award, X, ChevronRight, ChevronLeft, Filter } from 'lucide-react';
import { verifiedAchievements, academicToppers, AchievementItem } from '@/lib/data';
import StarAchieversSection from '@/components/home/StarAchieversSection';
import GirinathReddyHeroSpotlight from '@/components/sports/GirinathReddyHeroSpotlight';

const ceremonyPhotos = [
  {
    id: 'hero',
    src: '/images/achievements/ssc_2026_felicitation_hero.jpg',
    title: 'Town 1st Rank Felicitation',
    student: 'D. Janani • 595 / 600',
    description:
      'Receiving the official 2026 AP SSC felicitation memento from MLA Kandikunta Venkata Prasad with Founder Sri P. Jaya Rami Reddy & Director Dr. P.V Pavan Kumar Reddy.',
    tag: '595 / 600 • TOWN 1ST RANK',
  },
  {
    id: 'ceremony',
    src: '/images/achievements/ssc_2026_felicitation_ceremony.jpg',
    title: 'Official Campus Felicitation Ceremony',
    student: '2026 AP SSC Board Rankers',
    description:
      'Celebrating exceptional results with MLA Kandikunta Venkata Prasad, distinction students, parents, and faculty on the Sree Valmeeki School campus.',
    tag: 'OFFICIAL 2026 BANNER PROOF',
  },
];

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
  const [activeCeremonyIndex, setActiveCeremonyIndex] = useState<number | null>(null);

  const featured = verifiedAchievements[0];

  const filteredAchievements = verifiedAchievements.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesYear =
      selectedYear === 'ALL YEARS' || item.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero: THE WALL OF EXCELLENCE with Collage Background */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-20 px-4 bg-[#0A1628] dark:bg-[#050D1A] border-b border-white/10 transition-colors duration-200">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/95 dark:from-[#050D1A] dark:via-[#050D1A]/85 dark:to-[#050D1A]/95" />
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
        <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#B8860B] dark:text-[#D4A853] block mb-4">
          FEATURED PRIDE OF VALMEEKI
        </span>

        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-[#D4A853]/50 shadow-xl dark:shadow-2xl grid grid-cols-1 lg:grid-cols-12 group transition-colors duration-200">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* 30% Information Frame */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1628] transition-colors duration-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/20 text-[#B8860B] dark:text-[#D4A853] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>{featured.level}</span>
              </div>

              <span className="text-xs text-slate-500 dark:text-white/50 font-mono block mb-1">
                YEAR {featured.year} • {featured.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mb-2 leading-tight">
                {featured.studentName}
              </h3>
              <p className="text-xs text-[#B8860B] dark:text-[#D4A853] font-bold uppercase tracking-wider mb-4">
                {featured.classGrade} • {featured.marksOrRank}
              </p>

              <p className="text-sm text-slate-600 dark:text-white/80 leading-relaxed font-[family-name:var(--font-body)]">
                {featured.description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-white/50">
              <span>Verified School Record</span>
              <span className="text-[#B8860B] dark:text-[#D4A853] font-semibold">Distinction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection: Celebrating Excellence — 2026 AP SSC Felicitation Ceremony */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase mb-2.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>2026 AP SSC BOARD PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white uppercase tracking-tight">
              Celebrating Excellence
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl mt-1 font-normal">
              Official felicitation ceremony honoring Kadiri town 1st and top distinction achievers on campus.
            </p>
          </div>
          <span className="text-xs text-slate-500 dark:text-white/50 font-mono hidden sm:inline">
            VERIFIED PHOTOGRAPHIC RECORD
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {ceremonyPhotos.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setActiveCeremonyIndex(i)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 hover:border-[#D4A853]/60 transition-all shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md text-[#FBBF24] border border-[#D4A853]/50 text-xs font-black uppercase tracking-wider shadow-md">
                    {c.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-[#0A1628] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors">
                    {c.title}
                  </h3>
                  <span className="block text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase tracking-wider mt-1 mb-2">
                    {c.student}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {c.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4 flex items-center justify-between text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold">
                  <span>Click to view full photo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Excellence: Magazine Cover Style Toppers in Horizontal Scroll */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#B8860B] dark:text-[#D4A853] block mb-2">
              BOARD MERIT LIST
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
              ACADEMIC EXCELLENCE TOPPERS
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-white/50 hidden sm:inline font-mono">
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
              className="flex-shrink-0 w-[240px] sm:w-[280px] snap-center group rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/15 hover:border-[#D4A853] transition-all shadow-xl flex flex-col justify-end aspect-[3/4] relative"
            >
              <Image
                src={topper.image}
                alt={topper.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-white/10 transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4A853] text-[#0A1628] shadow-md shadow-[#D4A853]/20'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/15 text-slate-700 dark:text-white/70 hover:text-[#0A1628] dark:hover:text-white border border-slate-200 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Year Timeline Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <span className="text-xs text-slate-500 dark:text-white/50 font-mono uppercase mr-1 shrink-0">Year:</span>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setSelectedYear(y)}
                className={`shrink-0 px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedYear === y
                    ? 'bg-slate-200 dark:bg-white/20 text-[#B8860B] dark:text-[#D4A853] border border-[#D4A853]/60'
                    : 'text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic VIP Spotlight for SPORTS: Meet our Ranji Player Girinath Reddy */}
        {selectedCategory === 'SPORTS' && (
          <div className="mb-10">
            <GirinathReddyHeroSpotlight />
          </div>
        )}

        {/* Masonry / Pinterest Style Visual Achievement Wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/15 hover:border-[#D4A853] transition-all duration-300 shadow-xl cursor-pointer flex flex-col aspect-[4/5]"
            >
              <Image
                src={item.image}
                alt={item.achievement}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

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

      {/* Ceremony Photos Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeCeremonyIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCeremonyIndex(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-wider">
                {ceremonyPhotos[activeCeremonyIndex].tag}
              </span>
              <button
                type="button"
                onClick={() => setActiveCeremonyIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh] max-h-[850px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={ceremonyPhotos[activeCeremonyIndex].src}
                  alt={ceremonyPhotos[activeCeremonyIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveCeremonyIndex((prev) =>
                    prev === null ? 0 : (prev - 1 + ceremonyPhotos.length) % ceremonyPhotos.length
                  )
                }
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D4A853] text-white hover:text-[#0A1628] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveCeremonyIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % ceremonyPhotos.length
                  )
                }
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D4A853] text-white hover:text-[#0A1628] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div
              className="w-full max-w-2xl mx-auto text-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-white text-base sm:text-lg font-bold font-[family-name:var(--font-heading)]">
                {ceremonyPhotos[activeCeremonyIndex].title}
              </h4>
              <p className="text-white/75 text-xs sm:text-sm mt-1">
                {ceremonyPhotos[activeCeremonyIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
