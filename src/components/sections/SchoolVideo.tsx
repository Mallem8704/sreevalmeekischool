'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck, Sparkles, Monitor, GraduationCap, Trophy, Bus, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';

const campusFeatures = [
  {
    icon: Monitor,
    title: 'Smart Digital Classrooms',
    desc: 'Interactive audio-visual panels & experiential multimedia learning for all grades.',
  },
  {
    icon: GraduationCap,
    title: 'IIT & Olympiad Foundation',
    desc: 'Specialized competitive coaching integrated into the curriculum from Class 6 onwards.',
  },
  {
    icon: BookOpen,
    title: 'Daily Spoken English Mastery',
    desc: 'Immersive fluency programs nurturing articulate communicators and public speakers.',
  },
  {
    icon: Trophy,
    title: 'VPL & Sports Infrastructure',
    desc: 'Home of the Valmeeki Premier League with cricket nets, athletics track, and volleyball.',
  },
  {
    icon: Bus,
    title: 'Safe GPS-Tracked Transport',
    desc: 'Extensive school bus fleet covering Kadiri town and all surrounding mandals safely.',
  },
  {
    icon: Award,
    title: '27 Years of Board Excellence',
    desc: 'Consistent 100% SSC board examination pass records with top mandal rankings.',
  },
];

export default function SchoolVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="campus-tour" className="relative py-24 bg-[#0A1628] text-white overflow-hidden scroll-mt-20 border-t border-[#D4A853]/20">
      <div id="gallery" className="scroll-mt-24" />
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0E1E38] to-[#152B52] opacity-95" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4A853]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            <span className="text-xs font-bold tracking-widest text-[#D4A853] uppercase font-[family-name:var(--font-body)]">
              Immersive Campus Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4"
          >
            Experience Life Inside <span className="text-[#D4A853]">Sree Valmeeki</span>
          </motion.h2>

          <p className="text-white/75 text-base sm:text-lg font-[family-name:var(--font-body)] leading-relaxed">
            Take a virtual tour through our classrooms, labs, sports fields, and celebration halls. Discover why over 1,000 families in Kadiri trust us for their children’s future.
          </p>
        </div>

        {/* Video Player Card Showcase with High Visibility & Play Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md mb-20 group"
        >
          {/* Video Container / Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            {/* Background preview video playing silently in a loop for dynamic preview */}
            <video
              src="/hero-video.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />

            {/* Dark & Golden Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_30%,_rgba(10,22,40,0.7)_100%] pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2.5 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md text-[#D4A853] text-xs font-bold uppercase tracking-wider border border-[#D4A853]/40 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Campus Video Tour
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                Kadiri, Sri Sathya Sai Dist.
              </span>
            </div>

            {/* Duration Tag */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono border border-white/10">
                HD Walkthrough
              </span>
            </div>

            {/* Center Play Overlay Trigger Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play School Video Tour"
                className="group/btn relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-4 rounded-full bg-[#D4A853]/30 blur-xl animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-[#D4A853]/60 animate-ping opacity-60" />

                {/* Primary Button Core */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#D4A853] via-[#FCE49E] to-[#B8860B] flex items-center justify-center text-[#0A1628] shadow-[0_0_35px_rgba(212,168,83,0.6)]">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-[#0A1628] fill-current" />
                </div>
              </button>

              <div className="mt-4 text-center pointer-events-none">
                <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-md block">
                  Click to Watch Campus Tour
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-[family-name:var(--font-body)] mt-0.5 block">
                  Experience classrooms, sports ground, cultural halls, and labs
                </span>
              </div>
            </div>

            {/* Bottom Info Strip inside Video Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-center justify-between gap-3 z-20 pointer-events-none">
              <div className="text-xs sm:text-sm text-white/80 font-medium text-center sm:text-left">
                “Education • Discipline • Confidence” — Celebrating 27 Years (Est. 1999)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#D4A853] font-bold">
                  Admissions Open 2026–27
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features List Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
              Why Parents Choose Sree Valmeeki
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Holistic growth rooted in sound values, modern infrastructure, and proven academic rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4A853]/40 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A853]/20 to-[#D4A853]/5 border border-[#D4A853]/30 flex items-center justify-center shrink-0 text-[#D4A853] group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:text-[#0A1628] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-white text-base group-hover:text-[#D4A853] transition-colors mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-[family-name:var(--font-body)]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call-to-Action Card to Book a Campus Visit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#122448] via-[#1A3468] to-[#122448] border-2 border-[#D4A853]/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A853]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/20 text-[#D4A853] text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>Visit Us in Person</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
                Experience Our Campus With Your Child
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-body)]">
                We invite prospective parents to tour our smart classrooms, interact with our faculty, review our IIT foundation curriculum, and see our students in action.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Book Campus Visit</span>
                <ArrowRight className="w-4 h-4 text-[#0A1628]" />
              </a>

              <a
                href="tel:+919440468838"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4A853]" />
                <span>+91 94404 68838</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-md p-4 sm:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(false)}
                className="px-4 py-2 rounded-full bg-white/15 text-white hover:text-[#D4A853] hover:bg-white/25 transition-all text-xs tracking-wider uppercase font-bold flex items-center gap-2 cursor-pointer"
                aria-label="Close video"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-[#D4A853]/40 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/hero-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

