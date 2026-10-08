'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Users,
  Flame,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';
import {
  starAchievers,
  topTierStudents,
  allPosterStudents,
  competitionChampions,
  HallOfFameStudent,
} from '@/lib/hallOfFameData';
import PremiumStudentCardModal from './PremiumStudentCardModal';
import StudentHonorCard from '@/components/achievements/StudentHonorCard';

interface StarAchieversSectionProps {
  onOpenAdmissions?: () => void;
}

export default function StarAchieversSection({ onOpenAdmissions }: StarAchieversSectionProps) {
  const [selectedStudent, setSelectedStudent] = useState<HallOfFameStudent | null>(null);
  const [activeTab, setActiveTab] = useState<'STAR_ACHIEVERS' | 'TOP_SCORERS' | 'ALL_SCHOLARS' | 'CHAMPIONS'>('STAR_ACHIEVERS');

  // Search & Filter for All Scholars tab
  const [searchQuery, setSearchQuery] = useState('');
  const [scoreFilter, setScoreFilter] = useState<'ALL' | '580' | '550' | '520'>('ALL');
  const [visibleCount, setVisibleCount] = useState(24);

  // Combined master list of all individual students for navigation
  const masterStudentList = useMemo(() => {
    return [...starAchievers, ...topTierStudents, ...allPosterStudents];
  }, []);

  // Filtered list for "All Scholars" tab
  const filteredScholars = useMemo(() => {
    return allPosterStudents.filter((s) => {
      const marksNum = parseInt(s.marks, 10) || 0;
      const matchesScore =
        scoreFilter === 'ALL'
          ? true
          : scoreFilter === '580'
          ? marksNum >= 580
          : scoreFilter === '550'
          ? marksNum >= 550
          : marksNum >= 520;

      const matchesSearch =
        searchQuery.trim() === '' ||
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.marks.includes(searchQuery) ||
        s.honorDetails.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesScore && matchesSearch;
    });
  }, [scoreFilter, searchQuery]);

  const handleNext = () => {
    if (!selectedStudent) return;
    const idx = masterStudentList.findIndex((s) => s.id === selectedStudent.id);
    if (idx !== -1) {
      setSelectedStudent(masterStudentList[(idx + 1) % masterStudentList.length]);
    }
  };

  const handlePrev = () => {
    if (!selectedStudent) return;
    const idx = masterStudentList.findIndex((s) => s.id === selectedStudent.id);
    if (idx !== -1) {
      setSelectedStudent(masterStudentList[(idx - 1 + masterStudentList.length) % masterStudentList.length]);
    }
  };

  return (
    <section id="star-achievers" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4A853]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>OFFICIAL SSC BOARD RECORD 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-4">
            OUR STAR ACHIEVERS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              TOWN 1ST & 2ND RANKS.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Click on any student photograph or card to open the verified official board certificate & distinction breakdown.
          </p>

          {/* Interactive Navigation Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('STAR_ACHIEVERS')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'STAR_ACHIEVERS'
                  ? 'bg-[#D4A853] text-[#0A1628] shadow-md scale-105'
                  : 'bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15'
              }`}
            >
              Star Achievers (590+ Club)
            </button>
            <button
              onClick={() => setActiveTab('TOP_SCORERS')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'TOP_SCORERS'
                  ? 'bg-[#D4A853] text-[#0A1628] shadow-md scale-105'
                  : 'bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15'
              }`}
            >
              Top Board Scorers (588–581)
            </button>
            <button
              onClick={() => setActiveTab('ALL_SCHOLARS')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ALL_SCHOLARS'
                  ? 'bg-[#D4A853] text-[#0A1628] shadow-md scale-105'
                  : 'bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Hall of 250 Scholars</span>
            </button>
            <button
              onClick={() => setActiveTab('CHAMPIONS')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'CHAMPIONS'
                  ? 'bg-[#D4A853] text-[#0A1628] shadow-md scale-105'
                  : 'bg-white dark:bg-[#0A1628] hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15'
              }`}
            >
              National & State Honors
            </button>
          </div>
        </div>

        {/* 2026 High-Level Result Summary Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0A1628] via-[#0F2044] to-[#0A1628] text-white border border-[#D4A853]/40 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#D4A853] uppercase block">
              SSC 2026 RESULT SUMMARY
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] uppercase">
              AN UNPRECEDENTED ACADEMIC SWEEP IN KADIRI
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <span className="block text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-[#FBBF24]">
                7
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-1">
                590+ ABOVE
              </span>
              <span className="block text-[10px] text-white/60">Town Record</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <span className="block text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-white">
                30
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-1">
                580+ ABOVE
              </span>
              <span className="block text-[10px] text-white/60">State Distinction</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <span className="block text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-[#FBBF24]">
                115
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-1">
                550+ ABOVE
              </span>
              <span className="block text-[10px] text-white/60">High First Class</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <span className="block text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-[#10B981]">
                250+
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-1">
                500+ ABOVE
              </span>
              <span className="block text-[10px] text-white/60">98% Total Pass</span>
            </div>
          </div>
        </div>

        {/* TAB 1: STAR ACHIEVERS (TOWN 1ST & 2ND + 590+ CLUB) */}
        {activeTab === 'STAR_ACHIEVERS' && (
          <div className="space-y-10">
            {/* Top 2 Heroes: Town 1st & Town 2nd */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {starAchievers.slice(0, 2).map((s) => (
                <StudentHonorCard
                  key={s.id}
                  student={s}
                  onClick={setSelectedStudent}
                  featured
                  priority
                />
              ))}
            </div>

            {/* Next 5 Star Achievers (591/600 & 590/600) */}
            <div>
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-4">
                590+ Board Super Distinction Scholars
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {starAchievers.slice(2).map((s) => (
                  <StudentHonorCard
                    key={s.id}
                    student={s}
                    onClick={setSelectedStudent}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TOP 20 NAMED SCORERS (588 - 581) */}
        {activeTab === 'TOP_SCORERS' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {topTierStudents.map((s) => (
              <StudentHonorCard
                key={s.id}
                student={s}
                onClick={setSelectedStudent}
              />
            ))}
          </div>
        )}

        {/* TAB 3: HALL OF 250 SCHOLARS (SEARCHABLE & FILTERABLE GRID) */}
        {activeTab === 'ALL_SCHOLARS' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(24);
                  }}
                  placeholder="Search by student name, roll, or score..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#050D1A] border border-slate-200 dark:border-white/10 rounded-xl text-xs sm:text-sm text-[#0A1628] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#D4A853] dark:focus:border-[#D4A853]"
                />
              </div>

              {/* Score filter pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Filter:
                </span>
                {[
                  { id: 'ALL', label: `All (${allPosterStudents.length})` },
                  { id: '580', label: '580+ Marks' },
                  { id: '550', label: '550+ Marks' },
                  { id: '520', label: '520+ Marks' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      setScoreFilter(f.id as any);
                      setVisibleCount(24);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      scoreFilter === f.id
                        ? 'bg-[#D4A853] text-[#0A1628] shadow-sm'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white border border-slate-200 dark:border-white/10'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Counter info */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
              <span>
                Showing {Math.min(visibleCount, filteredScholars.length)} of {filteredScholars.length} student cards
              </span>
              <span className="text-[#B8860B] dark:text-[#FBBF24] font-bold">Click any photo to open premium certificate</span>
            </div>

            {/* Grid of Student Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {filteredScholars.slice(0, visibleCount).map((s) => (
                <StudentHonorCard
                  key={s.id}
                  student={s}
                  onClick={setSelectedStudent}
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredScholars.length && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="px-8 py-3 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-[#D4A853] hover:text-[#0A1628] dark:hover:bg-[#D4A853] dark:hover:text-[#0A1628] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-100 text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Load More Scholars ({filteredScholars.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: NATIONAL & STATE COMPETITION HONORS */}
        {activeTab === 'CHAMPIONS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionChampions.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-[#D4A853] dark:hover:border-[#D4A853] transition-all shadow-md hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-white/5">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider shadow">
                      {c.rank}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2 text-left">
                  <span className="text-[10px] font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase tracking-wider block">
                    {c.level}
                  </span>
                  <h3 className="text-lg font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {c.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* The Premium Interactive Modal */}
      <PremiumStudentCardModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onEnquire={onOpenAdmissions}
      />
    </section>
  );
}
