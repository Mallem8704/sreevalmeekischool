'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { HallOfFameStudent } from '@/lib/hallOfFameData';

interface StudentHonorCardProps {
  student: HallOfFameStudent;
  onClick: (student: HallOfFameStudent) => void;
  featured?: boolean;
  priority?: boolean;
}

export default function StudentHonorCard({
  student,
  onClick,
  featured = false,
  priority = false,
}: StudentHonorCardProps) {
  // Use the pure cropped student person portrait first
  const imageSrc = student.portraitImage || student.cardImage || '/images/school/school-event-7.jpg';

  if (featured) {
    // Large Hero Frame (for Town 1st, Town 2nd, and 590+ Super Stars)
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => onClick(student)}
        className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border-2 border-[#D4A853]/60 hover:border-[#D4A853] transition-all duration-300 cursor-pointer shadow-[0_12px_40px_rgba(212,168,83,0.15)] dark:shadow-none hover:shadow-2xl p-6 sm:p-8 text-[#0A1628] dark:text-white"
      >
        {/* Top Header Strip with Rank Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#0A1628] text-xs font-black uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>{student.rankBadge}</span>
          </div>
          <span className="text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] group-hover:underline flex items-center gap-1">
            <span>View Full Frame</span>
            <span>→</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* Executive Student Portrait Frame */}
          <div className="sm:col-span-5 relative flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[240px] rounded-2xl overflow-hidden border-2 border-[#D4A853] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5 shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src={imageSrc}
                alt={student.name}
                fill
                priority={priority}
                sizes="(max-width: 640px) 240px, 260px"
                className="object-cover object-top filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Verified Crest Badge */}
              <div className="absolute top-2.5 right-2.5 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D4A853] shadow flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#10B981]" />
                <span className="text-[9px] font-black uppercase tracking-wider text-[#0A1628] dark:text-white">
                  Verified
                </span>
              </div>

              {/* Student Name Overlay on Image Base */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center text-white">
                <span className="text-[9px] font-black tracking-widest uppercase text-[#FBBF24] block">
                  {student.batch}
                </span>
                <span className="text-sm font-black font-[family-name:var(--font-heading)] uppercase line-clamp-1">
                  {student.name}
                </span>
              </div>
            </div>
          </div>

          {/* Clean Student Information Typography */}
          <div className="sm:col-span-7 space-y-3.5 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Official SSC Board Result
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] uppercase tracking-tight">
                {student.name}
              </h3>
            </div>

            {/* Prominent Score Display */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Total Marks
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-[#0A1628] to-[#B8860B] dark:from-white dark:to-[#FBBF24]">
                    {student.marks}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-bold">
                    / {student.maxMarks}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-black">
                  {student.percentage}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">
                  Distinction Grade
                </span>
              </div>
            </div>

            {/* Honor Details & Highlights */}
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <p className="font-bold text-[#B8860B] dark:text-[#FBBF24] flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#D4A853] text-[#D4A853]" />
                <span>{student.honorDetails}</span>
              </p>
              {student.subjects && (
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  {student.subjects}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Compact Grid Frame (for all other scholars & grid views)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onClick={() => onClick(student)}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-[#D4A853] dark:hover:border-[#D4A853] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl p-3 text-center flex flex-col justify-between"
    >
      {/* Top Mini Badge */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/10 text-[10px]">
        <span className="px-2 py-0.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] font-black uppercase tracking-wider text-[9px] truncate max-w-[120px]">
          {student.rankBadge}
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px]">
          {student.percentage}
        </span>
      </div>

      {/* Pure Person Portrait Frame */}
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-2.5 border border-slate-200/80 dark:border-white/10 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-inner">
        <Image
          src={imageSrc}
          alt={student.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Verified icon */}
        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-[#0A1628]/90 flex items-center justify-center shadow">
          <ShieldCheck className="w-3 h-3 text-[#10B981]" />
        </div>
      </div>

      {/* Clean Information Typography */}
      <div className="space-y-1">
        <h4 className="text-xs sm:text-sm font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] uppercase line-clamp-1">
          {student.name}
        </h4>

        <div className="flex items-center justify-center gap-1">
          <span className="text-sm sm:text-base font-black text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)]">
            {student.marks}
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">
            / {student.maxMarks}
          </span>
        </div>

        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
          {student.honorDetails}
        </p>
      </div>

      {/* Click indicator */}
      <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-white/10 text-[9px] font-bold text-[#B8860B] dark:text-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity">
        Click to inspect card →
      </div>
    </motion.div>
  );
}
