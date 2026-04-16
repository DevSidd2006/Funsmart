import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealMoments } from '@/components/sections/RealMoments'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { client } from '@/sanity/lib/client'
import { aboutPageQuery, settingsQuery } from '@/sanity/lib/queries'
import { CheckCircle, Heart, Users } from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'About Us | FunSmartism',
  description: 'Discover why we built FunSmartism Intelligence Center. We observe how children think, not just what they score.',
  keywords: ['about FunSmartism', 'thinking lab', 'child observation', 'Pune education'],
  openGraph: {
    title: 'About FunSmartism | The Origin Story',
    description: 'We noticed it again and again: a child who struggled in a classroom would come alive the moment you put something real in their hands.',
    url: `${siteUrl}/about`,
    type: 'article',
  },
}

const defaultBeliefs = [
  {
    icon: CheckCircle,
    title: 'Thinking Habits Over Marks',
    description: "Children often don't struggle because of ability alone. Most struggle because they haven't yet built strong thinking habits for unfamiliar situations.",
  },
  {
    icon: Heart,
    title: 'Observation Over Instruction',
    description: 'Marks show outcomes. They don\'t show scientist-style problem-solving habits. A child can score well and still freeze when the problem is truly new.',
  },
  {
    icon: Users,
    title: 'Parents Deserve More',
    description: "Parents deserve more than a report card. A number doesn't show how a child thinks. We give you real language to understand your child's mind.",
  },
]

const sessionMoments = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    caption: 'Robotics build session',
    label: 'ENGINEERING',
  },
  {
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800',
    caption: 'Collaborative problem solving',
    label: 'TEAMWORK',
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    caption: 'Circuit design exploration',
    label: 'ELECTRONICS',
  },
]

export default async function AboutPage() {
  const [data, settings] = await Promise.all([
    client.fetch(aboutPageQuery, {}, { cache: 'no-store' }),
    client.fetch(settingsQuery, {}, { cache: 'no-store' })
  ])
  
  const headline = data?.hero?.headline || (
    <>We started FunSmartism because we kept seeing <br /><span className="text-accent-teal italic font-light">something schools weren't designed to notice.</span></>
  )
  const description = data?.hero?.description || "Capable children who came alive in scientist-inspired environments — and confused in environments that didn't give them that freedom. FunSmartism Intelligence Center was built to close that gap."
  const beliefs = data?.beliefs?.length > 0 ? data.beliefs : defaultBeliefs
  const philosophyHeading = data?.philosophy?.heading || "Why we built this."
  const philosophyDetail = data?.philosophy?.detail || "We noticed it again and again: a child who struggled in a classroom would come alive the moment you put something real in their hands. So we built a different kind of environment. One where thinking was the subject, not the by-product."

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-spacing bg-accent-surface relative">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ THE_ORIGIN ]</div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 mb-8 leading-[1.15]">
              {headline}
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              {description}
            </p>
            <Link href="/schedule-visit">
              <Button size="lg" className="bg-accent-teal border-none text-white px-10 shadow-lg">
                Schedule a Visit →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Core Beliefs — Card Layout */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ OUR_BELIEFS ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              3 Core Beliefs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief: any, i: number) => {
              const Icon = belief.icon || CheckCircle
              return (
                <div
                  key={i}
                  className="group bg-white border border-neutral-100 rounded-xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent-teal/30 transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:bg-accent-teal transition-colors duration-300">
                    <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-4 leading-snug">
                    {belief.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {belief.description || belief.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FounderJourney />
      <RealSessionMoments />
      <OurTeam />
      <RealMoments
        data={sessionMoments}
        label="[ FROM REAL SESSION ]"
        heading="From real session"
        subheading="These boxed moments show the real thinking habits we capture in our lab."
      />

      {/* Why We Built This */}
      <section className="section-spacing bg-primary-500 text-white relative overflow-hidden text-center">
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">{philosophyHeading}</h2>
            <p className="text-xl text-primary-100/70 leading-relaxed mb-12">
              {philosophyDetail}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-accent-teal border-none text-white px-10 shadow-xl">
                  Schedule a Visit →
                </Button>
              </Link>
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer data={settings} />
    </div>
  )
}
