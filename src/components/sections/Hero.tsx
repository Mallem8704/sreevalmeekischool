'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  MoveDown,
  CheckCircle,
  PhoneCall,
  Sparkles,
  User,
  GraduationCap,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { useAdminStore } from '@/lib/store';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

const grades = [
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6 (IIT Foundation)',
  'Class 7 (IIT Foundation)',
  'Class 8 (IIT Foundation)',
  'Class 9 (IIT Foundation)',
  'Class 10 (SSC Board)',
];

export default function Hero() {
  const addEnquiry = useAdminStore((s) => s.addEnquiry);

  // Hero Quick Enquiry Form State
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Class 6 (IIT Foundation)',
    parentName: '',
    phone: '',
    whatsapp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addEnquiry({
        id: Date.now().toString(),
        studentName: formData.studentName,
        classSeeking: formData.grade,
        parentName: formData.parentName || 'Parent',
        studentAge: '',
        currentSchool: 'N/A',
        phone: formData.phone,
        email: 'quick-enquiry@valmeeki.edu',
        location: 'Kadiri, AP',
        transportRequired: false,
        message: `Hero Quick Enquiry - WhatsApp: ${formData.whatsapp || formData.phone}`,
        status: 'New',
        notes: `Hero Quick Enquiry - WhatsApp: ${formData.whatsapp || formData.phone}`,
        date: new Date().toISOString().split('T')[0],
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sree Valmeeki School Admissions! I would like to enquire about admission for ${
      formData.studentName || 'my child'
    } into ${formData.grade}. Contact: ${formData.phone || ''}`
  );

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#0A1628] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
      {/* Background Video - High Visibility and Ambient Depth */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-90 scale-105 brightness-95 contrast-105 transition-opacity duration-700"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Subtle Vignette Overlay - Keeps Video Clear & Vibrant while Blending Gracefully */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-transparent to-[#0A1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/50 via-transparent to-[#0A1628]/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Part 1 Left: Brand & School Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="backdrop-blur-md bg-[#0A1628]/65 border border-white/20 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50">
              {/* Foundation Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/45 backdrop-blur-md mb-3.5 sm:mb-4 w-fit shadow-sm"
              >
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4A853]" />
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#D4A853] uppercase font-[family-name:var(--font-body)]">
                  EST. 1999 • KADIRI, AP • 27 YEARS OF EXCELLENCE
                </span>
              </motion.div>

              {/* Grand School Name Headline */}
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-[1.15] tracking-tight mb-3.5 sm:mb-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                >
                  SREE VALMEEKI
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal drop-shadow-sm"
                >
                  E.M. HIGH SCHOOL
                </motion.span>
              </h1>

              {/* Legacy Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="text-white/90 text-sm sm:text-base max-w-2xl mb-6 font-[family-name:var(--font-body)] leading-relaxed"
              >
                Kadiri’s premier English medium institution dedicated to scholastic rigor, early IIT-JEE & NEET Olympiad coaching, spoken English fluency, and holistic character formation from Nursery through Class 10.
              </motion.p>

              {/* Quick Stats Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 text-xs font-semibold"
              >
                <div className="px-3 py-2.5 rounded-xl bg-white/10 border border-[#D4A853]/40 backdrop-blur-sm text-center flex flex-col items-center justify-center gap-0.5 shadow-sm group hover:border-[#D4A853] transition-colors">
                  <span className="text-[#D4A853] font-bold text-sm tracking-wide">27+ Years</span>
                  <span className="text-white/90 text-[11px]">Excellence</span>
                </div>
                <div className="px-3 py-2.5 rounded-xl bg-white/10 border border-[#D4A853]/40 backdrop-blur-sm text-center flex flex-col items-center justify-center gap-0.5 shadow-sm group hover:border-[#D4A853] transition-colors">
                  <span className="text-[#D4A853] font-bold text-sm tracking-wide">100%</span>
                  <span className="text-white/90 text-[11px]">Pass Rate</span>
                </div>
                <div className="px-3 py-2.5 rounded-xl bg-white/10 border border-[#D4A853]/40 backdrop-blur-sm text-center flex flex-col items-center justify-center gap-0.5 shadow-sm group hover:border-[#D4A853] transition-colors">
                  <span className="text-[#D4A853] font-bold text-sm tracking-wide">IIT & NEET</span>
                  <span className="text-white/90 text-[11px]">Foundation</span>
                </div>
                <div className="px-3 py-2.5 rounded-xl bg-white/10 border border-[#D4A853]/40 backdrop-blur-sm text-center flex flex-col items-center justify-center gap-0.5 shadow-sm group hover:border-[#D4A853] transition-colors">
                  <span className="text-[#D4A853] font-bold text-sm tracking-wide">Smart Labs</span>
                  <span className="text-white/90 text-[11px]">Digi-Classes</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#philosophy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0A1628] bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] rounded-xl shadow-lg hover:shadow-xl hover:brightness-105 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Explore Philosophy
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#campus"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-200 rounded-xl backdrop-blur-sm"
                >
                  Campus Life
                </a>

                <a
                  href="tel:+919440468838"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/15 border border-white/15 rounded-xl transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>+91 94404 68838</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Part 1 Right: Admission Enquiry Card in Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="lg:col-span-5 w-full"
            id="hero-enquiry"
          >
            <div className="relative rounded-3xl bg-[#0A1628]/85 backdrop-blur-xl border border-white/25 p-6 sm:p-7 shadow-2xl shadow-black/70 overflow-hidden">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A853] via-[#F5E6C0] to-[#B8860B]" />

              {/* Form Card Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#D4A853]/25 border border-[#D4A853]/50 text-[#D4A853] text-[11px] font-bold tracking-widest uppercase">
                    ADMISSIONS 2026–27
                  </span>
                  <span className="text-[11px] text-white/70 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4A853]" />
                    Limited Seats
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  Quick Admission Enquiry
                </h3>
                <p className="text-white/75 text-xs mt-1">
                  Connect directly with our admissions counselor in Kadiri.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D4A853]/20 border border-[#D4A853] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8 text-[#D4A853]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Enquiry Received!
                  </h4>
                  <p className="text-white/80 text-xs max-w-xs mx-auto mb-5 leading-relaxed">
                    Thank you! Our Admissions Officer will contact you on{' '}
                    <span className="text-[#D4A853] font-semibold">{formData.phone}</span> shortly.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/919440468838?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-[#25D366] text-white hover:brightness-105 transition-all shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-white/60 hover:text-white underline underline-offset-4"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Student Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Student Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        placeholder="e.g. R. Rahul Reddy"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all"
                      />
                    </div>
                  </div>

                  {/* Grade Applying For */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Class Seeking Admission *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#0E1E36] border border-white/20 text-white focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all cursor-pointer"
                      >
                        {grades.map((grade) => (
                          <option key={grade} value={grade} className="bg-[#0A1628] text-white">
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Parent Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 94404 68838"
                          className="w-full pl-8 pr-2.5 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                        WhatsApp (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          placeholder="WhatsApp number"
                          className="w-full pl-8 pr-2.5 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide text-[#0A1628] bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#C49A3C] hover:brightness-105 active:scale-98 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Fast WhatsApp Chat Direct Alternative */}
                  <div className="pt-1.5 flex items-center justify-between gap-2 border-t border-white/10 text-[11px]">
                    <a
                      href={`https://wa.me/919440468838?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors font-medium"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+919440468838"
                      className="inline-flex items-center gap-1 text-white/70 hover:text-[#D4A853] transition-colors"
                    >
                      <PhoneCall className="w-3 h-3 text-[#D4A853]" />
                      <span>Help: 94404 68838</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discover Valmeeki Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-1 z-20 pointer-events-none"
      >
        <span className="text-white/60 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold">
          Discover Valmeeki
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <MoveDown className="w-3.5 h-3.5 text-[#D4A853]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
