import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/portal/'],
      },
    ],
    sitemap: 'https://www.mocham.org/sitemap.xml',
  }
}
