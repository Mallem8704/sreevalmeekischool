import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { Sparkles, Brain, CheckCircle2, ChevronRight, Phone, Trophy, Microscope, Calculator, Atom } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IIT-JEE & NEET Foundation Program | Sree Valmeeki High School',
  description: 'Specialized IIT-JEE, NEET, and Olympiad Foundation program integrated with the academic curriculum from Class 6 onwards in Kadiri.',
};

const subjects = [
  {
    name: 'Mathematics',
    icon: Calculator,
    desc: 'Advanced mental agility, algebra, geometry theorems, and speed mathematics.',
    topics: ['Algebraic Expressions', 'Coordinate Geometry', 'Trigonometry Basics', 'Quantitative Logic'],
  },
  {
    name: 'Physics',
    icon: Atom,
    desc: 'Deep conceptual physics, kinematics, electromagnetism, and optics principles.',
    topics: ['Laws of Motion', 'Light & Optics', 'Work & Energy', 'Experimental Units'],
  },
  {
    name: 'Chemistry',
    icon: Microscope,
    desc: 'Atomic structure, periodic classification, chemical reactions, and physical states.',
    topics: ['Periodic Trends', 'Chemical Bonding', 'Acids & Bases', 'Stoichiometry'],
  },
];

const pillars = [
  {
    title: 'Concept-First Pedagogy',
    desc: 'We replace rote cramming with logical deduction. Students grasp why formulas work before applying them.',
  },
  {
    title: 'Weekly Computer-Based Practice',
    desc: 'Familiarity with online exam patterns, negative marking strategies, and strict time allocation.',
  },
  {
    title: 'National Olympiad Exposure',
    desc: 'Regular coaching for NTSE, NSTSE, SilverZone, and Science Olympiad Foundation competitions.',
  },
  {
    title: 'Personalized Doubt Resolution',
    desc: 'Dedicated daily 1-hour clinic sessions after school hours where every student gets 1:1 attention.',
  },
];

export default function IITFoundationPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white font-[family-name:var(--font-body)] transition-colors duration-200">
      <ScrollProgress />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-[#0A1628] dark:bg-[#050D1A] flex items-center justify-center text-center px-4 pt-32 pb-20 border-b border-white/10 transition-colors duration-200">
        <div className="absolute inset-0 bg-[radial-gradient(#D4A853_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/35 text-[#FBBF24] text-xs font-bold uppercase tracking-[0.2em] mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Program • Classes 6 to 10</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">
            IIT-JEE & NEET Foundation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
            Building rigorous mathematical reasoning, scientific curiosity, and competitive excellence from middle school.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="px-7 py-3 rounded-xl bg-[#D4A853] hover:bg-[#C49A3C] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              Enquire for Batch 2026–27
            </Link>
            <a
              href="tel:+919440468838"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Talk to Academic Head</span>
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview & Core Subjects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="bg-white dark:bg-[#0A1628] p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-white/10 mb-16 transition-colors duration-200">
          <div className="max-w-3xl mb-10">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold uppercase tracking-widest block mb-2">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#0A1628] dark:text-white">
              Why Start Foundation in Middle School?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              The national competitive landscape demands more than textbook memorization. Our integrated IIT-JEE and NEET foundation curriculum equips young learners with higher-order thinking skills, bridging the gap between state syllabus and national entrance exams seamlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((subj) => {
              const Icon = subj.icon;
              return (
                <div
                  key={subj.name}
                  className="bg-[#F8FAFC] dark:bg-white/5 p-6 rounded-2xl border-t-4 border-[#D4A853] border-x border-b border-slate-200 dark:border-white/10 flex flex-col justify-between transition-colors duration-200"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 text-[#B8860B] dark:text-[#FBBF24] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#0A1628] dark:text-white text-xl mb-2 font-[family-name:var(--font-heading)]">
                      {subj.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {subj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-1.5">
                    {subj.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24] shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars of Success */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold uppercase tracking-widest block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
              The Valmeeki Foundation Edge
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0A1628] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-[#D4A853]/60 transition-colors duration-200"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white mb-2 font-[family-name:var(--font-heading)]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Your Journey Callout */}
        <div className="text-center bg-gradient-to-r from-[#0A1628] via-[#0F2044] to-[#0A1628] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] rounded-3xl p-10 sm:p-14 text-white shadow-xl border border-white/10 transition-colors duration-200">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D4A853]/40">
            LIMITED SEATS FOR BATCH 2026–27
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-heading)] mb-4">
            Equip Your Child for Tomorrow&apos;s Competitive Arenas
          </h2>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto text-base">
            Admissions for Class 6 to 10 IIT Foundation batches are now open. Experience how dedicated concept mentorship unlocks top ranks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#C49A3C] text-[#0A1628] font-black py-3.5 px-8 rounded-xl shadow-md transition-all hover:scale-105"
            >
              <span>Apply for Admission</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-7 rounded-xl border border-white/20 transition-all"
            >
              <Trophy className="w-4 h-4 text-[#FBBF24]" />
              <span>View Past Top Ranks</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
