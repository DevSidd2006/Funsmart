import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function ProgramsOverview() {
  const programs = [
    {
      title: '10-Day Thinking Workshop',
      tag: 'TRANSITION_SESSION',
      desc: 'The ideal entry point for parents to see how their child responds to unscripted complexity.',
      bullets: [
        'Unscripted challenge solving',
        'Facilitator observation logging',
        'Final cognitive approach report',
      ],
      cta: 'Book Summer Workshop',
      variant: 'surface'
    },
    {
      title: 'Year-Long Thinking Lab',
      tag: 'SUSTAINED_GROWTH',
      desc: 'Our flagship program focused on building deep-rooted cognitive habits over a long-term journey.',
      bullets: [
        'Weekly exploration sessions',
        'Long-term cognitive mapping',
        'Direct parent-facilitator insights',
      ],
      cta: 'Explore Subscription',
      variant: 'indigo'
    }
  ]

  return (
    <section className="section-spacing bg-accent-surface">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ PROGRAMS ]</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Designed for different <br /> stages of discovery.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {programs.map((prog) => (
            <Card 
              key={prog.title} 
              className={`p-10 md:p-16 border-none shadow-base flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 ${
                prog.variant === 'indigo' ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'
              }`}
            >
              <div>
                <div className={`text-mono text-[10px] mb-8 uppercase tracking-widest ${prog.variant === 'indigo' ? 'text-accent-teal' : 'text-accent-teal'}`}>
                  {prog.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">{prog.title}</h3>
                <p className={`mb-12 leading-relaxed ${prog.variant === 'indigo' ? 'text-primary-100' : 'text-neutral-500'}`}>
                  {prog.desc}
                </p>

                <ul className="space-y-6 mb-16">
                  {prog.bullets.map(b => (
                    <li key={b} className="flex gap-4 items-start">
                       <Check size={18} className={prog.variant === 'indigo' ? 'text-accent-teal' : 'text-accent-teal'} />
                       <span className="text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={prog.variant === 'indigo' ? 'primary' : 'secondary'} 
                className={prog.variant === 'indigo' ? 'bg-accent-teal' : ''}
              >
                {prog.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
