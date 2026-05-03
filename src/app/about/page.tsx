import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { galleryItems } from '@/data/gallery'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'About Us | FunSmartism',
  description: 'We started FunSmartism because we kept seeing something schools weren’t designed to notice.',
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
      <section className="pt-40 pb-24 bg-accent-surface relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-primary-500 mb-8 leading-tight tracking-tight">
              We Started FunSmartism Because We Kept Seeing <br className="hidden md:block" />
              <span className="block text-2xl md:text-4xl lg:text-[3.25rem] text-accent-teal italic font-light">Something Schools Weren’t Designed To Notice.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-4xl mx-auto">
              Children often behave very differently when they are given real opportunities to build, explore, experiment, and solve unfamiliar challenges actively. <br />
              <span className="font-medium text-primary-500">FunSmartism was created to provide more of those environments.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-16 bg-white relative z-20">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1E2A44] mb-16">
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
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 bg-[#FAF9F6] relative">
        <div className="container-fluid max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-12">
            Why We Built This Environment
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            <p>
              Again and again, we noticed children becoming deeply engaged the moment learning became hands-on, exploratory, and real.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 py-8">
              {['A robot to test.', 'A puzzle to solve.', 'A structure to redesign.', 'A question without one fixed answer.'].map((item, i) => (
                <span key={i} className="bg-white px-6 py-3 rounded-full border border-neutral-100 shadow-sm text-primary-500 font-medium text-sm">
                  {item}
                </span>
              ))}
            </div>

            <p>
              Children who rarely showed participation in standard classroom settings often became highly active inside these environments.
            </p>
            <p className="text-primary-500 font-medium italic">
              Parents noticed the difference too. Many would say:
            </p>
            <p className="text-3xl md:text-4xl font-serif font-bold text-accent-teal italic">
              “I haven’t seen my child this engaged in a long time.”
            </p>
            
            <div className="pt-12 space-y-4">
              <p>That repeated pattern became the foundation of FunSmartism.</p>
              <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-bold uppercase tracking-widest text-neutral-400">
                <span>Not as a tuition class</span>
                <span className="hidden md:block opacity-30">·</span>
                <span>Not just common Robotics class</span>
              </div>
              <p className="text-primary-500 font-bold text-2xl font-serif">
                But as a hands-on RoboSTEM thinking lab where children actively participate in learning through experimentation, projects, challenges, and real-world exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RealSessionMoments />

      {/* Philosophy */}
      <section className="py-20 bg-[#1E2A44] text-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
            Marks show outcomes. <br className="hidden md:block" />
            <span className="text-accent-teal">Real-world learning experiences shape confidence, curiosity, and independent problem-solving — not rote learning.</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto">
            We are not against exams, academics, or results. We simply believe children also need environments where they can actively participate in learning instead of only following instructions.
          </p>
        </div>
      </section>

      {/* Gallery Thumbnails Teaser */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
              Real moments from <span className="text-accent-teal italic font-light">our lab.</span>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            See The Environment <span className="text-accent-teal italic font-light">yourself</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-12 font-light leading-relaxed">
            The best way to understand FunSmartism is to experience a real session, workshop, or STEM challenge environment directly.
          </p>
          <Link href="/schedule-visit">
            <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
              Schedule A Visit →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

