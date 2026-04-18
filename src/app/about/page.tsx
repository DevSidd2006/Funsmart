import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { CoreBeliefs } from '@/components/sections/CoreBeliefs'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealMoments } from '@/components/sections/RealMoments'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { sanityFetch } from '@/sanity/lib/live'
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
    title: 'Children often don’t struggle because of marks or ability alone.',
    description: "Most struggle because they haven’t yet built strong thinking habits for unfamiliar situations. That is a very different problem — and it has a very different solution.",
  },
  {
    icon: Heart,
    title: 'Marks show outcomes. They don\'t show independant problem-solving habits.',
    description: "A child can score well and still freeze when facing something they haven't seen before. A child can score poorly and still explore, persist, and adapt beautifully. The two things are not the same — and confusing them does real damage.",
  },
  {
    icon: Users,
    title: 'Parents deserve more than a report card.',
    description: "Marks tell you what your child scored. It doesn’t show how they approach difficulty, what lights them up, or how they test and retry in action. That insight exists —it just needs the right environment to become visible.",
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
  const [
    { data },
    { data: settings }
  ] = await Promise.all([
    sanityFetch({ query: aboutPageQuery }),
    sanityFetch({ query: settingsQuery })
  ])
  
  const headline = data?.hero?.headline || (
    <>We started FunSmartism because we kept seeing <br /><span className="text-accent-teal italic font-light">something schools weren't designed to notice.</span></>
  )
  const description = data?.hero?.description || "We kept seeing capable children come alive in real-world learning environment that gave them freedom —and shut down in environments that didn’t. Parents could sense it too, but had no language for what they were seeing. FunSmartism was built to close that gap."
  const beliefs = data?.beliefs?.length > 0 ? data.beliefs : defaultBeliefs
  const philosophyHeading = data?.philosophy?.heading || "Marks show outcomes. Scientist-style thinking habits shape futures."
  const philosophyDetail = data?.philosophy?.detail || "We are not against exams. We are not against results. We are against the idea that results are the whole picture — and that parents should navigate their child's development with only that information in hand."

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-spacing bg-accent-surface relative">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
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

      {/* 3 Core Beliefs */}
      <CoreBeliefs data={beliefs} />

      <FounderJourney />
      <RealSessionMoments />
      <OurTeam />
      <RealMoments
        data={sessionMoments}
        heading="From real session"
        subheading="These boxed moments show the real thinking habits we capture in our lab."
      />

      {/* Philosophy */}
      <section className="section-spacing bg-primary-500 text-white relative overflow-hidden text-center">
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">{philosophyHeading}</h2>
            <p className="text-xl text-primary-100/70 leading-relaxed mb-8">
              {philosophyDetail}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-spacing bg-white border-t border-neutral-100">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-500 mb-4">In brief</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-bold text-primary-500 mb-2">What we are</h3>
              <p className="text-neutral-600 text-sm">FunSmartism Intelligence Center — a Thinking Lab where children explore real systems, build real things, and experience hands-on problem-solving.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">Our program</h3>
              <p className="text-neutral-600 text-sm">FunSmartism RoboSTEM Thinking Lab — 10 themes, available as a 10-day workshop or a year-long program.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">Who we're for</h3>
              <p className="text-neutral-600 text-sm">Children aged 8–16 and their parents. All learning backgrounds.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">What we observe</h3>
              <p className="text-neutral-600 text-sm">Thinking habits — how a child approaches the unfamiliar, handles difficulty, and engages with a challenge.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">What parents receive</h3>
              <p className="text-neutral-600 text-sm">Specific, parent insight notes + clear guidance on how to respond at home. Not grades. Not comparisons. A window into how their child thinks.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">Edu events</h3>
              <p className="text-neutral-600 text-sm">Year-long students get priority access — and real responsibilities. They run the events alongside us for invited scientists school mentors, and experts.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">Entry point</h3>
              <p className="text-neutral-600 text-sm">A free parent orientation. Come in. understand the process. Ask everything.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-500 mb-2">Contact</h3>
              <p className="text-neutral-600 text-sm">[ADDRESS]<br/>[PHONE / WHATSAPP] · [EMAIL]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-accent-surface relative overflow-hidden text-center border-t border-neutral-100">
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-primary-500">Come and experience real problem-solving in action.</h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-6">
              The orientation is free. The conversation is real. Your questions are welcome.
            </p>
            <p className="text-sm font-mono text-accent-teal uppercase tracking-widest mb-10">
              Free Parent Orientation · 30–45 minutes <br/> 📍 Bibwewadi, Pune · We'll confirm within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-accent-teal border-none text-white px-10 shadow-xl">
                  Schedule a Visit →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer data={settings} />
    </div>
  )
}
