export interface CampusBlock {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface WalkthroughScene {
  step: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  badge: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  category: string;
  image: string;
  tagline: string;
}

export interface Hotspot {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  coords: { x: number; y: number }; // Percentage 0..100
}

export interface MosaicPhoto {
  id: string;
  title: string;
  category: 'ALL' | 'BUILDINGS' | 'CLASSROOMS' | 'SMART LEARNING' | 'SPORTS' | 'TRANSPORT' | 'ACTIVITIES' | 'EVENTS';
  caption: string;
  image: string;
  span: 'col-span-1 row-span-1' | 'col-span-2 row-span-1' | 'col-span-1 row-span-2' | 'col-span-2 row-span-2';
}

// 1. Verified Campus Blocks
export const CAMPUS_BLOCKS: CampusBlock[] = [
  {
    id: 'techno-block',
    name: 'TECHNO BLOCK',
    subtitle: 'Main Academic Campus & Green Courtyard',
    tagline: 'Spaces designed for focused, joyful learning.',
    description: 'Surrounded by lush green trees and natural stone paving, the Techno Block offers ventilated classrooms and quiet learning spaces away from urban noise.',
    image: '/images/campus/techno_block_wide.jpg',
    features: ['Pleasant Natural Environment', 'Spacious Multi-Story Wings', 'Central Shaded Assembly Courtyard'],
  },
  {
    id: 'tenth-class-block',
    name: '10TH CLASS BLOCK',
    subtitle: 'Secondary Education & Board Preparation Wing',
    tagline: 'Where town toppers and district champions are molded.',
    description: 'A dedicated high-focus academic wing equipped with specialized subject labs, intensive doubt-clearing zones, and board exam simulation facilities.',
    image: '/images/campus/high_school_10th_block.jpg',
    features: ['SSC Board Focused Classrooms', 'Dedicated Study Halls', 'Hall of Fame Wall of Toppers'],
  },
  {
    id: 'icon-olympiad-block',
    name: 'ICON OLYMPIAD BLOCK',
    subtitle: 'Foundation & Competitive Exam Wing',
    tagline: 'Concept clarity, problem-solving, and analytical thinking.',
    description: 'Designed specifically for early IIT Foundation, Olympiads, and NTSE prep with interactive digital pedagogy and subject faculty chambers.',
    image: '/images/campus/olympiad_block_corridor.jpg',
    features: ['IIT-JEE & NEET Foundation Classrooms', 'Analytical Problem Solving Sessions', 'Modern Academic Corridors'],
  },
  {
    id: 'activity-sports-block',
    name: 'SPORTS & PLAYGROUND CAMPUS',
    subtitle: 'Expansive Multi-Acre Athletic Grounds',
    tagline: 'Building resilience, teamwork, and athletic character.',
    description: 'Large open grounds for cricket, volleyball, track events, and daily mass yoga assemblies under open skies and green tree cover.',
    image: '/images/campus/playground_drone_aerial.jpg',
    features: ['Full-Scale Cricket & Athletics Ground', 'Dedicated Yoga & Fitness Zone', 'Annual VPL Sports Tournaments'],
  },
];

// 2. 7-Scene Cinematic Walkthrough
export const WALKTHROUGH_SCENES: WalkthroughScene[] = [
  {
    step: '01',
    title: 'SCHOOL ENTRANCE',
    headline: 'WELCOME TO VALMEEKI.',
    description: 'Step into a 28-year legacy of academic distinction, secure gates, and a warm, disciplined campus culture.',
    image: '/images/campus/techno_block_entrance.jpg',
    badge: 'Main Gate & Courtyard',
  },
  {
    step: '02',
    title: 'CAMPUS & BUILDINGS',
    headline: '28 YEARS OF LEARNING.',
    description: 'Purpose-built multi-story infrastructure set amidst shady neem trees and peaceful open-air spaces.',
    image: '/images/campus/techno_block_wide.jpg',
    badge: 'Architectural Heritage',
  },
  {
    step: '03',
    title: 'CORRIDORS & PATHS',
    headline: 'EVERY DAY BEGINS HERE.',
    description: 'Bright, airy corridors connecting learners to their mentors, study wings, and collaborative spaces.',
    image: '/images/campus/olympiad_block_corridor.jpg',
    badge: 'Connecting Wings',
  },
  {
    step: '04',
    title: 'CLASSROOMS',
    headline: 'WHERE IDEAS TAKE SHAPE.',
    description: 'Ergonomic seating, cross-ventilation, and structured seating designed for active student engagement.',
    image: '/images/campus/digital_classroom.jpg',
    badge: 'Academic Spaces',
  },
  {
    step: '05',
    title: 'SMART LEARNING',
    headline: 'LEARNING, EVOLVED.',
    description: 'High-definition interactive flat panels bringing complex science concepts, 3D anatomy, and physics to life.',
    image: '/images/campus/smart_learning_panel.jpg',
    badge: 'Interactive Digital Tech',
  },
  {
    step: '06',
    title: 'SCIENCE & ACTIVITY',
    headline: 'ROOM TO DISCOVER.',
    description: 'Hands-on physics and biology equipment guided by experienced faculty to instill scientific curiosity.',
    image: '/images/campus/science_lab_faculty.jpg',
    badge: 'Experimental Labs',
  },
  {
    step: '07',
    title: 'SAFE TRANSPORT',
    headline: 'CONNECTING STUDENTS TO SCHOOL.',
    description: 'A fleet of GPS-monitored yellow buses serving Kadiri town and surrounding rural communities with dedicated care.',
    image: '/images/campus/transport_fleet_buses.jpg',
    badge: 'Daily Commute Fleet',
  },
];

// 3. Verified Campus Amenities
export const CAMPUS_AMENITIES: AmenityItem[] = [
  {
    id: 'amenity-smart',
    name: 'Smart Digital Classrooms',
    category: 'Technology',
    image: '/images/campus/smart_learning_panel.jpg',
    tagline: 'Interactive 4K flat panels for visual concept retention.',
  },
  {
    id: 'amenity-transport',
    name: 'Dedicated Bus Fleet',
    category: 'Logistics',
    image: '/images/campus/transport_buses_angle.jpg',
    tagline: '10+ school buses covering Kadiri and rural mandals.',
  },
  {
    id: 'amenity-sports',
    name: 'Expansive Sports Grounds',
    category: 'Athletics',
    image: '/images/campus/sports_cricket_ground.jpg',
    tagline: 'Cricket pitch, volleyball court, and athletic tracks.',
  },
  {
    id: 'amenity-yoga',
    name: 'Mass Yoga & Assembly Courtyard',
    category: 'Wellness',
    image: '/images/campus/yoga_assembly.jpg',
    tagline: 'Morning wellness, meditation, and discipline drills.',
  },
  {
    id: 'amenity-labs',
    name: 'Science & Discovery Labs',
    category: 'Academics',
    image: '/images/campus/science_lab_faculty.jpg',
    tagline: 'State award-winning science experiment setups.',
  },
  {
    id: 'amenity-cultural',
    name: 'Cultural & Arts Auditorium Stage',
    category: 'Expression',
    image: '/images/campus/cultural_dance_stage.jpg',
    tagline: 'Annual Day festivals, dance recitals, and public speaking.',
  },
  {
    id: 'amenity-aerial',
    name: 'Green Eco Campus',
    category: 'Environment',
    image: '/images/campus/campus_drone_aerial.jpg',
    tagline: 'Lush tree canopy fostering a calm, refreshing atmosphere.',
  },
  {
    id: 'amenity-highschool',
    name: 'SSC Board Excellence Wing',
    category: 'Distinction',
    image: '/images/campus/high_school_10th_block.jpg',
    tagline: 'Focused preparation rooms producing 595/600 toppers.',
  },
];

// 4. Interactive Campus Hotspots
export const CAMPUS_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot-gate',
    title: 'Main Campus Entrance',
    category: 'Security & Access',
    description: 'Gated entrance with security checkpoint, visitor greeting area, and direct access to administration.',
    image: '/images/campus/techno_block_entrance.jpg',
    coords: { x: 18, y: 78 },
  },
  {
    id: 'hotspot-buses',
    title: 'School Transport Bay',
    category: 'Logistics',
    description: 'Designated parking and boarding terminal for the school bus fleet, ensuring calm, supervised student transit.',
    image: '/images/campus/campus_drone_aerial.jpg',
    coords: { x: 34, y: 65 },
  },
  {
    id: 'hotspot-techno',
    title: 'Techno Block Wing',
    category: 'Academics',
    description: 'Multi-story classroom complex surrounded by neem trees, housing primary and middle school grades.',
    image: '/images/campus/techno_block_wide.jpg',
    coords: { x: 55, y: 52 },
  },
  {
    id: 'hotspot-10th',
    title: '10th Class High School Block',
    category: 'Board Exam Wing',
    description: 'Specialized secondary classrooms where senior faculty train students for top SSC Board honors.',
    image: '/images/campus/high_school_10th_block.jpg',
    coords: { x: 68, y: 40 },
  },
  {
    id: 'hotspot-playground',
    title: 'Athletic Playground',
    category: 'Physical Education',
    description: 'Sprawling natural sports ground for cricket tournaments, daily athletic activities, and sports day events.',
    image: '/images/campus/playground_drone_aerial.jpg',
    coords: { x: 82, y: 25 },
  },
];

// 5. "This Is Valmeeki" Photo Mosaic Wall (16 Curated Real Images)
export const PHOTO_MOSAIC: MosaicPhoto[] = [
  {
    id: 'mosaic-1',
    title: 'Campus Aerial Panorama',
    category: 'BUILDINGS',
    caption: 'Bird’s-eye perspective of Sree Valmeeki campus and bus fleet.',
    image: '/images/campus/campus_drone_aerial.jpg',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 'mosaic-2',
    title: 'Interactive 3D Biology',
    category: 'SMART LEARNING',
    caption: 'Students exploring 3D human anatomy on digital smart boards.',
    image: '/images/campus/smart_learning_panel.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-3',
    title: 'Techno Block Courtyard',
    category: 'BUILDINGS',
    caption: 'Lush tree-shaded learning environment away from town rush.',
    image: '/images/campus/techno_block_wide.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-4',
    title: 'Faculty Science Mentorship',
    category: 'CLASSROOMS',
    caption: 'Hands-on laboratory demonstrations by experienced senior mentors.',
    image: '/images/campus/science_lab_faculty.jpg',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'mosaic-5',
    title: 'Cricket Match in Progress',
    category: 'SPORTS',
    caption: 'Faculty and students bonding on the cricket field during sports week.',
    image: '/images/campus/sports_cricket_ground.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-6',
    title: 'Mass Yoga Morning Assembly',
    category: 'ACTIVITIES',
    caption: 'Instilling discipline, balance, and focus through daily yoga routines.',
    image: '/images/campus/yoga_assembly.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'mosaic-7',
    title: 'Modern School Bus Fleet',
    category: 'TRANSPORT',
    caption: 'Reliable, well-maintained yellow buses connecting every neighborhood.',
    image: '/images/campus/transport_fleet_buses.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-8',
    title: 'Annual Cultural Festival',
    category: 'EVENTS',
    caption: 'Vibrant stage performances nurturing self-confidence and stage presence.',
    image: '/images/campus/cultural_dance_stage.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-9',
    title: '10th Class Academic Wing',
    category: 'BUILDINGS',
    caption: 'Modern facilities engineered for continuous academic focus.',
    image: '/images/campus/high_school_10th_block.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-10',
    title: 'Digital Smart Classroom',
    category: 'SMART LEARNING',
    caption: 'Visual pedagogy enhancing comprehension and memory retention.',
    image: '/images/campus/digital_classroom.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-11',
    title: 'Icon Olympiad Wing Corridor',
    category: 'BUILDINGS',
    caption: 'Clean, open walkways connecting foundational study chambers.',
    image: '/images/campus/olympiad_block_corridor.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-12',
    title: 'Playground Drone Aerial',
    category: 'SPORTS',
    caption: 'Expansive natural athletic grounds surrounded by scenic greenery.',
    image: '/images/campus/playground_drone_aerial.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'mosaic-13',
    title: 'National Handwriting Champion',
    category: 'ACTIVITIES',
    caption: 'Celebrating national-level penmanship and academic finesses.',
    image: '/extracted/champions/handwriting_national_champion.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-14',
    title: 'State Science Fair 1st Rank',
    category: 'EVENTS',
    caption: 'Jana Vignana Vedika state science experiment recognition.',
    image: '/extracted/champions/science_experiments_state_1st_rank.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-15',
    title: 'School Bus Fleet Bay',
    category: 'TRANSPORT',
    caption: 'Safe, punctual student transit across Kadiri and surrounding mandals.',
    image: '/images/campus/transport_buses_angle.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mosaic-16',
    title: 'Faculty Saraswathi Pooja Assembly',
    category: 'EVENTS',
    caption: 'United academic leadership and teaching faculty honoring values.',
    image: '/extracted/champions/faculty_saraswathi_pooja_group.jpg',
    span: 'col-span-1 row-span-1',
  },
];
