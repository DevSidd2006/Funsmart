import React from 'react'

export function OurTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            The People Behind the Experience
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            FunSmartism is founder-led and strengthened by experienced mentors, collaborators, workshop contributors, and practitioner friends who support hands-on learning experiences throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
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
              desc: 'A frequent collaborative mentor who Brings deep engineering exposure into electronics and instrumentation workshops.',
            },
            {
              initials: 'MB',
              title: 'Milind Bhagwat',
              role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, and smart systems',
              desc: 'Supports advanced engineering, projects and practical design exploration sessions. and real-world problem-solving',
            },
            {
              initials: 'SG',
              title: 'Shrirang Gokhale',
              role: 'Mechanical Engineer · Product Designer · Entrepreneur mentor',
              desc: 'Helps shape challenge design through creative problem-solving guidance. and workshop ideation',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center rounded-[2rem] border border-neutral-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-neutral-50"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-inner bg-[#1E2A44] flex items-center justify-center text-white text-3xl font-serif font-bold">
                {item.initials}
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1E2A44] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold text-accent-teal mb-4 uppercase tracking-widest leading-relaxed h-12 flex items-center justify-center">
                {item.role}
              </p>
              <div className="h-px w-12 bg-neutral-200 mb-4"></div>
              <p className="text-neutral-600 leading-relaxed text-sm italic font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

