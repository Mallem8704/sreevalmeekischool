'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Monitor,
  Building2,
  FlaskConical,
  Leaf,
  Users,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ExperiencePillar {
  id: string;
  pill: string;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: typeof GraduationCap;
  href: string;
}

const experiencePillars: ExperiencePillar[] = [
  {
    id: 'academics',
    pill: '01',
    category: 'ACADEMIC RIGOR',
    title: 'Concept-First Learning',
    description: 'Deep understanding, analytical thinking, and academic discipline in every classroom.',
    image: '/images/why_choose/01_academic_rigor_concept_learning.jpg',
    icon: GraduationCap,
    href: '/academics',
  },
  {
    id: 'digital',
    pill: '02',
    category: 'SMART CLASSROOMS',
    title: 'Interactive Technology',
    description: 'Visual learning panels, 3D simulations, and multimedia resources that engage curiosity.',
    image: '/images/why_choose/02_smart_classrooms_interactive_tech.jpg',
    icon: Monitor,
    href: '/campus',
  },
  {
    id: 'campus',
    pill: '03',
    category: 'CAMPUS ENVIRONMENT',
    title: 'Spacious Infrastructure',
    description: 'Airy classrooms, green surroundings, and dedicated facilities designed for daily focus.',
    image: '/images/why_choose/03_campus_spacious_infrastructure.jpg',
    icon: Building2,
    href: '/campus',
  },
  {
    id: 'competitive',
    pill: '04',
    category: 'COMPETITIVE EDGE',
    title: 'IIT & Olympiad Foundation',
    description: 'Early analytical problem-solving and competitive exam aptitude integrated from Class 6.',
    image: '/images/why_choose/04_competitive_edge_iit_olympiad.jpg',
    icon: FlaskConical,
    href: '/academics/iit-foundation',
  },
  {
    id: 'values',
    pill: '05',
    category: 'DISCIPLINE & CHARACTER',
    title: 'Values That Endure',
    description: 'Instilling integrity, mutual respect, and personal responsibility alongside marks.',
    image: '/images/why_choose/05_discipline_character_values.jpg',
    icon: Leaf,
    href: '/about',
  },
  {
    id: 'community',
    pill: '06',
    category: 'STUDENT LIFE',
    title: 'Confidence & Expression',
    description: 'Daily stage assemblies, elocution, and stage presentation for confident communicators.',
    image: '/images/why_choose/06_student_life_confidence_expression.jpg',
    icon: Users,
    href: '/gallery',
  },
];

export default function LegacyTimeline() {
  return (
    <section
      id="why-valmeeki"
      aria-label="Why Choose Sree Valmeeki School"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#FBF9F5] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =======================================================================
            SECTION HEADER (Matching Master Reference Design)
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow with flanking gold accent lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 text-[#B8860B] dark:text-[#FBBF24] text-[11px] sm:text-xs font-black tracking-[0.28em] uppercase mb-3 sm:mb-4"
          >
            <span className="h-[1.5px] w-6 sm:w-10 bg-[#D4A853]/60 dark:bg-[#FBBF24]/60" />
            <span>WHY CHOOSE</span>
            <span className="h-[1.5px] w-6 sm:w-10 bg-[#D4A853]/60 dark:bg-[#FBBF24]/60" />
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white tracking-tight leading-[1.1] mb-2 sm:mb-3"
            >
              Sree Valmeeki School
            </motion.h2>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto font-normal tracking-wide"
          >
            Holistic education for a brighter tomorrow
          </motion.p>
        </div>

        {/* =======================================================================
            VISUAL FEATURE CARDS GRID (3 Desktop, 2 Tablet, 1 Mobile)
        ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {experiencePillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Card Image Visual with consistent 16:9 ratio */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} - Sree Valmeeki School`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={idx < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Index Pill (Clean golden amber rounded badge) */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md">
                      {pillar.pill}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left bg-white dark:bg-[#0A1628]">
                  <div>
                    {/* Icon Badge + Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#FEF3C7] dark:bg-[#D4A853]/20 flex items-center justify-center text-[#B8860B] dark:text-[#FBBF24] border border-[#FDE68A] dark:border-[#D4A853]/40 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-black text-[#B8860B] dark:text-[#FBBF24] uppercase tracking-wider block">
                        {pillar.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors tracking-tight leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-2.5">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Link with Circle Arrow Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-5 flex items-center justify-between">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors"
                    >
                      <span>Discover More</span>
                      <span className="w-6 h-6 rounded-full bg-[#B8860B] text-white flex items-center justify-center shadow-sm group-hover:translate-x-1 group-hover:bg-[#996515] transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
