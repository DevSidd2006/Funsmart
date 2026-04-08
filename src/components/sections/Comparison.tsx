import { Check, X, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export function Comparison() {
  const points = [
    {
      label: 'Main Goal',
      traditional: 'Completing a preset kit/project',
      funsmartism: 'Understanding the child\'s thinking process',
    },
    {
      label: 'Approach',
      traditional: 'Step-by-step instructions (Scripted)',
      funsmartism: 'Unscripted challenges (Discovery)',
    },
    {
      label: 'Parent Benefit',
      traditional: 'A physical model to take home',
      funsmartism: 'Detailed cognitive insight reports',
    },
    {
      label: 'Focus',
      traditional: 'Knowledge & Skills',
      funsmartism: 'Cognitive Habits & Intelligence',
    },
    {
      label: 'Environment',
      traditional: 'Coaching Center',
      funsmartism: 'Observation Laboratory',
    },
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ DIFFERENTIATION ]</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Not another activity class. <br />A shift in perspective.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-primary-100/50 pb-8 mb-8 hidden md:grid">
            <div className="md:col-span-4 text-mono text-xs text-neutral-400">EXPLICATION</div>
            <div className="md:col-span-4 text-mono text-xs text-neutral-400">TRADITIONAL STEM</div>
            <div className="md:col-span-4 text-mono text-xs text-accent-teal">FUNSMARTISM METHOD</div>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <div key={point.label} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center py-6 border-b border-neutral-100 last:border-0 group">
                <div className="md:col-span-4">
                  <span className="font-serif font-bold text-primary-500">{point.label}</span>
                </div>
                <div className="md:col-span-4 pr-12">
                  <div className="flex items-start gap-3 opacity-60">
                    <X size={16} className="text-neutral-300 mt-1 flex-shrink-0" />
                    <span className="text-sm text-neutral-500">{point.traditional}</span>
                  </div>
                </div>
                <div className="md:col-span-4 bg-primary-50 px-6 py-4 md:py-8 rounded-sm transform transition-all group-hover:scale-[1.02] duration-500 border border-primary-100/50 group-hover:border-accent-teal/30 group-hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <Check size={18} className="text-accent-teal mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-primary-500 leading-snug">{point.funsmartism}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Button variant="secondary" className="group">
               Receive an Observation Guide
               <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
