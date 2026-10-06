'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveDown, Phone, MessageCircle, X, CheckCircle, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function CinematicHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    grade: 'Class 1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0A1628] flex flex-col justify-end text-white">
        {/* Full-Screen Campus Video Background with Daylight Vivid Clarity */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full scale-100 brightness-100 contrast-105 transition-transform duration-1000 ease-out"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Bottom-Left Targeted Gradient Overlay (preserves 85% campus visibility like Blue Moon reference) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent sm:bg-gradient-to-tr sm:from-[#0A1628]/90 sm:via-[#0A1628]/40 sm:to-transparent" />
        </div>

        {/* Bottom-Left Hero Content Overlay (Exact Blue Moon reference positioning & typography) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24 pt-32">
          <div className="max-w-2xl text-left">
            {/* Admissions Open Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3 sm:mb-4"
            >
              <span className="text-[#FBBF24] text-xs sm:text-sm font-black tracking-[0.2em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                ADMISSIONS OPEN 2026–27
              </span>
            </motion.div>

            {/* Giant Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight mb-3 sm:mb-4 text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]"
            >
              Sree Valmeeki Group of Institutions
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/95 text-base sm:text-lg md:text-xl font-bold tracking-wide mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              School • Nursery to Class 10 • Kadiri • Estd 1999
            </motion.p>

            {/* High-Visibility Golden Enroll Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-sm sm:text-base tracking-wide uppercase shadow-2xl hover:shadow-[0_8px_30px_rgba(251,191,36,0.5)] transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href="#foundation"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide uppercase border border-white/30 backdrop-blur-md transition-all cursor-pointer hover:border-white"
              >
                Explore Story
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 z-20 pointer-events-none text-white/70">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase font-mono">
            SCROLL TO DISCOVER
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <MoveDown className="w-3.5 h-3.5 text-[#FBBF24]" />
          </motion.div>
        </div>
      </section>

      {/* Right Edge Fixed Sticky Tab: 'Enroll Now >' (Blue Moon Reference 1:1) */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 py-4 px-2.5 bg-[#0A1628]/95 hover:bg-[#1E3A8A] text-[#FBBF24] hover:text-white rounded-l-2xl border-l-2 border-y-2 border-[#FBBF24] shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer group hover:pl-3.5"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          aria-label="Open Enroll Now admission modal"
        >
          <span className="text-xs font-black tracking-widest uppercase rotate-180 flex items-center gap-1">
            Enroll Now ›
          </span>
        </button>
      </aside>

      {/* Instant Admissions Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
            >
              {/* Modal Header */}
              <div className="bg-[#0A1628] text-white p-6 sm:p-7 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/20 border border-[#FBBF24]/40 text-[#FBBF24] font-black text-[11px] uppercase tracking-wider mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Admissions Open 2026–27</span>
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  Quick Admission Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Connect with our admissions counselor within 24 hours.
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
                    <h4 className="text-xl font-bold text-[#0A1628]">Enquiry Submitted!</h4>
                    <p className="text-sm text-slate-600">
                      Our admissions team will call you shortly on{' '}
                      <span className="font-bold text-[#0A1628]">{formData.phone}</span>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1628]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1628]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Grade Interested *
                        </label>
                        <select
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1628] bg-white"
                        >
                          <option>Nursery / LKG / UKG</option>
                          <option>Class 1 to 5 (Primary)</option>
                          <option>Class 6 to 8 (Middle)</option>
                          <option>Class 9 to 10 (SSC Board)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Student Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Child's Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1628]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      Submit Admission Enquiry
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span>Prefer to speak immediately?</span>
                      <a
                        href="tel:+919440468838"
                        className="font-bold text-[#0A1628] hover:text-[#B8860B] flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-[#B8860B]" />
                        +91 94404 68838
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
