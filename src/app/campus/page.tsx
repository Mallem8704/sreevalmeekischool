'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Phone,
  Trees,
  Bus,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import ExploreValmeekiSection from '@/components/home/campus/ExploreValmeekiSection';
import AdmissionModal from '@/components/home/AdmissionModal';

const campusStats = [
  { value: 'MULTI-ACRE', label: 'Sprawling Campus', sub: 'Lush Green Sanctuary in Kadiri' },
  { value: '25+', label: 'Digital Classrooms', sub: 'Interactive 4K Smart Panels' },
  { value: '10+', label: 'School Bus Fleet', sub: 'GPS Tracking & Safe Attendants' },
  { value: '100+', label: 'Neem & Shade Trees', sub: 'Natural, Quiet Microclimate' },
];

export default function CampusPage() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero: High Visual Campus Presentation */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] transition-colors duration-200">
        {/* Authentic Drone Aerial Photo Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/campus/campus_drone_aerial.jpg"
            alt="Sree Valmeeki Campus Drone Aerial"
            fill
            priority
            className="object-cover opacity-20 dark:opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#050D1A] via-[#FDFBF7]/85 dark:via-[#050D1A]/85 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus & World-Class Facilities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-[family-name:var(--font-heading)] leading-tight text-[#0A1628] dark:text-white mb-4"
          >
            A Space Designed for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              Growth & Discovery.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal mb-8"
          >
            From modern science labs and digital smart boards to our expansive athletic arena and bus fleet — every corner of Sree Valmeeki inspires curiosity and focus.
          </motion.p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsAdmissionsModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 border border-[#0A1628] dark:border-[#FBBF24] cursor-pointer"
            >
              <span>Schedule a Campus Visit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
            <a
              href="tel:+919440468838"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 shadow-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white dark:bg-[#0A1628] border-y border-slate-200/80 dark:border-white/10 py-8 shadow-xs transition-colors duration-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {campusStats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-2xl sm:text-4xl font-black text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)] block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Comprehensive "EXPLORE SREE VALMEEKI" Suite */}
      <ExploreValmeekiSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

      {/* Climax Campus Banner */}
      <section className="py-20 sm:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-[0.25em] block mb-3">
              EXPERIENCE VALMEEKI IN PERSON
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mb-4">
              Book Your Guided Campus Tour.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal">
              See the classrooms, meet the faculty, and discover how 28 years of educational heritage can shape your child&apos;s journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsAdmissionsModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform hover:scale-105 border border-[#0A1628] dark:border-[#FBBF24] cursor-pointer"
              >
                Enroll Now for 2026–27
              </button>
              <a
                href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20would%20like%20to%20book%20a%20Campus%20Tour"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform hover:scale-105"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />

      <AdmissionModal
        isOpen={isAdmissionsModalOpen}
        onClose={() => setIsAdmissionsModalOpen(false)}
      />
    </main>
  );
}
