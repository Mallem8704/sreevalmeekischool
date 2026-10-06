'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Phone, MapPin, X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { useAdminStore } from '@/lib/store';

export default function AdmissionsClimax() {
  const addAdmission = useAdminStore((s) => s.addAdmission);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Class 6 (IIT Foundation)',
    phone: '',
    whatsapp: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;

    addAdmission({
      studentName: formData.studentName,
      grade: formData.grade,
      phone: formData.phone,
      notes: `Climax Enquiry - WhatsApp: ${formData.whatsapp || formData.phone}`,
    });

    setIsSubmitted(true);
  };

  return (
    <section id="admissions" className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#050D1A] text-white overflow-hidden scroll-mt-20">
      {/* Background Campus Photo with Deep Vignette */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/school/school-event-4.jpg"
          alt="Sree Valmeeki School Campus"
          fill
          sizes="100vw"
          className="object-cover opacity-45 brightness-90 contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/70 to-[#050D1A]/85" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_30%,_#050D1A_90%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32 flex flex-col items-center">
        {/* Foundation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/50 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-6 shadow-lg backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ADMISSIONS 2026–27 • NURSERY TO CLASS 10</span>
        </motion.div>

        {/* Main Emotional Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.12] tracking-tight text-white mb-6"
        >
          YOUR CHILD&apos;S <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
            VALMEEKI JOURNEY
          </span>{' '}
          <br className="hidden sm:inline" />
          CAN BEGIN HERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-white/80 font-medium tracking-wide uppercase mb-10 max-w-xl font-[family-name:var(--font-body)]"
        >
          27 Years of proven scholastic excellence, character building, and joyful learning in Kadiri.
        </motion.p>

        {/* The 3 Core Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xl hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://maps.google.com/?q=Sree+Valmeeki+High+School+Kadiri"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/25 hover:border-white/50 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#D4A853]" />
            <span>Visit Campus</span>
          </a>

          <a
            href="tel:+919440468838"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/25 hover:border-white/50 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#D4A853]" />
            <span>Call School</span>
          </a>
        </motion.div>

        {/* Final Storyline Closing Line */}
        <div className="mt-16 pt-8 border-t border-white/15 w-full max-w-md">
          <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.3em] uppercase text-[#D4A853] block">
            THE STORY CONTINUES.
          </span>
          <span className="text-xs text-white/50 mt-1 block">
            Admissions Helpline: +91 94404 68838 • Kadiri, Andhra Pradesh
          </span>
        </div>
      </div>

      {/* Instant Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-[#0A1628] border border-white/25 p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A853] block mb-1">
                  OFFICIAL ADMISSIONS DESK
                </span>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  Begin Your Child&apos;s Journey
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="w-14 h-14 text-[#D4A853] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Enquiry Registered!</h4>
                  <p className="text-xs text-white/70 mb-5">
                    Our admissions counselor will contact you at {formData.phone} within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#D4A853] text-[#0A1628] font-bold text-xs uppercase"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase mb-1">
                      Class Seeking *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1E36] border border-white/20 text-white text-sm focus:outline-none focus:border-[#D4A853]"
                    >
                      {['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6 (IIT Foundation)', 'Class 7 (IIT Foundation)', 'Class 8 (IIT Foundation)', 'Class 9 (IIT Foundation)', 'Class 10 (SSC)'].map((g) => (
                        <option key={g} value={g} className="bg-[#0A1628] text-white">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase mb-1">
                      Parent Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94404 68838"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all cursor-pointer mt-2"
                  >
                    Submit Enquiry →
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={`https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School!%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20my%20child.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                      <span>Or chat directly on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
