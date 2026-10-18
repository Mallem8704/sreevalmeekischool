import type { MetadataRoute } from 'next';
import { eventStories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sreevalmeekischool.in';

  // Static real modification dates reflecting actual update chronology
  const pageDates: Record<string, string> = {
    '': '2026-10-18',
    '/about': '2026-10-18',
    '/leadership': '2026-10-18',
    '/academics': '2026-10-17',
    '/academics/iit-foundation': '2026-10-17',
    '/campus': '2026-10-16',
    '/achievements': '2026-10-18',
    '/gallery': '2026-10-16',
    '/events': '2026-10-15',
    '/news': '2026-10-14',
    '/admissions': '2026-10-18',
    '/contact': '2026-10-18',
    '/privacy-policy': '2026-10-18',
  };

  const mainPages: MetadataRoute.Sitemap = Object.entries(pageDates).map(([path, dateStr]) => {
    let priority = 0.7;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';

    if (path === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (path === '/admissions' || path === '/achievements') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (path === '/about' || path === '/academics' || path === '/leadership') {
      priority = 0.8;
      changeFrequency = 'monthly';
    } else if (path === '/privacy-policy') {
      priority = 0.3;
      changeFrequency = 'yearly';
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(`${dateStr}T00:00:00Z`),
      changeFrequency,
      priority,
    };
  });

  const eventPages: MetadataRoute.Sitemap = eventStories.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date('2026-10-15T00:00:00Z'),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...mainPages, ...eventPages];
}
