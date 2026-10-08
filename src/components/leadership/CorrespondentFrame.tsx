'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Quote,
  Sparkles,
  ShieldCheck,
  Award,
  Building2,
  Users,
  HeartHandshake,
  ArrowRight,
  Maximize2,
  X,
  Phone,
  GraduationCap,
  MessageCircle,
  Clock,
  Compass,
} from 'lucide-react';

interface CorrespondentFrameProps {
  className?: string;
  showExtendedBio?: boolean;
}

export default function CorrespondentFrame({
  className = '',
  showExtendedBio = true,
}: CorrespondentFrameProps) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isFullSpeechOpen, setIsFullSpeechOpen] = useState(false);

  const administrativePillars = [
    {
      icon: ShieldCheck,
      title: 'Administrative Integrity',
      desc: 'Transparent governance, full statutory compliance with AP State Board, and seamless institutional management.',
    },
    {
      icon: Building2,
      title: 'Campus Infrastructure & Safety',
      desc: 'State-of-the-art smart digital classrooms, modern science laboratories, and secure campus surveillance.',
    },
    {
      icon: Users,
      title: 'Parent Accessibility & Trust',
      desc: 'An open-door leadership policy ensuring every parent feels heard, respected, and directly connected to the administration.',
    },
    {
      icon: HeartHandshake,
      title: 'Student Welfare & Community',
      desc: 'Ensuring accessible fees, student transit safety, fee concessions for needy scholars, and humanitarian outreach.',
    },
  ];

  return (
    <>
      <div
        id="correspondent-profile"
        className={`relative rounded-3xl bg-white dark:bg-[#0A1628] border-2 border-[#D4A853]/40 dark:border-[#D4A853]/40 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(212,168,83,0.12)] dark:shadow-none overflow-hidden transition-colors duration-200 ${className}`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/10 dark:bg-[#D4A853]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: EXECUTIVE GOLD PORTRAIT FRAME
          ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-sm"
            >
              {/* Layered Outer Gold Frame */}
              <div className="relative p-3.5 sm:p-4 rounded-3xl bg-gradient-to-br from-[#E8C97D] via-[#D4A853] to-[#996515] shadow-2xl">
                {/* Inner Bezel Frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A1628] border-2 border-white dark:border-white/20 shadow-inner group/photo">
                  <Image
                    src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_portrait.jpg"
                    alt="Sri P. Anil Kumar Reddy - Correspondent, Sree Valmeeki High School"
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, 380px"
                    className="object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                  />

                  {/* Gradient Overlay for Typography Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Verified Plaque Seal on Card */}
                  <div className="absolute top-3 right-3 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4A853] shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                    <span className="text-[10px] font-black text-[#0A1628] dark:text-white uppercase tracking-wider">
                      Correspondent
                    </span>
                  </div>

                  {/* Expand / View Full Photo Prompt */}
                  <button
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#D4A853] text-white hover:text-[#0A1628] flex items-center justify-center backdrop-blur-md transition-all shadow cursor-pointer opacity-90 hover:opacity-100"
                    aria-label="View portrait full size"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Name and Designation Plaque */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#D4A853] block mb-0.5">
                      ADMINISTRATION & GOVERNANCE
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight">
                      Sri P. Anil Kumar Reddy
                    </h4>
                    <p className="text-xs text-white/90 font-medium mt-0.5">
                      Correspondent, Sree Valmeeki High School
                    </p>
                  </div>
                </div>
              </div>

              {/* Commemorative Plaque Below Frame */}
              <div className="mt-4 text-center space-y-1">
                <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-white/10">
                  Institutional Guardian • Administrative Pillar • Community Leader
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Click portrait to view high-resolution official portrait
                </p>
              </div>
            </motion.div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: EXECUTIVE MESSAGE & PHILOSOPHY
          ========================================================================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Leadership Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#D4A853]/15 text-[#B8860B] dark:text-[#FBBF24] border border-[#D4A853]/30 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About The Correspondent</span>
            </div>

            {/* Prominent Serif Headline Quote */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4A853] shrink-0 mt-1 rotate-180" />
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white tracking-tight leading-snug">
                  “True institutional excellence is built on trust, discipline, and unwavering care for every child who walks through our gates.”
                </h3>
              </div>
              <p className="pl-11 sm:pl-13 text-xs sm:text-sm text-[#B8860B] dark:text-[#FBBF24] font-bold uppercase tracking-widest">
                — Sri P. Anil Kumar Reddy, Correspondent
              </p>
            </div>

            {/* Biography Narrative */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Sri P. Anil Kumar Reddy</strong> is the Correspondent of Sree Valmeeki High School. As the administrative pillar and institutional guardian of the school, he carries forward the founding vision established on 6th June, 1999, ensuring that Sree Valmeeki stands at the forefront of academic discipline, modern infrastructure, and student safety.
              </p>

              <p>
                Working hand in hand with Founder Sri Palavala Jaya Rami Reddy and Director Mr. Pavan Kumar Reddy, Sri Anil Kumar Reddy manages institutional operations, government regulatory liaison, and community relations. His core mission is to uphold the sacred school motto: <em>providing world-class, value-based education with an accessible fee structure</em> so that quality learning remains within reach of every family across Kadiri and neighboring rural regions.
              </p>

              {showExtendedBio && (
                <p className="hidden sm:block">
                  Under his proactive stewardship, the campus has continually expanded with modern smart digital classrooms, advanced STEM laboratories, spacious sporting arenas, and dedicated safe transit fleets. Sri Anil Kumar Reddy is revered by parents for his open accessibility, integrity, and personal involvement in every student&apos;s welfare and safety.
                </p>
              )}
            </div>

            {/* The 4 Administrative Cornerstones */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border border-[#D4A853]/30 dark:border-white/10">
              <div className="text-xs font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Core Administrative Priorities of the Correspondent</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { name: 'Parent Trust', desc: 'Direct accessibility 24/7' },
                  { name: 'Campus Safety', desc: 'Secure environment & buses' },
                  { name: 'Affordable Fees', desc: 'Accessible to all families' },
                  { name: 'Disciplined Growth', desc: '28-year trusted legacy' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 text-center"
                  >
                    <span className="block text-xs font-black text-[#0A1628] dark:text-white">
                      {item.name}
                    </span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs and Interaction Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsFullSpeechOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A1628] hover:bg-[#1E3A8A] dark:bg-[#D4A853] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Read Full Administrative Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+919440468838"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 94404 68838</span>
              </a>

              <a
                href="https://wa.me/919440468838?text=Hello%20Sir,%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Sree%20Valmeeki%20School."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM STRIP: 4 PILLARS OF ADMINISTRATIVE EXCELLENCE
        ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-slate-200 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24]">
              INSTITUTIONAL STEWARDSHIP
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mt-1">
              Guiding Pillars of the Correspondent&apos;s Administration
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {administrativePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D4A853]/15 dark:bg-[#D4A853]/25 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#B8860B] dark:text-[#FBBF24]" />
                  </div>
                  <h5 className="text-sm font-bold text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)] mb-1">
                    {pillar.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODAL 1: HIGH-RESOLUTION OFFICIAL PORTRAIT CARD
      ========================================================================= */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0A1628] rounded-3xl overflow-hidden border-2 border-[#D4A853] shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4A853]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#0A1628] dark:text-white">
                    Official Executive Portrait • Correspondent
                  </span>
                </div>
                <button
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#0A1628]">
                <Image
                  src="/images/leadership/sri_p_anil_kumar_reddy_correspondent.jpg"
                  alt="Sri P. Anil Kumar Reddy - Correspondent"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="p-6 bg-white dark:bg-[#0A1628] border-t border-slate-200 dark:border-white/10 text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24]">
                  Correspondent & Institutional Guardian
                </span>
                <h4 className="text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  Sri P. Anil Kumar Reddy
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                  “True institutional excellence is built on trust, discipline, and unwavering care for every child who walks through our gates.”
                </p>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-[#B8860B] dark:text-[#FBBF24]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Administrative Line: +91 94404 68838</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 2: FULL CORRESPONDENT'S ADDRESS & VISION
      ========================================================================= */}
      <AnimatePresence>
        {isFullSpeechOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullSpeechOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0A1628] rounded-3xl overflow-y-auto border-2 border-[#D4A853] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-5 bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4A853]">
                    <Image
                      src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_square.jpg"
                      alt="Sri P. Anil Kumar Reddy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                      Sri P. Anil Kumar Reddy
                    </h4>
                    <span className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-bold">
                      Correspondent, Sree Valmeeki High School
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsFullSpeechOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close address"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Speech Content */}
              <div className="p-6 sm:p-8 space-y-6 text-[#0A1628] dark:text-white">
                <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#FDFBF7] dark:bg-white/5 border-l-4 border-[#D4A853] italic text-base sm:text-lg font-medium leading-relaxed font-[family-name:var(--font-heading)] text-slate-800 dark:text-slate-100">
                  “True institutional excellence is built on trust, discipline, and unwavering care for every child who walks through our gates.”
                </blockquote>

                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Sri P. Anil Kumar Reddy</strong> serves as the Correspondent of Sree Valmeeki High School. He oversees institutional management, government and board liaison, physical infrastructure expansion, staff welfare, and parental engagement.
                  </p>

                  <p>
                    From its humble foundation on <strong>6th June, 1999</strong>, under Founder Sri Palavala Jaya Rami Reddy, Sree Valmeeki High School has grown into one of the most respected educational landmarks in Sri Sathya Sai District. Sri Anil Kumar Reddy ensures that the school maintains its founding promise: providing the highest standard of English medium education, IIT Foundation, and holistic character building within an accessible fee structure.
                  </p>

                  <p>
                    Sri Anil Kumar Reddy strongly emphasizes campus discipline, student safety, and state-of-the-art facilities. Under his guidance, the school has implemented digital classrooms, secure transportation routes across Kadiri town and surrounding villages, rigorous hygiene protocols, and expansive sports training grounds.
                  </p>

                  <p>
                    Beyond institutional administration, Sri Anil Kumar Reddy plays an active role in societal upliftment through the <strong>Abhigna Foundation</strong>, organizing drinking water borewells, educational aid, disaster relief during the Kadiri floods, and free community medical initiatives.
                  </p>

                  <p>
                    He welcomes parents to interact directly with the administration at any time, ensuring that each family feels like a valued partner in their child&apos;s educational voyage.
                  </p>
                </div>

                {/* Correspondent Signature Block */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-base font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                      Sri P. Anil Kumar Reddy
                    </h5>
                    <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold">
                      Correspondent, Sree Valmeeki High School, Kadiri
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Contact: +91 94404 68838
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      Established 6th June 1999
                    </span>
                    <span className="text-xs font-bold text-[#0A1628] dark:text-white">
                      28 Years of Excellence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
