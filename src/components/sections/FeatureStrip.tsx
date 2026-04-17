import { Atom, FlaskConical, Globe, Hammer, MapPin, Users, Handshake } from 'lucide-react'

const features = [
  { icon: Atom, label: 'Robotics', color: 'text-[#4D96FF] bg-[#4D96FF]/10' },
  { icon: FlaskConical, label: 'STEM Workshops', color: 'text-[#FF6B6B] bg-[#FF6B6B]/10' },
  { icon: MapPin, label: 'Edu Tours', color: 'text-[#6BCB77] bg-[#6BCB77]/10' },
  { icon: Hammer, label: 'Hands-on Builds', color: 'text-[#FFD93D] bg-[#FFD93D]/10' },
  { icon: Users, label: 'Scientist Interaction', color: 'text-accent-teal bg-accent-teal/10' },
  { icon: Handshake, label: 'Parent Guidance', color: 'text-primary-500 bg-primary-500/10' },
  { icon: Globe, label: 'Real-world Thinking', color: 'text-[#9B59B6] bg-[#9B59B6]/10' },
]

export function FeatureStrip() {
  return (
    <section className="bg-[#F5FCFB] py-10 md:py-14 overflow-hidden">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A44] leading-tight">
              Seven learning threads that make every session feel like a mini STEM festival.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-600 md:text-base">
            A soft horizontal strip of experiences that make learning playful, meaningful and anchored in real thinking.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-[min(100%,1400px)]">
            {features.map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="min-w-[14rem] bg-white rounded-3xl border border-neutral-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <p className="text-base font-semibold text-[#1E2A44]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
