'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface Slide {
  id: string;
  pill: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  highlights: string[];
}

const slides: Slide[] = [
  {
    id: 'learn',
    pill: 'LEARN',
    title: 'Master the Fundamentals',
    subtitle: 'Nurturing Students to Learn with Curiosity & Deep Conceptual Clarity',
    tagline: 'Strong English medium foundation paired with analytical rigor from kindergarten to Class 10.',
    image: '/images/school/school-event-9.jpg',
    highlights: [
      'Early Phonics & English Communication Fluency',
      'Integrated IIT & Olympiad Foundation (Classes 6–10)',
      '100% Individual Attention & Personalized Mentoring',
    ],
  },
  {
    id: 'explore',
    pill: 'EXPLORE',
    title: 'Discover Beyond Books',
    subtitle: 'Nurturing Students to Explore Science, Technology & Innovation',
    tagline: 'Practical laboratory experiments and annual science exhibitions sparking scientific inquiry.',
    image: '/images/school/school-event-1.jpg',
    highlights: [
      'Modern Physics, Chemistry & Biology Laboratories',
      'Annual Science Exhibition with Working Prototypes',
      'Interactive Digital Classrooms & Computer Literacy',
    ],
  },
  {
    id: 'express',
    pill: 'EXPRESS',
    title: 'Confidence on Every Stage',
    subtitle: 'Nurturing Students to Express Themselves with Artistry & Eloquence',
    tagline: 'Grand Annual Day celebrations, classical dance, drama, and public speaking platforms.',
    image: '/images/school/school-event-4.jpg',
    highlights: [
      'State-Level Annual Day Dance & Music Performances',
      'Inter-School Debates, Elocution & Creative Writing',
      'Fearless Stage Presence & Personality Grooming',
    ],
  },
  {
    id: 'achieve',
    pill: 'ACHIEVE',
    title: 'Tradition of Victory',
    subtitle: 'Nurturing Students to Achieve Top Academic Ranks & Sports Trophies',
    tagline: 'A proud 27-year record of 100% SSC board examination results and athletic triumphs.',
    image: '/images/school/school-event-2.jpg',
    highlights: [
      'Consistently 100% Pass in Andhra Pradesh SSC Board',
      'Valmeeki Premier League (VPL) Cricket Championship',
      'District & State Olympiad Gold & Silver Medals',
    ],
  },
  {
    id: 'grow',
    pill: 'GROW',
    title: 'Character & Values',
    subtitle: 'Nurturing Students to Grow into Ethical Leaders of Tomorrow',
    tagline: 'Rooted in timeless Indian values, discipline, social empathy, and community leadership.',
    image: '/images/school/school-event-12.jpg',
    highlights: [
      'Value-Based Education & Morning Moral Assemblies',
      'Discipline, Integrity & Civic Responsibility',
      '27 Years of Trusted Community Heritage in Kadiri',
    ],
  },
];

export default function FoundationShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = slides[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="foundation"
      className="relative py-20 sm:py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero Part 2 • The Valmeeki Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-heading)] leading-tight text-white mb-4">
            Building Strong Foundations.{' '}
            <span className="block bg-gradient-to-r from-[#FBBF24] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
              Creating Brighter Futures.
            </span>
          </h2>

          <p className="text-lg sm:text-2xl font-bold text-white/80 tracking-wide font-[family-name:var(--font-heading)]">
            Nurturing Students to:
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {slides.map((s, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#FBBF24] text-[#0A1628] shadow-lg shadow-[#FBBF24]/30 scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                {s.pill}
              </button>
            );
          })}
        </div>

        {/* Premium Slide Card */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Visual Story */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] w-full overflow-hidden group">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent lg:hidden" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-xs font-black tracking-widest uppercase">
                  {current.pill} • SREE VALMEEKI
                </div>
              </div>

              {/* Right Column: Key Takeaways */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[#FBBF24] text-xs font-black uppercase tracking-widest block mb-2">
                    {current.pill} CHAPTER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-white mb-3 leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                    {current.tagline}
                  </p>

                  <div className="space-y-3 mb-8">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-white/90 font-medium">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Actions & Slide Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-black text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono font-bold text-white/60">
                      0{activeIdx + 1} / 0{slides.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
