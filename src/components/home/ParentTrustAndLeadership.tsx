'use client';

import { motion } from 'framer-motion';
import { Quote, HeartHandshake, CheckCircle2 } from 'lucide-react';

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
    <section className="relative w-full py-20 sm:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Parent Trust - 3 Punchy Voice Cards */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-[0.25em] uppercase block mb-3">
              PARENT TESTIMONY & TRUST
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-2">
              TRUST BUILT OVER GENERATIONS.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Why families across Kadiri have entrusted their children to Sree Valmeeki for over 28 years. Genuine parental care, individual attention, and lifelong values.
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

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                      {item.parent}
                    </h3>
                    <p className="text-xs text-[#B8860B] dark:text-[#FBBF24] font-semibold">{item.child}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
