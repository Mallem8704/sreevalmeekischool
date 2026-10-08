'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Sparkles, Trophy } from 'lucide-react';

interface StatementItem {
  number: string;
  prefix: string;
  highlight: string;
  tagline: string;
  icon: typeof BookOpen;
}

const statements: StatementItem[] = [
  {
    number: '01',
    prefix: 'SPACES TO ',
    highlight: 'LEARN.',
    tagline: 'Well-ventilated, daylight-filled classrooms equipped with interactive 4K smart panels and ergonomic student seating.',
    icon: BookOpen,
  },
  {
    number: '02',
    prefix: 'SPACES TO ',
    highlight: 'THINK.',
    tagline: 'Curiosity-driven science labs, competitive Olympiad study wings, and quiet analytical problem-solving chambers.',
    icon: Brain,
  },
  {
    number: '03',
    prefix: 'SPACES TO ',
    highlight: 'GROW.',
    tagline: 'Shady neem tree courtyards, morning mass yoga sessions, and multi-acre athletic sports grounds under open skies.',
    icon: Sparkles,
  },
  {
    number: '04',
    prefix: 'SPACES TO ',
    highlight: 'ACHIEVE.',
    tagline: 'Dedicated 10th Class SSC board excellence wing where town 1st ranks, 595/600 scores, and 28-year legacies are molded.',
    icon: Trophy,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SpacesThatSupportSuccess() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#FAFAF7] dark:bg-[#070F1E] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4A853]/5 dark:bg-[#D4A853]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A162808_1px,transparent_1px),linear-gradient(to_bottom,#0A162808_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pre-heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 dark:bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-[0.25em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            SPACES THAT SUPPORT SUCCESS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white"
          >
            WHERE ENVIRONMENT SHAPES EXCELLENCE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Every square foot of Sree Valmeeki is designed with purpose — quiet, green, and structured for daily academic focus.
          </motion.p>
        </div>

        {/* Immersive Statement Sequence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
        >
          {statements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#0A1628]/80 backdrop-blur-md border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-xl hover:border-[#D4A853]/50 dark:hover:border-[#D4A853]/60 transition-all duration-300 overflow-hidden"
              >
                {/* Active ambient glow on card hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4A853]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-[#D4A853] via-[#C49A3C] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  {/* Left: Index & Giant Typography */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="shrink-0 text-xs sm:text-sm font-black font-mono tracking-widest text-[#B8860B] dark:text-[#FBBF24] px-2.5 py-1 rounded-md bg-[#D4A853]/10 dark:bg-[#D4A853]/20 border border-[#D4A853]/30">
                      {item.number}
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 items-center justify-center text-[#1E3A8A] dark:text-[#D4A853] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white leading-none">
                        <span>{item.prefix}</span>
                        <span className="text-[#B8860B] dark:text-[#FBBF24] drop-shadow-sm group-hover:underline underline-offset-8 decoration-[#D4A853]/40">
                          {item.highlight}
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Right: Explanatory Tagline */}
                  <p className="lg:max-w-md text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium pl-10 sm:pl-0">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom subtle divider line */}
        <div className="mt-16 sm:mt-24 max-w-xl mx-auto flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A853]/40 to-transparent" />
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#B8860B] dark:text-[#FBBF24]">
            KADIRI • ESTD 1999
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#D4A853]/40 via-[#D4A853]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
