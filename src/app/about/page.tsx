import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { FounderJourney } from '@/components/sections/FounderJourney'
import { OurTeam } from '@/components/sections/OurTeam'
import { RealSessionMoments } from '@/components/sections/RealSessionMoments'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

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
    title: 'Children often don’t struggle because of marks or ability alone.',
    description: 'Most struggle because they haven’t yet built strong thinking habits for unfamiliar situations. That is a very different problem — and it has a very different solution.',
  },
  {
    title: "Marks show outcomes. They don't show independant problem-solving habits.",
    description: "A child can score well and still freeze when facing something they haven't seen before. A child can score poorly and still explore, persist, and adapt beautifully. The two things are not the same — and confusing them does real damage.",
  },
  {
    title: 'Parents deserve more than a report card.',
    description: "Marks tell you what your child scored. It doesn’t show how they approach difficulty, what lights them up, or how they test and retry in action. That insight exists—it just needs the right environment to become visible.",
  },
]

export default function AboutPage() {
  const faqs = [
    { label: "What we are", answer: "FunSmartism Intelligence Center — a Thinking Lab where children explore real systems, build real things, and experience hands-on problem-solving." },
    { label: "Our program", answer: "FunSmartism RoboSTEM Thinking Lab — 10 themes, available as a 10-day workshop or a year-long program." },
    { label: "Who we're for", answer: "Children aged 8–16 and their parents. All learning backgrounds." },
    { label: "What we observe", answer: "Thinking habits — how a child approaches the unfamiliar, handles difficulty, and engages with a challenge." },
    { label: "What parents receive", answer: "Specific, parent insight notes + clear guidance on how to respond at home. Not grades. Not comparisons. A window into how their child thinks." },
    { label: "Edu events", answer: "Year-long students get priority access — and real responsibilities. They run the events alongside us for invited scientists, school mentors, and experts." },
    { label: "Entry point", answer: "A free parent orientation. Come in. understand the process. Ask everything." },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-accent-surface relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-primary-500 mb-8 leading-tight tracking-tight">
              We started FunSmartism because we kept seeing <br className="hidden md:block" />
              <span className="block text-2xl md:text-4xl lg:text-[3.25rem] text-accent-teal italic font-light">something schools weren't designed to notice.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-4xl mx-auto">
              We kept seeing capable children come alive in real-world learning environment that gave them freedom—and shut down in environments that didn’t. Parents could sense it too, but had no language for what they were seeing. FunSmartism was built to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-24 bg-white relative z-20">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1E2A44] mb-16">
            Three things we believe.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {beliefsData.map((belief) => (
              <div key={belief.title} className="relative overflow-hidden rounded-[20px] bg-neutral-50 border border-neutral-100 p-10 shadow-sm transition-shadow hover:shadow-md">
                <div className="absolute left-0 top-0 h-full w-2 rounded-r-xl bg-[#1E2A44]" />
                <h3 className="text-2xl font-serif font-bold text-[#1E2A44] mb-5 pr-2">
                  {belief.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderJourney />

      <RealSessionMoments />

      {/* Philosophy */}
      <section className="py-32 bg-[#1E2A44] text-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
            Marks show outcomes. <br className="hidden md:block" />
            <span className="text-accent-teal">Scientist-style thinking habits shape futures.</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed font-light">
            We are not against exams. We are not against results. We are against the idea that results are the whole picture — and that parents should navigate their child's development with only that information in hand.
          </p>
        </div>
      </section>

      <OurTeam />

      {/* Quick Info / FAQ */}
      <section className="section-spacing bg-neutral-50 border-t border-neutral-200">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#1E2A44] mb-4">In brief</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.label} className="group border border-neutral-200 bg-white rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#1E2A44] hover:text-accent-teal transition-colors">
                  {faq.label}
                  <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-neutral-600 leading-relaxed text-sm opacity-90">
                  {faq.answer}
                </div>
              </details>
            ))}

            <div className="border border-neutral-200 bg-white rounded-2xl p-6 mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-sm">
              <div>
                <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-widest block mb-2">Location</span>
                <p className="text-[#1E2A44] font-medium text-sm leading-relaxed">Navkar Residency, Swami Vivekanand Road, Next to Bibwewadi Police Station, Bibwewadi, Pune 411037</p>
              </div>
              <div className="h-px md:h-12 w-full md:w-px bg-neutral-100"></div>
              <div>
                <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-widest block mb-2">Contact</span>
                <p className="text-[#1E2A44] font-medium text-sm">+91 99999 99999 <span className="mx-2 text-neutral-300">·</span> hello@funsmartism.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing text-center bg-primary-500 text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
              Come and experience real <span className="text-accent-teal italic font-light">problem-solving</span> in action.
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-16 font-light italic">
              The orientation is free. The conversation is real. Your questions are welcome.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold">
                  Schedule a Visit →
                </Button>
              </Link>
            </div>

            <div className="mt-12 space-y-2">
              <p className="text-xs text-white/30 font-mono tracking-[0.3em] uppercase font-bold">
                Free Parent Orientation · 30–45 minutes 📍 Bibwewadi, Pune
              </p>
              <p className="text-xs text-white/40 font-medium">
                We'll confirm within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
