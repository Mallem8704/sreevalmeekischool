'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Trophy,
  MapPin,
} from 'lucide-react';

interface TrustItem {
  icon: typeof BookOpen;
  title: string;
  subtitle: string;
}

const trustItems: TrustItem[] = [
  {
    icon: BookOpen,
    title: 'English Medium',
    subtitle: 'Global Learning Exposure',
  },
  {
    icon: GraduationCap,
    title: 'Nursery – Class X',
    subtitle: 'Complete Schooling',
  },
  {
    icon: ShieldCheck,
    title: 'AP State Board',
    subtitle: 'Recognised & Trusted',
  },
  {
    icon: Trophy,
    title: 'IIT Foundation',
    subtitle: 'Strengthening Future Readiness',
  },
  {
    icon: MapPin,
    title: 'Kadiri Campus',
    subtitle: 'Safe, Green & Sacred Roots',
  },
];

export default function VisualTrustStrip() {
  return (
    <div className="relative z-20 w-full bg-[#FDFCF9] dark:bg-[#06172A] border-b border-slate-200/80 dark:border-white/10 shadow-[0_4px_25px_rgba(9,30,52,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        {/* Horizontal 5-Column Grid matching reference screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-white/10">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-center gap-3.5 pt-3 md:pt-0 ${
                  index !== 0 ? 'md:pl-6 lg:pl-8' : ''
                } ${index === 4 ? 'col-span-2 md:col-span-1 justify-center md:justify-start' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8F5EE] dark:bg-white/10 border border-[#D8A53C]/30 flex items-center justify-center shrink-0 text-[#D8A53C] shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-xs sm:text-sm font-black text-[#0A1C31] dark:text-white tracking-tight truncate">
                    {item.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#69778A] dark:text-slate-400 truncate">
                    {item.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
