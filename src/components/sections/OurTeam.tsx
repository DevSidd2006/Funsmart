import React from 'react'
import { Eye, Users, Sparkles, Handshake } from 'lucide-react'

const teamMembers = [
  {
    initials: 'VN',
    title: 'Vasant Nehete',
    role: 'Entrepreneur · Electronics hobbyist · Organic farming experimenter',
    desc: 'Has co-conducted 16+ workshops, Guides hands-on electronics explorations and helping children build confidence through trial-and-error exploration and practical electronics.',
  },
  {
    initials: 'VR',
    title: 'Vilas Rabde',
    role: 'Electronics Engineer · 37 years at Philips · Ham Radio operator',
    desc: 'A frequent collaborative mentor who brings deep industry and project exposure, experience into electronics, instrumentation, and workshops.',
  },
  {
    initials: 'MB',
    title: 'Milind Bhagwat',
    role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, smart systems',
    desc: 'Supports advanced engineering, design thinking projects and frequently mentors workshop and real-world problem-solving.',
  },
  {
    initials: 'SG',
    title: 'Shrirang Gokhale',
    role: 'Mechanical Engineer · Product Designer · Entrepreneur mentor',
    desc: 'Contributes to select workshops and helps shape challenge design through creative problem-solving guidance.',
  },
]

export function OurTeam() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight">
            The mentors behind the learning experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
            FunSmartism is founder-led, strengthened by experienced mentors, collaborators, and practitioner friends who contribute to workshops, challenge design, and real-world learning experiences.
          </p>
          <p className="text-sm text-neutral-500 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
            Brief bios focus on what each person notices about children — not qualifications. We are obsessed with cognitive development.
          </p>
        </div>

        {/* Mobile Swipe Row & Desktop Grid */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-4 gap-6 snap-x snap-mandatory hide-scrollbar">
          {teamMembers.map((item) => {
            return (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center min-w-[280px] md:min-w-0 snap-center rounded-[2rem] border border-neutral-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-neutral-50"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner bg-[#1E2A44] flex items-center justify-center text-white text-4xl font-serif font-bold">
                  {item.initials}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1E2A44] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-accent-teal mb-4 uppercase tracking-widest font-bold">
                  {item.role}
                </p>
                <div className="h-px w-12 bg-neutral-200 mb-4"></div>
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
