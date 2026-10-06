'use client';

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

const stats = [
  { value: '27+', label: 'Years of Heritage', sub: 'Established 1999' },
  { value: '10,000+', label: 'Alumni Worldwide', sub: 'Doctors, Engineers & Leaders' },
  { value: '100%', label: 'SSC Distinction', sub: 'Consistent State Ranks' },
  { value: '1:20', label: 'Mentor Ratio', sub: 'Personalized Attention' },
];

const milestones = [
  {
    year: '1999',
    title: 'The Foundation',
    desc: 'Founded with a singular mission: bringing disciplined, high-standard English medium schooling to Kadiri.',
    tag: 'Est. 1999',
  },
  {
    year: '2005',
    title: 'First Board Distinction',
    desc: '100% first-class pass in SSC exams, establishing Valmeeki as a benchmark of academic distinction.',
    tag: 'Academic Milestone',
  },
  {
    year: '2012',
    title: 'Campus Expansion',
    desc: 'Upgraded infrastructure featuring modern Physics, Chemistry & Biology laboratories and high school wing.',
    tag: 'Campus Growth',
  },
  {
    year: '2018',
    title: 'Smart Digital & IIT Era',
    desc: 'Integrated smart interactive classrooms and rigorous IIT-JEE & NEET Olympiad foundation modules.',
    tag: 'Curriculum Innovation',
  },
  {
    year: '2026',
    title: 'Silver Jubilee & Beyond',
    desc: '27 glorious years shaping future leaders with modern STEM, sports tournaments, and fluent English immersion.',
    tag: 'Silver Jubilee+',
  },
];

const pillars = [
  {
    title: 'Academic Distinction',
    short: 'Concept-First Pedagogy',
    desc: 'Rigorous conceptual clarity from primary classes through high school, backed by Olympiad training.',
    image: '/images/school/school-event-12.jpg',
    badge: 'IIT Foundation',
  },
  {
    title: 'Unwavering Discipline',
    short: 'Character & Moral Compass',
    desc: 'Instilling respect, punctuality, and cultural integrity in every student since day one.',
    image: '/images/school/school-event-11.jpg',
    badge: 'Values First',
  },
  {
    title: 'Fearless Stage Expression',
    short: 'English Fluency & Oratory',
    desc: 'Daily morning stage assemblies train every student to overcome fear and speak with poise.',
    image: '/images/school/school-event-4.jpg',
    badge: 'Confidence',
  },
  {
    title: 'Athletic Resilience',
    short: 'VPL & Sports Excellence',
    desc: 'Spacious grounds, cricket, volleyball, and martial arts build teamwork, grit, and endurance.',
    image: '/images/school/school-event-2.jpg',
    badge: 'Sports Arena',
  },
];

const leadershipQuotes = [
  {
    quote:
      'Every child who walks through our gates carries limitless potential. Our mission is to nurture that spark with discipline, compassion, and academic rigor.',
    name: 'Mr. P. Pavan Kumar Reddy',
    role: 'Director, Sree Valmeeki School',
    image: '/images/school/school-event-7.jpg',
  },
  {
    quote:
      'We do not simply teach for examinations; we train young minds to reason logically, question fearlessly, and solve problems independently.',
    name: 'Mrs. S. Lakshmi Devi',
    role: 'Head of Academics & IIT Foundation',
    image: '/images/school/school-event-1.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050D1A] text-white selection:bg-[#D4A853] selection:text-[#0A1628]">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/school/school-event-3.jpg"
              alt="Sree Valmeeki School Campus Celebration"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/90 to-[#0A1628]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs sm:text-sm font-semibold mb-6 tracking-wide uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>Est. 1999 • 27 Years in Kadiri</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                Nurturing Character. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FCE38A] to-[#D4A853]">
                  Inspiring Leaders.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-2xl"
              >
                For over 27 years, Sree Valmeeki E.M High School has forged a trusted tradition of academic excellence, moral discipline, and communicative confidence in Kadiri.
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
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-bold px-7 py-3.5 rounded-xl hover:bg-[#C49A3C] transition-all duration-300 shadow-lg shadow-[#D4A853]/20 hover:scale-[1.02]"
                >
                  <span>Admissions 2026–27</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/campus"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-300"
                >
                  <Compass className="w-4 h-4 text-[#D4A853]" />
                  <span>Explore Campus</span>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stat Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-[#D4A853]/40 transition-colors"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-[#D4A853] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">{stat.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION DUAL VISUAL CARDS */}
        <section className="py-20 bg-[#0A1628] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                OUR CORE PURPOSE
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-2">
                Mission & Guiding Vision
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                Zero rhetoric. Pure dedication to whole-child development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#D4A853]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src="/images/school/school-event-9.jpg"
                      alt="Valmeeki Science Fair and Mission"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold tracking-wider uppercase">
                      OUR MISSION
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-3">
                    Intellectual Rigor. Moral Grounding.
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    To deliver experiential education that equips students with razor-sharp analytical thinking, unshakeable discipline, and global communicative fluency.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ Concept Mastery
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ Stage Speaking
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ Character Ethics
                  </span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#D4A853]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src="/images/school/school-event-1.jpg"
                      alt="Valmeeki Olympiad Achievement and Vision"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#1E3A8A] border border-blue-400/40 text-white text-xs font-bold tracking-wider uppercase">
                      OUR VISION
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-3">
                    Kadiri&apos;s Benchmark of Future Leaders.
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    A vibrant learning ecosystem where every student discovers their unique genius—shining in competitive exams, cultural arts, and sports arenas.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ IIT-JEE & NEET Edge
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ VPL Sports Spirit
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#D4A853] font-medium">
                    ✓ 100% Board Triumph
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE PILLARS WITH REAL IMAGERY */}
        <section className="py-20 bg-[#050D1A] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                  FOUNDATIONAL PILLARS
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                  What Sets Valmeeki Apart
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Carefully balanced holistic framework ensuring every child thrives academically, physically, and emotionally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="group bg-[#0A1628] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-black/30" />
                    <span className="absolute top-3 right-3 bg-[#0A1628]/80 backdrop-blur-md text-[#D4A853] border border-[#D4A853]/30 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider block mb-1">
                        {pillar.short}
                      </span>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 27-YEAR CHRONICLE / TIMELINE */}
        <section className="py-20 bg-[#0A1628] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                1999 — 2026
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                27 Years of Continuous Growth
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                A legacy sculpted with hard work, disciplined faculty, and thousands of smiling students.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#D4A853] via-white/20 to-[#D4A853] -translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`flex flex-col md:flex-row items-center gap-6 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Content Card */}
                      <div className="w-full md:w-[45%]">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#D4A853]/50 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#D4A853] font-bold text-lg font-[family-name:var(--font-heading)]">
                              {item.year}
                            </span>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
                              {item.tag}
                            </span>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Center Point */}
                      <div className="w-10 h-10 rounded-full bg-[#D4A853] text-[#0A1628] font-bold flex items-center justify-center shrink-0 shadow-lg shadow-[#D4A853]/30 z-10 text-sm">
                        {idx + 1}
                      </div>

                      {/* Spacer for other side on desktop */}
                      <div className="hidden md:block w-[45%]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP VOICE */}
        <section className="py-20 bg-[#050D1A] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                  GUIDING PHILOSOPHY
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                  Words from Our Leadership
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {leadershipQuotes.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#D4A853] shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{item.name}</h4>
                          <p className="text-[#D4A853] text-xs font-medium">{item.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-[#D4A853]" />
                      <span>Dedicated to student welfare & ethical leadership</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL HIGH-VISUAL CTA */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#152D5E] to-[#0A1628]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-bold uppercase tracking-wider mb-4">
              ADMISSIONS OPEN 2026–27
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Give Your Child the Valmeeki Foundation.
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-8 font-light">
              Experience the difference 27 years of educational excellence, caring mentorship, and smart learning can make.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="bg-[#D4A853] text-[#0A1628] font-bold px-8 py-4 rounded-xl hover:bg-[#C49A3C] transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Apply for Admission</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919440468838"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all duration-300 inline-flex items-center gap-2"
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
    </div>
  );
}
