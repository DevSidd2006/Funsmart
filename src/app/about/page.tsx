import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { WhyWeBuiltThis } from '@/components/sections/WhyWeBuiltThis'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.vercel.app'

export const metadata: Metadata = {
  title: 'About Us | FunSmartism',
  description: 'Discover why we built FunSmartism Intelligence Center. We observe how children think, not just what they score.',
  keywords: ['about FunSmartism', 'thinking lab', 'child observation'],
  openGraph: {
    title: 'About FunSmartism | The Origin Story',
    description: "We noticed it again and again: a child who struggled in a classroom would come alive the moment you put something real in their hands.",
    url: `${siteUrl}/about`,
    type: 'article',
  },
}

const beliefsData = [
  {
    description: 'Many children do not lack ability. They often lack enough opportunities to solve unfamiliar challenges independently.',
  },
  {
    description: "Marks show outcomes. They do not always show how a child approaches difficulty, uncertainty, or real-world problem-solving.",
  },
  {
    description: "Parents deserve more visibility than a report card alone can provide.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-accent-surface relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-primary-500 mb-8 leading-tight tracking-tight">
              We Started FunSmartism Because We Kept Seeing <br className="hidden md:block" />
              <span className="block text-2xl md:text-4xl lg:text-[3.25rem] text-accent-teal italic font-light mt-2">Something Schools Weren’t Designed To Notice.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-4xl mx-auto">
              Children often behave very differently when they are given real opportunities to build, explore, experiment, and solve unfamiliar challenges actively.
              FunSmartism was created to build more of those environments.
            </p>
          </div>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-24 bg-neutral-50 relative z-20 border-y border-neutral-100">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#1E2A44] mb-16">
            Three Things We Believe.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefsData.map((belief, i) => (
              <div key={i} className="relative overflow-hidden rounded-[24px] bg-white border border-neutral-200 p-10 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-neutral-700 leading-relaxed text-lg font-medium">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyWeBuiltThis />

      <RealSessionMoments />

      {/* Philosophy */}
      <section className="py-32 bg-[#1E2A44] text-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
            Marks show outcomes. <br className="hidden md:block" />
            <span className="text-accent-teal">Real-world learning experiences shape confidence, curiosity, and independent problem-solving.</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed font-light italic">
            We are not against exams, academics, or results. We simply believe children also need environments where they can actively participate in learning instead of only consuming instructions.
          </p>
        </div>
      </section>

      <OurTeam />

      {/* CTA */}
      <section className="section-spacing text-center bg-primary-500 text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
              See The Environment In Person
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-12 font-light italic max-w-3xl mx-auto">
              The best way to understand FunSmartism is to experience a real session, workshop, or STEM challenge environment directly.
            </p>

            <Link href="/schedule-visit" className="inline-block">
              <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
                Schedule A Visit →
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
