'use client';

import { motion } from 'framer-motion';
import { Bus, MapPin } from 'lucide-react';

export default function Transport() {
  return (
    <section className="py-24 bg-[#F5F3EE] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628] leading-tight mb-6"
            >
              Connecting Students<br />
              <span className="text-[#D4A853]">To School Safely.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl"
            >
              We provide a reliable and extensive transportation network ensuring safe commute for our students across Kadiri and surrounding areas. Our fleet is maintained to the highest safety standards with trained personnel.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 py-4 bg-[#0A1628] text-white rounded-full font-medium hover:bg-[#1E3A8A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ask About Your Route
            </motion.button>
          </div>
          
          <div className="relative h-64 md:h-96 w-full rounded-3xl bg-white p-8 shadow-xl border border-[#FAFAF7] overflow-hidden flex items-center justify-center">
            {/* Route graphic */}
            <div className="relative w-full max-w-md h-32 flex items-center">
              {/* Dotted path */}
              <div className="absolute left-0 right-0 h-1 border-t-2 border-dashed border-[#94A3B8] top-1/2 -translate-y-1/2"></div>
              
              {/* Stops */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#1E3A8A] ring-4 ring-[#1E3A8A]/20 z-10"></div>
                <span className="text-xs font-medium text-[#64748B] mt-3 whitespace-nowrap absolute top-full">Home</span>
              </div>
              
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#94A3B8] z-10"></div>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#D4A853] ring-4 ring-[#D4A853]/20 flex items-center justify-center z-10">
                  <MapPin size={12} className="text-white" />
                </div>
                <span className="text-xs font-medium text-[#0A1628] mt-3 whitespace-nowrap absolute top-full">School</span>
              </div>
              
              {/* Animated Bus */}
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
              >
                <div className="bg-[#D4A853] p-3 rounded-xl shadow-lg text-white">
                  <Bus size={24} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
