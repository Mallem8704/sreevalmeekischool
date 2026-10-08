'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Class 1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', grade: 'Class 1', message: '' });
    }, 4000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#FBBF24] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A1628] dark:bg-[#050D1A] border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/school/school-event-3.jpg"
            alt="Sree Valmeeki Campus"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] dark:from-[#050D1A] via-[#0A1628]/80 dark:via-[#0A1628]/80 to-[#0A1628]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Sree Valmeeki</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-[family-name:var(--font-heading)] leading-tight text-white mb-4">
            We&apos;re Here to{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
              Guide Your Child.
            </span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Visit our campus, connect with our principal, or enquire about 2026–27 admissions.
          </p>
        </div>
      </section>

      {/* Direct Contact Action Cards */}
      <section className="py-12 bg-slate-100/70 dark:bg-white/5 border-y border-slate-200 dark:border-white/10 backdrop-blur-md transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone */}
            <a
              href="tel:+919440468838"
              className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-[#B8860B]/50 dark:hover:border-[#FBBF24]/50 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-[#B8860B] dark:text-[#FBBF24] group-hover:bg-[#B8860B] dark:group-hover:bg-[#FBBF24] group-hover:text-white dark:group-hover:text-[#0A1628] transition-colors shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] block mb-1">
                  CALL ADMISSIONS
                </span>
                <span className="text-base font-bold text-[#0A1628] dark:text-white block">
                  +91 94404 68838
                </span>
                <span className="text-xs text-slate-500 dark:text-white/60 block mt-0.5">
                  Mon - Sat • 8:30 AM - 5:30 PM
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20have%20an%20enquiry%20regarding%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  WHATSAPP CHAT
                </span>
                <span className="text-base font-bold text-[#0A1628] dark:text-white block">
                  Instant Reply
                </span>
                <span className="text-xs text-slate-500 dark:text-white/60 block mt-0.5">
                  Direct Counselor Chat
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@sreevalmeekischool.edu.in"
              className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  OFFICIAL EMAIL
                </span>
                <span className="text-sm font-bold text-[#0A1628] dark:text-white block truncate">
                  info@sreevalmeeki.edu.in
                </span>
                <span className="text-xs text-slate-500 dark:text-white/60 block mt-0.5">
                  24-Hour Response
                </span>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Kadiri,Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-amber-500/50 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-[#B8860B] dark:text-[#FBBF24] group-hover:bg-[#B8860B] dark:group-hover:bg-[#FBBF24] group-hover:text-white dark:group-hover:text-[#0A1628] transition-colors shrink-0">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] block mb-1">
                  CAMPUS ADDRESS
                </span>
                <span className="text-xs font-bold text-[#0A1628] dark:text-white block leading-snug">
                  Madanapalli Road / Bypass, Kadiri, AP
                </span>
                <span className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold block mt-0.5">
                  Open in Google Maps ›
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Interactive Map */}
      <section className="py-20 sm:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Correspondent's Administrative Office Strip */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1628] border-2 border-[#D4A853]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D4A853] shadow-md shrink-0 bg-[#0F2044]">
                <Image
                  src="/images/leadership/sri_p_anil_kumar_reddy_correspondent_square.jpg"
                  alt="Sri P. Anil Kumar Reddy - Correspondent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24]">
                  ADMINISTRATIVE SECRETARIAT • LEADERSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white uppercase">
                  Sri P. Anil Kumar Reddy
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                  Correspondent, Sree Valmeeki High School
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic hidden sm:block pt-1">
                  “We welcome parents to visit our campus and experience the warmth, discipline, and dedication that defines Sree Valmeeki.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+919440468838"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A1628] hover:bg-[#1E3A8A] dark:bg-[#D4A853] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 94404 68838</span>
              </a>
              <Link
                href="/about#correspondent-profile"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#0A1628] dark:text-white text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/15 transition-all"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Quick Form */}
            <div className="lg:col-span-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-xl dark:shadow-2xl transition-colors duration-200">
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-widest block mb-2">
                SEND A MESSAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mb-2">
                Get in Touch With Us
              </h2>
              <p className="text-slate-600 dark:text-white/70 text-xs sm:text-sm mb-8">
                Fill this brief form and our team will get in touch with you right away.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3 bg-emerald-50 dark:bg-white/5 rounded-2xl border border-emerald-500/30">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 dark:text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-[#0A1628] dark:text-white">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 max-w-sm mx-auto">
                    Thank you for reaching out. An admissions counselor will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-[#0A1628] dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-[#B8860B] dark:focus:border-[#FBBF24] focus:ring-1 focus:ring-[#B8860B] dark:focus:ring-[#FBBF24] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-[#0A1628] dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-[#B8860B] dark:focus:border-[#FBBF24] focus:ring-1 focus:ring-[#B8860B] dark:focus:ring-[#FBBF24] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                        Grade of Interest
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A1628] border border-slate-200 dark:border-white/20 text-[#0A1628] dark:text-white text-sm focus:outline-none focus:border-[#B8860B] dark:focus:border-[#FBBF24] focus:ring-1 focus:ring-[#B8860B] dark:focus:ring-[#FBBF24] transition-colors"
                      >
                        <option value="Pre-Primary (Nursery, LKG, UKG)">Pre-Primary (Nursery, LKG, UKG)</option>
                        <option value="Primary (Classes 1 - 5)">Primary (Classes 1 - 5)</option>
                        <option value="Middle (Classes 6 - 8)">Middle (Classes 6 - 8)</option>
                        <option value="High School (Classes 9 - 10)">High School (Classes 9 - 10)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                      Your Query (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about admissions, fee structure, bus routes, or timings..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-[#0A1628] dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-[#B8860B] dark:focus:border-[#FBBF24] focus:ring-1 focus:ring-[#B8860B] dark:focus:ring-[#FBBF24] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#B8860B] hover:bg-[#996515] dark:bg-[#FBBF24] dark:hover:bg-[#F59E0B] text-white dark:text-[#0A1628] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Query</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Map & Directions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 h-[380px] sm:h-[420px] shadow-xl dark:shadow-2xl relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.06173291583!2d78.15610816977539!3d14.111812899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3b216521a00a1%3A0xc6822c9b2dcb5252!2sKadiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sree Valmeeki School Location Map"
                />
              </div>

              {/* Campus Hours Box */}
              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-wrap items-center justify-between gap-4 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#B8860B] dark:text-[#FBBF24]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0A1628] dark:text-white block">
                      Campus Office Hours
                    </span>
                    <span className="text-xs text-slate-500 dark:text-white/60">
                      Monday to Saturday • 08:30 AM to 05:30 PM
                    </span>
                  </div>
                </div>

                <a
                  href="tel:+919440468838"
                  className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#B8860B] dark:text-[#FBBF24] font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
