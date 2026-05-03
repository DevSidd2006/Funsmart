import { Eye, Beaker, Lightbulb, FlaskConical, Compass, Brain, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, any> = {
  eye: Eye,
  beaker: Beaker,
  lightbulb: Lightbulb,
  brain: Brain
}

const defaultSteps = [
  {
    icon: Eye,
    step: '01',
    eyebrow: 'For Parents',
    title: 'Free Parent Orientation',
    description: 'Come in. Meet the team. See the FunSmartism RoboSTEM Thinking Lab. Ask everything.',
    bullets: ['30–45 minutes', 'No commitment required', 'On-site at Bibwewadi, Pune'],
    cta: null,
  },
  {
    icon: Beaker,
    step: '02',
    eyebrow: 'For Your Child',
    title: '10-Day Thinking Reset Workshop',
    description: 'Ten days. Ten themes. Real materials, real builds, scientist-style problem-solving — observed.',
    bullets: ['Daily challenges across 10 STEM themes', 'No step-by-step instructions', 'Most projects go home'],
    cta: { href: '/programs#workshop', label: 'Learn about the Workshop' },
  },
  {
    icon: Lightbulb,
    step: '03',
    eyebrow: 'Year-Long Program',
    title: 'RoboSTEM Thinking Lab',
    description: 'One theme per month. One session per week. Deep projects, thinking observations, and parent guidance.',
    bullets: ['Priority access to scientist interactions', 'Monthly thinking reports', 'Home guidance for parents'],
    cta: { href: '/programs#year-long', label: 'Explore the Year-Long Lab' },
  },
]

export function HowItWorks({ data }: { data?: any }) {
  const title = data?.title || 'Three steps to a thinking child.'
  const displaySteps = data?.steps?.length > 0 
    ? data.steps.map((s: any) => ({
        ...s,
        icon: iconMap[s.icon] || Lightbulb
      }))
    : defaultSteps

  return (
    <section className="section-spacing bg-accent-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] text-accent-teal/5 animate-float hidden lg:block">
        <FlaskConical size={120} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[20%] right-[3%] text-primary-500/5 animate-float-delayed hidden lg:block">
        <Compass size={160} strokeWidth={0.5} />
      </div>
      <div className="absolute top-[20%] right-[10%] text-accent-gold/10 animate-float-slow hidden lg:block">
        <Sparkles size={90} strokeWidth={0.5} />
      </div>

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Every child's journey follows the same path — from a parent's first visit to a year of deep discovery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {displaySteps.map((step: any, idx: number) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title || idx}
                  className="relative z-10 bg-white rounded-xl border border-neutral-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group flex flex-col"
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-all duration-400">
                      <Icon size={24} className="text-accent-teal group-hover:text-white transition-colors duration-400" />
                    </div>
                    <span className="text-5xl font-serif font-bold text-primary-100 select-none">
                      {step.step || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {step.bullets && (
                    <ul className="space-y-2 mb-6 flex-grow">
                      {step.bullets.map((b: string, bi: number) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-teal flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent-teal hover:gap-3 transition-all duration-300"
                    >
                      {step.cta.label}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
