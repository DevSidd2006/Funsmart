import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { Brain, FileX, Eye, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { galleryItems } from '@/data/gallery'
import { SectionReveal } from '@/components/ui/SectionReveal'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'About FunSmartism | Our Story, Beliefs & Team',
  description:
    'Learn why FunSmartism was founded — a thinking lab built to give children real opportunities to build, experiment, and solve unfamiliar challenges. Based in Bibwewadi, Pune.',
  keywords: [
    'about FunSmartism',
    'founder story',
    'STEM learning Pune',
    'children thinking lab',
    'hands-on education Pune',
    'RoboSTEM',
  ],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: 'About FunSmartism | Our Story, Beliefs & Team',
    description:
      'Learn why FunSmartism was founded — a thinking lab built to give children real opportunities to build, experiment, and solve unfamiliar challenges.',
    url: `${siteUrl}/about`,
    siteName: 'FunSmartism',
    images: [{ url: `${siteUrl}/og-image-about.jpg`, width: 1200, height: 630, alt: 'FunSmartism About' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FunSmartism | Our Story, Beliefs & Team',
    description:
      'Learn why FunSmartism was founded — a thinking lab built to give children real opportunities to build, experiment, and solve.',
    images: [`${siteUrl}/og-image-about.jpg`],
  },
}

const beliefsData = [
  {
    icon: 'Brain',
    number: '01',
    title: 'Many children do not lack ability.',
    body: 'They often lack enough opportunities to solve unfamiliar challenges independently.',
    accent: 'text-accent-teal',
    border: 'border-accent-teal/30',
  },
  {
    icon: 'FileX',
    number: '02',
    title: 'Marks show outcomes.',
    body: 'They do not always show how a child approaches difficulty, uncertainty, or real-world problem-solving.',
    accent: 'text-white',
    border: 'border-white/20',
  },
  {
    icon: 'Eye',
    number: '03',
    title: 'Parents deserve more visibility.',
    body: 'A report card alone cannot show how a child thinks when there are no instructions waiting.',
    accent: 'text-accent-teal',
    border: 'border-accent-teal/30',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-28 md:pt-44 pb-16 md:pb-24 bg-[#1E2A44] relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="container-fluid relative z-10 text-center">
          <SectionReveal className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              We started FunSmartism because <br className="hidden md:block" />
              we kept seeing something <br className="hidden md:block" />
              <span className="text-accent-teal italic font-light">schools weren't designed to notice.</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-white mb-8 max-w-4xl mx-auto leading-snug">
              And because we believed children deserved more than kits and certificates — they deserved access to the people who actually think, build, and discover.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-[#B7E3DD] font-light leading-relaxed max-w-4xl mx-auto">
              Children often behave very differently when they are given real opportunities to build, explore, experiment, and solve unfamiliar challenges actively. <br />
              <span className="font-medium text-white">FunSmartism was created to provide more of those environments.</span>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-16 md:py-24 bg-[#1E2A44] relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-teal/10 rounded-full blur-[120px]" />
        <SectionReveal className="container-fluid max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Three Things We Believe.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Brain,
                number: '01',
                title: 'Many children do not lack ability.',
                body: 'They often lack enough opportunities to solve unfamiliar challenges independently.',
              },
              {
                Icon: FileX,
                number: '02',
                title: 'Marks show outcomes.',
                body: 'They do not always show how a child approaches difficulty, uncertainty, or real-world problem-solving.',
              },
              {
                Icon: Eye,
                number: '03',
                title: <>Parents deserve <Link href="/programs" className="underline hover:text-accent-teal transition-colors">more visibility</Link></>,
                body: 'than a report card alone can provide.',
              },
            ].map(({ Icon, number, title, body }, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-10 hover:bg-white/10 hover:border-accent-teal/40 transition-all duration-500 group"
              >
                {/* Number badge */}
                <span className="absolute top-8 right-8 text-[11px] font-sans font-bold text-white/20 tracking-widest">{number}</span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal mb-8 group-hover:bg-accent-teal group-hover:text-white transition-all duration-500">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-white mb-4 leading-snug">
                  {title}
                </h3>
                <p className="text-[#B7E3DD] font-light leading-relaxed text-sm">
                  {body}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-teal group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>



      <FounderJourney />
      <OurTeam />
      <RealSessionMoments />



      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-[#1E2A44] text-white text-center">
        <SectionReveal className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
            Marks show outcomes. <br className="hidden md:block" />
            <span className="text-accent-teal">Real-world learning experiences shape confidence, curiosity, and independent problem-solving — not rote learning.</span>
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto">
            We are not against exams, academics, or results. We simply believe children also need environments where they can actively participate in learning instead of only following instructions.
          </p>
        </SectionReveal>
      </section>

      {/* Gallery Thumbnails Teaser */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <SectionReveal className="container-fluid">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
              Real moments from <span className="text-accent-teal italic font-light">FunSmartism.</span>
            </h2>
            <Link href="/gallery" className="group inline-flex items-center gap-2 text-accent-teal font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all whitespace-nowrap">
              View Full Gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, 8).map((item, i) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={item.image as string}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-serif font-bold leading-snug">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white text-center">
        <SectionReveal className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 md:mb-8 leading-tight">
            See The Environment <span className="text-accent-teal italic font-light">yourself</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 mb-10 md:mb-12 font-light leading-relaxed">
            The best way to understand FunSmartism is to experience a real session, workshop, or STEM challenge environment directly.
          </p>
          <Link href="/schedule-visit">
            <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
              Schedule a Visit
            </Button>
          </Link>
        </SectionReveal>
      </section>
    </div>
  )
}
