'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#F5F3EE] py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:w-[55%] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#D4A853]" />
              <span className="text-[#D4A853] text-sm font-bold tracking-widest uppercase font-[family-name:var(--font-body)]">
                OUR STORY
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628] leading-tight mb-8">
              <span className="block">More Than A School.</span>
              <span className="block text-[#1E3A8A]">A Foundation For Life.</span>
            </h2>
            
            <div className="space-y-6 text-[#2D2D3F] text-lg font-[family-name:var(--font-body)] leading-relaxed mb-10">
              <p>
                Established in 1999, Sree Valmeeki High School began with a singular vision: to provide premium, uncompromising education to the children of Kadiri. For over two decades, we have remained steadfast in our commitment to academic excellence and holistic development.
              </p>
              <p>
                We believe that education extends far beyond textbooks. Our approach balances rigorous academics with strong discipline, nurturing unwavering confidence and deeply rooted values in every student. We don't just prepare students for examinations; we prepare them for the competitive world ahead.
              </p>
              <p>
                Today, our alumni stand as a testament to the Valmeeki foundation — thriving in various fields, leading with integrity, and making meaningful contributions to society.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-[#1E3A8A] font-semibold hover:text-[#D4A853] transition-colors group gap-2 font-[family-name:var(--font-body)]"
            >
              Discover Our Journey 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:w-[45%] relative w-full"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F2044] to-[#1E3A8A] opacity-90 z-10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              
              {/* Timeline Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white">
                  <div className="relative pl-6 space-y-6">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#D4A853] to-transparent" />
                    
                    <div className="relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#D4A853] ring-4 ring-[#D4A853]/30" />
                      <h4 className="font-bold text-[#D4A853] font-[family-name:var(--font-body)]">1999</h4>
                      <p className="text-sm text-white/90 font-[family-name:var(--font-body)] mt-1">Our Journey Began</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-[#D4A853] bg-transparent" />
                      <h4 className="font-bold text-white font-[family-name:var(--font-body)]">TODAY</h4>
                      <p className="text-sm text-white/90 font-[family-name:var(--font-body)] mt-1">Educating the Next Generation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A853] rounded-sm -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
