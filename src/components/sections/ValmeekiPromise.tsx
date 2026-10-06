'use client';

import { motion } from 'framer-motion';

export default function ValmeekiPromise() {
  const statements = [
    "STRONG FOUNDATIONS",
    "CONFIDENT COMMUNICATION",
    "FUTURE-READY THINKING"
  ];

  return (
    <section className="bg-[#FAFAF7] py-32 overflow-hidden border-y border-[#0A1628]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24 md:space-y-32 flex flex-col items-center mb-24">
          {statements.map((statement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center relative"
            >
              <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-medium text-[#0A1628] leading-tight tracking-tight">
                {statement}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="h-1 bg-[#D4A853] mt-4 md:mt-8 mx-auto max-w-[80%]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-serif text-[#1A1A2E] leading-relaxed italic">
            "Education that prepares students not only for the next examination — but for the opportunities ahead."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
