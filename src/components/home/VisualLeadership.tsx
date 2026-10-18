'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  ShieldCheck,
  Award,
  GraduationCap,
  Building2,
  FileText,
  X,
  ArrowRight,
  Plane,
  Droplet,
  Activity,
  Heart,
  Users,
} from 'lucide-react';
import Image from 'next/image';

interface VisualLeadershipProps {
  onOpenAdmissions?: () => void;
}

export default function VisualLeadership({ onOpenAdmissions }: VisualLeadershipProps) {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [isDirectorModalOpen, setIsDirectorModalOpen] = useState(false);
  const [isCorrespondentModalOpen, setIsCorrespondentModalOpen] = useState(false);
  const [isSocietyModalOpen, setIsSocietyModalOpen] = useState(false);

  return (
    <>
      <section id="leadership" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F8F5EE] dark:bg-[#03101E] text-[#0A1C31] dark:text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Top Grid Matching Reference Mockup Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading & 2-line Subtitle */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
                LEADERSHIP
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight text-[#0A1C31] dark:text-white">
                A Vision for <br />
                <span className="text-[#0A1C31] dark:text-white">Brighter Tomorrows</span>
              </h2>

              <p className="text-sm sm:text-base text-[#69778A] dark:text-slate-300 font-medium leading-relaxed max-w-sm">
                Guided by strong values and a deep commitment to quality education for every child.
              </p>
            </div>

            {/* Center: Director Portrait Frame (Matching Reference Screenshot) */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-white/10 shadow-2xl"
              >
                <Image
                  src="/images/leadership/mr_pavan_kumar_reddy_director_portrait.png"
                  alt="Dr. P.V Pavan Kumar Reddy - Director of Valmeeki School and Founder Abhigna Foundation"
                  fill
                  sizes="(max-width: 640px) 320px, 400px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F0C66A] block">
                    DIRECTOR &amp; FOUNDER
                  </span>
                  <h3 className="text-lg font-black font-[family-name:var(--font-heading)]">
                    Dr. P.V Pavan Kumar Reddy
                  </h3>
                  <p className="text-[10px] text-white/80 font-medium leading-tight mt-0.5">
                    Director of Valmeeki School and Founder Abhigna Foundation
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Large Quote Block (Matching Reference Screenshot) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#D8A53C]/15 flex items-center justify-center text-[#D8A53C]">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#0A1C31] dark:text-slate-200 leading-relaxed font-[family-name:var(--font-heading)] italic">
                “At Sree Valmeeki, we believe in nurturing confident, compassionate and capable individuals who can contribute to a better tomorrow. Our focus is on strong values, academic excellence and all-round development.”
              </blockquote>

              <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
                <span className="text-sm font-black text-[#0A1C31] dark:text-white block">
                  — Dr. P.V Pavan Kumar Reddy
                </span>
                <span className="text-xs text-[#69778A] dark:text-slate-400 block font-medium">
                  Director of Valmeeki School and Founder Abhigna Foundation
                </span>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsDirectorModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D8A53C] hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 
            Executive Leadership & Heritage Trinity 
            Preserves Founder, Correspondent & Society Exactly as Required by Rules 17-20
          */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
                  LEGACY &amp; GOVERNANCE
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1C31] dark:text-white">
                  The Foundations of Sree Valmeeki
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold text-[#69778A] dark:text-slate-400">
                Estd. 6th June, 1999 • Kadiri
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* 1. Founder & Chairman Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#06172A] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-[#D8A53C]/50 shadow-md shrink-0">
                      <Image
                        src="/images/founder/sri_p_jaya_rami_reddy_founder.png"
                        alt="Sri P. Jaya Rami Reddy - Founder & Chairman"
                        fill
                        sizes="90px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C] block">
                        FOUNDER &amp; CHAIRMAN
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                        Sri P. Jayarami Reddy
                      </h4>
                      <span className="text-[11px] text-[#D8A53C] dark:text-[#FBBF24] font-black uppercase tracking-wider block mt-0.5">
                        RETIRED MEO
                      </span>
                      <span className="text-[11px] text-[#69778A] dark:text-slate-400 font-medium block">
                        Estd. 6th June, 1999
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#69778A] dark:text-slate-300 leading-relaxed">
                    A visionary pioneer who believed that quality education, discipline, and accessible fee structures should be available to every child in Kadiri.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsDocModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8A53C] hover:text-[#B8860B] transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Original Heritage Document</span>
                  </button>
                </div>
              </motion.div>

              {/* 2. Correspondent Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#06172A] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-[#D8A53C]/50 shadow-md shrink-0">
                      <Image
                        src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_portrait.jpg"
                        alt="Sri P. Anil Kumar Reddy - Correspondent"
                        fill
                        sizes="90px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C] block">
                        CORRESPONDENT
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                        Sri P. Anil Kumar Reddy
                      </h4>
                      <span className="text-[11px] text-[#69778A] dark:text-slate-400 font-medium">
                        Sree Valmeeki E.M School – Nursery to 10th Class
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#69778A] dark:text-slate-300 leading-relaxed">
                    Driving campus safety, smart panel modernizations, transparent operations, and parental trust across all school wings.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsCorrespondentModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8A53C] hover:text-[#B8860B] transition-colors cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>

              {/* 3. Sponsoring Society Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#06172A] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-18 rounded-xl overflow-hidden bg-[#09355C] border border-[#D8A53C]/50 flex items-center justify-center shrink-0 p-1">
                      <Image
                        src="/images/foundation/abhigna_foundation_logo.png"
                        alt="Abhigna Social Development & Educational Society"
                        fill
                        sizes="70px"
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C] block">
                        SPONSORING SOCIETY
                      </span>
                      <h4 className="text-base font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                        Abhigna Society (Regd.)
                      </h4>
                      <span className="text-[11px] text-[#69778A] dark:text-slate-400 font-medium">
                        Philanthropy &amp; Community Service
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#69778A] dark:text-slate-300 leading-relaxed">
                    Conducting drinking water borewells, Covid-19 relief, flood aid, medical camps, and free flight trips for rural 10th toppers.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsSocietyModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8A53C] hover:text-[#B8860B] transition-colors cursor-pointer"
                  >
                    <span>View Community Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRESERVED MODALS FOR 100% CONTENT INTEGRITY
      ========================================================================= */}

      {/* 1. Original Heritage Scanned Document Modal */}
      <AnimatePresence>
        {isDocModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0A1628] rounded-3xl p-6 overflow-y-auto text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C]">
                    ARCHIVAL RECORD • 1999
                  </span>
                  <h3 className="text-lg font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                    Original School Brochure &amp; Founder Dedication
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDocModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="mt-4 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10">
                <Image
                  src="/images/founder/founder_brochure_document_scanned.jpg"
                  alt="Founder Brochure Original Scanned Document"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-xs text-[#69778A] dark:text-slate-300 leading-relaxed italic">
                “This authentic founding brochure marks the historic inception of Sree Valmeeki High School on 6th June, 1999 under the visionary leadership of Founder Sri P. Jaya Rami Reddy.”
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Director Full Vision Modal */}
      <AnimatePresence>
        {isDirectorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#0A1628] rounded-3xl p-6 sm:p-8 overflow-y-auto text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C]">
                    LEADERSHIP DESK
                  </span>
                  <h3 className="text-xl font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                    Dr. P.V Pavan Kumar Reddy
                  </h3>
                  <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold mt-0.5">
                    Director of Valmeeki School and Founder Abhigna Foundation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDirectorModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                “Every child is born with curiosity, imagination, and latent talent. Our responsibility as educators is not to enforce rigid rote learning, but to provide an inspiring environment where concepts come alive.”
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                “From digital 4K interactive smart boards to comprehensive IIT-JEE and Olympiad foundations, we ensure students develop analytical thinking alongside humble character and self-discipline.”
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsDirectorModalOpen(false);
                    if (onOpenAdmissions) onOpenAdmissions();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D8A53C] text-[#03101E] font-black text-xs uppercase tracking-wider"
                >
                  Schedule Campus Interaction
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Correspondent Full Vision Modal */}
      <AnimatePresence>
        {isCorrespondentModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#0A1628] rounded-3xl p-6 sm:p-8 overflow-y-auto text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C]">
                    ADMINISTRATIVE DESK
                  </span>
                  <h3 className="text-xl font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                    Sri P. Anil Kumar Reddy — Correspondent
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCorrespondentModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                “Operational excellence means ensuring absolute safety, hygienic campus infrastructure, GPS-monitored bus transportation, and an open, trustworthy communication channel with every parent.”
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                “Our staff and administration work continuously to uphold the high standards that Kadiri families have trusted for 28 years.”
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Abhigna Society Initiatives Modal */}
      <AnimatePresence>
        {isSocietyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#0A1628] rounded-3xl p-6 sm:p-8 overflow-y-auto text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D8A53C]">
                    COMMUNITY INITIATIVES
                  </span>
                  <h3 className="text-xl font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)]">
                    Abhigna Social Development &amp; Educational Society
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSocietyModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 flex items-start gap-3">
                  <Plane className="w-4 h-4 text-[#D8A53C] shrink-0 mt-0.5" />
                  <div>
                    <strong>First Flight for Govt School Toppers:</strong> Sponsored flights to Vijayawada for rural 10th toppers to inspire lifelong ambition.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 flex items-start gap-3">
                  <Droplet className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Rural Drinking Water Borewells:</strong> Providing clean drinking water access in drought-affected mandals.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 flex items-start gap-3">
                  <Activity className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Covid-19 Relief &amp; Vaikunta Ratham:</strong> 24/7 free ambulance services and emergency food relief throughout the pandemic.
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
