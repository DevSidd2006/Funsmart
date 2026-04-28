import { Check } from 'lucide-react'

const targets = [
  "enjoy building and exploring",
  "are curious beyond textbooks",
  "need more active learning environments",
  "want exposure to multiple STEM domains"
]

export function ThinkingReset() {
  return (
    <section className="section-spacing bg-white border-t border-neutral-100">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="bg-neutral-50 rounded-[40px] p-8 md:p-16 border border-neutral-200 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-teal/5 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight relative z-10">
            10-Day Thinking RESET Workshop
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12 relative z-10 italic">
            A fast-paced hands-on RoboSTEM experience where children explore different themes each day through projects, challenges, experimentation, and creative problem-solving.
          </p>

          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-sm border border-neutral-100 text-left relative z-10">
            <h3 className="text-xl font-bold text-primary-500 mb-6 text-center">
              Designed Especially For Children Who:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targets.map((target, i) => (
                <div key={i} className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl">
                  <Check className="text-accent-teal" size={16} />
                  <span className="text-neutral-700 font-medium">{target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
