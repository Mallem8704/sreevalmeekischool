'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, Calendar, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface YearResultRecord {
  year: string;
  batchTag: string;
  topStudent: {
    name: string;
    score: string;
    rank: string;
    image: string;
    quote: string;
  };
  metrics: {
    passRate: string;
    distinctions: string;
    perfectCentums: string;
  };
  subjectToppers: {
    subject: string;
    score: string;
    students: string;
  }[];
}

const yearRecords: Record<string, YearResultRecord> = {
  '2026': {
    year: '2026',
    batchTag: 'CURRENT SILVER JUBILEE+ BATCH',
    topStudent: {
      name: 'Batch Under Final Assessment',
      score: '100% Projected Distinction',
      rank: 'Olympiad & Pre-Board Leaders',
      image: '/images/school/school-event-4.jpg',
      quote: '“Our senior Class 10 students are currently completing state board diagnostics and national olympiad rounds.”',
    },
    metrics: {
      passRate: '100%',
      distinctions: '85%+',
      perfectCentums: '50+ Ranks',
    },
    subjectToppers: [
      { subject: 'IIT Foundation Mathematics', score: 'Top Percentile', students: 'Senior Batch' },
      { subject: 'Science Olympiad', score: 'State Finalists', students: 'Class 9 & 10' },
      { subject: 'Spoken English & Debate', score: 'Town Winners', students: 'Assembly Leaders' },
    ],
  },
  '2025': {
    year: '2025',
    batchTag: 'STATE 1ST RANK BATCH',
    topStudent: {
      name: 'V. Keerthana',
      score: '592 / 600 (98.7%)',
      rank: 'SSC District 1st Rank',
      image: '/images/school/school-event-7.jpg',
      quote: '“Achieved top state honor through concept clarity and daily guidance from Valmeeki mentors.”',
    },
    metrics: {
      passRate: '100%',
      distinctions: '94%',
      perfectCentums: '18 Students',
    },
    subjectToppers: [
      { subject: 'Mathematics', score: '100 / 100', students: '12 Students Perfect Score' },
      { subject: 'Physical Science', score: '100 / 100', students: '8 Students Centum' },
      { subject: 'English Communication', score: '98 / 100', students: 'Class 10 Distinction' },
    ],
  },
  '2024': {
    year: '2024',
    batchTag: 'DISTRICT 2ND RANK BATCH',
    topStudent: {
      name: 'G. Tejaswini',
      score: '588 / 600 (98.0%)',
      rank: 'SSC District 2nd Rank',
      image: '/images/school/school-event-8.jpg',
      quote: '“Consistently trained across both AP State Board syllabus and competitive reasoning.”',
    },
    metrics: {
      passRate: '100%',
      distinctions: '91%',
      perfectCentums: '14 Students',
    },
    subjectToppers: [
      { subject: 'Mathematics', score: '100 / 100', students: '9 Students Centum' },
      { subject: 'Social Studies', score: '99 / 100', students: 'Top in Kadiri Mandal' },
      { subject: 'Biological Science', score: '98 / 100', students: 'State Distinction' },
    ],
  },
  '2023': {
    year: '2023',
    batchTag: 'TOWN 1ST RANK BATCH',
    topStudent: {
      name: 'K. Bhanu Prakash',
      score: '585 / 600 (97.5%)',
      rank: 'SSC Kadiri Town 1st Rank',
      image: '/images/school/school-event-1.jpg',
      quote: '“Valmeeki gave us the discipline to stay calm under board exam pressure and succeed.”',
    },
    metrics: {
      passRate: '100%',
      distinctions: '88%',
      perfectCentums: '11 Students',
    },
    subjectToppers: [
      { subject: 'Mathematics', score: '99 / 100', students: '7 Students Distinction' },
      { subject: 'General Science', score: '98 / 100', students: 'Town Top Percentile' },
      { subject: 'Telugu First Language', score: '97 / 100', students: 'Full Batch Merit' },
    ],
  },
  '2022': {
    year: '2022',
    batchTag: 'DISTINCTION BATCH',
    topStudent: {
      name: 'M. Sneha Latha',
      score: '582 / 600 (97.0%)',
      rank: 'Top District Distinction',
      image: '/images/school/school-event-3.jpg',
      quote: '“A heritage of girl child empowerment and scholastic leadership across Kadiri.”',
    },
    metrics: {
      passRate: '100%',
      distinctions: '86%',
      perfectCentums: '9 Students',
    },
    subjectToppers: [
      { subject: 'Mathematics', score: '99 / 100', students: '5 Students Centum' },
      { subject: 'English', score: '98 / 100', students: 'Top Board Honor' },
      { subject: 'Science', score: '96 / 100', students: 'Full Batch Pass' },
    ],
  },
};

export default function ResultsTimeline() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const record = yearRecords[selectedYear] || yearRecords['2025'];
  const years = ['2026', '2025', '2024', '2023', '2022'];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F8FAFC] text-[#0A1628] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] text-[11px] font-black tracking-widest uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>ARCHIVE OF EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] mb-4">
            RESULTS THROUGH THE YEARS
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Select any year to view verified batch highlights, centum scores, and academic milestones.
          </p>

          {/* Interactive Year Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  selectedYear === y
                    ? 'bg-[#0A1628] text-[#D4A853] shadow-md shadow-[#0A1628]/10 scale-105 border border-[#0A1628]'
                    : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0A1628] border border-slate-200 shadow-sm'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Year Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Top Student of Selected Year */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src={record.topStudent.image}
                    alt={record.topStudent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider mb-1.5">
                      {record.topStudent.rank}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)]">
                      {record.topStudent.name}
                    </h3>
                    <p className="text-sm font-bold text-[#FBBF24]">
                      {record.topStudent.score}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Year Metrics & Subject Distinctions */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Batch Tag */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-slate-100 border border-slate-200 text-[#0A1628] text-xs font-black tracking-widest uppercase">
                    {record.year} • {record.batchTag}
                  </span>
                </div>

                {/* 3 Key Batch Metric Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="block text-2xl sm:text-3xl font-black text-[#0A1628] font-[family-name:var(--font-heading)]">
                      {record.metrics.passRate}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Pass Rate
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="block text-2xl sm:text-3xl font-black text-[#B8860B] font-[family-name:var(--font-heading)]">
                      {record.metrics.distinctions}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Distinction Rate
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="block text-2xl sm:text-3xl font-black text-[#0A1628] font-[family-name:var(--font-heading)]">
                      {record.metrics.perfectCentums}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Centums / Top Ranks
                    </span>
                  </div>
                </div>

                {/* Subject Toppers Table */}
                <div className="space-y-2">
                  <span className="block text-xs uppercase font-bold tracking-widest text-[#B8860B]">
                    Subject-Wise High Benchmarks
                  </span>
                  <div className="divide-y divide-slate-100 rounded-xl bg-slate-50/60 border border-slate-200/80 overflow-hidden">
                    {record.subjectToppers.map((st) => (
                      <div key={st.subject} className="p-3 sm:p-3.5 flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-[#0A1628]">{st.subject}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-500 text-xs hidden sm:inline">{st.students}</span>
                          <span className="font-black text-[#0A1628] px-2 py-0.5 rounded bg-white border border-slate-200 shadow-xs">
                            {st.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#D4A853] pl-4 italic text-slate-600 text-xs sm:text-sm">
                  {record.topStudent.quote}
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
