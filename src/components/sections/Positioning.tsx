import { Check } from 'lucide-react'

export function Positioning() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 mb-8 leading-tight">
              More than a class.<br />A thinking laboratory.
            </h2>

            <p className="text-xl text-neutral-600 leading-relaxed mb-12">
              Traditional schools measure what children know. At FunSmartism, we observe how they think. This single shift in perspective changes how you understand your child's potential.
            </p>

            <ul className="space-y-8">
              {[
                { title: 'Observe, don\'t rank', desc: 'We focus on the thinking process, not right or wrong answers.' },
                { title: 'Real problems, no scripts', desc: 'Kids face unfamiliar challenges that reveal their natural habits.' },
                { title: 'Insights parents need', desc: 'Receive detailed observation reports that decoded your child\'s approach.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-primary-50 flex items-center justify-center">
                    <Check size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-primary-500 mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-base bg-accent-surface aspect-square flex items-center justify-center border border-neutral-100">
               <span className="font-mono text-neutral-300 text-xs text-center px-4 leading-tight uppercase tracking-tighter">image_positioning_lab</span>
            </div>
            {/* Overlay Lab Label */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-primary-50">
              <p className="font-serif font-bold text-primary-500">Intelligence Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
