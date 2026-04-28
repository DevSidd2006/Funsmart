import React from 'react'

const teamMembers = [
  {
    initials: 'VN',
    title: 'Vasant Nehete',
    role: 'Entrepreneur · Electronics hobbyist · Organic farming experimenter',
    desc: 'Supports hands-on electronics workshops and practical experimentation activities.',
  },
  {
    initials: 'VR',
    title: 'Vilas Rabde',
    role: 'Electronics Engineer · 37 years at Philips · Ham Radio operator',
    desc: 'Brings deep real-world engineering exposure into electronics and instrumentation workshops.',
  },
  {
    initials: 'MB',
    title: 'Milind Bhagwat',
    role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, and smart systems',
    desc: 'Supports advanced engineering projects and practical design exploration sessions.',
  },
  {
    initials: 'SG',
    title: 'Shrirang Gokhale',
    role: 'Mechanical Engineer · Product Designer · Entrepreneur mentor',
    desc: 'Contributes to creative challenge design and innovation-focused workshop activities.',
  },
]

export function OurTeam() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            The People Behind The Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            FunSmartism is founder-led and strengthened by experienced mentors, collaborators, workshop contributors, and practitioner friends who support hands-on learning experiences throughout the year.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-4 gap-6 snap-x snap-mandatory">
          {teamMembers.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center min-w-[280px] md:min-w-0 snap-center rounded-[24px] border border-neutral-100 p-8 shadow-sm hover:shadow-md transition-all bg-neutral-50"
            >
              <div className="w-24 h-24 rounded-full mb-6 bg-[#16213B] flex items-center justify-center text-white text-2xl font-serif font-bold shadow-inner">
                {item.initials}
              </div>
              <h3 className="text-xl font-bold text-[#1E2A44] mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-accent-teal mb-4 uppercase tracking-wider">
                {item.role}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
