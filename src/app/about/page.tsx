'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import FounderAndSchoolStory from '@/components/home/FounderAndSchoolStory';
import AdmissionModal from '@/components/home/AdmissionModal';

const stats = [
  { value: '28', label: 'Years of Heritage', sub: 'Estd. 6th June 1999' },
  { value: '10,000+', label: 'Alumni Worldwide', sub: 'Doctors, Engineers & Leaders' },
  { value: '100%', label: 'SSC Board Pass', sub: 'Town 1st & 2nd Record Ranks' },
  { value: '1:20', label: 'Mentor Ratio', sub: 'Genuine Parental Care' },
];

const pillars = [
  {
    title: 'Academic Distinction',
    short: 'Concept-First Pedagogy',
    desc: 'Rigorous conceptual clarity from primary classes through high school, backed by IIT foundation and Olympiad coaching.',
    image: '/images/school/school-event-12.jpg',
    badge: 'IIT Foundation',
  },
  {
    title: 'Unwavering Discipline',
    short: 'Character & Moral Compass',
    desc: 'Instilling respect, punctuality, and cultural integrity in every student since our inception in 1999.',
    image: '/images/school/school-event-11.jpg',
    badge: 'Values First',
  },
  {
    title: 'Fearless Stage Expression',
    short: 'English Fluency & Oratory',
    desc: 'Daily morning stage assemblies train every student to overcome fear and speak with effortless poise and confidence.',
    image: '/images/school/school-event-4.jpg',
    badge: 'Confidence',
  },
  {
    title: 'Athletic Resilience',
    short: 'VPL & Sports Excellence',
    desc: 'Spacious grounds, cricket tournaments, volleyball, and physical fitness forge teamwork, grit, and endurance.',
    image: '/images/school/school-event-2.jpg',
    badge: 'Sports Arena',
  },
];

const leadershipQuotes = [
  {
    quote:
      'Education should not only prepare children for examinations, but help them develop confidence, discipline, curiosity and character. Valmeeki stands committed to nurturing every child with parental care.',
    name: 'Dr. P.V Pavan Kumar Reddy',
    role: 'Director, Sree Valmeeki School • A.P Private Schools Association Working President',
    image: '/extracted/leadership/director_pavan_reddy_portrait.jpg',
  },
  {
    quote:
      'We do not simply teach for examinations; we train young minds to reason logically, question fearlessly, and solve competitive problems with confidence.',
    name: 'Mrs. S. Lakshmi Devi',
    role: 'Head of Academics & IIT Foundation',
    image: '/images/school/school-event-1.jpg',
  },
];

export default function AboutPage() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1628] transition-colors duration-200">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs sm:text-sm font-bold mb-6 tracking-wide uppercase shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                <span>Estd. 6th June, 1999 • 28 Years in Kadiri</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white leading-tight mb-6"
              >
                Nurturing Character. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  Inspiring Leaders.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
              >
                For over 28 years, Sree Valmeeki E.M High School has forged a trusted tradition of academic excellence, moral discipline, and communicative confidence in Kadiri, Sri Sathya Sai District.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#C49A3C] text-[#0A1628] font-black px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <span>Admissions 2026–27</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#founder-story"
                  className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] dark:bg-white/10 dark:hover:bg-white/15 text-white font-bold px-6 py-3.5 rounded-xl border border-[#0A1628] dark:border-white/15 transition-all duration-300"
                >
                  <Users className="w-4 h-4 text-[#D4A853]" />
                  <span>Executive Leadership</span>
                </Link>
                <Link
                  href="/campus"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-bold px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 transition-all duration-300"
                >
                  <Compass className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Explore Campus</span>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stat Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-200 dark:border-white/10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#FDFBF7] dark:bg-white/5 rounded-2xl p-5 border border-slate-200 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-colors shadow-sm"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-[#B8860B] dark:text-[#FBBF24] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#0A1628] dark:text-white font-bold text-sm sm:text-base">{stat.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION DUAL VISUAL CARDS */}
        <section className="py-20 bg-white dark:bg-[#050D1A] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-black">
                OUR CORE PURPOSE
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-[#0A1628] dark:text-white mt-2">
                Mission & Guiding Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
                Zero rhetoric. Pure dedication to whole-child development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div className="group bg-[#FDFBF7] dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col justify-between shadow-md">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 dark:border-white/10">
                    <Image
                      src="/images/school/school-event-9.jpg"
                      alt="Valmeeki Science Fair and Mission"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-black tracking-wider uppercase shadow">
                      OUR MISSION
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[#0A1628] dark:text-white mb-3">
                    Intellectual Rigor. Moral Grounding.
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    To deliver experiential education that equips students with razor-sharp analytical thinking, unshakeable discipline, and global communicative fluency.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ Concept Mastery
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ Stage Speaking
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ Character Ethics
                  </span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group bg-[#FDFBF7] dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col justify-between shadow-md">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 dark:border-white/10">
                    <Image
                      src="/images/school/school-event-1.jpg"
                      alt="Valmeeki Olympiad Achievement and Vision"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0A1628] text-white text-xs font-black tracking-wider uppercase shadow border border-white/20">
                      OUR VISION
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[#0A1628] dark:text-white mb-3">
                    Kadiri&apos;s Benchmark of Future Leaders.
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    A vibrant learning ecosystem where every student discovers their unique genius—shining in competitive board exams, IIT-JEE foundations, cultural arts, and sports arenas.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ IIT-JEE & NEET Edge
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ VPL Sports Spirit
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                    ✓ 100% Board Triumph
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE PILLARS WITH REAL IMAGERY */}
        <section className="py-20 bg-[#FDFBF7] dark:bg-[#0A1628] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-black">
                  FOUNDATIONAL PILLARS
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-[#0A1628] dark:text-white mt-1">
                  What Sets Valmeeki Apart
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                Carefully balanced holistic framework ensuring every child thrives academically, physically, and emotionally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-[#050D1A] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#D4A853] dark:hover:border-[#D4A853] transition-all duration-300 flex flex-col shadow-md hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/40 text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold uppercase tracking-wider block mb-1">
                        {pillar.short}
                      </span>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-black text-[#0A1628] dark:text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            EXECUTIVE LEADERSHIP FRAME (Directly After About Section)
            Founder Sri Palavala Jaya Rami Reddy (Top)
            Director Mr. Pavan Kumar Reddy (Bottom Left)
            Correspondent Sri P. Anil Kumar Reddy (Bottom Right)
        ========================================================================= */}
        <FounderAndSchoolStory onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

        {/* FINAL HIGH-VISUAL CTA */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#0F2044] to-[#0A1628] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] text-white transition-colors duration-200">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-black uppercase tracking-wider mb-4 border border-[#D4A853]/40">
              ADMISSIONS OPEN 2026–27
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Give Your Child the Valmeeki Foundation.
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 font-normal leading-relaxed">
              Experience the difference 28 years of educational excellence, caring mentorship, and smart learning can make.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="bg-[#D4A853] hover:bg-[#C49A3C] text-[#0A1628] font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Apply for Admission</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
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

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={isAdmissionsModalOpen}
        onClose={() => setIsAdmissionsModalOpen(false)}
      />
    </div>
  );
}
