'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Clock } from 'lucide-react';
import { oneDayMoments } from '@/lib/data';

export default function OneDayAtValmeeki() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS LIFE IN REAL-TIME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-3">
            ONE DAY.{' '}
            <span className="block sm:inline bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              A THOUSAND MOMENTS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70">
            A visual walk through a typical day on the Valmeeki campus.
          </p>
        </div>

        {/* 4 Sequential Time Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {oneDayMoments.map((item, idx) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative rounded-3xl overflow-hidden bg-[#050D1A] border border-white/15 hover:border-[#D4A853]/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Photo Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent" />

                {/* Clock Badge */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md border border-[#D4A853]/40 text-[#D4A853] text-xs font-mono font-bold shadow-md">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.time}</span>
                </div>
              </div>

              {/* Minimal Text Story */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                  <span>Part 0{idx + 1}</span>
                  <span className="text-[#D4A853]">Daily Routine</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
