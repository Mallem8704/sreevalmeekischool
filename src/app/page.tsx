'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CinematicIntro from '@/components/ui/CinematicIntro';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

import CinematicHero from '@/components/sections/CinematicHero';
import FoundationShowcase from '@/components/sections/FoundationShowcase';
import GrowthJourney from '@/components/sections/GrowthJourney';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import VisualChapters from '@/components/sections/VisualChapters';
import OneDayAtValmeeki from '@/components/sections/OneDayAtValmeeki';
import CampusStory from '@/components/sections/CampusStory';
import NumbersSection from '@/components/sections/NumbersSection';
import ProudMomentsPreview from '@/components/sections/ProudMomentsPreview';
import HappeningAtValmeeki from '@/components/sections/HappeningAtValmeeki';
import MemoriesWall from '@/components/sections/MemoriesWall';
import PeopleOfValmeeki from '@/components/sections/PeopleOfValmeeki';
import StudentStories from '@/components/sections/StudentStories';
import MomentsCollagePreview from '@/components/sections/MomentsCollagePreview';
import AdmissionsClimax from '@/components/sections/AdmissionsClimax';

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if returning visitor has already experienced the intro in this session
    try {
      if (sessionStorage.getItem('svhs_intro_seen') === 'true') {
        setIntroComplete(true);
      }
    } catch {
      // ignore
    }

    const handleReplay = () => {
      setIntroComplete(false);
    };
    window.addEventListener('svhs_replay_intro', handleReplay);
    return () => window.removeEventListener('svhs_replay_intro', handleReplay);
  }, []);

  return (
    <>
      {/* 1. Cinematic Opening Sequence: SINCE 1999 -> 27 YEARS -> Logo -> SREE VALMEEKI */}
      <AnimatePresence mode="wait">
        {!introComplete && (
          <CinematicIntro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Visual Journey: "FROM 1999 TO THE FUTURE" */}
      <motion.div
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-[#050D1A] text-white selection:bg-[#D4A853] selection:text-[#0A1628]"
      >
        <ScrollProgress />
        <Header />

        <main>
          {/* 2A. Hero Part 1: Visual-First Fullscreen Campus Video & Minimal Typography (Blue Moon layout) */}
          <CinematicHero />

          {/* 2B. Hero Part 2: Building Strong Foundations • Creating Brighter Futures • Nurturing Students to (Premium Slides) */}
          <FoundationShowcase />

          {/* 3. School Growth Story: 1999 → 2026 Horizontal Timeline */}
          <GrowthJourney />

          {/* 4. Before & Now Visual: Interactive Then & Now Slider */}
          <BeforeAfterSlider />

          {/* 5. Visual School Experience: 5 Full-Screen Chapters (Learn, Explore, Express, Achieve, Grow) */}
          <VisualChapters />

          {/* 6. One Day At Valmeeki: Chronological Time Story (08:30 AM to 04:00 PM) */}
          <OneDayAtValmeeki />

          {/* 7. Campus Story: Large Visual Slides (Smart Classes, Labs, Arena, Fleet) */}
          <CampusStory />

          {/* 8. Big Numbers: Motion Typography (27 Years, 1999, Nursery to X, 100%) */}
          <NumbersSection />

          {/* 9. Proud Moments: Winning Student Photo & Achievement Previews */}
          <ProudMomentsPreview />

          {/* 10. Happening At Valmeeki: Large Editorial Event Photo Cards */}
          <HappeningAtValmeeki />

          {/* 11. Campus Memories Wall: Floating Photo Collage with Hover & Lightbox */}
          <MemoriesWall />

          {/* 12. People of Valmeeki: Director & Mentors Single-Quote Portraits */}
          <PeopleOfValmeeki />

          {/* 13. Student Stories: Authentic Student Voice Cards */}
          <StudentStories />

          {/* 14. Moments That Make Valmeeki: Irregular Gallery Photo Collage */}
          <MomentsCollagePreview />

          {/* 15. Admissions Climax: Your Child's Journey Begins Here • "THE STORY CONTINUES." */}
          <AdmissionsClimax />
        </main>

        <Footer />
        <FloatingButtons />
      </motion.div>
    </>
  );
}
