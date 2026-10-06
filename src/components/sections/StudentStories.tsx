'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart } from 'lucide-react';
import { studentStories } from '@/lib/data';

export default function StudentStories() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL STUDENT VOICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-3">
            MEET OUR{' '}
            <span className="bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              STUDENTS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70">
            Unfiltered joy, stage confidence, and ambition nurtured every single day.
          </p>
        </div>

        {/* 3 Student Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentStories.map((story, idx) => (
            <motion.div
              key={story.studentName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853]/60 transition-all duration-300 shadow-2xl flex flex-col"
            >
              {/* Large Student Portrait */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={story.image}
                  alt={story.studentName}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

                {/* Heart Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4A853]">
                  <Heart className="w-4 h-4 fill-[#D4A853]/30" />
                </div>
              </div>

              {/* Quote & Identity */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <blockquote className="text-base sm:text-lg font-medium text-white/95 leading-snug font-[family-name:var(--font-heading)] mb-6">
                  {story.quote}
                </blockquote>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#D4A853] uppercase tracking-wider">
                      {story.studentName}
                    </h4>
                    <span className="text-xs text-white/50">{story.classGrade}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                    Valmeekian
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
