import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | FunSmartism',
  description: 'We started FunSmartism because we kept seeing something schools weren’t designed to notice.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
