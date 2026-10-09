'use client';

import CampusHeroIntro from './CampusHeroIntro';
import BlockShowcase from './BlockShowcase';
import ClassroomShowcase from './ClassroomShowcase';
import TransportShowcase from './TransportShowcase';
import SpacesThatSupportSuccess from './SpacesThatSupportSuccess';

interface ExploreValmeekiSectionProps {
  onOpenAdmissions?: () => void;
}

/**
 * ExploreValmeekiSection
 * Master Signature Campus Tour Suite
 * 
 * Streamlined Visual Flow (Zero Repeated Images):
 * 1. CampusHeroIntro ("A CAMPUS BUILT FOR LEARNING" - Cinematic drone entry)
 * 2. BlockShowcase ("EXPLORE OUR CAMPUS" - 4 distinct academic blocks)
 * 3. ClassroomShowcase ("INSIDE THE CLASSROOM" - Smart panels, digital classroom, labs)
 * 4. TransportShowcase ("THE SCHOOL DAY STARTS BEFORE THE CLASSROOM" - Safe bus fleet & route enquiry)
 * 5. SpacesThatSupportSuccess ("SPACES TO LEARN / THINK / GROW / ACHIEVE" - Typographic closing statement)
 */
export default function ExploreValmeekiSection({ onOpenAdmissions }: ExploreValmeekiSectionProps) {
  return (
    <section id="explore-valmeeki" className="relative w-full overflow-hidden">
      {/* 1. Cinematic Campus Hero Transition */}
      <CampusHeroIntro />

      {/* 2. Building & Academic Blocks Showcase */}
      <BlockShowcase />

      {/* 3. Inside The Classroom Editorial Showcase */}
      <ClassroomShowcase />

      {/* 4. Safe Fleet & School Bus Transport Showcase */}
      <TransportShowcase onOpenAdmissions={onOpenAdmissions} />

      {/* 5. Immersive Typographic Statement Transition */}
      <SpacesThatSupportSuccess />
    </section>
  );
}
