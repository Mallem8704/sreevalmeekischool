'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Submit Enquiry",
    desc: "Fill out our online form or visit the school office."
  },
  {
    num: "02",
    title: "Speak With Our Team",
    desc: "Our admissions counselor will guide you through the details."
  },
  {
    num: "03",
    title: "Visit The Campus",
    desc: "Experience our facilities and vibrant learning environment."
  },
  {
    num: "04",
    title: "Complete Admission",
    desc: "Submit documents and secure your child's seat."
  }
];

export default function AdmissionProcess() {
  return (
    <section className="bg-[#FAFAF7] py-24 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-sm font-bold tracking-widest uppercase mb-4">ADMISSIONS</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1628] font-medium leading-tight">
            Your Child's Journey<br />
            <span className="text-[#D4A853]">Can Begin Here.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] border-t-2 border-dashed border-[#D4A853]/30 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-[#FAFAF7] md:bg-transparent"
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-[#FAFAF7] shadow-lg rounded-full flex items-center justify-center text-3xl font-serif text-[#D4A853] font-bold mb-6 z-10 relative">
                  {step.num}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-serif font-semibold text-[#0A1628] mb-3">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#1A1A2E] font-medium mb-8">Admissions 2026–27 | Nursery – Class 10</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquiry"
              className="px-8 py-4 bg-[#D4A853] text-[#0A1628] font-bold tracking-wide hover:bg-[#B8860B] hover:text-white transition-all rounded-lg w-full sm:w-auto text-sm uppercase shadow-md"
            >
              ENQUIRE FOR ADMISSION
            </a>
            <a
              href="tel:+919440468838"
              className="px-8 py-4 bg-transparent border border-[#0A1628] text-[#0A1628] font-bold tracking-wide hover:bg-[#0A1628] hover:text-white transition-all rounded-lg w-full sm:w-auto text-sm uppercase"
            >
              CALL +91 94404 68838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
