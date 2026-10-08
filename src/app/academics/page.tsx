'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  Layers,
  Lightbulb,
  Microscope,
  Phone,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

const academicStats = [
  { value: '100%', label: 'SSC Board Pass', sub: 'Consistent Distinction' },
  { value: 'Top 1%', label: 'Olympiad Rankers', sub: 'National & State' },
  { value: '100%', label: 'English Immersion', sub: 'Daily Stage Oratory' },
  { value: '1:20', label: 'Teacher-Student Ratio', sub: 'Focused Mentorship' },
];

const learningWings = [
  {
    id: 'pre-primary',
    stage: 'Pre-Primary Wing',
    grades: 'Nursery • LKG • UKG',
    headline: 'Wonder, Phonics & Play',
    summary:
      'Foundational joy through sensory play, activity labs, and natural phonetic language immersion.',
    image: '/images/school/school-event-11.jpg',
    highlights: ['Montessori Play Methods', 'Phonetic English Sounds', 'Motor Skill Labs', 'Nurturing Care Tutors'],
  },
  {
    id: 'primary',
    stage: 'Primary Wing',
    grades: 'Classes 1 to 5',
    headline: 'Concept Clarity & Numeracy',
    summary:
      'Building rock-solid math fundamentals, spoken English fluency, and curiosity-driven environmental science.',
    image: '/images/school/school-event-9.jpg',
    highlights: ['Mental Math Agility', 'Daily Reading Circle', 'Interactive Digital Lessons', 'Values & Ethics'],
  },
  {
    id: 'middle',
    stage: 'Middle School',
    grades: 'Classes 6 to 8',
    headline: 'Analytical & STEM Reasoning',
    summary:
      'Transition into formal scientific inquiry, hands-on physics and chemistry labs, and Olympiad logic.',
    image: '/images/school/school-event-10.jpg',
    highlights: ['Experimental Labs', 'Early IIT-JEE Foundation', 'Competitive Olympiads', 'Stage Debating'],
  },
  {
    id: 'high-school',
    stage: 'High School',
    grades: 'Classes 9 & 10',
    headline: 'Board Mastery & Competitive Triumph',
    summary:
      'Intensive SSC board preparation coupled with advanced IIT-JEE and NEET foundation modules.',
    image: '/images/school/school-event-1.jpg',
    highlights: ['100% Board Distinction', 'Structured Mock Series', 'Doubt Clearing Clinics', 'Career Counseling'],
  },
];

const excellencePillars = [
  {
    title: 'IIT-JEE & NEET Foundation',
    badge: 'Flagship Program',
    desc: 'Integrated with regular syllabus from Class 6 onwards to train analytical problem-solving and numerical speed.',
    image: '/images/school/school-event-1.jpg',
    actionText: 'Explore IIT Curriculum',
    actionHref: '/academics/iit-foundation',
  },
  {
    title: 'Spoken English & Stage Fluency',
    badge: 'Confidence Focus',
    desc: 'Daily morning stage assemblies train every child in elocution, debate, and fluent English presentation.',
    image: '/images/school/school-event-4.jpg',
    actionText: 'View Language Pedagogy',
    actionHref: '/about',
  },
  {
    title: 'Smart Digital Classrooms',
    badge: 'Interactive Tech',
    desc: 'High-definition digital smart boards bring complex physics, biology, and math concepts to life in 3D.',
    image: '/images/school/school-event-12.jpg',
    actionText: 'See Smart Labs',
    actionHref: '/campus',
  },
  {
    title: 'Hands-on Science & STEM Expo',
    badge: 'Practical Science',
    desc: 'Students create functioning working models in robotics, solar energy, and electronics at our annual Science Fair.',
    image: '/images/school/school-event-9.jpg',
    actionText: 'Browse Science Expo',
    actionHref: '/gallery',
  },
];

const hallOfFame = [
  {
    name: 'V. Keerthana',
    score: '592 / 600',
    badge: 'Rank 01 • State Distinction',
    exam: 'SSC Board 2025',
    image: '/images/school/school-event-7.jpg',
  },
  {
    name: 'G. Tejaswini',
    score: '588 / 600',
    badge: 'Rank 02 • Top Honors',
    exam: 'SSC Board 2024',
    image: '/images/school/school-event-8.jpg',
  },
  {
    name: 'K. Bhanu Prakash',
    score: '585 / 600',
    badge: 'Rank 03 • Mathematics Centum',
    exam: 'SSC Board 2025',
    image: '/images/school/school-event-1.jpg',
  },
  {
    name: 'M. Sneha Latha',
    score: '582 / 600',
    badge: 'Rank 04 • Science Topper',
    exam: 'SSC Board 2024',
    image: '/images/school/school-event-3.jpg',
  },
];

export default function AcademicsPage() {
  const [activeWing, setActiveWing] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200/80 dark:border-white/10 bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] transition-colors duration-200">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/school/school-event-12.jpg"
              alt="Sree Valmeeki School Interactive Science and Academic Learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-15 dark:opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] dark:from-[#050D1A] via-[#FDFBF7]/90 dark:via-[#050D1A]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#050D1A] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs sm:text-sm font-bold mb-6 tracking-wide uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                <span>Nursery to Class 10 • Concept-First Pedagogy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white leading-tight mb-6"
              >
                Igniting Intellect. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  Engineering Futures.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
              >
                Where classroom concepts transform into working inventions, fearless stage speaking, and state-level board distinction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] hover:text-white dark:hover:text-[#0A1628] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] border border-[#0A1628] dark:border-[#FBBF24]"
                >
                  <span>Enroll for 2026–27</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academics/iit-foundation"
                  className="inline-flex items-center gap-2 bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/15 shadow-sm transition-all duration-300"
                >
                  <Brain className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>IIT Foundation Details</span>
                </Link>
              </motion.div>
            </div>

            {/* Stat Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-200/80 dark:border-white/10"
            >
              {academicStats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0A1628] rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-colors"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-[#B8860B] dark:text-[#FBBF24] mb-1">
                    {item.value}
                  </p>
                  <p className="text-[#0A1628] dark:text-white font-bold text-sm sm:text-base">{item.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4 LEARNING STAGES: INTERACTIVE SHOWCASE */}
        <section className="py-20 bg-[#F8FAFC] dark:bg-[#050D1A] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                PROGRESSIVE STAGES
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                Structured Learning Wings
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                Tailored cognitive milestones from Nursery through Class 10.
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {learningWings.map((wing, idx) => {
                const isActive = activeWing === idx;
                return (
                  <button
                    key={wing.id}
                    onClick={() => setActiveWing(idx)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] shadow-md shadow-[#0A1628]/10 scale-105 border border-[#0A1628] dark:border-[#FBBF24]'
                        : 'bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/15 shadow-sm'
                    }`}
                  >
                    {wing.stage}
                  </button>
                );
              })}
            </div>

            {/* Selected Wing Detail Card */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Visual Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md bg-slate-100 dark:bg-black/40">
                  <Image
                    src={learningWings[activeWing].image}
                    alt={learningWings[activeWing].headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0A1628]/95 border border-slate-200 dark:border-white/10 text-[#0A1628] dark:text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {learningWings[activeWing].grades}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                    {learningWings[activeWing].stage}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white mt-1 mb-4">
                    {learningWings[activeWing].headline}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {learningWings[activeWing].summary}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {learningWings[activeWing].highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-[#0A1628] dark:text-[#FBBF24] hover:text-[#B8860B] dark:hover:text-[#FCD34D] font-bold text-sm group transition-colors"
                  >
                    <span>Apply for {learningWings[activeWing].grades}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED EXCELLENCE PILLARS */}
        <section className="py-20 bg-[#FDFBF7] dark:bg-[#0A1628] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                  DISTINCTIVE PEDAGOGY
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                  Signature Programs
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                Carefully engineered learning systems that give Valmeeki students a competitive head start.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {excellencePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-[#050D1A] border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl flex flex-col sm:flex-row"
                >
                  <div className="relative w-full sm:w-2/5 min-h-[220px] sm:min-h-full shrink-0 overflow-hidden bg-slate-100 dark:bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white dark:bg-[#050D1A]">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0A1628] dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <Link
                      href={item.actionHref}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A1628] dark:text-[#FBBF24] hover:text-[#B8860B] dark:hover:text-[#FCD34D] transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HALL OF FAME / PROVEN RESULTS SNAPSHOT */}
        <section className="py-20 bg-[#F8FAFC] dark:bg-[#050D1A] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs uppercase tracking-widest font-bold">
                PROVEN ACADEMIC DISTINCTION
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#0A1628] dark:text-white mt-1">
                Hall of Distinction
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                Uncompromising scholastic consistency across state-level board exams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hallOfFame.map((student, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl text-center flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4A853] mb-4 shadow-md bg-slate-100 dark:bg-black/40">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 dark:border-[#D4A853]/40 font-bold mb-2">
                    {student.badge}
                  </span>
                  <h4 className="font-bold text-[#0A1628] dark:text-white text-lg">{student.name}</h4>
                  <p className="text-[#B8860B] dark:text-[#FBBF24] font-black text-xl font-[family-name:var(--font-heading)] mt-1">
                    {student.score}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{student.exam}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white hover:text-[#B8860B] dark:hover:text-[#FBBF24] bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/15 px-6 py-3 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-colors"
              >
                <span>View All Verified Student Achievements</span>
                <ChevronRight className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ACADEMIC CTA BANNER */}
        <section className="py-20 bg-[#FDFBF7] dark:bg-[#050D1A] transition-colors duration-200">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-xs font-bold uppercase tracking-wider mb-4">
                ADMISSIONS OPEN 2026–27
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white mb-6">
                Give Your Child the Valmeeki Academic Edge.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 font-normal">
                Limited seats per section to ensure focused teacher mentorship and personalized doubt resolution.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center gap-2 border border-[#0A1628] dark:border-[#FBBF24]"
                >
                  <span>Apply for Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919440468838"
                  className="bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold px-7 py-4 rounded-xl border border-slate-200 dark:border-white/15 shadow-sm transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Call Admissions: +91 94404 68838</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
