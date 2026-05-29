import { Search, BrainCircuit, Lightbulb, Compass, Target, AlertCircle, Eye } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

export function ObservationUSP() {
  const observations = [
    { text: 'Does the child retry independently?', icon: Search },
    { text: 'Do they jump-start before observing?', icon: Compass },
    { text: 'Do they experiment patiently or give up quickly?', icon: BrainCircuit },
    { text: 'Do they wait for instructions at every step?', icon: Target },
    { text: 'Do they test different ideas confidently?', icon: Lightbulb },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-teal/5 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <SectionReveal className="container-fluid max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Context & Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 text-accent-teal font-bold text-xs uppercase tracking-widest mb-8 border border-accent-teal/20 shadow-sm">
              <Eye size={16} /> Live Observation
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight mb-8">
              While Children Build and Solve, We Also Observe <br className="hidden lg:block" />
              <span className="text-accent-teal italic font-light">How They Think.</span>
            </h2>
            
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light mb-10">
              During activities and challenges, facilitators naturally observe patterns that often come up at home too, but get unnoticed by parents.
            </p>

            <div className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold group-hover:w-full transition-all duration-500 opacity-10" />
              <p className="text-primary-500 font-serif italic text-lg leading-relaxed relative z-10">
                These observations are shared with parents through examples and discussions — helping parents support learning without over-helping.
              </p>
            </div>
          </div>

          {/* Right Column: Observation List */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4 md:gap-5">
              {observations.map((obs, i) => {
                const Icon = obs.icon
                return (
                  <div 
                    key={i} 
                    className="flex items-center gap-5 md:gap-6 bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-neutral-100 hover:border-accent-teal/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FAF9F6] border border-neutral-100 flex items-center justify-center text-primary-300 flex-shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={24} strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-base md:text-lg text-neutral-700 font-medium">
                      {obs.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Disclaimer Bottom Banner */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-5 bg-white border border-neutral-100 shadow-sm rounded-full italic text-primary-500 font-medium text-center hover:shadow-md transition-shadow">
            <AlertCircle size={20} className="text-accent-teal flex-shrink-0 hidden sm:block" />
            <p className="text-sm md:text-base">
              FunSmartism is <span className="text-accent-teal font-bold not-italic mx-1">not</span> a therapy, diagnostic, or psychological assessment center.
            </p>
          </div>
        </div>
        
      </SectionReveal>
    </section>
  )
}
