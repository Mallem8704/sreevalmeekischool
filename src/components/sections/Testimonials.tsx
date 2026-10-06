'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sree Valmeeki High School has provided a nurturing environment where my child has grown academically and personally. The teachers are dedicated and the school's focus on both academics and values is commendable.",
    parent: "Parent of Class 8 Student"
  },
  {
    quote: "What impressed us most was the school's commitment to individual attention. The teachers know each student's strengths and work to build their confidence alongside their academic abilities.",
    parent: "Parent of Class 5 Student"
  },
  {
    quote: "The IIT Foundation program and Olympiad preparation gave my child an early advantage in competitive thinking. The school balances academics with overall personality development beautifully.",
    parent: "Parent of Class 10 Student"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#0A1628] py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-sm font-bold tracking-widest uppercase mb-4">PARENT VOICES</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium leading-tight">
            Trusted By Parents.<br />
            <span className="text-[#D4A853]">Loved By Students.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -ml-4 md:-ml-12 -mt-8 text-[#D4A853]/20">
            <Quote size={80} fill="currentColor" />
          </div>
          
          <div className="relative h-72 md:h-48 flex items-center justify-center text-center px-8 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full absolute"
              >
                <p className="text-xl md:text-2xl font-serif italic font-light leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="text-[#D4A853] font-sans font-semibold tracking-wide">
                  — {testimonials[currentIndex].parent}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center mt-12 gap-6 relative z-10">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-white/20 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-[#D4A853]' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full border border-white/20 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
