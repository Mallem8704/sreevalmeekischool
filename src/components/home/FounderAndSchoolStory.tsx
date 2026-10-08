'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Sparkles,
  Heart,
  Droplet,
  Plane,
  Activity,
  Users,
  ShieldCheck,
  ChevronRight,
  X,
  FileText,
  Calendar,
  CheckCircle2,
  Building2,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';

interface FounderAndSchoolStoryProps {
  onOpenAdmissions?: () => void;
}

export default function FounderAndSchoolStory({ onOpenAdmissions }: FounderAndSchoolStoryProps) {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  const humanitarianInitiatives = [
    {
      icon: Plane,
      title: 'First Flight For Govt School Toppers',
      date: '24th September 2017',
      desc: 'Historic maiden flight experience flying rural 10th class toppers from Government schools to Vijayawada for state felicitation.',
      highlight: 'Milestone Inception',
    },
    {
      icon: Droplet,
      title: 'Borewells For Rural Drinking Water',
      date: 'Ongoing Initiative',
      desc: 'Digging deep borewells across drought-prone rural villages and habitations to provide clean drinking water to needy communities.',
      highlight: 'Community Lifeline',
    },
    {
      icon: Activity,
      title: 'Covid-19 Relief & Vaikunta Ratham',
      date: 'Pandemic Emergency Service',
      desc: 'Selfless 24/7 free ambulance transport, cremation services (Vaikunta Ratham), patient care, and dignified last rites during Covid-19.',
      highlight: 'Unforgettable Service',
    },
    {
      icon: Heart,
      title: 'Kadiri Flood Relief & Rations',
      date: 'Emergency Disaster Relief',
      desc: 'Extensive food packets, essential dry groceries, and clothes distribution to affected families during severe Kadiri floods.',
      highlight: 'Crisis Assistance',
    },
    {
      icon: Users,
      title: 'Medical Camps & Job Melas',
      date: 'Youth & Health Welfare',
      desc: 'Organizing comprehensive free health checkups, medicine distribution, career counseling, and job melas for local youth.',
      highlight: 'Youth Empowerment',
    },
  ];

  return (
    <section id="founder-story" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Decorative Ambient Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 lg:space-y-28">
        {/* =========================================================================
            HEADER & SACRED MOTTO
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Anniversary & Established Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
            <span>ESTD. 6TH JUNE, 1999 • 28 YEARS OF RELENTLESS SERVICE</span>
          </div>

          {/* Sanskrit Sacred Motto */}
          <div className="mb-4">
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8860B] dark:text-[#FBBF24] tracking-wide font-[family-name:var(--font-heading)]">
              “ విద్యా విజయతే విశ్వం ”
            </span>
            <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#0A1628]/70 dark:text-slate-300 mt-1">
              VIDYA VIJAYATHE VISWAM • KNOWLEDGE CONQUERS THE UNIVERSE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-4">
            THE VISIONARY FOUNDER & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              THE STORY OF SREE VALMEEKI.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From a noble seed sown in 1999 to reaching the zenith in education, built on the unwavering principle of providing quality education with an accessible fee structure.
          </p>
        </div>

        {/* =========================================================================
            PART 1: THE FOUNDER EXECUTIVE DESIGN FRAME
        ========================================================================= */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0A1628] border-2 border-[#D4A853]/40 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(212,168,83,0.12)] dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* The Founder Portrait in Luxury Gold Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group w-full max-w-sm"
              >
                {/* Layered Outer Gold Frame */}
                <div className="relative p-3.5 sm:p-4 rounded-3xl bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-2xl">
                  {/* Inner Frame */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A1628] border-2 border-white shadow-inner">
                    <Image
                      src="/images/founder/sri_p_jaya_rami_reddy_founder.png"
                      alt="Sri Palavala Jaya Rami Reddy - Founder & Chairman"
                      fill
                      priority
                      className="object-cover object-top filter contrast-[1.05]"
                    />
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Verified Plaque Seal on Card */}
                    <div className="absolute top-3 right-3 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4A853] shadow-md flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                      <span className="text-[10px] font-black text-[#0A1628] dark:text-white uppercase tracking-wider">
                        Founder & Chairman
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                      <span className="text-[10px] font-black tracking-widest uppercase text-[#D4A853] block">
                        ESTABLISHED 6TH JUNE, 1999
                      </span>
                      <h4 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] uppercase">
                        Sri P. Jaya Rami Reddy
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Commemorative Plaque Below */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-white/10">
                    Chairman • Visionary • Educational Pioneer
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Founder Story & Visionary Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Visionary Behind Sree Valmeeki</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white tracking-tight leading-tight">
                “Hard Work, Long-Term Vision, and Unconditional Dedication to Education.”
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Sri Palavala Jaya Rami Reddy</strong> is the founder of Sree Valmeeki School. He is a visionary with long-term goals and great vision. He believes firmly that honest hard work is the cornerstone of every enduring institution.
                </p>
                <p>
                  His conviction of starting a school dedicated to discipline and character paved the way for the establishment of <strong>Sree Valmeeki High School on 6th June, 1999</strong>. Through continuous perseverance and dedication, Valmeeki School has reached its zenith in the field of education.
                </p>
                <p className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] text-[#0A1628] dark:text-slate-100 font-medium text-sm sm:text-base italic">
                  “The school’s sacred motto is to provide quality education with a basic fee structure, ensuring that financial background never becomes an obstacle for any child aspiring to learn, lead, and excel.”
                </p>
              </div>

              {/* Founder Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                  <span className="block text-xl font-black text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)]">1999</span>
                  <span className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Founded</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                  <span className="block text-xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">28 Yrs</span>
                  <span className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Relentless Service</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="block text-xl font-black text-[#10B981] dark:text-[#34D399] font-[family-name:var(--font-heading)]">Zenith</span>
                  <span className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Academic Record</span>
                </div>
              </div>

              {/* View Heritage Brochure Document Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsDocModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider shadow-lg shadow-navy-900/20 dark:shadow-none transition-all cursor-pointer border border-[#0A1628] dark:border-[#D4A853]"
                >
                  <FileText className="w-4 h-4 text-[#D4A853] dark:text-[#0A1628]" />
                  <span>Inspect Original Heritage Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: THE 28-YEAR SAGA & CORE SCHOOL PHILOSOPHY
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The 28-Year Story Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800/40 text-[11px] font-black uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>28 Years of Relentless Service</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white uppercase">
                The Seed Sown In 1999: A Voluminous Success
              </h3>

              <div className="space-y-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  The seed of Sree Valmeeki School was sown on <strong>6th June, 1999</strong>. The gradual, disciplined development across academics, curricular, and co-curricular activities forms the bedrock of its voluminous success.
                </p>
                <p>
                  Sree Valmeeki School’s unique strength lies in proactively accepting emerging educational challenges and focusing unceasingly on the all-round holistic development of children.
                </p>
                <p>
                  The school is the topmost priority of its <strong>Founder, Director, and Correspondent</strong>. Genuine parental care, relentless hard work, and highly talented teaching and non-teaching staff continue to serve the country through education.
                </p>
              </div>
            </div>

            {/* Leadership Trinity Plaque */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="block text-xs font-black text-[#0A1628] dark:text-white uppercase">Sri P. Jaya Rami Reddy</span>
                <span className="block text-[10px] font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase">Founder & Chairman</span>
              </div>
              <div>
                <span className="block text-xs font-black text-[#0A1628] dark:text-white uppercase">Mr. Pavan Kumar Reddy</span>
                <span className="block text-[10px] font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase">Director</span>
              </div>
              <div>
                <span className="block text-xs font-black text-[#0A1628] dark:text-white uppercase">Sri P. Anil Kumar Reddy</span>
                <span className="block text-[10px] font-bold text-[#B8860B] dark:text-[#FBBF24] uppercase">Correspondent</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Core Principles Grid */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] flex items-center justify-center flex-shrink-0 font-black">
                  01
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0A1628] dark:text-white uppercase">
                    Quality Education With Basic Fee Structure
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    A solemn institutional pledge that world-class education, digital classrooms, and IIT foundation programs remain affordable and accessible to every family in Kadiri.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 flex items-center justify-center flex-shrink-0 font-black">
                  02
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0A1628] dark:text-white uppercase">
                    All-Round Holistic Growth & Parental Care
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Balancing concept mastery with daily spoken English, sports endurance, stage assembly elocution, and deep ethical grounding.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 font-black">
                  03
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0A1628] dark:text-white uppercase">
                    Serving The Nation Through Education
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Nurturing disciplined citizens, doctors, civil servants, engineers, and nation builders who carry values and compassion beyond examinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 3: THE PHILANTHROPIC PILLAR — ABHIGNA FOUNDATION
        ========================================================================= */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0A1628] via-[#0F2044] to-[#0A1628] text-white border-2 border-[#D4A853]/40 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Foundation Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A853] text-[11px] font-black uppercase tracking-widest border border-white/15">
                <Heart className="w-3.5 h-3.5 text-red-400" />
                <span>COMMUNITY SERVICE & PHILANTHROPY</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white">
                ABHIGNA FOUNDATION
              </h3>

              <div className="text-[#D4A853] text-sm sm:text-base font-bold italic tracking-wide">
                “Giving Wings To Others’ Happiness” • Estd. 24th September 2017
              </div>

              <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Service is the supreme motto of Abhigna Foundation. Extending humanitarian care, educational wings, and emergency relief to the people of Kadiri and Andhra Pradesh.
              </p>
            </div>

            {/* 5 Humanitarian Initiative Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {humanitarianInitiatives.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D4A853]/60 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#D4A853]/20 border border-[#D4A853]/40 flex items-center justify-center text-[#D4A853] group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A853] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {item.highlight}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white font-[family-name:var(--font-heading)] pt-1">
                        {item.title}
                      </h4>

                      <p className="text-xs text-white/75 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                      <span>{item.date}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR ORIGINAL HERITAGE DOCUMENT
      ========================================================================= */}
      <AnimatePresence>
        {isDocModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDocModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 p-4 sm:p-6 text-[#0A1628] dark:text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#B8860B] dark:text-[#FBBF24]" />
                  <h3 className="text-base sm:text-lg font-black text-[#0A1628] dark:text-white uppercase font-[family-name:var(--font-heading)]">
                    Original Commemorative Brochure Document
                  </h3>
                </div>
                <button
                  onClick={() => setIsDocModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-[704/1024] w-full max-h-[75vh] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/founder/founder_brochure_document.jpg"
                  alt="Original Sree Valmeeki Founder and School Story Document"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                Official 28th Anniversary Commemorative Publication • Sree Valmeeki School Kadiri
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
