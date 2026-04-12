import { Check, X, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

const defaultPoints = [
  {
    label: 'Learning Process',
    traditional: 'Follow step-by-step kit instructions',
    thinkingLab: 'Explore without instructions — child decides where to start',
  },
  {
    label: 'Project Nature',
    traditional: 'Complete a predefined project',
    thinkingLab: 'Work on real challenges with no fixed answer',
  },
  {
    label: 'Measurement',
    traditional: 'Measure what the child produced',
    thinkingLab: 'Observe how the child tests, retries, and solves',
  },
  {
    label: 'Reporting',
    traditional: 'Report grades and performance',
    thinkingLab: 'Share thinking habit + how to respond at home',
  },
  {
    label: 'Outcome',
    traditional: 'Skills as the outcome',
    thinkingLab: 'Thinking maturity as the outcome',
  },
]

export function Comparison({ data }: { data?: any }) {
  const title = data?.title || 'Most programs teach projects. We observe scientist-style problem-solving.'
  const points = data?.rows?.length > 0 ? data.rows : defaultPoints

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ DIFFERENTIATION ]</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            There’s a difference between completing a project and understanding how the child thought through it. FunSmartism is built around the second one.
          </p>
        </div>


        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-primary-100/50 pb-8 mb-8 hidden md:grid">
            <div className="md:col-span-4 text-mono text-xs text-neutral-400">EXPLICATION</div>
            <div className="md:col-span-4 text-mono text-xs text-neutral-400">TRADITIONAL STEM</div>
            <div className="md:col-span-4 text-mono text-xs text-accent-teal">FUNSMARTISM METHOD</div>
          </div>

          <div className="space-y-4">
            {points.map((point: any) => (
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
                    <span className="text-sm md:text-base font-medium text-primary-500 leading-snug">{point.thinkingLab || point.funsmartism}</span>
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

