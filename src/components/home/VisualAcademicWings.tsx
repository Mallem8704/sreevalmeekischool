'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Target,
  Award,
  MessageCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface WingCard {
  title: string;
  theme: string;
  classes: string;
  image: string;
  href: string;
}

const academicWings: WingCard[] = [
  {
    title: 'Pre-Primary Wing',
    theme: 'Play • Explore • Grow',
    classes: 'Nursery • LKG • UKG',
    image: '/images/campus/yoga_assembly.jpg',
    href: '/academics',
  },
  {
    title: 'Primary Wing',
    theme: 'Build Strong Basics',
    classes: 'Class I – V',
    image: '/images/academic_systems/system_01_foundations.jpg',
    href: '/academics',
  },
  {
    title: 'Middle School & Techno Wing',
    theme: 'Concepts • Creativity • Technology',
    classes: 'Class VI – VIII',
    image: '/images/campus/science_lab_faculty.jpg',
    href: '/academics',
  },
  {
    title: 'High School Excellence Wing',
    theme: 'Academic Rigor • Career Readiness',
    classes: 'Class IX – X',
    image: '/images/campus/high_school_10th_block.jpg',
    href: '/academics',
  },
];

const specializedPillars = [
  {
    icon: Target,
    title: 'IIT Foundation',
    desc: 'Analytical math & physics problem-solving from Class 6.',
    href: '/academics/iit-foundation',
  },
  {
    icon: Award,
    title: 'Olympiad Preparation',
    desc: 'National & state competitive testing mindset.',
    href: '/academics',
  },
  {
    icon: MessageCircle,
    title: 'Spoken English',
    desc: 'Daily assembly speaking & 100% English communication.',
    href: '/academics',
  },
];

export default function VisualAcademicWings() {
  return (
    <section id="academics" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#06172A] text-[#0A1C31] dark:text-white transition-colors duration-200 border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & CTA matching Reference Screenshot */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left lg:sticky lg:top-28">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
              OUR PROGRAMS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight text-[#0A1C31] dark:text-white">
              Academic <br />
              <span className="text-[#0A1C31] dark:text-white">Wings</span>
            </h2>

            <p className="text-sm sm:text-base text-[#69778A] dark:text-slate-300 font-medium leading-relaxed max-w-sm">
              A structured learning journey for every stage of a child&apos;s growth.
            </p>

            <div className="pt-2">
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Big Visual Cards + 3 Mini Badges */}
          <div className="lg:col-span-8 space-y-6">
            {/* 4 Big Visual Wing Cards matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {academicWings.map((wing, idx) => (
                <motion.div
                  key={wing.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#F8F5EE] dark:bg-[#03101E] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <Link href={wing.href} className="block w-full h-full flex flex-col">
                    {/* Top Image: Occupies 55-60% of card */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <Image
                        src={wing.image}
                        alt={wing.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-4 flex flex-col justify-between flex-1 text-left space-y-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-black text-[#0A1C31] dark:text-white font-[family-name:var(--font-heading)] leading-snug group-hover:text-[#D8A53C] transition-colors">
                          {wing.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-[#69778A] dark:text-slate-400 mt-0.5">
                          {wing.theme}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#D8A53C] uppercase tracking-wider">
                          {wing.classes}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-[#D8A53C]/15 group-hover:bg-[#D8A53C] text-[#D8A53C] group-hover:text-[#03101E] flex items-center justify-center transition-colors">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* 3 Specialized Mini Badges (IIT, Olympiad, Spoken English) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {specializedPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={pillar.title}
                    href={pillar.href}
                    className="p-3.5 rounded-xl bg-[#F8F5EE] dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-[#D8A53C]/40 hover:shadow-md transition-all flex items-center gap-3 text-left group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-white/10 text-[#D8A53C] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#D8A53C] group-hover:text-[#03101E] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-black text-[#0A1C31] dark:text-white tracking-tight group-hover:text-[#D8A53C] transition-colors">
                        {pillar.title}
                      </span>
                      <span className="text-[10px] text-[#69778A] dark:text-slate-400 truncate">
                        {pillar.desc}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
