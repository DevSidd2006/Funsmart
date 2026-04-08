import { Eye, Beaker, Lightbulb } from 'lucide-react'

const steps = [
  {
    icon: Eye,
    title: 'Step 1 — For parents',
    description:
      'Parent orientation. Come in. Meet the team. See the FunSmartism RoboSTEM Thinking Lab. Ask everything. 30–45 min · Free · No commitment',
  },
  {
    icon: Beaker,
    title: 'Step 2 — For your child',
    description:
      '10-Day Thinking Reset Workshop. 10 days. 10 themes. Real materials, real builds, real scientist-style problem-solving — observed. Each day a different world. Most projects go home.',
  },
  {
    icon: Lightbulb,
    title: 'Step 3 — The year-long program',
    description:
      'FunSmartism RoboSTEM Thinking Lab — Year-Long. One theme per month. One session per week. Deep projects + thinking observations + parent guidance for home. Priority access to scientist interactions.',
  },
]


export function HowItWorks() {
  return (
    <section className="section-spacing bg-white relative">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="text-mono text-accent-teal mb-4 uppercase tracking-widest">[ METHODOLOGY ]</div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 leading-tight">
            The Journey of <br />Discovery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Timeline Connector Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-primary-100 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
                {/* Step Number/Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-white text-accent-teal flex items-center justify-center mb-8 border-4 border-primary-50 shadow-md group-hover:border-accent-teal/20 group-hover:bg-accent-teal group-hover:text-white transition-all duration-500">
                  <Icon size={24} />
                </div>

                <div className="px-4">
                  <div className="text-mono text-accent-teal text-[10px] mb-3 uppercase tracking-widest">STEP_0{idx + 1}</div>
                  <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
