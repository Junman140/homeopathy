import { Metadata } from 'next'

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  alternateName?: string
  url: string
  logo: string
  image?: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  contactPoint?: {
    '@type': string
    telephone: string
    contactType: string
    email?: string
    availableLanguage?: string[]
  }
  sameAs?: string[]
}

export interface EducationalOrganizationSchema {
  '@context': string
  '@type': string
  name: string
  alternateName?: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  hasCredential?: {
    '@type': string
    credentialCategory: string
    recognizedBy: {
      '@type': string
      name: string
    }
  }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  image: string
  '@id': string
  url: string
  telephone: string
  priceRange: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  geo: {
    '@type': string
    latitude?: string
    longitude?: string
  }
  openingHoursSpecification: Array<{
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  areaServed?: {
    '@type': string
    name: string
  }
}

export interface CourseSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    sameAs: string
  }
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  potentialAction: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export const generateOrganizationSchema = (): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
  alternateName: 'MOCHAM',
  url: 'https://www.mocham.org',
  logo: 'https://www.mocham.org/logo.png',
  image: 'https://www.mocham.org/logo.png',
  description: 'Leading medical and homeopathy school in Nigeria offering comprehensive alternative medicine education with integrated clinic services. Accredited programs, expert faculty, and hands-on clinical training since 1982.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street',
    addressLocality: 'Uyo',
    addressRegion: 'Akwa Ibom State',
    addressCountry: 'NG'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-803-793-5596',
    contactType: 'Main Office',
    email: 'Mochams1@yahoo.com',
    availableLanguage: ['English']
  },
  sameAs: []
})

export const generateEducationalOrganizationSchema = (): EducationalOrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
  alternateName: 'MOCHAM',
  url: 'https://www.mocham.org',
  logo: 'https://www.mocham.org/logo.png',
  description: 'Premier alternative medicine educational institution in Nigeria since 1982, offering comprehensive homeopathy, alternative medicine, and holistic health programs.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street',
    addressLocality: 'Uyo',
    addressRegion: 'Akwa Ibom State',
    addressCountry: 'NG'
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Diploma and Advanced Diploma Programs',
    recognizedBy: {
      '@type': 'Organization',
      name: 'All Nigeria Homoeopathic Medical Association'
    }
  }
})

export const generateLocalBusinessSchema = (): LocalBusinessSchema => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
  image: 'https://www.mocham.org/clinic.jpg',
  '@id': 'https://www.mocham.org',
  url: 'https://www.mocham.org',
  telephone: '+234-803-793-5596',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street',
    addressLocality: 'Uyo',
    addressRegion: 'Akwa Ibom State',
    postalCode: '520221',
    addressCountry: 'NG'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '5.0521',
    longitude: '7.9333'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: 'Uyo, Akwa Ibom State'
  }
})

export const generateCourseSchema = (course: {
  name: string
  description: string
}): CourseSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
    sameAs: 'https://www.mocham.org'
  }
})

export const generateWebSiteSchema = (): WebSiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
  url: 'https://www.mocham.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.mocham.org/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
})

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>): BreadcrumbListSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})
