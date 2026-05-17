import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism - RoboSTEM Learning for Kids',
  description: 'Explore our 10-day intensive workshops and year-long RoboSTEM programs. Hands-on learning, problem-solving, and critical thinking development for children aged 8-15 in Pune.',
  keywords: ['RoboSTEM program', 'stem education', 'robotics for kids', 'year-long program', 'workshop', 'pune', 'children learning'],
  alternates: {
    canonical: `${siteUrl}/programs`,
  },
  openGraph: {
    title: 'Programs | FunSmartism',
    description: 'Hands-on RoboSTEM programs for children aged 8-15. Build projects, solve challenges, learn through experimentation.',
    url: `${siteUrl}/programs`,
    type: 'website',
  },
}