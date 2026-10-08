'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bus,
  ShieldCheck,
  Navigation,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface TransportShowcaseProps {
  onOpenAdmissions?: () => void;
}

const transportImages = [
  {
    id: 'fleet',
    title: 'School Bus Fleet',
    subtitle: 'Full lineup of well-maintained yellow buses inside the campus bay.',
    image: '/images/campus/transport_fleet_buses.jpg',
  },
  {
    id: 'angle',
    title: 'Modern Transport Wing',
    subtitle: 'Spacious buses with high-visibility safety livery and certified emergency exits.',
    image: '/images/campus/transport_buses_angle.jpg',
  },
  {
    id: 'poster',
    title: 'Dedicated Bus Facility',
    subtitle: 'Daily scheduled transit engineered for punctuality and zero student fatigue.',
    image: '/images/campus/poster_school_bus.jpg',
  },
];

const transportFeatures = [
  {
    icon: Navigation,
    title: 'GPS-Monitored Routes',
    description: 'Every vehicle is mapped with live GPS tracking, strict route adherence, and speed governor limits for total child safety.',
  },
  {
    icon: ShieldCheck,
    title: 'Trained & Vetted Drivers',
    description: 'Senior drivers with verified credentials, routine fitness evaluations, and decades of navigating Kadiri terrain.',
  },
  {
    icon: Users,
    title: 'Supervised Boarding',
    description: 'Dedicated attendants guide student boarding and deboarding, seat belts, and disciplined transit conduct every single day.',
  },
  {
    icon: MapPin,
    title: 'Extensive Rural & Town Connectivity',
    description: 'Connecting inner Kadiri residential colonies, Clock Tower, Railway Station, and key mandal villages with seamless door-to-school service.',
  },
];

const coveredAreas = [
  'Kadiri Town Central',
  'Clock Tower & Market',
  'Housing Board Colony',
  'Bypass Road',
  'N.P. Kunta Mandal Route',
  'Mudigubba Road',
  'Tanakallu Direction',
  'Talupula Junctions',
  'Gandlapenta Belt',
];

export default function TransportShowcase({ onOpenAdmissions }: TransportShowcaseProps) {
  const [activePhoto, setActivePhoto] = useState(transportImages[0]);

  const handleCtaClick = () => {
    if (onOpenAdmissions) {
      onOpenAdmissions();
    } else {
      window.location.href = '/contact#transport';
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-3"
          >
            <Bus className="w-3.5 h-3.5 text-[#D4A853]" />
            SAFE & CONVENIENT TRANSIT ACROSS KADIRI & MANDALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            THE SCHOOL DAY STARTS BEFORE THE CLASSROOM.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto"
          >
            Safe, comfortable, and punctual school transit ensures your child arrives energized, secure, and ready to learn.
          </motion.p>
        </div>

        {/* Visual Showcase & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Image Gallery Canvas (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-900 shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activePhoto.image}
                      alt={activePhoto.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Badge top left */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5" />
                    Official Fleet
                  </span>
                </div>

                {/* Bottom text inside photo */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 text-white">
                  <h3 className="text-lg sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white">
                    {activePhoto.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-200 font-medium">
                    {activePhoto.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-3 gap-3">
              {transportImages.map((item) => {
                const isSelected = activePhoto.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePhoto(item)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-[#D4A853] ring-2 ring-[#D4A853]/40 scale-102 shadow-lg'
                        : 'border-slate-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-slate-400'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" />
                    <span className="absolute bottom-1.5 left-2 right-2 text-[10px] sm:text-xs font-bold text-white truncate drop-shadow">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mandal Connectivity Tag Cloud */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] dark:bg-[#070F1E] border border-slate-200/80 dark:border-white/10">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#B8860B] dark:text-[#FBBF24] block mb-3">
                EXTENSIVE COVERAGE NETWORK
              </span>
              <div className="flex flex-wrap gap-2">
                {coveredAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-white/10 shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-[#D4A853]" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights & CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {transportFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-none hover:border-[#D4A853]/50 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#D4A853]/10 dark:bg-[#D4A853]/20 flex items-center justify-center text-[#B8860B] dark:text-[#FBBF24] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Prominent CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F2044] via-[#0A1628] to-[#070F1E] text-white border border-[#D4A853]/30 shadow-2xl relative overflow-hidden"
            >
              {/* Gold decorative corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A853]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#FBBF24] text-xs font-black uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMMUTE ASSISTANCE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-2">
                  NEED A PICKUP NEAR YOUR HOME?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  We customize pickup and drop points for new admissions across Kadiri and neighboring villages.
                </p>

                <button
                  onClick={handleCtaClick}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-black uppercase text-xs sm:text-sm tracking-widest bg-gradient-to-r from-[#D4A853] to-[#C49A3C] hover:from-[#E5BC64] hover:to-[#D4A853] text-[#0A1628] shadow-lg shadow-[#D4A853]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>ASK ABOUT YOUR ROUTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
