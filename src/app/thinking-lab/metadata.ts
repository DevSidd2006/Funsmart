import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'The Thinking Lab | FunSmartism',
  description: "We don't teach. We observe. See how our methodology works to build thinking habits in children aged 8-14.",
  keywords: ['thinking lab', 'methodology', 'child observation', 'cognitive habits', 'Pune'],
  openGraph: {
    title: 'The Thinking Lab Methodology | FunSmartism',
    description: 'Schools measure knowledge, not thinking. We observe how children interact with unfamiliar complexity.',
    url: `${siteUrl}/thinking-lab`,
    type: 'article',
  },
}
