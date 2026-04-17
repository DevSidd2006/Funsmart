import { Eye, Users, Sparkles, Handshake } from 'lucide-react'

const teamMembers = [
  {
    icon: Eye,
    title: 'Vasant Nehete',
    role: 'Entrepreneur · Electronics hobbyist · Organic farming experimenter',
    desc: 'Has co-conducted 16+ workshops, Guides hands-on electronics explorations and helping children build confidence through trial-and-error exploration and practical electronics.',
  },
  {
    icon: Users,
    title: 'Vilas Rabde',
    role: 'Electronics Engineer · 37 years at Philips · Ham Radio operator',
    desc: 'A frequent collaborative mentor who brings deep industry and project exposure, experience into electronics, instrumentation, and workshops.',
  },
  {
    icon: Sparkles,
    title: 'Milind Bhagwat',
    role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, smart systems',
    desc: 'Supports advanced engineering, design thinking projects and frequently mentors workshop and real-world problem-solving.',
  },
  {
    icon: Handshake,
    title: 'Shrirang Gokhale',
    role: 'Mechanical Engineer · Product Designer · Entrepreneur mentor',
    desc: 'Contributes to select workshops and helps shape challenge design through creative problem-solving guidance.',
  },
]

export function OurTeam() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            The mentors behind the learning experience
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            FunSmartism is founder-led, strengthened by experienced mentors, collaborators, and practitioner friends who contribute to workshops, challenge design, and real-world learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamMembers.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="group rounded-3xl border border-neutral-200 bg-accent-surface p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-3xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-accent-teal mb-3 uppercase tracking-wider leading-snug">
                  {item.role}
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
