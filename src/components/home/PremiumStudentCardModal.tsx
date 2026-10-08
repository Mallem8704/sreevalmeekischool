'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ChevronLeft, ChevronRight, Share2, Sparkles, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { HallOfFameStudent } from '@/lib/hallOfFameData';

interface PremiumStudentCardModalProps {
  student: HallOfFameStudent | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onEnquire?: () => void;
}

export default function PremiumStudentCardModal({
  student,
  onClose,
  onNext,
  onPrev,
  onEnquire,
}: PremiumStudentCardModalProps) {
  const [copied, setCopied] = useState(false);

  if (!student) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* The Premium Certificate / Luxury Student Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 25 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#0A1628] via-[#061122] to-[#0A1628] border-2 border-[#D4A853] rounded-3xl shadow-[0_20px_70px_rgba(212,168,83,0.3)] overflow-hidden z-10 text-white"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Close & Navigation Controls Bar */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4A853] hover:text-[#050D1A] border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Student"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4A853] hover:text-[#050D1A] border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Student"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/70 hover:bg-red-600 border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Top Brand Header: Official School Seal */}
          <div className="pt-6 sm:pt-8 px-6 sm:px-8 pb-4 text-center border-b border-[#D4A853]/30 bg-[#050D1A]/80">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
              <div className="w-8 h-8 relative rounded-full overflow-hidden border border-[#D4A853]/60 bg-white p-0.5">
                <Image src="/logo.png" alt="Sree Valmeeki Logo" fill className="object-contain" />
              </div>
              <h2 className="text-base sm:text-xl font-black font-[family-name:var(--font-heading)] uppercase tracking-wider text-[#D4A853]">
                SREE VALMEEKI E.M SCHOOL
              </h2>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70 font-semibold tracking-widest uppercase">
              27 Years of Excellence • Kadiri, Sri Sathya Sai Dist • Estd 1999
            </p>
          </div>

          {/* Card Content Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Photo Display (Original Extracted Card or Portrait) */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-48 sm:w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4A853] bg-[#0A1628] shadow-2xl group">
                  <Image
                    src={student.cardImage || student.portraitImage || '/images/school/school-event-7.jpg'}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded bg-[#D4A853] text-[#050D1A] text-[9px] font-black uppercase tracking-wider shadow">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Student Details & Oversized Marks */}
              <div className="sm:col-span-7 space-y-4 text-left">
                {/* Rank Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 text-[#FBBF24] text-xs font-black tracking-widest uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>{student.rankBadge}</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-white tracking-tight uppercase">
                  {student.name}
                </h3>

                {/* Big Marks Badge */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 block">
                    Board Examination Score
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D4A853]">
                      {student.marks}
                    </span>
                    <span className="text-xl font-bold text-white/50">/ {student.maxMarks}</span>
                    <span className="ml-auto px-2.5 py-1 rounded-md bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black">
                      {student.percentage}
                    </span>
                  </div>
                </div>

                {/* Honor Details / Subjects */}
                <div className="text-xs sm:text-sm text-white/80 space-y-1 font-medium">
                  <p className="text-[#FBBF24] font-semibold">{student.honorDetails}</p>
                  {student.subjects && (
                    <p className="text-white/60 text-xs">{student.subjects}</p>
                  )}
                </div>

                {/* Official Verification Seal */}
                <div className="flex items-center gap-2 text-[11px] text-[#10B981] font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official SSC Board 2026 Verified Record</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>{copied ? 'Link Copied!' : 'Share Achievement'}</span>
              </button>

              {onEnquire && (
                <button
                  onClick={() => {
                    onClose();
                    onEnquire();
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#050D1A] text-xs font-black tracking-wider uppercase shadow-lg shadow-[#D4A853]/20 transition-all cursor-pointer ml-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enquire For Admission 2026–27</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
