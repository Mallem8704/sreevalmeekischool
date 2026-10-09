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
  Quote,
  Target,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  Maximize2,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FounderAndSchoolStoryProps {
  onOpenAdmissions?: () => void;
}

export default function FounderAndSchoolStory({ onOpenAdmissions }: FounderAndSchoolStoryProps) {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [isDirectorModalOpen, setIsDirectorModalOpen] = useState(false);
  const [isCorrespondentModalOpen, setIsCorrespondentModalOpen] = useState(false);

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
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A853]/10 dark:bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
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
            THE VISIONARY LEADERSHIP & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              THE STORY OF SREE VALMEEKI.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From a noble seed sown in 1999 to reaching the zenith in education, guided by three visionary leaders dedicated to discipline, character, and accessible educational excellence.
          </p>
        </div>

        {/* =========================================================================
            TOP LEVEL: THE FOUNDER & CHAIRMAN EXECUTIVE FRAME (ON TOP)
        ========================================================================= */}
        <div className="relative group">
          {/* Outer Luxury Beveled Gold Frame */}
          <div className="p-1 sm:p-1.5 rounded-[2.5rem] bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-[0_20px_60px_rgba(212,168,83,0.18)] dark:shadow-none">
            {/* Inner Content Container */}
            <div className="relative rounded-[2.3rem] bg-white dark:bg-[#0A1628] p-6 sm:p-10 lg:p-14 border border-white/60 dark:border-white/10 overflow-hidden">
              {/* Corner Watermark Seal */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#D4A853]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Side: Founder Portrait Frame */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-sm"
                  >
                    {/* Gold Frame Bezel */}
                    <div className="relative p-3.5 sm:p-4 rounded-3xl bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-2xl">
                      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A1628] border-2 border-white dark:border-white/20 shadow-inner">
                        <Image
                          src="/images/founder/sri_p_jaya_rami_reddy_founder.png"
                          alt="Sri Palavala Jaya Rami Reddy - Founder & Chairman"
                          fill
                          priority
                          sizes="(max-width: 640px) 280px, 360px"
                          className="object-cover object-top filter contrast-[1.05]"
                        />
                        {/* Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                        {/* Top Verified Plaque */}
                        <div className="absolute top-3 right-3 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4A853] shadow-md flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                          <span className="text-[10px] font-black text-[#0A1628] dark:text-white uppercase tracking-wider">
                            Founder & Chairman
                          </span>
                        </div>

                        {/* Bottom Portrait Caption */}
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

                    {/* Honorific Pill Below Portrait */}
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-white/10">
                        Chairman • Educational Pioneer • Philanthropist
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Founder Narrative & Sacred Philosophy */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Visionary Pillar • Founder & Chairman</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white tracking-tight leading-tight">
                    “Hard Work, Long-Term Vision, and Unconditional Dedication to Education.”
                  </h3>

                  <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Sri Palavala Jaya Rami Reddy</strong> is the founder of Sree Valmeeki School. A visionary with far-reaching goals, he firmly believes that honest hard work is the cornerstone of every enduring educational institution.
                    </p>
                    <p>
                      His conviction of starting a school dedicated to discipline and character paved the way for the establishment of <strong>Sree Valmeeki High School on 6th June, 1999</strong>. Through continuous perseverance and dedication, Valmeeki School has reached its zenith in the field of education.
                    </p>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] text-[#0A1628] dark:text-slate-100 font-medium text-sm sm:text-base italic">
                      “The school’s sacred motto is to provide quality education with a basic fee structure, ensuring that financial background never becomes an obstacle for any child aspiring to learn, lead, and excel.”
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                      <span className="block text-xl font-black text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)]">1999</span>
                      <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Founded</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                      <span className="block text-xl font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">28 Yrs</span>
                      <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Service</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                      <span className="block text-xl font-black text-[#10B981] dark:text-[#34D399] font-[family-name:var(--font-heading)]">Zenith</span>
                      <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Academic Record</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                      <span className="block text-xl font-black text-[#3B82F6] dark:text-[#60A5FA] font-[family-name:var(--font-heading)]">Basic Fee</span>
                      <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase mt-0.5">Accessible To All</span>
                    </div>
                  </div>

                  {/* Action Button: Heritage Document */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
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
          </div>
        </div>

        {/* =========================================================================
            BOTTOM LEVEL: 2 COLUMNS (DIRECTOR BOTTOM-LEFT, CORRESPONDENT BOTTOM-RIGHT)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* -----------------------------------------------------------------------
              BOTTOM LEFT: THE DIRECTOR FRAME
          ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-1 rounded-[2.2rem] bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="rounded-[2rem] bg-white dark:bg-[#0A1628] p-6 sm:p-8 flex flex-col justify-between flex-1 border border-white/60 dark:border-white/10 relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A853]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Frame Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>ACADEMIC VISION & MENTORSHIP</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Director</span>
                  </div>
                </div>

                {/* Director Portrait & Name Frame */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Portrait in Beveled Bezel */}
                  <div className="relative group shrink-0">
                    <div className="p-2 rounded-2xl bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-lg">
                      <div className="relative w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden bg-[#0A1628] border border-white/40">
                        <Image
                          src="/images/leadership/mr_pavan_kumar_reddy_director_portrait.png"
                          alt="Mr. Pavan Kumar Reddy - Director"
                          fill
                          sizes="150px"
                          className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Leader Name & Title */}
                  <div className="text-center sm:text-left space-y-1.5 flex-1">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24] block">
                      DIRECTOR • SREE VALMEEKI HIGH SCHOOL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] uppercase text-[#0A1628] dark:text-white">
                      Mr. Pavan Kumar Reddy
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Passionate Educationist • Visionary Leader • Dedicated Mentor
                    </p>

                    {/* Director Quote Pill */}
                    <div className="mt-3 p-3 rounded-xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] text-[#0A1628] dark:text-slate-100 text-xs sm:text-sm italic font-medium">
                      <Quote className="w-3.5 h-3.5 text-[#D4A853] inline-block mr-1 -mt-1" />
                      “Education is the most powerful tool to transform lives, empower communities, and build a brighter future.”
                    </div>
                  </div>
                </div>

                {/* Director Detailed Profile */}
                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <strong>Mr. Pavan Kumar Reddy</strong> believes that every child possesses unique potential waiting to be discovered and nurtured. As the Director of Sree Valmeeki High School, he is committed to creating an environment where students are inspired to dream big, think creatively, and achieve excellence in all aspects of life.
                  </p>
                  <p>
                    With a deep understanding of transformative education, he has consistently cultivated a culture of learning that goes beyond textbooks and examinations—developing confident, responsible, and compassionate individuals equipped with values, skills, and character.
                  </p>
                </div>

                {/* 3 Academic Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <Target className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Student-Centric</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Unlocking Latent Talents</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <BookOpen className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Beyond Textbooks</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Critical & Creative Poise</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <HeartHandshake className="w-4 h-4 text-[#B8860B] dark:text-[#FBBF24] mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Values & Character</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Integrity For Life</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  Director's Guidance
                </span>
                <button
                  type="button"
                  onClick={() => setIsDirectorModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Read Full Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BOTTOM RIGHT: THE CORRESPONDENT FRAME
          ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-1 rounded-[2.2rem] bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="rounded-[2rem] bg-white dark:bg-[#0A1628] p-6 sm:p-8 flex flex-col justify-between flex-1 border border-white/60 dark:border-white/10 relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1E3A8A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Frame Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 text-[11px] font-black uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>ADMINISTRATIVE INTEGRITY & GOVERNANCE</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Correspondent</span>
                  </div>
                </div>

                {/* Correspondent Portrait & Name Frame */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Portrait in Beveled Bezel */}
                  <div className="relative group shrink-0">
                    <div className="p-2 rounded-2xl bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-lg">
                      <div className="relative w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden bg-[#0A1628] border border-white/40">
                        <Image
                          src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_portrait.jpg"
                          alt="Sri P. Anil Kumar Reddy - Correspondent"
                          fill
                          sizes="150px"
                          className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Leader Name & Title */}
                  <div className="text-center sm:text-left space-y-1.5 flex-1">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24] block">
                      CORRESPONDENT • SREE VALMEEKI HIGH SCHOOL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] uppercase text-[#0A1628] dark:text-white">
                      Sri P. Anil Kumar Reddy
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Operational Oversight • Student Welfare • Parent Trust
                    </p>

                    {/* Correspondent Quote Pill */}
                    <div className="mt-3 p-3 rounded-xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] text-[#0A1628] dark:text-slate-100 text-xs sm:text-sm italic font-medium">
                      <Quote className="w-3.5 h-3.5 text-[#D4A853] inline-block mr-1 -mt-1" />
                      “True institutional excellence is built on trust, impeccable discipline, and unwavering care for every child who walks through our gates.”
                    </div>
                  </div>
                </div>

                {/* Correspondent Detailed Profile */}
                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <strong>Sri P. Anil Kumar Reddy</strong> brings dynamic administrative leadership, meticulous operational oversight, and a deep commitment to student welfare as the Correspondent of Sree Valmeeki High School. He plays an instrumental role in ensuring the school's vision translates into everyday reality.
                  </p>
                  <p>
                    With an open-door policy for parents and teachers alike, he maintains transparent communication, rigorous campus safety protocols, and continuous infrastructure upgrades—from 4K smart interactive panels to safe transportation networks across Kadiri mandal.
                  </p>
                </div>

                {/* 3 Administrative Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Administration</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Transparent Governance</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Campus Safety</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Smart Tech & GPS Buses</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                    <span className="block text-xs font-bold text-[#0A1628] dark:text-white">Parent Trust</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Open-Door Access</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  Correspondent's Desk
                </span>
                <button
                  type="button"
                  onClick={() => setIsCorrespondentModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Read Full Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            PART 3: THE PHILANTHROPIC PILLAR — ABHIGNA FOUNDATION
        ========================================================================= */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#0A1628] via-[#0F2044] to-[#0A1628] text-white border-2 border-[#D4A853]/40 shadow-2xl relative overflow-hidden">
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
          MODAL 1: ORIGINAL HERITAGE DOCUMENT
      ========================================================================= */}
      <AnimatePresence>
        {isDocModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDocModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

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
                  type="button"
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

      {/* =========================================================================
          MODAL 2: DIRECTOR EXPANDED MESSAGE
      ========================================================================= */}
      <AnimatePresence>
        {isDirectorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDirectorModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 text-[#0A1628] dark:text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4A853]">
                    <Image
                      src="/images/leadership/mr_pavan_kumar_reddy_director_portrait.png"
                      alt="Mr. Pavan Kumar Reddy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#0A1628] dark:text-white uppercase font-[family-name:var(--font-heading)]">
                      Mr. Pavan Kumar Reddy
                    </h3>
                    <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                      Director, Sree Valmeeki High School
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDirectorModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] italic font-medium">
                  “Education is the most powerful tool to transform lives, empower communities, and build a brighter future.”
                </div>

                <p>
                  Mr. Pavan Kumar Reddy is a passionate educationist, visionary leader, and dedicated mentor who believes that every child possesses unique potential waiting to be discovered and nurtured. As the Director of Sree Valmeeki High School, he is committed to creating an environment where students are inspired to dream big, think creatively, and achieve excellence in all aspects of life.
                </p>

                <p>
                  With a deep understanding of the transformative power of education, Mr. Pavan Kumar Reddy has consistently worked towards building a culture of learning that goes beyond textbooks and examinations. His vision is to develop confident, responsible, and compassionate individuals who are equipped not only with knowledge but also with the values, skills, and character needed to succeed in an ever-changing world.
                </p>

                <p>
                  He strongly believes that schooling is not just about academic performance, but about character building, discipline, and the pursuit of holistic growth. Under his dynamic guidance, Sree Valmeeki High School continues to foster innovation in teaching methodologies, integrate modern educational practices, and maintain a supportive ecosystem where both students and teachers can thrive.
                </p>

                <p>
                  His mentorship continues to motivate faculty and students alike, driving the school toward higher benchmarks of academic achievement and community leadership.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
                <button
                  type="button"
                  onClick={() => setIsDirectorModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Close Message
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 3: CORRESPONDENT EXPANDED MESSAGE
      ========================================================================= */}
      <AnimatePresence>
        {isCorrespondentModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCorrespondentModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 text-[#0A1628] dark:text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4A853]">
                    <Image
                      src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_portrait.jpg"
                      alt="Sri P. Anil Kumar Reddy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#0A1628] dark:text-white uppercase font-[family-name:var(--font-heading)]">
                      Sri P. Anil Kumar Reddy
                    </h3>
                    <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                      Correspondent, Sree Valmeeki High School
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCorrespondentModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] italic font-medium">
                  “True institutional excellence is built on trust, impeccable discipline, and unwavering care for every child who walks through our gates.”
                </div>

                <p>
                  Sri P. Anil Kumar Reddy brings dynamic administrative leadership, meticulous operational oversight, and a deep commitment to student welfare as the Correspondent of Sree Valmeeki High School. He plays an instrumental role in ensuring that the school's founding vision of accessible, high-quality education is translated into everyday reality across all campus facilities.
                </p>

                <p>
                  With an open-door policy for parents and teachers alike, Sri P. Anil Kumar Reddy maintains transparent communication, rigorous campus safety protocols, and continuous infrastructure upgrades—from 4K smart interactive panels and modern science laboratories to safe, GPS-tracked transportation networks connecting Kadiri and surrounding mandals.
                </p>

                <p>
                  His empathetic approach and unwavering dedication ensure that every child experiences a secure, supportive, and stimulating learning environment where academic focus and moral discipline flourish hand in hand.
                </p>

                <p>
                  Under his administrative care, Sree Valmeeki High School maintains 100% compliance with AP State Board standards while fostering an inclusive, welcoming institutional family.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
                <button
                  type="button"
                  onClick={() => setIsCorrespondentModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Close Message
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
