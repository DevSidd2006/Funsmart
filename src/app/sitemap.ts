import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

  const routes = [
    '',
    '/about',
    '/activities',
    '/blogs',
    '/for-parents',
    '/gallery',
    '/programs',
    '/schedule-visit',
    '/thinking-lab',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
