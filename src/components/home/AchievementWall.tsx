'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, X, Award, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { verifiedAchievements, AchievementItem } from '@/lib/data';

export default function AchievementWall() {
  const [selectedItem, setSelectedItem] = useState<AchievementItem | null>(null);

  // Take the first 6 verified achievements for the editorial mosaic
  const achievements = verifiedAchievements.slice(0, 6);

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] text-[#0A1628] border-t border-slate-200/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] text-[11px] font-black tracking-widest uppercase mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>THE DIGITAL HALL OF EXCELLENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight uppercase text-[#0A1628]">
              OUR STUDENTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C]">
                OUR PROUDEST STORIES.
              </span>
            </h2>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-[#0A1628] uppercase tracking-wider transition-all cursor-pointer group shadow-sm hover:border-[#D4A853]/60"
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B8860B]" />
          </Link>
        </div>

        {/* Dynamic Mosaic / Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Card 1: Large Feature (Span 7) */}
          {achievements[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedItem(achievements[0])}
              className="md:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl bg-white"
            >
              <Image
                src={achievements[0].image}
                alt={achievements[0].achievement}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="inline-block px-2.5 py-1 rounded bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-widest mb-2">
                  {achievements[0].level} • {achievements[0].year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] mb-1">
                  {achievements[0].studentName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-white/90 line-clamp-1">
                  {achievements[0].achievement}
                </p>
                <div className="text-[11px] text-[#FBBF24] font-bold mt-1">
                  {achievements[0].marksOrRank}
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Medium Feature (Span 5) */}
          {achievements[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedItem(achievements[1])}
              className="md:col-span-5 relative aspect-[4/3] sm:aspect-auto rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl bg-white"
            >
              <Image
                src={achievements[1].image}
                alt={achievements[1].achievement}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="inline-block px-2.5 py-1 rounded bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-widest mb-2">
                  {achievements[1].level} • {achievements[1].year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] mb-1">
                  {achievements[1].studentName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-white/90 line-clamp-1">
                  {achievements[1].achievement}
                </p>
                <div className="text-[11px] text-[#FBBF24] font-bold mt-1">
                  {achievements[1].marksOrRank}
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Column Span 4 */}
          {achievements[2] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              onClick={() => setSelectedItem(achievements[2])}
              className="md:col-span-4 relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl bg-white"
            >
              <Image
                src={achievements[2].image}
                alt={achievements[2].achievement}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2 py-0.5 rounded bg-[#D4A853] text-[#0A1628] text-[9px] font-black uppercase tracking-widest mb-1">
                  {achievements[2].category}
                </span>
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {achievements[2].studentName}
                </h3>
                <p className="text-xs text-white/90 line-clamp-1">{achievements[2].achievement}</p>
              </div>
            </motion.div>
          )}

          {/* Card 4: Column Span 4 */}
          {achievements[3] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedItem(achievements[3])}
              className="md:col-span-4 relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl bg-white"
            >
              <Image
                src={achievements[3].image}
                alt={achievements[3].achievement}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2 py-0.5 rounded bg-[#7C3AED] text-white text-[9px] font-black uppercase tracking-widest mb-1">
                  {achievements[3].category}
                </span>
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {achievements[3].studentName}
                </h3>
                <p className="text-xs text-white/90 line-clamp-1">{achievements[3].achievement}</p>
              </div>
            </motion.div>
          )}

          {/* Card 5: Column Span 4 */}
          {achievements[4] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              onClick={() => setSelectedItem(achievements[4])}
              className="md:col-span-4 relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl bg-white"
            >
              <Image
                src={achievements[4].image}
                alt={achievements[4].achievement}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2 py-0.5 rounded bg-[#059669] text-white text-[9px] font-black uppercase tracking-widest mb-1">
                  {achievements[4].category}
                </span>
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {achievements[4].studentName}
                </h3>
                <p className="text-xs text-white/90 line-clamp-1">{achievements[4].achievement}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 text-[#0A1628]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.achievement}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4 bg-white">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#D4A853] text-[#0A1628] text-xs font-black uppercase tracking-wider">
                    {selectedItem.level} • {selectedItem.year}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
                    {selectedItem.classGrade}
                  </span>
                  {selectedItem.marksOrRank && (
                    <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                      {selectedItem.marksOrRank}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#0A1628]">
                  {selectedItem.studentName}
                </h3>

                <h4 className="text-base sm:text-lg font-bold text-[#B8860B]">
                  {selectedItem.achievement}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Verified Sree Valmeeki School Archive</span>
                  <Link
                    href="/achievements"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1628] hover:text-[#B8860B] uppercase tracking-wider"
                  >
                    <span>Full Achievements Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
