'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TopperProfile {
  year: string;
  name: string;
  marks: string;
  total: string;
  percentage: string;
  rankBadge: string;
  board: string;
  subjects: string;
  image: string;
  quote: string;
}

const toppers: TopperProfile[] = [
  {
    year: '2026 BATCH',
    name: 'D. Janani',
    marks: '595',
    total: '/ 600',
    percentage: '99.2%',
    rankBadge: 'Town 1st Rank',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Maths • 100 in Physical Science • 99 in Social • 99 in English',
    image: '/extracted/star_achievers/janani_card.jpg',
    quote: '“Valmeeki taught us to understand every concept deeply rather than memorizing. That made scoring 595/600 a natural result.”',
  },
  {
    year: '2025 BATCH',
    name: 'V. Keerthana',
    marks: '592',
    total: '/ 600',
    percentage: '98.7%',
    rankBadge: 'District 1st Rank',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Maths • 100 in Physical Science • 98 in English',
    image: '/images/school/school-event-7.jpg',
    quote: '“Valmeeki teachers built our fundamental concepts so deeply that board exams felt like routine class practice.”',
  },
  {
    year: '2024 BATCH',
    name: 'G. Tejaswini',
    marks: '588',
    total: '/ 600',
    percentage: '98.0%',
    rankBadge: 'District 2nd Rank',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '100 in Maths • 99 in Social Studies • 97 in Science',
    image: '/images/school/school-event-8.jpg',
    quote: '“Daily spoken English assemblies and early IIT foundation coaching gave me self-belief to aim for the state top rank.”',
  },
  {
    year: '2023 BATCH',
    name: 'K. Bhanu Prakash',
    marks: '585',
    total: '/ 600',
    percentage: '97.5%',
    rankBadge: 'Town 1st Rank',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '99 in Mathematics • 98 in General Science • 97 in Telugu',
    image: '/images/school/school-event-1.jpg',
    quote: '“The faculty never treated education as memorization; they trained us to solve problems logically with calm discipline.”',
  },
  {
    year: '2022 BATCH',
    name: 'M. Sneha Latha',
    marks: '582',
    total: '/ 600',
    percentage: '97.0%',
    rankBadge: 'Top Distinction',
    board: 'SSC Board • Andhra Pradesh',
    subjects: '99 in Mathematics • 98 in English • 96 in Science',
    image: '/images/school/school-event-3.jpg',
    quote: '“Valmeeki gave us an environment where girls were encouraged to lead, speak on stage, and excel in every competitive exam.”',
  },
];

export default function TopperShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTopper = () => {
    setCurrentIndex((prev) => (prev + 1) % toppers.length);
  };

  const prevTopper = () => {
    setCurrentIndex((prev) => (prev - 1 + toppers.length) % toppers.length);
  };

  const current = toppers[currentIndex];

  return (
    <section id="signature-results" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#050D1A] text-white overflow-hidden border-t border-white/10">
      {/* Background Accent Grid & Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] text-[11px] font-black tracking-widest uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>CONSISTENCY • 27 YEARS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight uppercase text-white">
              3 YEARS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
                A CONSISTENT STANDARD.
              </span>
            </h2>
          </div>

          {/* Year Switcher Pills & Carousel Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-[#0A1628] p-1 rounded-xl border border-white/10">
              {toppers.map((t, idx) => (
                <button
                  key={t.year}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-[#D4A853] text-[#050D1A] shadow-md shadow-[#D4A853]/20 font-black'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t.year.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 ml-auto">
              <button
                onClick={prevTopper}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                aria-label="Previous Topper"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTopper}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                aria-label="Next Topper"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* The Signature Topper Card (Luxury Magazine / University Prospectus style) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-gradient-to-br from-[#0A1628] to-[#061122] border border-[#D4A853]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
          >
            {/* Subtle Editorial Watermark Number */}
            <div className="absolute top-4 right-8 text-[120px] sm:text-[200px] font-black font-[family-name:var(--font-heading)] text-white/[0.02] select-none pointer-events-none leading-none">
              {current.marks}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Large Clean Portrait (Luxury Editorial Framing) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4A853]/40 bg-[#0F2044] shadow-2xl group">
                  <Image
                    src={current.image}
                    alt={`${current.name} - ${current.rankBadge}`}
                    fill
                    className="object-cover object-center brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-85" />

                  {/* Clean Bottom Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded bg-[#D4A853] text-[#050D1A] text-xs font-black tracking-widest uppercase mb-1 shadow-md">
                      {current.rankBadge}
                    </span>
                    <h3 className="text-2xl font-black text-white font-[family-name:var(--font-heading)]">
                      {current.name}
                    </h3>
                    <p className="text-xs text-white/80">{current.board}</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Oversized Result Typography & Editorial Story */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Year + Board Tag */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-white/10 text-[#D4A853] font-black text-xs tracking-widest uppercase">
                    {current.year}
                  </span>
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                    {current.board}
                  </span>
                </div>

                {/* Oversized Result Number */}
                <div>
                  <span className="block text-xs uppercase tracking-[0.25em] text-white/50 font-bold mb-1">
                    Aggregate Board Score
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D4A853] leading-none">
                      {current.marks}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white/50">{current.total}</span>
                    <span className="ml-4 px-3 py-1 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-sm sm:text-base font-black">
                      {current.percentage}
                    </span>
                  </div>
                </div>

                {/* Subject Distinctions */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-[#D4A853]">
                    Verified Subject Distinction
                  </span>
                  <p className="text-sm font-semibold text-white/90">
                    {current.subjects}
                  </p>
                </div>

                {/* Student Quote (Magazine Style) */}
                <blockquote className="border-l-2 border-[#D4A853] pl-4 italic text-white/80 text-sm sm:text-base leading-relaxed">
                  {current.quote}
                </blockquote>

                {/* CTA Link to Full Results Page */}
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/achievements"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D4A853] hover:text-white uppercase tracking-wider transition-colors group cursor-pointer"
                  >
                    <span>View All Batch Distinctions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
