'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const parentVoices = [
  {
    quote: '“Valmeeki gave our daughter not just top board marks, but unmatched stage speaking confidence.”',
    parent: 'K. Venkat Rao',
    child: 'Parent of Class 10 Distinction Scholar',
  },
  {
    quote: '“The teachers know each student personally. The balance of discipline and kindness is rare.”',
    parent: 'Dr. M. Sreenivasulu',
    child: 'Parent of Class 8 & Class 4 Students',
  },
  {
    quote: '“From Nursery to Class 10, both my sons grew with strong values and early IIT competitive edge.”',
    parent: 'P. Anjaneyulu',
    child: 'Alumni Parent & Kadiri Resident',
  },
];

export default function ParentTrustAndLeadership() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">
        {/* Part A: Parent Trust - 3 Punchy Voice Cards */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-[0.25em] uppercase block mb-3">
              PARENT TESTIMONY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-2">
              TRUST BUILT OVER GENERATIONS.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Why families across Kadiri have entrusted their children to Sree Valmeeki for over 27 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentVoices.map((item, idx) => (
              <motion.div
                key={item.parent}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl"
              >
                <div className="space-y-4 mb-6">
                  <Quote className="w-8 h-8 text-[#D4A853]" />
                  <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                  <h3 className="text-sm font-bold text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                    {item.parent}
                  </h3>
                  <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold">{item.child}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part B: Leadership - Director Mr. P. Pavan Kumar Reddy */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200/90 dark:border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-none overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Director Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D4A853]/40 bg-slate-100 dark:bg-slate-900 shadow-xl">
                <Image
                  src="/extracted/leadership/director_pavan_reddy_portrait.jpg"
                  alt="Dr. P.V Pavan Kumar Reddy - Director"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider mb-1">
                    Director & Leadership
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)]">
                    Dr. P.V Pavan Kumar Reddy
                  </h3>
                  <p className="text-xs text-white/90">Director • A.P Private School Association Working President</p>
                </div>
              </div>
            </div>

            {/* Director 2-Line Punchy Statement & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEADERSHIP VISION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] uppercase text-[#0A1628] dark:text-white leading-tight">
                A VISION FOCUSED ON EVERY CHILD.
              </h3>

              <blockquote className="border-l-4 border-[#D4A853] pl-6 italic text-[#0A1628] dark:text-slate-100 text-base sm:text-xl font-medium leading-relaxed font-[family-name:var(--font-heading)]">
                “Education should not only prepare children for examinations, but help them develop confidence, discipline, curiosity and character.”
              </blockquote>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
                Guiding students from their earliest formative steps in Nursery all the way to state board distinction and future competitive readiness.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] hover:bg-[#1E3A8A] dark:hover:bg-[#E8C97D] text-white dark:text-[#0A1628] font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#0A1628] dark:border-[#D4A853] transition-all cursor-pointer group shadow-md"
                >
                  <span>Our Story & Philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D4A853] dark:text-[#0A1628]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
