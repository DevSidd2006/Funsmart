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
      color: 'bg-[#1E2A44] text-white',
      accentColor: 'text-accent-teal',
      badgeColor: 'bg-accent-teal/20 text-accent-teal',
      desc: 'Weekly sessions every Friday. Independent challenge-based problems designed to build consistent thinking habits outside school routine for the whole academic year.',
      cta: 'Explore Friday Club',
    },
    {
      id: 'workshop',
      title: '10-Day STEM Tinkering Workshop',
      tag: 'Vacation Program',
      icon: Calendar,
      color: 'bg-[#1E2A44] text-white',
      accentColor: 'text-accent-teal',
      badgeColor: 'bg-accent-teal/20 text-accent-teal',
      desc: 'Intensive vacation program. One new STEM theme every day — projects, experiments, and hands-on challenges across robotics, space science, electronics, and more.',
      cta: 'Explore Workshop',
      batch: 'Next batch: Upcoming Vacation Batch',
    },
    {
      id: 'one-day',
      title: '1-Day STEM Challenge',
      tag: 'Trial Day',
      icon: Target,
      color: 'bg-[#1E2A44] text-white',
      accentColor: 'text-accent-teal',
      badgeColor: 'bg-accent-teal/20 text-accent-teal',
      desc: 'A one-day hands-on challenge where parents observe — not instruct. Children face unfamiliar problems with no hints and no fixed answers, while you watch how they actually think.',
      cta: 'Book Trial Day',
      batch: 'New batch : Contact for schedule',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="homepage-programs">
      <SectionReveal className="container-fluid max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent-teal font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight tracking-tight mb-6">
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
            const isDark = true
            return (
              <div
                key={prog.id}
                className={`p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:shadow-huge hover:-translate-y-1 ${prog.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] ${prog.badgeColor}`}>
                      {prog.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-accent-teal">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold mb-3 leading-snug text-white">
                    {prog.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed mb-5 font-light text-[#B7E3DD]">
                    {prog.desc}
                  </p>

                  {prog.highlight && (
                    <div className="p-3.5 rounded-xl mb-5 text-[11px] font-medium flex gap-2.5 items-start bg-white/5 border border-white/10 text-white/80">
                      <ShieldAlert size={14} className="text-accent-teal flex-shrink-0 mt-0.5" />
                      <span>{prog.highlight}</span>
                    </div>
                  )}
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex flex-col gap-3">
                  {prog.batch && (
                    <p className="text-[10px] font-sans text-white/30 uppercase tracking-widest">
                      {prog.batch}
                    </p>
                  )}

                  <Link href={`/programs#${prog.id}`} className="w-full group">
                    <button className="w-full flex items-center justify-between bg-accent-teal hover:bg-[#28A392] active:scale-[0.98] px-6 py-4 rounded-2xl text-white text-sm font-serif font-bold tracking-wide transition-all duration-300 shadow-lg shadow-accent-teal/20 group-hover:shadow-accent-teal/40">
                      <span>{prog.cta}</span>
                      <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 7h9M7.5 3L11 7l-3.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-4">
          <Link href="/programs">
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary-500/30 text-primary-500 text-sm font-serif font-bold tracking-wide hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 group">
              Compare All Programs
              <span className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}
