'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ExperiencePillar {
  id: string;
  pill: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const experiencePillars: ExperiencePillar[] = [
  {
    id: 'academics',
    pill: '01',
    category: 'ACADEMIC RIGOR',
    title: 'Concept-First Learning',
    description: 'Deep understanding, analytical thinking, and academic discipline in every classroom.',
    image: '/images/academic_systems/system_01_foundations.jpg',
    href: '/academics',
  },
  {
    id: 'digital',
    pill: '02',
    category: 'SMART CLASSROOMS',
    title: 'Interactive Technology',
    description: 'Visual learning panels, 3D simulations, and multimedia resources that engage curiosity.',
    image: '/images/campus/digital_classroom.jpg',
    href: '/campus',
  },
  {
    id: 'campus',
    pill: '03',
    category: 'CAMPUS ENVIRONMENT',
    title: 'Spacious Infrastructure',
    description: 'Airy classrooms, green surroundings, and dedicated facilities designed for daily focus.',
    image: '/images/campus/campus_drone_aerial.jpg',
    href: '/campus',
  },
  {
    id: 'competitive',
    pill: '04',
    category: 'COMPETITIVE EDGE',
    title: 'IIT & Olympiad Foundation',
    description: 'Early analytical problem-solving and competitive exam aptitude integrated from Class 6.',
    image: '/images/campus/science_lab_faculty.jpg',
    href: '/academics/iit-foundation',
  },
  {
    id: 'values',
    pill: '05',
    category: 'DISCIPLINE & CHARACTER',
    title: 'Values That Endure',
    description: 'Instilling integrity, mutual respect, and personal responsibility alongside marks.',
    image: '/images/campus/yoga_assembly.jpg',
    href: '/about',
  },
  {
    id: 'community',
    pill: '06',
    category: 'STUDENT LIFE',
    title: 'Confidence & Expression',
    description: 'Daily stage assemblies, elocution, and stage presentation for confident communicators.',
    image: '/images/campus/cultural_dance_stage.jpg',
    href: '/gallery',
  },
];

export default function LegacyTimeline() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* =======================================================================
            EDITORIAL PRESENT-FOCUSED SECTION HEADER
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow: Softly fades in */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/20 border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-4 sm:mb-5 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>THE VALMEEKI EXPERIENCE</span>
          </motion.div>

          {/* Heading: Subtle text-mask/clip reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.9rem,4.8vw,3.75rem)] font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-[1.08] mb-4 sm:mb-5"
            >
              WHERE LEARNING <br className="hidden sm:inline" />
              MEETS POSSIBILITY.
            </motion.h2>
          </div>

          {/* Subheading: Softly fades upward */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto font-normal tracking-wide"
          >
            Explore the academics, achievements, campus, student life and values that shape Sree Valmeeki today.
          </motion.p>
        </div>

        {/* =======================================================================
            VISUAL PILLARS GRID (6 PRESENT-DAY FACETS, EXISTING IMAGES)
        ======================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiencePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-xl flex flex-col justify-between"
            >
              {/* Card Image Visual */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />

                {/* Index Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-[#D4A853] text-[#0A1628] text-xs font-black tracking-wider uppercase shadow-md">
                    {pillar.pill}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 space-y-2 text-left bg-white dark:bg-[#0A1628] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase tracking-wider block mb-1">
                    {pillar.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-1.5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
