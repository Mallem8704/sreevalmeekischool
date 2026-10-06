'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Quote } from 'lucide-react';
import { peopleOfValmeeki } from '@/lib/data';

export default function PeopleOfValmeeki() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEADERSHIP & MENTORSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-3">
            THE PEOPLE BEHIND{' '}
            <span className="bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              THE JOURNEY.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70">
            Dedicated leadership, visionary teachers, and supportive parents shaping generations.
          </p>
        </div>

        {/* 3 Emotional Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {peopleOfValmeeki.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-[#050D1A] border border-white/15 hover:border-[#D4A853]/50 transition-all duration-300 shadow-2xl flex flex-col"
            >
              {/* Portrait Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent" />

                {/* Floating Quote Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-[#D4A853]/40 flex items-center justify-center text-[#D4A853] shadow-lg">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              {/* Identity & One Quote */}
              <div className="p-6 flex-1 flex flex-col justify-between -mt-6 relative z-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4A853] block mb-1">
                    {person.role}
                  </span>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
                    {person.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    “{person.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <span>Kadiri, Andhra Pradesh</span>
                  <span className="text-[#D4A853] font-semibold">Valmeeki Family</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
