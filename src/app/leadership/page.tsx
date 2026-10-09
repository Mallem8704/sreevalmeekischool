'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Building2,
  Users,
  Heart,
  Phone,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import FounderAndSchoolStory from '@/components/home/FounderAndSchoolStory';
import AdmissionModal from '@/components/home/AdmissionModal';

export default function LeadershipPage() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* =========================================================================
            LEADERSHIP HERO BANNER
        ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1628] transition-colors duration-200">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A853]/10 dark:bg-[#D4A853]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider"
            >
              <Link href="/" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/about" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                About
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#B8860B] dark:text-[#FBBF24]">Executive Leadership</span>
            </motion.div>

            <div className="max-w-4xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs sm:text-sm font-bold mb-6 tracking-wide uppercase shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                <span>EXECUTIVE GOVERNANCE & STEWARDSHIP • ESTD. 1999</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white leading-tight mb-6"
              >
                Visionary Leadership. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  Dedicated to Every Child.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-3xl"
              >
                Meet the founding visionary, academic directors, and administrative custodians steering 28 years of educational excellence, unwavering discipline, and humanitarian service in Kadiri, Sri Sathya Sai District.
              </motion.p>

              {/* Leadership Quick Anchor Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#founder-story"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-bold text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Founder & Chairman</span>
                </a>
                <a
                  href="#founder-story"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-bold text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Director</span>
                </a>
                <a
                  href="#founder-story"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-bold text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Correspondent</span>
                </a>
                <a
                  href="#founder-story"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-bold text-[#0A1628] dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-red-500" />
                  <span>Abhigna Foundation</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURED EXECUTIVE LEADERSHIP FRAME:
            Founder Sri Palavala Jaya Rami Reddy (Top)
            Director Mr. Pavan Kumar Reddy (Bottom Left)
            Correspondent Sri P. Anil Kumar Reddy (Bottom Right)
            Abhigna Foundation Humanitarian Initiatives (Bottom)
        ========================================================================= */}
        <FounderAndSchoolStory onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

        {/* =========================================================================
            FINAL ADMISSIONS CALLOUT
        ========================================================================= */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#0F2044] to-[#0A1628] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] text-white transition-colors duration-200">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-black uppercase tracking-wider mb-4 border border-[#D4A853]/40">
              MEET THE LEADERSHIP IN PERSON
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Experience the Valmeeki Tradition.
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 font-normal leading-relaxed">
              We welcome prospective parents for a personal campus walk, classroom observation, and discussion with our leadership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsAdmissionsModalOpen(true)}
                className="bg-[#D4A853] hover:bg-[#C49A3C] text-[#0A1628] font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Enquire for Admission</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919440468838"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl border border-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4A853]" />
                <span>Call +91 94404 68838</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />

      {/* Global Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionsModalOpen}
        onClose={() => setIsAdmissionsModalOpen(false)}
      />
    </div>
  );
}
