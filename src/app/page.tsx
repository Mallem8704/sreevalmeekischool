'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroVideoLauncher from '@/components/ui/IntroVideoLauncher';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import Hero from '@/components/sections/Hero';
import HeroFeatureSlides from '@/components/sections/HeroFeatureSlides';
import TrustStrip from '@/components/sections/TrustStrip';
import About from '@/components/sections/About';
import DirectorMessage from '@/components/sections/DirectorMessage';
import WhyValmeeki from '@/components/sections/WhyValmeeki';
import LearningJourney from '@/components/sections/LearningJourney';
import IITFoundation from '@/components/sections/IITFoundation';
import SmartLearning from '@/components/sections/SmartLearning';
import SpokenEnglish from '@/components/sections/SpokenEnglish';
import StudentDevelopment from '@/components/sections/StudentDevelopment';
import Campus from '@/components/sections/Campus';
import Transport from '@/components/sections/Transport';
import Achievements from '@/components/sections/Achievements';
import SchoolVideo from '@/components/sections/SchoolVideo';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import ValmeekiPromise from '@/components/sections/ValmeekiPromise';
import NewsEvents from '@/components/sections/NewsEvents';
import AdmissionProcess from '@/components/sections/AdmissionProcess';
import AdmissionForm from '@/components/sections/AdmissionForm';
import ContactSection from '@/components/sections/ContactSection';
import ClosingSection from '@/components/sections/ClosingSection';

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  // Listen for replay events if triggered from footer or elsewhere
  useEffect(() => {
    const handleReplay = () => {
      setIntroComplete(false);
    };
    window.addEventListener('svhs_replay_intro', handleReplay);
    return () => window.removeEventListener('svhs_replay_intro', handleReplay);
  }, []);

  return (
    <>
      {/* 7-Second Website Intro Video Launcher */}
      <AnimatePresence mode="wait">
        {!introComplete && (
          <IntroVideoLauncher duration={7000} onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Site - Kept mounted and smoothly fading in with zero blank/black flash */}
      <motion.div
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <ScrollProgress />
        <Header />

        <main>
          <Hero />
          <HeroFeatureSlides />
          <TrustStrip />
          <About />
          <DirectorMessage />
          <WhyValmeeki />
          <LearningJourney />
          <IITFoundation />
          <SmartLearning />
          <SpokenEnglish />
          <StudentDevelopment />
          <Campus />
          <Transport />
          <SchoolVideo />
          <Gallery />
          <Achievements />
          <ValmeekiPromise />
          <Testimonials />
          <NewsEvents />
          <AdmissionProcess />
          <AdmissionForm />
          <ContactSection />
          <ClosingSection />
        </main>

        <Footer />
        <FloatingButtons />
      </motion.div>
    </>
  );
}
