'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Maximize2,
  X,
  BookOpen,
  Users,
  Brain,
  Microscope,
  CheckCircle2,
} from 'lucide-react';

interface ClassroomVisualItem {
  id: string;
  label: string;
  title: string;
  caption: string;
  image: string;
  category: string;
  stats?: string;
}

const classroomItems: ClassroomVisualItem[] = [
  {
    id: 'interactive-learning',
    label: 'INTERACTIVE LEARNING',
    title: '4K Smart Digital Panels in Action',
    caption: 'Replacing rote chalkboards with dynamic 3D biology diagrams, physics simulations, and visual geometry to make concepts intuitive.',
    image: '/images/campus/smart_learning_panel.jpg',
    category: 'TECH-ENABLED CLASSROOM',
    stats: '25+ Smart Displays',
  },
  {
    id: 'student-participation',
    label: 'STUDENT PARTICIPATION',
    title: 'Active Questioning & Spoken Confidence',
    caption: 'Small batch sizes ensure every student speaks up, clarifies doubts, and presents on stage without hesitation.',
    image: '/images/campus/classroom_interaction.jpg',
    category: 'CLASSROOM ENGAGEMENT',
    stats: '1:20 Mentor Ratio',
  },
  {
    id: 'digital-pedagogy',
    label: 'DIGITAL PEDAGOGY',
    title: 'Modern Ergonomic Classrooms',
    caption: 'Airy, cross-ventilated classrooms with structured dual-desk seating that fosters collaborative team learning.',
    image: '/images/campus/digital_classroom.jpg',
    category: 'INFRASTRUCTURE',
    stats: 'Natural Daylight & Air',
  },
  {
    id: 'faculty-mentorship',
    label: 'FACULTY MENTORSHIP',
    title: 'Experienced Hands-on Lab Guidance',
    caption: 'Dedicated science educators guiding individual experiments in optics, biology specimens, and chemical reactions.',
    image: '/images/campus/science_lab_faculty.jpg',
    category: 'FACULTY EXCELLENCE',
    stats: '15+ Yrs Avg Experience',
  },
];

export default function ClassroomShowcase() {
  const [activeLightboxItem, setActiveLightboxItem] = useState<ClassroomVisualItem | null>(null);

  const heroItem = classroomItems[0]; // smart_learning_panel.jpg
  const portraitItem = classroomItems[1]; // classroom_interaction.jpg
  const supporting1 = classroomItems[2]; // digital_classroom.jpg
  const supporting2 = classroomItems[3]; // science_lab_faculty.jpg

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            AN ENVIRONMENT DESIGNED FOR ACTIVE CURIOSITY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-4"
          >
            INSIDE THE CLASSROOM.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Where students are not passive listeners, but active participants. Smart digital panels, hands-on lab discovery, and compassionate mentorship converge to mold town toppers.
          </motion.p>
        </div>

        {/* Editorial Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column (8 Columns): Hero Image on Top + 2 Supporting Images Below */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
            {/* 1. Large Hero Image: smart_learning_panel.jpg */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#D4A853]/60 transition-all duration-500 h-[360px] sm:h-[440px]"
            >
              <Image
                src={heroItem.image}
                alt={heroItem.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Multi-layer gradient for high-contrast luxury readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Top Badge & Expand Button */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/90 text-[#0A1628] text-xs font-black tracking-widest uppercase shadow-md">
                  <Brain className="w-3.5 h-3.5" />
                  {heroItem.label}
                </span>

                <button
                  onClick={() => setActiveLightboxItem(heroItem)}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                  aria-label={`Enlarge photo: ${heroItem.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 z-10 text-white space-y-2">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#F5E6C0]">
                  {heroItem.category} • {heroItem.stats}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white">
                  {heroItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200/90 max-w-xl font-light leading-relaxed hidden sm:block">
                  {heroItem.caption}
                </p>
              </div>
            </motion.div>

            {/* 2 Supporting Images Row (Side-by-side in Left Column) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Supporting Image 1: digital_classroom.jpg */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[#D4A853]/60 transition-all duration-500 h-[280px] sm:h-[300px]"
              >
                <Image
                  src={supporting1.image}
                  alt={supporting1.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Top Label */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D4A853] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    {supporting1.label}
                  </span>
                  <button
                    onClick={() => setActiveLightboxItem(supporting1)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                    aria-label={`Enlarge photo: ${supporting1.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h4 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-1">
                    {supporting1.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {supporting1.caption}
                  </p>
                </div>
              </motion.div>

              {/* Supporting Image 2: science_lab_faculty.jpg */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[#D4A853]/60 transition-all duration-500 h-[280px] sm:h-[300px]"
              >
                <Image
                  src={supporting2.image}
                  alt={supporting2.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Top Label */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D4A853] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    {supporting2.label}
                  </span>
                  <button
                    onClick={() => setActiveLightboxItem(supporting2)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                    aria-label={`Enlarge photo: ${supporting2.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h4 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-1">
                    {supporting2.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {supporting2.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (4 Columns): Tall Portrait Image: classroom_interaction.jpg */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#D4A853]/60 transition-all duration-500 h-[500px] sm:h-[600px] lg:h-full flex flex-col justify-between"
            >
              <Image
                src={portraitItem.image}
                alt={portraitItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Multi-layer portrait gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30" />

              {/* Top Header in Portrait */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/90 text-[#0A1628] text-xs font-black tracking-widest uppercase shadow-md">
                  <Users className="w-3.5 h-3.5" />
                  {portraitItem.label}
                </span>

                <button
                  onClick={() => setActiveLightboxItem(portraitItem)}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-[#D4A853] transition-colors cursor-pointer"
                  aria-label={`Enlarge photo: ${portraitItem.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Editorial Quote Card in Portrait */}
              <div className="relative z-10 p-5 sm:p-8 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F5E6C0] block">
                    {portraitItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white leading-tight">
                    {portraitItem.title}
                  </h3>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-200/90 italic border-l-2 border-[#D4A853] pl-3 py-1 font-light leading-relaxed">
                  &ldquo;Active questioning is never discouraged at Sree Valmeeki—it is the very heart of how town toppers master concepts.&rdquo;
                </blockquote>

                {/* Micro Badges Strip */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                    {portraitItem.stats}
                  </span>
                  <span className="font-mono text-[#D4A853]">100% PASS RATE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLightboxItem(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-[#D4A853] text-xs font-black uppercase tracking-widest block mb-1">
                  {activeLightboxItem.label} • {activeLightboxItem.category}
                </span>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
                  {activeLightboxItem.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
