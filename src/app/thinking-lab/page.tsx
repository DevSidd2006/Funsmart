import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { client } from '@/sanity/lib/client'
import { labPageQuery, settingsQuery } from '@/sanity/lib/queries'
import { Eye, Beaker, Lightbulb, AlertOctagon, Shield, Users } from 'lucide-react'
import Link from 'next/link'

const defaultTimeline = [
  {
    time: 'Minute 1–2',
    icon: Eye,
    title: 'Observation',
    description: 'The child encounters an unfamiliar system. We watch how they form their first mental model — without saying a word.',
    bullets: ['No instructions given', 'Child decides where to start', 'We note initial approach'],
  },
  {
    time: 'Minute 3–6',
    icon: Beaker,
    title: 'Exploration',
    description: 'Testing boundaries. Real trial and error with physical materials. We observe how the child handles unexpected feedback.',
    bullets: ['Real materials, real feedback', 'No "right answer" exists', 'Failure is data, not defeat'],
  },
  {
    time: 'Minute 7–10',
    icon: Lightbulb,
    title: 'Adaptation',
    description: 'The child begins adjusting their strategy based on what the system told them. This is where thinking style becomes clearest.',
    bullets: ['Strategy shifts observed', 'Persistence vs. pivot noted', 'Insight moment captured'],
  },
]

const defaultNotList = [
  {
    icon: AlertOctagon,
    title: 'Not coaching',
    body: 'No one tells them what to do. The materials and the system give the feedback — not a facilitator.',
  },
  {
    icon: Shield,
    title: 'Not remedial',
    body: "This is not for \"struggling\" children. It's for any child who deserves a richer thinking environment.",
  },
  {
    icon: Users,
    title: 'Not gifted-only',
    body: 'Intelligence is a habit, not a fixed category. Every curious child aged 8–16 belongs in this lab.',
  },
]

export default async function ThinkingLabPage() {
  const [data, settings] = await Promise.all([
    client.fetch(labPageQuery, {}, { cache: 'no-store' }),
    client.fetch(settingsQuery, {}, { cache: 'no-store' })
  ])

  const heroLine1 = data?.hero?.headline || "We don't teach."
  const heroLine2 = data?.hero?.italicLine || "We observe."
  const gapHeading = data?.theGap?.heading || "Schools measure knowledge, not thinking."
  const gapDesc = data?.theGap?.description || "Children explore real systems without instructions. We observe how they interact with unfamiliar complexity, how they respond to failure, and how they bridge the gap between \"I don't know\" and \"I understand.\""
  const timeline = data?.firstTenMinutes?.length > 0 ? data.firstTenMinutes : defaultTimeline
  const notList = data?.notList?.length > 0 ? data.notList : defaultNotList

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-spacing bg-[#1E2A44] text-white relative overflow-hidden flex items-center min-h-[65vh]">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2FB5A3]/10 rounded-full blur-3xl" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-mono text-[#2FB5A3] mb-6 uppercase tracking-widest">[ METHODOLOGY ]</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              {heroLine1} <br />
              <span className="text-[#2FB5A3] italic font-light">{heroLine2}</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              A lab where the child is the scientist. Every session is an experiment in how they think.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap — broken into scannable blocks */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="text-mono text-accent-teal mb-5 uppercase tracking-widest">[ THE GAP ]</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
                {gapHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-8">
                <div className="text-mono text-[10px] text-neutral-400 mb-4 uppercase tracking-widest">WHAT SCHOOLS MEASURE</div>
                <ul className="space-y-3">
                  {['Test scores & grades', 'Speed of recall', 'Compliance with instructions', 'Attendance & behavior'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 border border-primary-100/50 rounded-xl p-8">
                <div className="text-mono text-[10px] text-accent-teal mb-4 uppercase tracking-widest">WHAT WE OBSERVE</div>
                <ul className="space-y-3">
                  {['First instinct when facing the unknown', 'Willingness to retry after failure', 'Strategy shifts mid-problem', 'Independent insight moments'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-500 text-sm font-medium">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg text-neutral-500 leading-relaxed text-center max-w-2xl mx-auto">
              {gapDesc}
            </p>
          </div>
        </div>
      </section>

      {/* The First 10 Minutes — enhanced step cards */}
      <section className="section-spacing bg-accent-surface">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="text-mono text-accent-teal mb-5 uppercase tracking-widest">[ INSIDE A SESSION ]</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500">
              The First 10 Minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {timeline.map((step: any, i: number) => {
              const Icon = step.icon || Eye
              return (
                <div key={i} className="group bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent-teal/30 transition-all duration-400 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-colors duration-300">
                      <Icon size={22} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-4xl font-serif font-bold text-primary-100 select-none">0{i + 1}</span>
                  </div>
                  <div className="text-mono text-accent-teal text-[9px] mb-2 uppercase tracking-widest">
                    {step.time}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-grow">
                    {step.description || step.desc}
                  </p>
                  {step.bullets && (
                    <ul className="space-y-2">
                      {step.bullets.map((b: string, bi: number) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-neutral-500">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-teal flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What This Is NOT */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="text-mono text-accent-teal mb-5 uppercase tracking-widest">[ IMPORTANT ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500">
              What this is <em>NOT</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {notList.map((item: any, i: number) => {
              const Icon = item.icon || AlertOctagon
              return (
                <div key={i} className="bg-neutral-50 border border-neutral-100 rounded-xl p-8 text-center">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5 mx-auto">
                    <Icon size={22} className="text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-3">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.description || item.body || item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing text-center bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Observe your child's thinking.
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Start with a free parent orientation. 30–45 minutes. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule-visit">
              <Button size="lg" className="bg-[#2FB5A3] border-none text-white px-10 shadow-lg">
                Schedule a Visit →
              </Button>
            </Link>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all duration-300"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>
      <Footer data={settings} />
    </div>
  )
}
