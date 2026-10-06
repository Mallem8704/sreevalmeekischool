'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Phone,
  MessageCircle,
  FileCheck,
  Calendar,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import AdmissionForm from '@/components/sections/AdmissionForm';

const admissionSteps = [
  {
    step: '01',
    title: 'Submit Online Enquiry',
    desc: 'Fill the simple form below or connect directly on WhatsApp with our counseling desk.',
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    desc: 'Tour our classrooms, meet teachers, and experience the school environment.',
  },
  {
    step: '03',
    title: 'Readiness Assessment',
    desc: 'An informal, stress-free interaction to understand your child&apos;s learning interests.',
  },
  {
    step: '04',
    title: 'Confirm Admission',
    desc: 'Complete documentation, collect uniform/books kit, and welcome your child to Valmeeki.',
  },
];

const documents = [
  'Birth Certificate (Original & Xerox)',
  'Aadhar Card copies of Student & Parents',
  'Previous Class Progress Report / Marksheet',
  'Transfer Certificate (for Class 2 and above)',
  'Recent Passport Size Photographs (4 Copies)',
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050D1A] text-white selection:bg-[#FBBF24] selection:text-[#0A1628]">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/school/school-event-4.jpg"
            alt="Sree Valmeeki Admissions"
            fill
            priority
            className="object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#0A1628]/80 to-[#0A1628]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open 2026–27</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-[family-name:var(--font-heading)] leading-tight text-white mb-4">
            Begin Your Child&apos;s{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
              Legacy of Excellence.
            </span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-medium mb-8">
            Admissions open for Nursery to Class 10. Limited seats per section to maintain individual student attention.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apply"
              className="px-8 py-3.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              Fill Admission Form ↓
            </a>
            <a
              href="tel:+919440468838"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Process Bar */}
      <section className="py-16 sm:py-20 bg-white/5 border-y border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FBBF24] text-xs font-black uppercase tracking-widest block mb-2">
              SIMPLE & TRANSPARENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] text-white">
              The 4-Step Admission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0A1628] border border-white/10 hover:border-[#FBBF24]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-mono text-[#FBBF24] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-20 sm:py-28 bg-[#050D1A] scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AdmissionForm />
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-16 bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-8 rounded-3xl bg-[#0A1628] border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#FBBF24]/10 text-[#FBBF24] flex items-center justify-center shrink-0">
              <FileCheck className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">
                Documents Required for Admission
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mb-4">
                Please have these ready when confirming admission at the school administrative desk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
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
