'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Maximize2,
  Trees,
  Bus,
  ShieldCheck,
  MapPin,
  Camera,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AerialView {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  coordinates: string;
  badge: string;
}

const aerialViews: AerialView[] = [
  {
    id: 'academic',
    name: 'ACADEMIC TECHNO CAMPUS',
    subtitle: 'Main multi-story block, administrative wing, bus depot, and shaded courtyard.',
    image: '/images/campus/campus_drone_aerial.jpg',
    coordinates: '14°10\'33"N 78°09\'42"E',
    badge: 'Main Academic Wing',
  },
  {
    id: 'sports',
    name: 'ATHLETIC PLAYGROUND GROUNDS',
    subtitle: 'Expansive open-air sports arena for cricket, yoga, track events, and annual sports days.',
    image: '/images/campus/playground_drone_aerial.jpg',
    coordinates: '14°10\'36"N 78°09\'48"E',
    badge: 'Multi-Acre Sports Arena',
  },
];

const keyStats = [
  {
    value: 'MULTI-ACRE',
    label: 'CAMPUS EXPANSE',
    subtext: 'Lush green layout free from congested commercial town traffic.',
    icon: Trees,
  },
  {
    value: '10+',
    label: 'SCHOOL BUSES',
    subtext: 'Dedicated transport fleet parked and boarded inside secure campus gates.',
    icon: Bus,
  },
  {
    value: '100+',
    label: 'TREES & GREENERY',
    subtext: 'Natural shade trees creating an oxygen-rich, cool microclimate.',
    icon: Sparkles,
  },
  {
    value: 'SAFE & GATED',
    label: 'SECURED PERIMETER',
    subtext: 'Controlled entrance, CCTV surveillance, and dedicated security guards.',
    icon: ShieldCheck,
  },
];

export default function CampusAerialSection() {
  const [activeView, setActiveView] = useState<AerialView>(aerialViews[0]);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4A853]" />
            AN EXPANSIVE GREEN HAVEN IN KADIRI
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            FROM ABOVE, 28 YEARS OF STORIES.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto"
          >
            A high-resolution aerial glimpse of Sree Valmeeki High School — where sprawling grounds, academic blocks, and quiet natural surroundings unite.
          </motion.p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {aerialViews.map((view) => {
            const isActive = activeView.id === view.id;
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0A1628] text-white dark:bg-[#D4A853] dark:text-[#0A1628] shadow-lg shadow-[#D4A853]/10 scale-102 ring-2 ring-[#D4A853]/50'
                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                <Camera className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4A853] dark:text-[#0A1628]' : 'text-slate-400'}`} />
                {view.name}
              </button>
            );
          })}
        </div>

        {/* Hero Drone Canvas Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-300/80 dark:border-white/15 bg-slate-900 shadow-2xl group">
          {/* Main Drone Image with AnimatePresence */}
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeView.image}
                  alt={activeView.name}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover group-hover:scale-104 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </AnimatePresence>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

            {/* Drone HUD / Viewfinder Graphics */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-3 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>DRONE PERSPECTIVE</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[11px] font-mono">
                <MapPin className="w-3 h-3" />
                <span>{activeView.coordinates}</span>
              </div>
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
              <span className="px-3 py-1.5 rounded-lg bg-[#D4A853]/90 backdrop-blur-md text-[#0A1628] text-[11px] font-black uppercase tracking-widest shadow-md">
                {activeView.badge}
              </span>
            </div>

            {/* Viewfinder crosshair corners */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#D4A853]/70 pointer-events-none hidden md:block" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#D4A853]/70 pointer-events-none hidden md:block" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#D4A853]/70 pointer-events-none hidden md:block" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#D4A853]/70 pointer-events-none hidden md:block" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#FBBF24] text-xs font-black uppercase tracking-widest mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SREE VALMEEKI HIGH SCHOOL, KADIRI</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white drop-shadow-md">
                  {activeView.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200 font-medium drop-shadow">
                  {activeView.subtitle}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-[11px] font-mono text-slate-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                <Compass className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>KADIRI TOWN SURROUNDINGS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Strip Overlay */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-xl hover:border-[#D4A853]/50 dark:hover:border-[#D4A853]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#D4A853]/10 dark:bg-[#D4A853]/20 flex items-center justify-center text-[#B8860B] dark:text-[#FBBF24]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0A1628] dark:text-white mb-1.5 font-[family-name:var(--font-heading)]">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {stat.subtext}
                </p>

                {/* Bottom accent indicator */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent group-hover:via-[#D4A853] transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
