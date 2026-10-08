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
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#050D1A] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[#D4A853] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            CAMPUS LIFE CHRONICLE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-2">
            BEYOND THE RESULT SHEET.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#FBBF24] font-[family-name:var(--font-heading)] uppercase tracking-wider">
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
              className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/10 hover:border-[#D4A853]/50 transition-all shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full bg-[#050D1A]">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#050D1A]/90 border border-white/15 text-[#D4A853] text-xs font-black tracking-wider uppercase backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5" />
                    {m.time}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2 text-left">
                <h3 className="text-lg font-black text-white font-[family-name:var(--font-heading)]">
                  {m.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-medium">
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
