/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://funsmartism.in',
  generateRobotsTxt: true,
  exclude: ['/studio/*', '/api/*', '/admin/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/', '/admin/', '/_next/', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/studio/', '/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/studio/', '/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
}
