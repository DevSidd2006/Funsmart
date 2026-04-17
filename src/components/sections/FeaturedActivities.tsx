import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check, Atom, Dna, Microscope } from 'lucide-react'
import Link from 'next/link'

export function ProgramsOverview({ data }: { data?: any[] }) {
  const programs = data && data.length > 0 ? data : [
    {
      title: '10-Day Thinking Reset Workshop (Ages 8–16)',
      tag: 'THE ENTRY POINT',
      desc: 'An intensive introductory workshop designed to shift children away from passive learning. We introduce inquiry-based methods, emphasizing "why" and "how".',
      bullets: [
        'Session observations across 10 themes',
        'Parent note on challenge approach',
        'First look at approaching the unknown',
      ],
      cta: 'Book Workshop',
      variant: 'surface'
    },
    {
      title: 'FunSmartism RoboSTEM Thinking Lab — Year-Long (Ages 8–16)',
      tag: 'YEAR-LONG PROGRAM',
      desc: 'Our flagship program where students tackle long-term projects, engaging in robotics, physical computing, and complex logic puzzles in a real lab setting.',
      bullets: [
        'Monthly thinking observation + guidance',
        'Priority access to scientist interactions',
        'Public exhibition of student projects',
      ],
      cta: 'Learn More',
      variant: 'indigo'
    }
  ]

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute top-[20%] right-[-2%] text-primary-500/5 animate-float hidden lg:block">
        <Atom size={200} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[10%] left-[-2%] text-accent-teal/5 animate-float-delayed hidden lg:block">
        <Dna size={180} strokeWidth={0.5} />
      </div>

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            Two programs. One philosophy.
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Designed for deep engagement rather than surface-level achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((prog) => (
            <div 
              key={prog.title} 
              className={`p-10 md:p-14 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-lg ${
                prog.variant === 'indigo' ? 'bg-[#1E2A44] text-white' : 'bg-[#F8F9FB] text-[#1E2A44]'
              }`}
            >
              <div>
                <div className={`text-mono text-[11px] mb-8 uppercase tracking-[0.2em] font-bold ${prog.variant === 'indigo' ? 'text-accent-teal' : 'text-accent-teal'}`}>
                  {prog.tag}
                </div>
                <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-8 leading-tight ${prog.variant === 'indigo' ? 'text-white' : 'text-[#1E2A44]'}`}>
                  {prog.title}
                </h3>
                <p className={`mb-10 leading-relaxed text-base ${prog.variant === 'indigo' ? 'text-white/70' : 'text-neutral-500'}`}>
                  {prog.desc}
                </p>

                <ul className="space-y-4 mb-12">
                  {prog.bullets?.map((b: string) => (
                    <li key={b} className="flex gap-4 items-start">
                       <Check size={18} className="text-accent-teal mt-0.5" />
                       <span className={`text-sm font-medium ${prog.variant === 'indigo' ? 'text-white/80' : 'text-primary-500'}`}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button 
                  variant={prog.variant === 'indigo' ? 'primary' : 'secondary'} 
                  className={`w-full sm:w-auto px-8 ${prog.variant === 'indigo' ? 'bg-accent-teal hover:bg-accent-teal/90 border-none' : ''}`}
                >
                  {prog.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
