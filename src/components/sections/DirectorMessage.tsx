'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote } from 'lucide-react'

import Image from 'next/image'

export default function DirectorMessage() {
  return (
    <section className="bg-white dark:bg-[#050D1A] py-24 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white"
          >
            A Vision Focused On Every Child
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto bg-[#FAFAF7] dark:bg-[#0A1628] rounded-2xl p-8 md:p-12 lg:p-16 relative shadow-lg border border-[#0A1628]/5 dark:border-white/10">
          <Quote className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 text-[#D4A853]/20 rotate-180" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#D4A853] shadow-xl overflow-hidden bg-[#0F2044]">
                <Image
                  src="/images/leadership/mr_pavan_kumar_reddy_director_square.png"
                  alt="Mr. Pavan Kumar Reddy - Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#D4A853] rounded-full flex items-center justify-center border-2 border-white shadow-md">
                <Quote className="w-4 h-4 text-[#0A1628]" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <blockquote className="text-xl md:text-3xl text-[#1A1A2E] dark:text-white font-[family-name:var(--font-heading)] italic leading-relaxed mb-6">
                &ldquo;Education is the most powerful tool to transform lives, empower communities, and build a brighter future.&rdquo;
              </blockquote>
              
              <div className="mb-8">
                <div className="w-16 h-px bg-[#D4A853] mb-4 mx-auto md:mx-0" />
                <h4 className="text-lg font-bold text-[#0F2044] dark:text-white font-[family-name:var(--font-body)]">Mr. Pavan Kumar Reddy</h4>
                <p className="text-[#64748B] dark:text-slate-400 text-sm font-[family-name:var(--font-body)] uppercase tracking-wide mt-1">Director, Sree Valmeeki High School</p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0A1628] dark:text-white border border-[#D4A853] bg-[#D4A853]/15 hover:bg-[#D4A853] hover:text-[#0A1628] transition-colors duration-300 rounded-lg font-[family-name:var(--font-body)]"
              >
                Read Full Leadership Philosophy
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
