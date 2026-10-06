'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote } from 'lucide-react'

export default function DirectorMessage() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628]"
          >
            A Vision Focused On Every Child
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto bg-[#FAFAF7] rounded-2xl p-8 md:p-12 lg:p-16 relative shadow-lg border border-[#0A1628]/5">
          <Quote className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 text-[#D4A853]/20 rotate-180" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-[#0F2044] flex items-center justify-center">
                {/* Photo Placeholder */}
                <span className="text-4xl text-[#D4A853] font-[family-name:var(--font-heading)]">PPK</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <blockquote className="text-xl md:text-3xl text-[#1A1A2E] font-[family-name:var(--font-heading)] italic leading-relaxed mb-8">
                "Education should not only prepare children for examinations, but help them develop confidence, discipline, curiosity and character."
              </blockquote>
              
              <div className="mb-8">
                <div className="w-16 h-px bg-[#D4A853] mb-4 mx-auto md:mx-0" />
                <h4 className="text-lg font-bold text-[#0F2044] font-[family-name:var(--font-body)]">Mr. P. Pavan Kumar Reddy</h4>
                <p className="text-[#64748B] text-sm font-[family-name:var(--font-body)] uppercase tracking-wide mt-1">Director, Sree Valmeeki High School</p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-300 rounded-lg font-[family-name:var(--font-body)]"
              >
                Read Our Philosophy
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
