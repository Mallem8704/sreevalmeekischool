'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Trophy,
  Star,
  Users,
  ArrowRight,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import { starAchievers, HallOfFameStudent } from '@/lib/hallOfFameData';
import PremiumStudentCardModal from './PremiumStudentCardModal';

interface VisualAcademicExcellenceProps {
  onOpenAdmissions?: () => void;
}

export default function VisualAcademicExcellence({ onOpenAdmissions }: VisualAcademicExcellenceProps) {
  const [selectedStudent, setSelectedStudent] = useState<HallOfFameStudent | null>(null);

  // Use top 4 star achievers from verified school records
  const displayToppers = starAchievers.slice(0, 4);

  const stats = [
    {
      icon: TrendingUp,
      title: '100% SSC Pass Rate',
      subtitle: 'Consistent Academic Success',
      color: 'text-amber-500',
    },
    {
      icon: Trophy,
      title: 'Top School in Kadiri',
      subtitle: 'Trusted by Generations',
      color: 'text-[#D8A53C]',
    },
    {
      icon: Star,
      title: 'Excellent Academic Performance',
      subtitle: 'Year after Year',
      color: 'text-amber-500',
    },
    {
      icon: Users,
      title: 'Holistic Learning',
      subtitle: 'Beyond Academics',
      color: 'text-emerald-500',
    },
  ];

  return (
    <>
      <section id="results" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F8F5EE] dark:bg-[#03101E] text-[#0A1C31] dark:text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Heading, 2-line description & CTA (Matching Reference Screenshot) */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left lg:sticky lg:top-28">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
                OUR ACHIEVEMENTS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight text-[#0A1C31] dark:text-white">
                Academic <br />
                <span className="text-[#0A1C31] dark:text-white">Excellence</span>
              </h2>

              <p className="text-sm sm:text-base text-[#69778A] dark:text-slate-300 font-medium leading-relaxed max-w-sm">
                Consistent results, brighter learners. A strong foundation for a successful tomorrow.
              </p>

              <div className="pt-2">
                <a
                  href="/achievements"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>View Detailed Results</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Stat Cards Top + 4 Topper Cards Bottom */}
            <div className="lg:col-span-8 space-y-8">
              {/* Top 4 Stat Metric Badges (Grid 2x2 on mobile, 4 columns on tablet/desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#06172A] border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F8F5EE] dark:bg-white/10 flex items-center justify-center mb-3">
                        <Icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-black text-[#0A1C31] dark:text-white block tracking-tight leading-tight mb-1">
                          {stat.title}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium text-[#69778A] dark:text-slate-400 block leading-tight">
                          {stat.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom "Our Toppers" Row */}
              <div className="space-y-3 text-left">
                <span className="text-xs font-black uppercase tracking-wider text-[#69778A] dark:text-slate-400">
                  Our Toppers
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {displayToppers.map((topper, index) => {
                    const rankNumber = index + 1;
                    return (
                      <motion.div
                        key={topper.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        onClick={() => setSelectedStudent(topper)}
                        className="group relative p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#06172A] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#D8A53C]/40 transition-all cursor-pointer flex flex-col items-center text-center overflow-hidden"
                      >
                        {/* Student Photo with Rank Badge Overlay */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-white/20 shadow-md mb-2.5">
                          <Image
                            src={topper.portraitImage || topper.cardImage}
                            alt={topper.name}
                            fill
                            sizes="120px"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Rank Badge Circle (1, 2, 3, 4) */}
                        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#D8A53C] to-[#B8860B] text-[#03101E] font-black text-xs flex items-center justify-center shadow-md">
                          {rankNumber}
                        </div>

                        {/* Student Details */}
                        <span className="text-xs sm:text-sm font-black text-[#0A1C31] dark:text-white truncate w-full tracking-tight">
                          {topper.name}
                        </span>

                        <div className="flex items-baseline gap-1 my-0.5">
                          <span className="text-sm sm:text-base font-black text-[#D8A53C] font-[family-name:var(--font-heading)]">
                            {topper.marks}
                          </span>
                          <span className="text-[10px] text-[#69778A] dark:text-slate-400 font-bold">
                            /600
                          </span>
                        </div>

                        <span className="text-[9px] sm:text-[10px] font-bold text-[#69778A] dark:text-slate-400 uppercase tracking-wider block">
                          SSC 2024–25
                        </span>

                        {/* Rank Label Pill */}
                        <span className="mt-1.5 px-2 py-0.5 rounded-full bg-[#F8F5EE] dark:bg-white/10 text-[9px] font-bold text-[#D8A53C] uppercase tracking-wider">
                          {rankNumber === 1 ? 'School Topper' : topper.rankBadge}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal when user clicks any topper card */}
      <PremiumStudentCardModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        onEnquire={onOpenAdmissions}
      />
    </>
  );
}
