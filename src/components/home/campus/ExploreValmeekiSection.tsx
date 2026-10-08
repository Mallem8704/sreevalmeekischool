'use client';

import CampusHeroIntro from './CampusHeroIntro';
import BlockShowcase from './BlockShowcase';
import CampusWalkthrough from './CampusWalkthrough';
import ClassroomShowcase from './ClassroomShowcase';
import SpacesThatSupportSuccess from './SpacesThatSupportSuccess';
import AmenitiesStory from './AmenitiesStory';
import CampusAerialSection from './CampusAerialSection';
import CampusArchitectureHotspots from './CampusArchitectureHotspots';
import TransportShowcase from './TransportShowcase';
import ThisIsValmeekiMosaic from './ThisIsValmeekiMosaic';

interface ExploreValmeekiSectionProps {
  onOpenAdmissions?: () => void;
}

/**
 * ExploreValmeekiSection
 * Master Signature Campus Tour Suite
 * 
 * Recommended Visual Flow:
 * 1. CampusHeroIntro ("A CAMPUS BUILT FOR LEARNING")
 * 2. BlockShowcase ("EXPLORE OUR CAMPUS")
 * 3. CampusWalkthrough ("01 to 07 WALKTHROUGH")
 * 4. ClassroomShowcase ("INSIDE THE CLASSROOM")
 * 5. SpacesThatSupportSuccess ("SPACES TO LEARN / THINK / GROW / ACHIEVE")
 * 6. AmenitiesStory ("DESIGNED FOR EVERY SCHOOL DAY")
 * 7. CampusAerialSection ("FROM ABOVE, 28 YEARS OF STORIES" - Drone Visual)
 * 8. CampusArchitectureHotspots ("INTERACTIVE BLUEPRINT HOTSPOTS")
 * 9. TransportShowcase ("THE SCHOOL DAY STARTS BEFORE THE CLASSROOM" - Bus Fleet & Route Enquiry)
 * 10. ThisIsValmeekiMosaic ("THIS IS VALMEEKI" - 16 Photo Wall + Fullscreen Lightbox Modal)
 */
export default function ExploreValmeekiSection({ onOpenAdmissions }: ExploreValmeekiSectionProps) {
  return (
    <section id="explore-valmeeki" className="relative w-full overflow-hidden">
      {/* 1. Cinematic Campus Hero Transition */}
      <CampusHeroIntro />

      {/* 2. Building & Block Showcase */}
      <BlockShowcase />

      {/* 3. 7-Scene Cinematic Campus Walkthrough */}
      <CampusWalkthrough />

      {/* 4. Inside The Classroom Editorial Showcase */}
      <ClassroomShowcase />

      {/* 5. Immersive Typographic Statement Transition */}
      <SpacesThatSupportSuccess />

      {/* 6. Verified Amenities & Facilities Story */}
      <AmenitiesStory />

      {/* 7. Drone Aerial Expanse Moment */}
      <CampusAerialSection />

      {/* 8. Interactive Blueprint & Hotspot Locator */}
      <CampusArchitectureHotspots />

      {/* 9. Safe Fleet & Transport Showcase */}
      <TransportShowcase onOpenAdmissions={onOpenAdmissions} />

      {/* 10. "This Is Valmeeki" Magazine Photo Mosaic Wall + Lightbox Modal */}
      <ThisIsValmeekiMosaic />
    </section>
  );
}
