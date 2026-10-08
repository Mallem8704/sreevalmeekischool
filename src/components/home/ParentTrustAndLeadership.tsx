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
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#050D1A] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">
        {/* Part A: Parent Trust - 3 Punchy Voice Cards */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#D4A853] text-xs font-black tracking-[0.25em] uppercase block mb-3">
              PARENT TESTIMONY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-2">
              TRUST BUILT OVER GENERATIONS.
            </h2>
            <p className="text-white/70 text-xs sm:text-sm">
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
                className="p-6 sm:p-8 rounded-3xl bg-[#0A1628] border border-white/10 flex flex-col justify-between hover:border-[#D4A853]/40 transition-all shadow-xl"
              >
                <div className="space-y-4 mb-6">
                  <Quote className="w-8 h-8 text-[#D4A853]/50" />
                  <p className="text-sm sm:text-base font-medium text-white/90 italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                    {item.parent}
                  </h3>
                  <p className="text-xs text-[#D4A853] font-semibold">{item.child}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part B: Leadership - Director Mr. P. Pavan Kumar Reddy */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1628] to-[#0F2044] border border-[#D4A853]/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Director Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D4A853]/40 bg-[#050D1A] shadow-2xl">
                <Image
                  src="/extracted/leadership/director_pavan_reddy_portrait.jpg"
                  alt="Dr. P.V Pavan Kumar Reddy - Director"
                  fill
                  className="object-cover object-top brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#D4A853] text-[#050D1A] text-[10px] font-black uppercase tracking-wider mb-1">
                    Director & Leadership
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)]">
                    Dr. P.V Pavan Kumar Reddy
                  </h3>
                  <p className="text-xs text-white/80">Director • A.P Private School Association Working President</p>
                </div>
              </div>
            </div>

            {/* Director 2-Line Punchy Statement & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A853] text-[11px] font-black tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEADERSHIP VISION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-[family-name:var(--font-heading)] uppercase text-white leading-tight">
                A VISION FOCUSED ON EVERY CHILD.
              </h3>

              <blockquote className="border-l-4 border-[#D4A853] pl-6 italic text-white/90 text-base sm:text-xl font-medium leading-relaxed font-[family-name:var(--font-heading)]">
                “Education should not only prepare children for examinations, but help them develop confidence, discipline, curiosity and character.”
              </blockquote>

              <p className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                Guiding students from their earliest formative steps in Nursery all the way to state board distinction and future competitive readiness.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-[#D4A853] text-white hover:text-[#050D1A] font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/20 transition-all cursor-pointer group"
                >
                  <span>Our Story & Philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
