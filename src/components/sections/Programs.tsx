import Link from 'next/link'
import { Button } from '../ui/Button'
import { ArrowRight, Milestone, Clock, Calendar, Target, ShieldAlert } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

export function Programs() {
  const programsList: Array<{
    id: string
    title: string
    tag: string
    icon: any
    color: string
    accentColor: string
    badgeColor: string
    desc: string
    highlight?: string
    cta: string
    pricing?: string
    batch?: string
  }> = [
    {
      id: 'year-long',
      title: 'RoboSTEM Thinking Lab — Annual Program',
      tag: 'Year-Long Program',
      icon: Milestone,
      color: 'bg-primary-500 text-white',
      accentColor: 'text-accent-teal',
      badgeColor: 'bg-accent-teal/20 text-accent-teal',
      desc: '2 weekend sessions per month. Hands-on projects, robotics, engineering challenges, and real-world experimentation across 10 themes. Children build, test, and solve — facilitators observe how they think.',
      highlight: 'Children are guided— but not spoon-fed fixed answers.',
      cta: 'Explore Annual Lab',
    },
    {
      id: 'friday-club',
      title: 'Friday STEM Challenge Club',
      tag: 'Weekly Club',
      icon: Clock,
      color: 'bg-[#FAF9F6] border border-neutral-100',
      accentColor: 'text-primary-500',
      badgeColor: 'bg-primary-50 text-primary-500',
      desc: 'Weekly sessions every Friday. Independent challenge-based problems designed to build consistent thinking habits outside school routine for the whole academic year.',
      cta: 'Explore Friday Club',
    },
    {
      id: 'workshop',
      title: '10-Day STEM Tinkering Workshop',
      tag: 'Vacation Program',
      icon: Calendar,
      color: 'bg-[#FAF9F6] border border-neutral-100',
      accentColor: 'text-primary-500',
      badgeColor: 'bg-accent-teal/10 text-accent-teal',
      desc: 'Intensive vacation program. One new STEM theme every day — projects, experiments, and hands-on challenges across robotics, space science, electronics, and more.',
      cta: 'Explore Workshop',
      batch: 'Next batch: [Vacation season]',
    },
    {
      id: 'one-day',
      title: '1-Day STEM Challenge',
      tag: 'Trial Day',
      icon: Target,
      color: 'bg-[#FAF9F6] border border-neutral-100',
      accentColor: 'text-primary-500',
      badgeColor: 'bg-neutral-100 text-neutral-600',
      desc: 'A one-day hands-on challenge where parents observe — not instruct. Children face unfamiliar problems with no hints and no fixed answers, while you watch how they actually think. Uncertainty handling - how they react without ready answers.',
      cta: 'Book Trial Day',
      batch: 'New batch : {check schedule}',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="homepage-programs">
      <SectionReveal className="container-fluid max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent-teal font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-tight tracking-tight mb-6">
            Programs Structured Like Workshops.<br />Not a Tuition Class.
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
            FunSmartism follows a focused exploratory approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programsList.map((prog, i) => {
            const Icon = prog.icon
            const isDark = prog.id === 'year-long'
            return (
              <div
                key={prog.id}
                className={`p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 hover:shadow-huge hover:-translate-y-1 ${prog.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${prog.badgeColor}`}>
                      {prog.tag}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/10 text-accent-teal' : 'bg-primary-50 text-primary-500'}`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className={`text-2xl font-serif font-bold mb-4 leading-snug ${isDark ? 'text-white' : 'text-primary-500'}`}>
                    {prog.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 font-light ${isDark ? 'text-[#B7E3DD]' : 'text-neutral-500'}`}>
                    {prog.desc}
                  </p>

                  {prog.highlight && (
                    <div className={`p-4 rounded-xl mb-6 text-xs font-medium flex gap-3 items-start ${isDark ? 'bg-white/5 border border-white/10 text-white' : 'bg-primary-50 text-primary-500'}`}>
                      <ShieldAlert size={16} className={isDark ? 'text-accent-teal' : 'text-primary-500'} />
                      <span>{prog.highlight}</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-6 mt-6 border-current/10 flex flex-col gap-4">
                  {prog.pricing && (
                    <div className="flex justify-between items-baseline">
                      <span className={`text-[10px] uppercase tracking-widest font-mono ${isDark ? 'text-white/60' : 'text-neutral-400'}`}>Investment:</span>
                      <span className="text-base font-bold font-serif">{prog.pricing}</span>
                    </div>
                  )}

                  {prog.batch && (
                    <div className="flex justify-between items-baseline">
                      <span className={`text-[10px] uppercase tracking-widest font-mono ${isDark ? 'text-white/60' : 'text-neutral-400'}`}>Timing:</span>
                      <span className="text-sm font-medium italic">{prog.batch}</span>
                    </div>
                  )}

                  <Link href={`/programs#${prog.id}`} className="w-full mt-2">
                    <Button
                      variant={isDark ? 'primary' : 'outline'}
                      className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded-full transition-transform hover:scale-105 ${isDark ? 'bg-accent-teal hover:bg-accent-teal text-white border-none shadow-md shadow-accent-teal/20' : 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'}`}
                    >
                      {prog.cta} &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button size="lg" className="bg-primary-500 text-white px-12 py-5 rounded-full font-bold shadow-huge hover:bg-primary-600 transition-colors">
              Compare All Programs &rarr;
            </Button>
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}
