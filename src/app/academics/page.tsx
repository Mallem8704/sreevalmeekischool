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
    <div className="min-h-screen bg-[#050D1A] text-white selection:bg-[#D4A853] selection:text-[#0A1628]">
      <ScrollProgress />
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/school/school-event-12.jpg"
              alt="Sree Valmeeki School Interactive Science and Academic Learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/90 to-[#0A1628]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs sm:text-sm font-semibold mb-6 tracking-wide uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>Nursery to Class 10 • Concept-First Pedagogy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                Igniting Intellect. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FCE38A] to-[#D4A853]">
                  Engineering Futures.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-2xl"
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
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-bold px-7 py-3.5 rounded-xl hover:bg-[#C49A3C] transition-all duration-300 shadow-lg shadow-[#D4A853]/20 hover:scale-[1.02]"
                >
                  <span>Enroll for 2026–27</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academics/iit-foundation"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-300"
                >
                  <Brain className="w-4 h-4 text-[#D4A853]" />
                  <span>IIT Foundation Details</span>
                </Link>
              </motion.div>
            </div>

            {/* Stat Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10"
            >
              {academicStats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-[#D4A853]/40 transition-colors"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-[#D4A853] mb-1">
                    {item.value}
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">{item.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4 LEARNING STAGES: INTERACTIVE SHOWCASE */}
        <section className="py-20 bg-[#0A1628] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                PROGRESSIVE STAGES
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                Structured Learning Wings
              </h2>
              <p className="text-gray-300 text-sm mt-2">
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
                        ? 'bg-[#D4A853] text-[#0A1628] shadow-lg shadow-[#D4A853]/30 scale-105'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {wing.stage}
                  </button>
                );
              })}
            </div>

            {/* Selected Wing Detail Card */}
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Visual Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                  <Image
                    src={learningWings[activeWing].image}
                    alt={learningWings[activeWing].headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#0A1628]/90 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-wider">
                    {learningWings[activeWing].grades}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                    {learningWings[activeWing].stage}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                    {learningWings[activeWing].headline}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {learningWings[activeWing].summary}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {learningWings[activeWing].highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-[#D4A853] hover:text-white font-semibold text-sm group"
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
        <section className="py-20 bg-[#050D1A] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                  DISTINCTIVE PEDAGOGY
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                  Signature Programs
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Carefully engineered learning systems that give Valmeeki students a competitive head start.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {excellencePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-[#0A1628] border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <div className="relative w-full sm:w-2/5 min-h-[220px] sm:min-h-full shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1628] hidden sm:block" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0A1628]/90 text-[#D4A853] border border-[#D4A853]/30 text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <Link
                      href={item.actionHref}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D4A853] hover:text-white transition-colors"
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
        <section className="py-20 bg-[#0A1628] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#D4A853] text-xs uppercase tracking-widest font-bold">
                PROVEN ACADEMIC DISTINCTION
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-1">
                Hall of Distinction
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Uncompromising scholastic consistency across state-level board exams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hallOfFame.map((student, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#D4A853]/50 transition-all duration-300 text-center flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4A853] mb-4 shadow-lg">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4A853]/20 text-[#D4A853] font-bold mb-2">
                    {student.badge}
                  </span>
                  <h4 className="font-bold text-white text-lg">{student.name}</h4>
                  <p className="text-[#D4A853] font-extrabold text-xl font-[family-name:var(--font-heading)] mt-1">
                    {student.score}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{student.exam}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#D4A853] bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <span>View All Verified Student Achievements</span>
                <ChevronRight className="w-4 h-4 text-[#D4A853]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ACADEMIC CTA BANNER */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#152D5E] to-[#0A1628]">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-bold uppercase tracking-wider mb-4">
              ADMISSIONS OPEN 2026–27
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Give Your Child the Valmeeki Academic Edge.
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-8 font-light">
              Limited seats per section to ensure focused teacher mentorship and personalized doubt resolution.
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
                <span>Call Admissions: +91 94404 68838</span>
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
