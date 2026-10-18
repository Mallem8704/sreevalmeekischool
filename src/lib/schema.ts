export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getSchoolJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'School'],
    name: 'Sree Valmeeki E.M School',
    alternateName: ['Sree Valmeeki High School', 'Valmeeki School Kadiri'],
    url: 'https://www.sreevalmeekischool.in',
    logo: 'https://www.sreevalmeekischool.in/logo.png',
    image: 'https://www.sreevalmeekischool.in/images/campus/school_entrance_gate.jpg',
    foundingDate: '1999-06-06',
    telephone: '+919440468838',
    email: 'info@sreevalmeekischool.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Madanapalli Road / NH-205, Near Chowdeswari Temple',
      addressLocality: 'Kadiri',
      addressRegion: 'Andhra Pradesh',
      postalCode: '515591',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.1118,
      longitude: 78.1561,
    },
    sameAs: [
      'https://www.facebook.com/Sree-valmeeki-high-school-1574341916174521/',
      'https://www.youtube.com/@Dhanunjay-t5v',
      'https://instagram.com',
    ],
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.sreevalmeekischool.in${item.url}`,
    })),
  };
}
