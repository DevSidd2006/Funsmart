import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function ProgramsOverview() {
  const programs = [
    {
      title: '10-Day Workshop (Ages 8–16)',
      tag: 'Thinking Reset Workshop',
      desc: 'Ten days. Ten different themes. Children build, explore, and think — while we observe. The entry point where every FunSmartism journey begins.',
      bullets: [
        'Daily thinking challenges & real builds',
        'No step-by-step instructions first',
        'Observations across 10 STEM themes',
        'Detailed parent note on thinking habits',
      ],
      cta: 'Book Workshop',
      variant: 'surface'
    },
    {
      title: 'Year-long Program (Ages 8–16)',
      tag: 'RoboSTEM Thinking Lab — Year-Long',
      desc: 'Deep projects and monthly thinking challenges where thinking habits become visible over time.',
      bullets: [
        'Deep projects across 10 STEM themes',
        'Monthly thinking observations for parents',
        'Guidance for home + access to edu events',
        'Priority access to scientist interactions',
      ],
      cta: 'Learn More',
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
