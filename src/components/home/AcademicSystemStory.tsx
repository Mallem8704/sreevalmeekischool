'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Award, MessageCircle, Shield } from 'lucide-react';
import Image from 'next/image';

const systems = [
  {
    num: '01',
    title: 'STRONG FOUNDATIONS',
    shortLine: 'Concept-first mastery from Nursery to Primary so no child struggles later.',
    image: '/images/school/school-event-12.jpg',
    icon: BookOpen,
  },
  {
    num: '02',
    title: 'EXPERIENCED FACULTY',
    shortLine: 'Mentors with up to 15+ years experience who know every student by name.',
    image: '/images/school/school-event-7.jpg',
    icon: Users,
  },
  {
    num: '03',
    title: 'IIT FOUNDATION',
    shortLine: 'Early analytical problem solving and competitive exam logic from Class 6.',
    image: '/images/school/school-event-9.jpg',
    icon: Target,
  },
  {
    num: '04',
    title: 'OLYMPIAD PREPARATION',
    shortLine: 'Science and Mathematics competitive training that goes far beyond textbooks.',
    image: '/images/school/school-event-1.jpg',
    icon: Award,
  },
  {
    num: '05',
    title: 'SPOKEN ENGLISH',
    shortLine: 'Daily stage assemblies, debate practice, and 100% spoken English immersion.',
    image: '/images/school/school-event-4.jpg',
    icon: MessageCircle,
  },
  {
    num: '06',
    title: 'DISCIPLINE & CONSISTENCY',
    shortLine: 'Character, moral values, and regular structured study routines.',
    image: '/images/school/school-event-11.jpg',
    icon: Shield,
  },
];

export default function AcademicSystemStory() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#050D1A] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[#D4A853] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            PEDAGOGY & METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-4">
            THE SYSTEM BEHIND THE RESULTS.
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto">
            Excellence is not an accident. It is engineered every day inside our classrooms.
          </p>
        </div>

        {/* 6 Visual Panels in Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {systems.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/10 hover:border-[#D4A853]/50 transition-all shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#050D1A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent opacity-90" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-9 h-9 rounded-xl bg-[#050D1A]/90 border border-white/15 flex items-center justify-center text-xs font-black text-[#D4A853] font-[family-name:var(--font-heading)]">
                    {item.num}
                  </span>
                </div>
              </div>

              {/* Minimal Text Area */}
              <div className="p-6 space-y-2 text-left">
                <div className="flex items-center gap-2 text-[#D4A853] mb-1">
                  <item.icon className="w-4 h-4" />
                  <span className="text-[11px] font-black uppercase tracking-wider">
                    Core Pillar
                  </span>
                </div>

                <h3 className="text-xl font-black text-white font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-medium">
                  {item.shortLine}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
