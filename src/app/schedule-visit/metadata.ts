import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'Schedule a Visit | FunSmartism',
  description: 'Book an orientation visit to FunSmartism Intelligence Center. See our thinking lab in action.',
  keywords: ['schedule visit', 'orientation', 'thinking lab'],
  openGraph: {
    title: 'Schedule a Visit | FunSmartism',
    description: 'Start with a conversation. Visit our lab and see how we observe thinking.',
    url: `${siteUrl}/schedule-visit`,
    type: 'website',
  },
}
