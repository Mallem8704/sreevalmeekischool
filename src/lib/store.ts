// Zustand store for admin state management
import { create } from 'zustand';

export interface AdmissionEnquiry {
  id: string;
  parentName: string;
  studentName: string;
  studentAge: string;
  classSeeking: string;
  currentSchool: string;
  phone: string;
  email: string;
  location: string;
  transportRequired: boolean;
  message: string;
  status: 'New' | 'Contacted' | 'Campus Visit' | 'Follow Up' | 'Admitted' | 'Closed';
  notes: string;
  date: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'admission' | 'event' | 'holiday' | 'exam' | 'result' | 'general';
  active: boolean;
  date: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string | null;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string | null;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  caption: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  class?: string;
  role?: string;
  testimonial?: string;
  content?: string;
  isDemo?: boolean;
}

export interface SiteSettings {
  contact: {
    phone1: string;
    phone2: string;
    email: string;
    address: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    description: string;
    showAdmissionBanner: boolean;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

interface AdminStore {
  enquiries: AdmissionEnquiry[];
  announcements: Announcement[];
  events: NewsEvent[];
  achievements: Achievement[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  heroContent: {
    badge: string;
    headline1: string;
    headline2: string;
    description: string;
    admissionBanner: boolean;
  };
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  siteSettings: SiteSettings;
  
  addAdmission: (admission: {
    studentName: string;
    grade: string;
    parentName?: string;
    phone: string;
    email?: string;
    address?: string;
    previousSchool?: string;
    notes?: string;
  }) => void;
  // Actions
  addEnquiry: (enquiry: AdmissionEnquiry) => void;
  updateEnquiryStatus: (id: string, status: AdmissionEnquiry['status']) => void;
  updateEnquiryNotes: (id: string, notes: string) => void;
  addAnnouncement: (announcement: Announcement) => void;
  updateAnnouncement: (id: string, announcement: Partial<Announcement>) => void;
  deleteAnnouncement: (id: string) => void;
  removeAnnouncement: (id: string) => void;
  addEvent: (event: NewsEvent) => void;
  updateEvent: (id: string, event: Partial<NewsEvent>) => void;
  deleteEvent: (id: string) => void;
  removeEvent: (id: string) => void;
  addAchievement: (achievement: Achievement) => void;
  deleteAchievement: (id: string) => void;
  removeAchievement: (id: string) => void;
  addGalleryImage: (image: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  addGalleryItem: (item: { url: string; category: string; featured: boolean; caption?: string }) => void;
  removeGalleryItem: (id: string) => void;
  toggleGalleryFeatured: (id: string) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  removeTestimonial: (id: string) => void;
  updateHeroContent: (content: Partial<AdminStore['heroContent']>) => void;
  updateContactInfo: (info: Partial<AdminStore['contactInfo']>) => void;
  updateSocialLinks: (links: Partial<AdminStore['socialLinks']>) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  enquiries: [
    {
      id: '1',
      parentName: 'Demo Parent',
      studentName: 'Demo Student',
      studentAge: '6',
      classSeeking: 'Class 1',
      currentSchool: 'Previous School',
      phone: '+91 98765 43210',
      email: 'demo@example.com',
      location: 'Kadiri',
      transportRequired: true,
      message: 'Interested in admission for the upcoming academic year.',
      status: 'New',
      notes: '',
      date: new Date().toISOString().split('T')[0],
    },
  ],
  announcements: [
    {
      id: '1',
      title: 'Admissions Open 2026–27',
      content: 'Admissions are now open for Nursery to Class 10 for the academic year 2026–27.',
      type: 'admission',
      active: true,
      date: '2026-01-15',
    },
  ],
  events: [
    {
      id: '1',
      title: 'Annual Day Celebrations',
      date: '2026-02-15',
      summary: 'Join us for the annual day celebrations featuring cultural programs, awards ceremony, and student performances.',
      image: null,
    },
    {
      id: '2',
      title: 'Science Exhibition',
      date: '2026-01-20',
      summary: 'Students showcase their innovative science projects and working models.',
      image: null,
    },
    {
      id: '3',
      title: 'Sports Day',
      date: '2026-12-10',
      summary: 'A day of athletic competitions, team sports, and celebrations of sportsmanship.',
      image: null,
    },
  ],
  achievements: [
    {
      id: '1',
      title: 'Academic Excellence',
      category: 'Academic',
      description: 'Achievement details will be updated from verified school records.',
      year: '2025',
      image: null,
    },
  ],
  gallery: [],
  testimonials: [
    {
      id: '1',
      name: 'Parent of Class 8 Student',
      class: 'Class 8',
      role: 'Parent',
      testimonial: 'Sree Valmeeki High School has provided a nurturing environment where my child has grown academically and personally. The teachers are dedicated and the school\'s focus on both academics and values is commendable.',
      content: 'Sree Valmeeki High School has provided a nurturing environment where my child has grown academically and personally. The teachers are dedicated and the school\'s focus on both academics and values is commendable.',
      isDemo: true,
    },
    {
      id: '2',
      name: 'Parent of Class 5 Student',
      class: 'Class 5',
      role: 'Parent',
      testimonial: 'What impressed us most was the school\'s commitment to individual attention. The teachers know each student\'s strengths and work to build their confidence alongside their academic abilities.',
      content: 'What impressed us most was the school\'s commitment to individual attention. The teachers know each student\'s strengths and work to build their confidence alongside their academic abilities.',
      isDemo: true,
    },
    {
      id: '3',
      name: 'Parent of Class 10 Student',
      class: 'Class 10',
      role: 'Parent',
      testimonial: 'The IIT Foundation program and Olympiad preparation gave my child an early advantage in competitive thinking. The school balances academics with overall personality development beautifully.',
      content: 'The IIT Foundation program and Olympiad preparation gave my child an early advantage in competitive thinking. The school balances academics with overall personality development beautifully.',
      isDemo: true,
    },
  ],
  heroContent: {
    badge: 'EST. 1999 • KADIRI',
    headline1: 'BUILDING STRONG FOUNDATIONS.',
    headline2: 'CREATING BRIGHTER FUTURES.',
    description: 'For over two decades, Sree Valmeeki High School has been nurturing knowledge, discipline and confidence — preparing students for school, competitive education and life beyond the classroom.',
    admissionBanner: true,
  },
  contactInfo: {
    phone: '+91 94404 68838',
    email: 'info@sreevalmeekischool.com',
    address: 'Madanapalli Road / NH-205, Near Chowdeswari Temple, Kadiri, Andhra Pradesh – 515591',
  },
  socialLinks: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },
  siteSettings: {
    contact: {
      phone1: '+91 94404 68838',
      phone2: '+91 98492 56838',
      email: 'info@sreevalmeekischool.com',
      address: 'Madanapalli Road / NH-205, Near Chowdeswari Temple, Kadiri, Andhra Pradesh – 515591',
    },
    hero: {
      badge: 'EST. 1999 • KADIRI',
      headline1: 'BUILDING STRONG FOUNDATIONS.',
      headline2: 'CREATING BRIGHTER FUTURES.',
      description: 'For over two decades, Sree Valmeeki High School has been nurturing knowledge, discipline and confidence — preparing students for school, competitive education and life beyond the classroom.',
      showAdmissionBanner: true,
    },
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
    },
  },

  // Actions
  addAdmission: (adm) =>
    set((state) => ({
      enquiries: [
        {
          id: Date.now().toString(),
          parentName: adm.parentName || 'Parent',
          studentName: adm.studentName,
          studentAge: '',
          classSeeking: adm.grade,
          currentSchool: adm.previousSchool || '',
          phone: adm.phone,
          email: adm.email || '',
          location: adm.address || 'Kadiri',
          transportRequired: false,
          message: adm.notes || '',
          status: 'New',
          notes: adm.notes || '',
          date: new Date().toISOString().split('T')[0],
        },
        ...state.enquiries,
      ],
    })),
  addEnquiry: (enquiry) =>
    set((state) => ({ enquiries: [enquiry, ...state.enquiries] })),
  updateEnquiryStatus: (id, status) =>
    set((state) => ({
      enquiries: state.enquiries.map((e) => (e.id === id ? { ...e, status } : e)),
    })),
  updateEnquiryNotes: (id, notes) =>
    set((state) => ({
      enquiries: state.enquiries.map((e) => (e.id === id ? { ...e, notes } : e)),
    })),
  addAnnouncement: (announcement) =>
    set((state) => ({ announcements: [announcement, ...state.announcements] })),
  updateAnnouncement: (id, announcement) =>
    set((state) => ({
      announcements: state.announcements.map((a) =>
        a.id === id ? { ...a, ...announcement } : a
      ),
    })),
  deleteAnnouncement: (id) =>
    set((state) => ({
      announcements: state.announcements.filter((a) => a.id !== id),
    })),
  removeAnnouncement: (id) =>
    set((state) => ({
      announcements: state.announcements.filter((a) => a.id !== id),
    })),
  addEvent: (event) =>
    set((state) => ({ events: [event, ...state.events] })),
  updateEvent: (id, event) =>
    set((state) => ({
      events: state.events.map((e) => (e.id === id ? { ...e, ...event } : e)),
    })),
  deleteEvent: (id) =>
    set((state) => ({ events: state.events.filter((e) => e.id !== id) })),
  removeEvent: (id) =>
    set((state) => ({ events: state.events.filter((e) => e.id !== id) })),
  addAchievement: (achievement) =>
    set((state) => ({ achievements: [achievement, ...state.achievements] })),
  deleteAchievement: (id) =>
    set((state) => ({
      achievements: state.achievements.filter((a) => a.id !== id),
    })),
  removeAchievement: (id) =>
    set((state) => ({
      achievements: state.achievements.filter((a) => a.id !== id),
    })),
  addGalleryImage: (image) =>
    set((state) => ({ gallery: [image, ...state.gallery] })),
  deleteGalleryImage: (id) =>
    set((state) => ({ gallery: state.gallery.filter((g) => g.id !== id) })),
  addGalleryItem: (item) =>
    set((state) => ({
      gallery: [
        {
          id: Date.now().toString() + Math.random().toString(),
          url: item.url,
          category: item.category,
          caption: item.caption || '',
          featured: item.featured,
        },
        ...state.gallery,
      ],
    })),
  removeGalleryItem: (id) =>
    set((state) => ({ gallery: state.gallery.filter((g) => g.id !== id) })),
  toggleGalleryFeatured: (id) =>
    set((state) => ({
      gallery: state.gallery.map((g) =>
        g.id === id ? { ...g, featured: !g.featured } : g
      ),
    })),
  addTestimonial: (testimonial) =>
    set((state) => ({
      testimonials: [
        {
          ...testimonial,
          id: testimonial.id || Date.now().toString(),
          class: testimonial.class || testimonial.role || 'Parent',
          testimonial: testimonial.testimonial || testimonial.content || '',
        },
        ...state.testimonials,
      ],
    })),
  deleteTestimonial: (id) =>
    set((state) => ({
      testimonials: state.testimonials.filter((t) => t.id !== id),
    })),
  removeTestimonial: (id) =>
    set((state) => ({
      testimonials: state.testimonials.filter((t) => t.id !== id),
    })),
  updateHeroContent: (content) =>
    set((state) => ({
      heroContent: { ...state.heroContent, ...content },
    })),
  updateContactInfo: (info) =>
    set((state) => ({
      contactInfo: { ...state.contactInfo, ...info },
    })),
  updateSocialLinks: (links) =>
    set((state) => ({
      socialLinks: { ...state.socialLinks, ...links },
    })),
  updateSiteSettings: (settings) =>
    set((state) => ({
      siteSettings: {
        ...state.siteSettings,
        ...settings,
      },
    })),
}));
