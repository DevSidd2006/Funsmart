import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Gallery & Newsroom | FunSmartism - See Our Thinking Lab in Action',
  description: 'View photos and videos of our RoboSTEM thinking lab, student projects, and latest updates. See children solving real-world challenges.',
  keywords: ['gallery', 'newsroom', 'photos', 'videos', 'student projects', 'RoboSTEM', 'pune'],
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: 'Gallery & Newsroom | FunSmartism',
    description: 'See our thinking lab in action. Student projects, activities, and updates from FunSmartism.',
    url: `${siteUrl}/gallery`,
    type: 'website',
  },
}