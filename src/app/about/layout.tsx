import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'About Us | FunSmartism - Our Story & Mission',
  description: 'We started FunSmartism because we kept seeing something schools weren\'t designed to notice. Learn about our journey, philosophy, and team in Pune.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
