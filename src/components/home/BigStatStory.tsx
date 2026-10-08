'use client';

import { motion } from 'framer-motion';

const statStories = [
  {
    num: '27',
    label: 'YEARS OF EXCELLENCE',
    subtext: 'Nurturing knowledge, character, and board toppers in Kadiri since 1999.',
  },
  {
    num: '1999',
    label: 'THE JOURNEY BEGAN',
    subtext: 'Built with one steadfast conviction: every child deserves a solid foundation.',
  },
  {
    num: '3',
    suffix: 'YEARS',
    label: 'CONSISTENT TOWN & DISTRICT DISTINCTION',
    subtext: 'Demonstrating scholastic mastery batch after batch in the SSC board examinations.',
  },
  {
    num: 'NURSERY → X',
    label: 'ONE COMPLETE LEARNING JOURNEY',
    subtext: 'From early childhood curiosity to competitive IIT-JEE Olympiad foundations.',
  },
];

export default function BigStatStory() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#050D1A] text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4A853]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[#D4A853] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            VERIFIED PROOF & HISTORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white">
            NUMBERS THAT REFLECT DEDICATION.
          </h2>
        </div>

        {/* Large Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {statStories.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#0A1628]/80 border border-white/10 hover:border-[#D4A853]/50 transition-all group overflow-hidden"
            >
              <div className="relative z-10">
                {/* Big Proof Number */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl sm:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D4A853] leading-none tracking-tight group-hover:to-[#FBBF24] transition-all">
                    {stat.num}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl sm:text-2xl font-black text-[#D4A853] tracking-widest uppercase">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Bold Label */}
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-2 font-[family-name:var(--font-heading)]">
                  {stat.label}
                </h3>

                {/* Short Subtext */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom Subtle Gold Highlight Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A853]/40 to-transparent group-hover:via-[#D4A853] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
