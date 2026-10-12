'use client'

import { motion } from 'framer-motion'
// import { trustStripData } from '@/lib/data' // Optional import based on structure

const trustStripData = [
  { label: 'EST.', value: '1999' },
  { label: 'MEDIUM', value: 'English' },
  { label: 'CLASSES', value: 'Nursery – X' },
  { label: 'CURRICULUM', value: 'SSC' },
  { label: 'LOCATION', value: 'Kadiri' },
]

export default function TrustStrip() {
  return (
    <section className="bg-[#FDFBF7] dark:bg-[#0A1628] border-b border-slate-200 dark:border-white/10 py-6 sm:py-8 lg:py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-white/10">
          {trustStripData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center px-4 group"
            >
              <span className="text-[#B8860B] dark:text-[#FBBF24] text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase mb-1.5 font-[family-name:var(--font-body)]">
                {item.label}
              </span>
              <span className="text-[#0A1628] dark:text-white text-xl sm:text-2xl lg:text-3xl font-black font-[family-name:var(--font-heading)] group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
