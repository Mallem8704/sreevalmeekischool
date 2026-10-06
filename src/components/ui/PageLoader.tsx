'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you might wait for resources to load.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const letters = ['S', 'V', 'H', 'S'];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0A1628] flex flex-col items-center justify-center"
        >
          <div className="flex gap-2 md:gap-4 mb-6">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="text-4xl md:text-6xl font-serif text-[#D4A853] font-medium"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-[#94A3B8] text-xs md:text-sm tracking-[0.3em] font-medium uppercase"
            >
              Sree Valmeeki High School
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
