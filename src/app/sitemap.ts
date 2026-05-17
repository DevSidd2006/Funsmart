import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

  const routes = [
    { path: '', priority: 1.0, changefreq: 'weekly' as const },
    { path: '/about', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/programs', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/gallery', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/schedule-visit', priority: 0.9, changefreq: 'weekly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }))
}
