import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Schedule a Visit | FunSmartism - Book Orientation',
  description: 'Book an orientation visit to FunSmartism Intelligence Center. See our thinking lab in action and meet our facilitators in Pune.',
  keywords: ['schedule visit', 'orientation', 'thinking lab', 'book visit pune', 'child assessment'],
  alternates: {
    canonical: `${siteUrl}/schedule-visit`,
  },
  openGraph: {
    title: 'Schedule a Visit | FunSmartism',
    description: 'Start with a conversation. Visit our lab and see how we observe thinking.',
    url: `${siteUrl}/schedule-visit`,
    type: 'website',
  },
}
