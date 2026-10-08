'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Image from 'next/image';

const dayMoments = [
  {
    time: '08:30 AM',
    title: 'THE DAY BEGINS.',
    caption: 'Disciplined morning assembly, state anthem, and student stage speeches in English.',
    image: '/images/school/school-event-11.jpg',
  },
  {
    time: '10:00 AM',
    title: 'CURIOSITY IN ACTION.',
    caption: 'Interactive smart panels, analytical problem drills, and STEM experimental discovery.',
    image: '/images/school/school-event-9.jpg',
  },
  {
    time: '12:30 PM',
    title: 'LEARNING TOGETHER.',
    caption: 'Collaborative peer problem solving, healthy nourishment, and cherished friendships.',
    image: '/images/school/school-event-3.jpg',
  },
  {
    time: '03:30 PM',
    title: 'BEYOND THE CLASSROOM.',
    caption: 'Valmeeki Premier League cricket, volleyball, track athletics, and cultural arts.',
    image: '/images/school/school-event-2.jpg',
  },
];

export default function OneDayAtValmeeki() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            CAMPUS LIFE CHRONICLE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-2">
            BEYOND THE RESULT SHEET.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)] uppercase tracking-wider">
            ONE DAY. A THOUSAND MOMENTS.
          </p>
        </div>

        {/* 4 Moments Cards in Chronological Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dayMoments.map((m, idx) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-white/5">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 dark:bg-[#0A1628]/95 border border-slate-200 dark:border-white/10 text-[#0A1628] dark:text-white text-xs font-black tracking-wider uppercase shadow-sm backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                    {m.time}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2 text-left bg-white dark:bg-[#0A1628]">
                <h3 className="text-lg font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {m.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
