import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { InspirationSection } from '@/components/sections/InspirationSection'
import { ChevronDown } from 'lucide-react'
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
    siteName: 'FunSmartism Intelligence Center',
    images: [{ url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'FunSmartism About' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FunSmartism | Our Story, Beliefs & Team',
    description:
      'Learn why FunSmartism was founded — a thinking lab built to give children real opportunities to build, experiment, and solve.',
    images: [`${siteUrl}/og-image-real.jpg`],
  },
}

const beliefsData = [
  {
    title: 'Many children do not lack ability. They often lack enough opportunities to solve unfamiliar challenges independently.',
  },
  {
    title: "Marks show outcomes. They do not always show how a child approaches difficulty, uncertainty, or real-world problem-solving.",
  },
  {
    title: 'Parents deserve more visibility than a report card alone can provide.',
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold uppercase tracking-[0.2em] mb-8">
              The Origin Story
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-[1.15] tracking-tight">
              We started FunSmartism because <br className="hidden md:block" />
              we kept seeing something <br className="hidden md:block" />
              <span className="text-accent-teal italic font-light">schools weren't designed to notice.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#B7E3DD] font-light leading-relaxed max-w-4xl mx-auto">
              Children often behave very differently when they are given real opportunities to build, explore, experiment, and solve unfamiliar challenges actively. <br />
              <span className="font-medium text-white">FunSmartism was created to provide more of those environments.</span>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-16 md:py-24 bg-white relative z-20">
        <SectionReveal className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary-500 mb-12 md:mb-16">
            Three Things We Believe.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {beliefsData.map((belief, i) => (
              <div key={i} className="relative overflow-hidden rounded-[20px] bg-neutral-50 border border-neutral-100 p-10 shadow-sm transition-shadow hover:shadow-md text-center">
                <div className="absolute left-0 top-0 w-full h-1 bg-accent-teal" />
                <h3 className="text-xl font-serif font-bold text-[#1E2A44] leading-relaxed">
                  {belief.title}
                </h3>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Why We Built This — VERTICAL FLOW REDESIGN */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden">
        <SectionReveal className="container-fluid max-w-4xl mx-auto relative z-10">
          
          {/* 1. Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
              Why We Built This <br />
              <span className="text-accent-teal italic font-light">Environment.</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {/* 2. Opening Paragraph */}
            <div className="bg-white p-8 md:p-12 rounded-[32px] border border-neutral-100 shadow-sm text-center">
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                Again and again, we noticed children becoming deeply engaged the moment learning became <span className="text-primary-500 font-medium">hands-on, exploratory, and real.</span>
              </p>
            </div>

            {/* 3. Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'A robot to test.',
                'A puzzle to solve.',
                'A structure to redesign.',
                'A question without one fixed answer.'
              ].map((item, i) => (
                <div key={i} className="bg-white px-8 py-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-2 h-2 rounded-full bg-accent-teal" />
                  <span className="text-primary-500 font-bold font-serif">{item}</span>
                </div>
              ))}
            </div>

            {/* 4 & 5. Observation & Parent Voice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-600 leading-relaxed font-light">
                  Children who rarely showed participation in standard classroom settings often became highly active inside these environments.
                </p>
                <p className="text-primary-500 font-medium italic">
                  Parents noticed the difference too. Many would say:
                </p>
              </div>
              <div className="bg-accent-teal/10 p-10 rounded-[32px] border border-accent-teal/20 text-center relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-teal text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Parent Voice
                </span>
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent-teal italic leading-tight">
                  “I haven’t seen my child this engaged in a long time.”
                </p>
              </div>
            </div>

            {/* 7, 8 & 9. The Foundation & The Lab */}
            <div className="space-y-8 pt-8">
              <div className="text-center space-y-4">
                <p className="text-lg text-neutral-500 font-light">That repeated pattern became the foundation of FunSmartism.</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  <span className="bg-neutral-100 px-4 py-2 rounded-full">Not as a tuition class</span>
                  <span className="bg-neutral-100 px-4 py-2 rounded-full">Not just common Robotics class</span>
                </div>
              </div>

              <div className="bg-primary-500 p-10 md:p-14 rounded-[40px] text-white shadow-huge shadow-primary-500/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 lab-grid opacity-10 group-hover:opacity-20 transition-opacity" />
                <p className="text-2xl md:text-3xl font-serif font-bold leading-tight relative z-10">
                  But as a hands-on RoboSTEM thinking lab where children actively participate in learning through experimentation, projects, challenges, and real-world exploration.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <FounderJourney />

      <OurTeam />

      <RealSessionMoments />

      <InspirationSection />

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-[#1E2A44] text-white text-center">
        <SectionReveal className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
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
          <p className="text-lg md:text-xl text-neutral-600 mb-10 md:mb-12 font-light leading-relaxed">
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
