'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';
import { useAdminStore } from '@/lib/store';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const addEnquiry = useAdminStore((state) => state.addEnquiry);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    classSeeking: 'Class 1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    // Add to zustand store
    addEnquiry({
      id: Date.now().toString(),
      parentName: formData.parentName,
      studentName: formData.studentName || 'Student',
      studentAge: '—',
      classSeeking: formData.classSeeking,
      currentSchool: '—',
      phone: formData.phone,
      email: '',
      location: 'Kadiri',
      transportRequired: false,
      message: formData.message || 'Admissions 2026–27 quick enquiry from homepage',
      status: 'New',
      notes: 'Submitted via Homepage Quick Modal',
      date: new Date().toISOString().split('T')[0],
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        classSeeking: 'Class 1',
        message: '',
      });
    }, 2400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#0A1628] border border-[#D4A853]/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white z-10 overflow-hidden"
          >
            {/* Ambient Gold Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A853]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 flex items-center justify-center mb-4 text-[#10B981]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">
                  Enquiry Received
                </h3>
                <p className="text-white/70 text-sm max-w-xs mb-3">
                  Thank you. The Sree Valmeeki Admissions Office in Kadiri will call you shortly.
                </p>
                <div className="text-xs text-[#D4A853] font-semibold tracking-wider uppercase">
                  Admissions 2026–27 • Nursery to Class 10
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] text-xs font-bold tracking-widest uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Admissions 2026–27</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-white leading-tight">
                    Start Your Child&apos;s Journey
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Connect directly with our admissions counselor in Kadiri.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] text-white placeholder-white/40 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                        Student Name
                      </label>
                      <input
                        type="text"
                        placeholder="Child's Name"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] text-white placeholder-white/40 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                        Class Seeking *
                      </label>
                      <select
                        value={formData.classSeeking}
                        onChange={(e) => setFormData({ ...formData, classSeeking: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0F2044] border border-white/15 focus:border-[#D4A853] text-white text-sm outline-none transition-all"
                      >
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={`Class ${i + 1}`}>
                            Class {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94404 68838"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] text-white placeholder-white/40 text-sm outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#B8860B] hover:from-[#E8C97D] hover:to-[#D4A853] text-[#0A1628] font-black text-sm tracking-widest uppercase shadow-lg shadow-[#D4A853]/25 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all cursor-pointer mt-2"
                  >
                    <span>Request Admission Callback</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Direct Call Link */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span>Prefer to speak immediately?</span>
                  <a
                    href="tel:+919440468838"
                    className="inline-flex items-center gap-1.5 text-[#D4A853] font-bold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 94404 68838</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
