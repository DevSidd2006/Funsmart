import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://funsmartism.com'

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
