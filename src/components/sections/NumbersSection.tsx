'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '27',
    label: 'YEARS OF EXCELLENCE',
    sublabel: '1999–2026 In Kadiri',
  },
  {
    number: '1999',
    label: 'OUR JOURNEY BEGAN',
    sublabel: 'Over Two Decades of Trust',
  },
  {
    number: 'NURSERY → X',
    label: 'ONE COMPLETE JOURNEY',
    sublabel: 'Recognized by Govt of A.P',
  },
  {
    number: '100%',
    label: 'SSC DISTINCTION RECORD',
    sublabel: 'Board Examination Excellence',
  },
];

export default function NumbersSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#050D1A] text-white overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center lg:text-left divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col justify-between pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-10' : ''}`}
            >
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-heading)] bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent tracking-tight block mb-2">
                  {stat.number}
                </span>

                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white font-[family-name:var(--font-heading)] leading-snug">
                  {stat.label}
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs text-white/50 mt-3 font-mono">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
