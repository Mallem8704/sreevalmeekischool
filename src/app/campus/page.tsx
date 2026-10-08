'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Monitor,
  Microscope,
  Trophy,
  Bus,
  Library,
  Music,
  MapPin,
  CheckCircle2,
  Calendar,
  Phone,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

const campusStats = [
  { value: '25+', label: 'Digital Classrooms', sub: 'Interactive Smart Panels' },
  { value: '3+', label: 'Science & STEM Labs', sub: 'Physics, Chemistry & Bio' },
  { value: '2 Acres', label: 'Sports Arena', sub: 'Cricket, Athletics & Games' },
  { value: '100%', label: 'GPS Bus Tracking', sub: 'Covering Kadiri & Surrounds' },
];

const facilities = [
  {
    id: 'smart-classrooms',
    title: 'Smart Digital Classrooms',
    category: 'TECH-ENABLED LEARNING',
    tagline: 'Interactive panels, audio-visual lessons, and active concept visualization.',
    image: '/images/school/school-event-12.jpg',
    highlights: ['High-Definition Smart Boards', 'Digital Curriculum Visuals', 'Ergonomic Student Desks'],
  },
  {
    id: 'science-labs',
    title: 'Advanced Science & STEM Labs',
    category: 'EXPERIMENTAL DISCOVERY',
    tagline: 'Fully outfitted laboratories for chemistry reagents, optics, and biological specimens.',
    image: '/images/school/school-event-1.jpg',
    highlights: ['Individual Workstations', 'Safety Monitored Protocols', 'Annual Science Fair Models'],
  },
  {
    id: 'sports-arena',
    title: 'Sports Arena & Playground',
    category: 'ATHLETICS & FITNESS',
    tagline: 'Home of the renowned Valmeeki Premier League (VPL) and year-round sports coaching.',
    image: '/images/school/school-event-2.jpg',
    highlights: ['Cricket Pitch & Nets', 'Volleyball & Kho-Kho Courts', 'Athletics & Track Events'],
  },
  {
    id: 'auditorium',
    title: 'Grand Open-Air Auditorium',
    category: 'CULTURAL EXCELLENCE',
    tagline: 'The vibrant venue for Annual Day cultural spectacles, speeches, and student celebrations.',
    image: '/images/school/school-event-4.jpg',
    highlights: ['Professional Stage Lighting', 'State-Level Dance Recitals', 'Morning Moral Assemblies'],
  },
  {
    id: 'stem-expo',
    title: 'Innovation & Exhibition Hall',
    category: 'PRACTICAL INNOVATION',
    tagline: 'Dedicated space where students exhibit working prototypes and science projects.',
    image: '/images/school/school-event-9.jpg',
    highlights: ['Student Innovation Stalls', 'District Fair Winners', 'Interactive Demonstrations'],
  },
  {
    id: 'transport',
    title: 'Safe Fleet of School Buses',
    category: 'TRANSIT & SAFETY',
    tagline: 'Comprehensive bus transit connecting neighborhoods safely across Kadiri mandal.',
    image: '/images/school/school-event-6.jpg',
    highlights: ['GPS-Enabled Tracking', 'Trained Drivers & Attendants', 'Door-Step Designated Pickups'],
  },
];

export default function CampusPage() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero: High Visual Campus Presentation */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] transition-colors duration-200">
        {/* Campus Photo Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/school/school-event-4.jpg"
            alt="Sree Valmeeki Campus"
            fill
            priority
            className="object-cover opacity-15 dark:opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#050D1A] via-[#FDFBF7]/80 dark:via-[#050D1A]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus & World-Class Facilities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-[family-name:var(--font-heading)] leading-tight text-[#0A1628] dark:text-white mb-4"
          >
            A Space Designed for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
              Growth & Discovery.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal mb-8"
          >
            From modern science labs and digital smart boards to our vibrant sports arena — every inch of Sree Valmeeki inspires curiosity.
          </motion.p>

          {/* Quick CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 border border-[#0A1628] dark:border-[#FBBF24]"
            >
              <span>Schedule a Campus Visit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
            <a
              href="tel:+919440468838"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0A1628] dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 shadow-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white dark:bg-[#0A1628] border-y border-slate-200/80 dark:border-white/10 py-8 shadow-xs transition-colors duration-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {campusStats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl sm:text-4xl font-black text-[#B8860B] dark:text-[#FBBF24] font-[family-name:var(--font-heading)] block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid: Photographic Cards */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050D1A] transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase block mb-2">
              CAMPUS HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white leading-tight">
              Where Technology Meets Character.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-black/40">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {facility.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 bg-white dark:bg-[#0A1628]">
                    <h3 className="text-xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mb-2 group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                      {facility.tagline}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                      {facility.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 bg-white dark:bg-[#0A1628]">
                  <Link
                    href="/admissions"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-[#0A1628] dark:hover:bg-[#FBBF24] text-slate-700 dark:text-slate-200 hover:text-[#D4A853] dark:hover:text-[#0A1628] font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/10 hover:border-[#0A1628] dark:hover:border-[#FBBF24] transition-all"
                  >
                    <span>Tour this Facility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Climax Campus Banner */}
      <section className="py-20 bg-[#FDFBF7] dark:bg-[#050D1A] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-[0.25em] block mb-3">
              EXPERIENCE VALMEEKI IN PERSON
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white mb-4">
              Book Your Guided Campus Tour.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal">
              See the classrooms, meet the faculty, and discover how 27 years of educational heritage can shape your child&apos;s journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="px-8 py-3.5 rounded-full bg-[#0A1628] dark:bg-[#FBBF24] hover:bg-[#1E3A8A] dark:hover:bg-[#F59E0B] text-[#D4A853] dark:text-[#0A1628] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform hover:scale-105 border border-[#0A1628] dark:border-[#FBBF24]"
              >
                Enroll Now for 2026–27
              </Link>
              <a
                href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20would%20like%20to%20book%20a%20Campus%20Tour"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform hover:scale-105"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
