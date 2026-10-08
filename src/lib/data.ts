export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Campus Life', href: '/campus' },
  { name: 'Results', href: '/achievements' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export interface Milestone {
  id: string;
  year: string;
  title: string;
  caption: string;
  image: string;
  badge?: string;
}

export const growthMilestones: Milestone[] = [
  {
    id: '1999',
    year: '1999',
    title: 'THE BEGINNING',
    caption: 'One vision. One campus. A journey begins in Kadiri.',
    image: '/images/school/school-event-3.jpg',
    badge: 'Foundation Stone',
  },
  {
    id: '2005',
    year: '2005',
    title: 'EARLY FOUNDATIONS',
    caption: 'Building strong foundations with dedicated teachers and eager minds.',
    image: '/images/school/school-event-12.jpg',
    badge: '100% First Batch Result',
  },
  {
    id: '2012',
    year: '2012',
    title: 'A GROWING COMMUNITY',
    caption: 'Expanding campus, dedicated science laboratories, and high school wing.',
    image: '/images/school/school-event-5.jpg',
    badge: 'Campus Expansion',
  },
  {
    id: '2018',
    year: '2018',
    title: 'DIGITAL & IIT ERA',
    caption: 'Interactive smart panels and early IIT-JEE & NEET Olympiad coaching.',
    image: '/images/school/school-event-9.jpg',
    badge: 'Smart Digital Labs',
  },
  {
    id: '2023',
    year: '2023',
    title: 'STUDENT TRIUMPHS',
    caption: 'State-level sports trophies, VPL cricket championship, and Olympiad ranks.',
    image: '/images/school/school-event-2.jpg',
    badge: 'State Champions',
  },
  {
    id: '2026',
    year: '2026',
    title: '27 YEARS OF EXCELLENCE',
    caption: '27 years of trust, thousands of alumni, and the story continues.',
    image: '/images/school/school-event-4.jpg',
    badge: 'Silver Jubilee +',
  },
];

export interface VisualChapter {
  id: string;
  chapterNumber: string;
  action: string;
  overlayText: string;
  subtext: string;
  image: string;
}

export const visualChapters: VisualChapter[] = [
  {
    id: 'ch-01',
    chapterNumber: '01',
    action: 'LEARN',
    overlayText: 'Strong Foundations.',
    subtext: 'Concept-driven pedagogy from Nursery to 10th Class.',
    image: '/images/school/school-event-12.jpg',
  },
  {
    id: 'ch-02',
    chapterNumber: '02',
    action: 'EXPLORE',
    overlayText: 'Curiosity Beyond Textbooks.',
    subtext: 'Interactive science experimentation and analytical discovery.',
    image: '/images/school/school-event-9.jpg',
  },
  {
    id: 'ch-03',
    chapterNumber: '03',
    action: 'EXPRESS',
    overlayText: 'Confidence To Communicate.',
    subtext: 'Daily morning stage assemblies and 100% English immersion.',
    image: '/images/school/school-event-4.jpg',
  },
  {
    id: 'ch-04',
    chapterNumber: '04',
    action: 'ACHIEVE',
    overlayText: 'Dream Bigger.',
    subtext: 'IIT-JEE, NEET Olympiads, and 100% board distinction.',
    image: '/images/school/school-event-1.jpg',
  },
  {
    id: 'ch-05',
    chapterNumber: '05',
    action: 'GROW',
    overlayText: 'Beyond Academics.',
    subtext: 'Valmeeki Premier League sports, yoga, and cultural arts.',
    image: '/images/school/school-event-2.jpg',
  },
];

export interface OneDayMoment {
  time: string;
  title: string;
  tagline: string;
  image: string;
}

export const oneDayMoments: OneDayMoment[] = [
  {
    time: '08:30 AM',
    title: 'A NEW DAY BEGINS',
    tagline: 'Morning assembly, disciplined prayer, and stage speaking.',
    image: '/images/school/school-event-11.jpg',
  },
  {
    time: '10:00 AM',
    title: 'CURIOSITY IN ACTION',
    tagline: 'Smart digital interactive panels & experiential STEM labs.',
    image: '/images/school/school-event-9.jpg',
  },
  {
    time: '01:00 PM',
    title: 'TOGETHER AS FAMILY',
    tagline: 'Shared lunch, cherished conversations, and lifelong bonds.',
    image: '/images/school/school-event-3.jpg',
  },
  {
    time: '04:00 PM',
    title: 'BEYOND THE CLASSROOM',
    tagline: 'Athletics, cricket, volleyball, karate & joyful departure.',
    image: '/images/school/school-event-2.jpg',
  },
];

export interface CampusSlide {
  title: string;
  oneLiner: string;
  image: string;
  tag: string;
}

export const campusSlides: CampusSlide[] = [
  {
    title: 'SMART DIGITAL CLASSROOMS',
    oneLiner: 'Learning becomes visible.',
    image: '/images/school/school-event-12.jpg',
    tag: 'Interactive Tech',
  },
  {
    title: 'HANDS-ON SCIENCE LABS',
    oneLiner: 'Curiosity verified by experiment.',
    image: '/images/school/school-event-9.jpg',
    tag: 'Physics • Chemistry • Bio',
  },
  {
    title: 'SPORTS ARENA & PLAYGROUND',
    oneLiner: 'Room to discover, run, and conquer.',
    image: '/images/school/school-event-2.jpg',
    tag: 'VPL Arena',
  },
  {
    title: 'SCHOOL BUS FLEET',
    oneLiner: 'Connecting students safely to Valmeeki across Kadiri.',
    image: '/images/school/school-event-6.jpg',
    tag: 'Safe GPS Transit',
  },
];

export interface PersonProfile {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const peopleOfValmeeki: PersonProfile[] = [
  {
    name: 'Sri P. Jaya Rami Reddy',
    role: 'Founder & Chairman, Sree Valmeeki School',
    quote:
      'The sacred motto of our institution is to provide quality education with a basic fee structure, ensuring financial background never limits any child.',
    image: '/images/founder/sri_p_jaya_rami_reddy_founder.png',
  },
  {
    name: 'Mr. Pavan Kumar Reddy',
    role: 'Director, Sree Valmeeki High School',
    quote:
      'Education is the most powerful tool to transform lives, empower communities, and build a brighter future.',
    image: '/images/leadership/mr_pavan_kumar_reddy_director_square.png',
  },
  {
    name: 'Sri P. Anil Kumar Reddy',
    role: 'Correspondent, Sree Valmeeki High School',
    quote:
      'True institutional excellence is built on trust, impeccable discipline, and unwavering care for every child who walks through our gates.',
    image: '/images/leadership/sri_p_anil_kumar_reddy_correspondent_square.jpg',
  },
];

export interface StudentStory {
  quote: string;
  studentName: string;
  classGrade: string;
  image: string;
}

export const studentStories: StudentStory[] = [
  {
    quote: '“I learned to speak with confidence on stage every morning.”',
    studentName: 'B. Harika',
    classGrade: 'Class 9',
    image: '/images/school/school-event-4.jpg',
  },
  {
    quote: '“My first science fair model won a medal. That sparked my dream.”',
    studentName: 'K. Sai Charan',
    classGrade: 'Class 8',
    image: '/images/school/school-event-9.jpg',
  },
  {
    quote: '“The IIT Foundation classes simplified complex concepts so easily.”',
    studentName: 'T. Mohammed Rayyan',
    classGrade: 'Class 10 (State Topper)',
    image: '/images/school/school-event-1.jpg',
  },
];

export interface AchievementItem {
  id: string;
  studentName: string;
  classGrade: string;
  achievement: string;
  level: string;
  category: 'ALL' | 'ACADEMICS' | 'SSC RESULTS' | 'OLYMPIADS' | 'SPORTS' | 'CULTURAL' | 'COMPETITIONS' | 'AWARDS';
  year: string;
  image: string;
  marksOrRank?: string;
  description: string;
}

export const verifiedAchievements: AchievementItem[] = [
  {
    id: 'ach-1',
    studentName: 'V. Keerthana',
    classGrade: 'Class 10',
    achievement: 'SSC Board State 1st Rank (592/600)',
    level: 'State Level',
    category: 'SSC RESULTS',
    year: '2025',
    marksOrRank: 'Rank 01 • 592/600',
    image: '/images/school/school-event-7.jpg',
    description: 'Secured state-wide top honors with 100% distinction across Mathematics and Physical Science.',
  },
  {
    id: 'ach-2',
    studentName: 'Valmeeki Cricket XI',
    classGrade: 'High School',
    achievement: 'Valmeeki Premier League (VPL) Championship Trophy',
    level: 'District Level',
    category: 'SPORTS',
    year: '2026',
    marksOrRank: 'Champions',
    image: '/images/school/school-event-2.jpg',
    description: 'Undefeated run in inter-school cricket championship with outstanding sportsmanship.',
  },
  {
    id: 'ach-3',
    studentName: 'M. Yashwanth Reddy',
    classGrade: 'Class 8',
    achievement: 'National Science Olympiad Gold Medal',
    level: 'National Level',
    category: 'OLYMPIADS',
    year: '2025',
    marksOrRank: 'Gold Medal',
    image: '/images/school/school-event-1.jpg',
    description: 'Top percentile in National Science Olympiad solving advanced conceptual problem sets.',
  },
  {
    id: 'ach-4',
    studentName: 'Junior Dance Ensemble',
    classGrade: 'Middle School',
    achievement: 'Grand Annual Day Cultural Excellence Trophy',
    level: 'School & State',
    category: 'CULTURAL',
    year: '2026',
    marksOrRank: '1st Place',
    image: '/images/school/school-event-4.jpg',
    description: 'Captivating classical and folk performance on the Valmeeki grand auditorium stage.',
  },
  {
    id: 'ach-5',
    studentName: 'S. Nihal & Team',
    classGrade: 'Class 9',
    achievement: 'District Science Fair 1st Prize — Solar Energy Model',
    level: 'District Level',
    category: 'COMPETITIONS',
    year: '2025',
    marksOrRank: '1st Prize',
    image: '/images/school/school-event-9.jpg',
    description: 'Innovative working model presenting renewable energy harvesting for rural communities.',
  },
  {
    id: 'ach-6',
    studentName: 'G. Tejaswini',
    classGrade: 'Class 10',
    achievement: 'SSC Board Top Distinction (588/600)',
    level: 'State Level',
    category: 'SSC RESULTS',
    year: '2024',
    marksOrRank: 'Rank 02 • 588/600',
    image: '/images/school/school-event-8.jpg',
    description: 'Outstanding scholastic consistency across all core subjects and spoken English.',
  },
];

export interface AcademicTopper {
  rank: string;
  name: string;
  marks: string;
  year: string;
  image: string;
}

export const academicToppers: AcademicTopper[] = [
  {
    rank: 'Rank 01',
    name: 'V. Keerthana',
    marks: '592 / 600',
    year: '2025 SSC',
    image: '/images/school/school-event-7.jpg',
  },
  {
    rank: 'Rank 02',
    name: 'G. Tejaswini',
    marks: '588 / 600',
    year: '2024 SSC',
    image: '/images/school/school-event-8.jpg',
  },
  {
    rank: 'Rank 03',
    name: 'K. Bhanu Prakash',
    marks: '585 / 600',
    year: '2025 SSC',
    image: '/images/school/school-event-1.jpg',
  },
  {
    rank: 'Rank 04',
    name: 'M. Sneha Latha',
    marks: '582 / 600',
    year: '2024 SSC',
    image: '/images/school/school-event-3.jpg',
  },
];

export interface EventStory {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  summary: string;
  quote: string;
  galleryImages: string[];
}

export const eventStories: EventStory[] = [
  {
    slug: 'annual-day-celebrations',
    title: 'Annual Day Celebrations & Cultural Extravaganza',
    date: 'February 2026',
    category: 'Cultural',
    coverImage: '/images/school/school-event-4.jpg',
    summary: 'A breathtaking celebration of rhythm, drama, and youth talent on our grand auditorium stage.',
    quote: '“The stage gave every student their moment to shine like stars.”',
    galleryImages: [
      '/images/school/school-event-4.jpg',
      '/images/school/school-event-5.jpg',
      '/images/school/school-event-7.jpg',
      '/images/school/school-event-11.jpg',
    ],
  },
  {
    slug: 'valmeeki-premier-league',
    title: 'Valmeeki Premier League (VPL) Sports Championship',
    date: 'January 2026',
    category: 'Sports',
    coverImage: '/images/school/school-event-2.jpg',
    summary: 'High-octane cricket and athletics tournament fostering team resilience and physical grit.',
    quote: '“Champions are made through daily practice, discipline, and unity.”',
    galleryImages: [
      '/images/school/school-event-2.jpg',
      '/images/school/school-event-6.jpg',
      '/images/school/school-event-11.jpg',
      '/images/school/school-event-3.jpg',
    ],
  },
  {
    slug: 'national-science-fair',
    title: 'National Science Fair & Practical Innovation Expo',
    date: 'November 2025',
    category: 'Academics',
    coverImage: '/images/school/school-event-9.jpg',
    summary: 'Young scientists demonstrating working models in solar physics, robotics, and biology.',
    quote: '“Curiosity turned into working invention.”',
    galleryImages: [
      '/images/school/school-event-9.jpg',
      '/images/school/school-event-1.jpg',
      '/images/school/school-event-10.jpg',
      '/images/school/school-event-12.jpg',
    ],
  },
  {
    slug: 'farewell-felicitation',
    title: '10th Class Farewell & Academic Felicitation',
    date: 'March 2025',
    category: 'Celebration',
    coverImage: '/images/school/school-event-8.jpg',
    summary: 'Honoring our passing batch as they step forward to state universities and premier colleges.',
    quote: '“Once a Valmeekian, always a leader.”',
    galleryImages: [
      '/images/school/school-event-8.jpg',
      '/images/school/school-event-7.jpg',
      '/images/school/school-event-3.jpg',
      '/images/school/school-event-5.jpg',
    ],
  },
];

export interface VideoGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  poster: string;
  format: 'vertical' | 'landscape';
}

export const videoGalleryItems: VideoGalleryItem[] = [
  {
    id: 'vid-1',
    title: 'Campus Life in Motion',
    subtitle: 'Morning prayer, smart classes & playground smiles',
    videoUrl: '/hero-video.mp4',
    poster: '/images/school/school-event-3.jpg',
    format: 'landscape',
  },
  {
    id: 'vid-2',
    title: '27 Years Story Intro',
    subtitle: 'A cinematic journey through Valmeeki history',
    videoUrl: '/intro-video.mp4',
    poster: '/images/school/school-event-4.jpg',
    format: 'landscape',
  },
  {
    id: 'vid-3',
    title: 'Annual Day Dance Highlights',
    subtitle: 'Stage rhythm & folk celebration',
    videoUrl: '/hero-video.mp4',
    poster: '/images/school/school-event-5.jpg',
    format: 'vertical',
  },
  {
    id: 'vid-4',
    title: 'VPL Cricket Final Match Winning Moment',
    subtitle: 'Trophy celebration & roar',
    videoUrl: '/intro-video.mp4',
    poster: '/images/school/school-event-2.jpg',
    format: 'vertical',
  },
];
