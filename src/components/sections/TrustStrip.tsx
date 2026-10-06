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
    <section className="bg-[#FAFAF7] border-b border-[#0A1628]/10 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-[#D4A853]/30">
          {trustStripData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-[#64748B] text-xs font-bold tracking-widest uppercase mb-2 font-[family-name:var(--font-body)]">
                {item.label}
              </span>
              <span className="text-[#1A1A2E] text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
