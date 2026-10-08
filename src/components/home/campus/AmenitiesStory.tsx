'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { CAMPUS_AMENITIES, AmenityItem } from '@/lib/campusTourData';

export default function AmenitiesStory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(CAMPUS_AMENITIES.map((a) => a.category)))];

  const filteredAmenities = selectedCategory === 'ALL'
    ? CAMPUS_AMENITIES
    : CAMPUS_AMENITIES.filter((a) => a.category === selectedCategory);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            VERIFIED CAMPUS AMENITIES & FACILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            DESIGNED FOR EVERY SCHOOL DAY.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto"
          >
            A cohesive environment where digital tech, open sports grounds, certified science labs, and reliable bus transport converge.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0A1628] text-white dark:bg-[#D4A853] dark:text-[#0A1628] shadow-md'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 8-Card Image-Led Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-2xl hover:border-[#D4A853]/50 dark:hover:border-[#D4A853]/60 transition-all duration-300"
              >
                {/* Large Photo Canvas */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-[#FBBF24]">
                    {amenity.category}
                  </span>

                  {/* Bottom Accent Glow */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4A853]/50 to-transparent group-hover:via-[#D4A853] transition-all" />
                </div>

                {/* Card Content: Small Title + Short Tagline */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors leading-snug">
                      {amenity.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {amenity.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Facility
                    </span>
                    <span className="text-[#B8860B] dark:text-[#D4A853] uppercase tracking-wider text-[10px]">
                      Sree Valmeeki
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
