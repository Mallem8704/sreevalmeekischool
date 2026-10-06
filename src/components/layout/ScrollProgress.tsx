'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A853] via-[#FFF5DC] to-[#B8860B] shadow-[0_0_12px_rgba(212,168,83,0.85)] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}
