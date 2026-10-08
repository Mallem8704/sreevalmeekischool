'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface AdmissionsClosingHeroProps {
  onOpenAdmissions: () => void;
}

export default function AdmissionsClosingHero({ onOpenAdmissions }: AdmissionsClosingHeroProps) {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] text-[#0A1628] dark:text-white py-24 sm:py-32 overflow-hidden border-t border-slate-200/80 dark:border-white/10 transition-colors duration-200">
      {/* Background Campus Footage Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/school/school-event-4.jpg"
          className="object-cover w-full h-full opacity-15 dark:opacity-25 scale-105 filter"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Light Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE] via-[#FDFBF7]/85 to-[#F8FAFC]/90 dark:from-[#050D1A] dark:via-[#0A1628]/85 dark:to-[#050D1A]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#FDFBF7]/70 to-[#FDFBF7] dark:via-[#0A1628]/70 dark:to-[#0A1628]" />

        {/* Ambient Gold Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A853]/10 dark:bg-[#D4A853]/20 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ADMISSIONS OPEN 2026–27 • NURSERY TO CLASS 10</span>
        </motion.div>

        {/* Giant Headline: "THE NEXT SUCCESS STORY COULD BEGIN HERE." */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-[1.02]"
        >
          THE NEXT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
            SUCCESS STORY
          </span> <br />
          COULD BEGIN HERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg font-normal max-w-xl mx-auto leading-relaxed"
        >
          Give your child the gift of strong academic foundations, stage speaking confidence, and 27 years of proven educational excellence.
        </motion.p>

        {/* High-Impact Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={onOpenAdmissions}
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-[#D4A853] dark:text-[#0A1628] hover:text-white dark:hover:text-[#0A1628] font-black text-xs sm:text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-[#0A1628] dark:border-[#D4A853]"
          >
            <span>Enquire For Admission</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-50 dark:hover:bg-white/10 text-[#0A1628] dark:text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-200 dark:border-white/15 shadow-md transition-all cursor-pointer hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60"
          >
            <MapPin className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>Visit Campus</span>
          </Link>

          <a
            href="tel:+919440468838"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-50 dark:hover:bg-white/10 text-[#0A1628] dark:text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-200 dark:border-white/15 shadow-md transition-all cursor-pointer hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60"
          >
            <Phone className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>Call +91 94404 68838</span>
          </a>
        </motion.div>

        {/* Final Signoff Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B8860B] dark:text-[#FBBF24] uppercase"
        >
          27 Years of Excellence. The journey continues.
        </motion.div>
      </div>
    </section>
  );
}
