const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, './'),
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  compress: true,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/my-blog', destination: '/blog', permanent: true },
      { source: '/contact', destination: '/schedule-visit', permanent: true },
      { source: '/edu-activities', destination: '/programs', permanent: true },
      { source: '/edu-activities/edu-events', destination: '/programs', permanent: true },
      { source: '/edu-activities/edu-tour', destination: '/programs', permanent: true },
      { source: '/edu-activities/edu-toys', destination: '/programs', permanent: true },
      { source: '/edu-activities/workshops', destination: '/programs', permanent: true },
      { source: '/elementor-page-5219', destination: '/', permanent: true },
      // Other legacy URLs mentioned previously
      { source: '/current-activity', destination: '/programs', permanent: true },
      { source: '/activity', destination: '/programs', permanent: true },
      { source: '/quiz', destination: '/', permanent: true },
      { source: '/edu-tour', destination: '/programs', permanent: true }
    ]
  },
}

module.exports = nextConfig
