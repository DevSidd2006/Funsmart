import { Metadata } from 'next'
import { ScheduleVisitPageClient } from './ScheduleVisitPageClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Schedule a Visit | FunSmartism Intelligence Center',
  description:
    'Book a visit to FunSmartism in Bibwewadi, Pune. See the hands-on RoboSTEM learning environment in person, meet the team, and find the right program for your child aged 8–16.',
  keywords: [
    'schedule a visit FunSmartism',
    'RoboSTEM lab Pune',
    'STEM center Bibwewadi',
    'visit thinking lab',
    'children learning center Pune',
    'book lab visit',
  ],
  alternates: { canonical: `${siteUrl}/schedule-visit` },
  openGraph: {
    title: 'Schedule a Visit | FunSmartism Intelligence Center',
    description:
      'Book a visit to FunSmartism in Bibwewadi, Pune. See the hands-on RoboSTEM environment and find the right program for your child.',
    url: `${siteUrl}/schedule-visit`,
    siteName: 'FunSmartism Intelligence Center',
    images: [
      { url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'Schedule a Visit to FunSmartism' },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Visit | FunSmartism',
    description:
      'Book a visit to FunSmartism in Bibwewadi, Pune. See the hands-on RoboSTEM environment in person.',
    images: [`${siteUrl}/og-image-real.jpg`],
  },
}

export default function ScheduleVisitPage() {
  return <ScheduleVisitPageClient />
}
