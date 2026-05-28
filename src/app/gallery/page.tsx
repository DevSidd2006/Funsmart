import { Metadata } from 'next'
import { GalleryPageClient } from './GalleryPageClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Gallery & Newsroom | FunSmartism — Real Moments From Our Lab',
  description:
    'See real photos from the FunSmartism RoboSTEM thinking lab in Pune — children building, experimenting, solving challenges, and growing as independent thinkers.',
  keywords: [
    'FunSmartism gallery',
    'RoboSTEM photos',
    'STEM lab Pune',
    'children learning photos',
    'thinking lab Pune',
    'FunSmartism newsroom',
  ],
  alternates: { canonical: `${siteUrl}/gallery` },
  openGraph: {
    title: 'Gallery & Newsroom | FunSmartism — Real Moments From Our Lab',
    description:
      'See real photos from the FunSmartism RoboSTEM thinking lab — children building, experimenting, and solving real challenges.',
    url: `${siteUrl}/gallery`,
    siteName: 'FunSmartism',
    images: [
      { url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'FunSmartism Gallery' },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery & Newsroom | FunSmartism',
    description:
      'See real photos from the FunSmartism RoboSTEM thinking lab — children building, experimenting, and solving real challenges.',
    images: [`${siteUrl}/og-image-real.jpg`],
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
