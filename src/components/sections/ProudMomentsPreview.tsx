'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Trophy } from 'lucide-react';
import { verifiedAchievements } from '@/lib/data';

export default function ProudMomentsPreview() {
  const featured = verifiedAchievements[0];
  const others = verifiedAchievements.slice(1, 5);

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STUDENT ACHIEVEMENTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
              PROUD MOMENTS.
            </h2>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition-all self-start md:self-auto"
          >
            <span>Explore All Achievements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Achievement Layout: 1 Large Hero + 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Large Hero Card (Left 6 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/20 shadow-2xl flex flex-col justify-end group min-h-[380px] lg:min-h-[500px]"
          >
            <Image
              src={featured.image}
              alt={featured.achievement}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />

            {/* Corner Badge */}
            <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold uppercase tracking-wider shadow-lg">
              <Trophy className="w-3.5 h-3.5" />
              <span>{featured.marksOrRank}</span>
            </div>

            {/* Bottom Details */}
            <div className="relative z-10 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A853] block mb-1">
                {featured.studentName} • {featured.classGrade}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-2 leading-snug">
                {featured.achievement}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 line-clamp-2">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {/* 4 Supporting Image Cards (Right 6 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853]/60 transition-all duration-300 shadow-xl flex flex-col justify-end aspect-[4/3] sm:aspect-auto sm:min-h-[235px]"
              >
                <Image
                  src={item.image}
                  alt={item.achievement}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/30 to-transparent" />

                <div className="relative z-10 p-4">
                  <div className="inline-block px-2 py-0.5 rounded-full bg-white/15 text-[#D4A853] text-[10px] font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-[family-name:var(--font-heading)] text-white line-clamp-1 mb-0.5">
                    {item.studentName}
                  </h4>
                  <p className="text-[11px] text-white/70 line-clamp-1">
                    {item.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
