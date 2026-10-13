'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  FlaskConical,
  BookOpen,
  Trophy,
  Bus,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FacilityTile {
  title: string;
  icon: typeof Monitor;
  image: string;
  href: string;
}

const facilityTiles: FacilityTile[] = [
  {
    title: 'Smart Classrooms',
    icon: Monitor,
    image: '/images/campus/smart_learning_panel.jpg',
    href: '/campus',
  },
  {
    title: 'Science & Computer Labs',
    icon: FlaskConical,
    image: '/images/campus/science_lab_faculty.jpg',
    href: '/campus',
  },
  {
    title: 'Library & Reading Space',
    icon: BookOpen,
    image: '/images/learning/step_01_understand.jpg',
    href: '/campus',
  },
  {
    title: 'Sports & Play Grounds',
    icon: Trophy,
    image: '/images/campus/sports_cricket_ground.jpg',
    href: '/campus',
  },
  {
    title: 'Transport Facility',
    icon: Bus,
    image: '/images/campus/transport_fleet_buses.jpg',
    href: '/campus',
  },
  {
    title: 'Student Activities',
    icon: Sparkles,
    image: '/images/activities/annual_day_stage_performance_pyramid.jpg',
    href: '/campus',
  },
];

export default function VisualCampusExperience() {
  return (
    <section id="campus" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F8F5EE] dark:bg-[#03101E] text-[#0A1C31] dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & CTA matching Reference Screenshot */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left lg:sticky lg:top-28">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
              CAMPUS EXPERIENCE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight text-[#0A1C31] dark:text-white">
              A Campus <br />
              <span className="text-[#0A1C31] dark:text-white">That Inspires</span>
            </h2>

            <p className="text-sm sm:text-base text-[#69778A] dark:text-slate-300 font-medium leading-relaxed max-w-sm">
              Modern facilities. A safe environment. A happy place to learn and grow.
            </p>

            <div className="pt-2">
              <Link
                href="/campus"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Take a Virtual Tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Large Image Tiles (2 rows x 3 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilityTiles.map((tile, idx) => {
                const Icon = tile.icon;
                return (
                  <motion.div
                    key={tile.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                  >
                    <Link href={tile.href} className="block w-full h-full relative">
                      {/* Image Layer */}
                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Dark Scrim Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03101E]/90 via-[#03101E]/30 to-transparent group-hover:from-[#03101E]/95 transition-colors" />

                      {/* In-Image Overlay: Gold Icon + Title + Arrow */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-[#D8A53C]/20 border border-[#D8A53C]/40 backdrop-blur-md flex items-center justify-center shrink-0 text-[#F0C66A]">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold tracking-tight truncate drop-shadow-md">
                            {tile.title}
                          </span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#D8A53C] group-hover:text-[#03101E] text-white flex items-center justify-center transition-colors shrink-0 ml-1">
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
