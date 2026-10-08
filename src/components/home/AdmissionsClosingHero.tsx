'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface AdmissionsClosingHeroProps {
  onOpenAdmissions: () => void;
}

export default function AdmissionsClosingHero({ onOpenAdmissions }: AdmissionsClosingHeroProps) {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#050D1A] text-white py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Background Campus Footage Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/school/school-event-4.jpg"
          className="object-cover w-full h-full opacity-35 scale-105 brightness-90 filter"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Deep Navy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/80 to-[#050D1A]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050D1A]/70 to-[#050D1A]" />

        {/* Ambient Gold Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A853]/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] text-xs font-black tracking-widest uppercase shadow-lg shadow-[#D4A853]/10"
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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white leading-[1.02]"
        >
          THE NEXT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D]">
            SUCCESS STORY
          </span> <br />
          COULD BEGIN HERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed"
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
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#050D1A] font-black text-xs sm:text-sm tracking-widest uppercase shadow-2xl hover:shadow-[0_10px_35px_rgba(212,168,83,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Enquire For Admission</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/25 backdrop-blur-md transition-all cursor-pointer hover:border-white/50"
          >
            <MapPin className="w-4 h-4 text-[#D4A853]" />
            <span>Visit Campus</span>
          </Link>

          <a
            href="tel:+919440468838"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/15 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#FBBF24]" />
            <span>Call +91 94404 68838</span>
          </a>
        </motion.div>

        {/* Final Signoff Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4A853] uppercase"
        >
          27 Years of Excellence. The journey continues.
        </motion.div>
      </div>
    </section>
  );
}
