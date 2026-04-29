import React from 'react'
import { Eye, Users, Sparkles, Handshake } from 'lucide-react'

const teamMembers = [
  {
    initials: 'H',
    title: 'Harshad',
    role: 'Founder · M.S. USA',
    desc: 'Passionate about creating exploratory learning environments where children discover their natural problem-solving habits through hands-on STEM builds.',
  },
  {
    initials: 'SG',
    title: 'S.M. Gole',
    role: 'Special Guest Mentor · Expert in Rubik’s & Logic',
    desc: 'Bringing decades of expertise in pattern recognition, spatial reasoning, and logical challenges to the lab.',
  },
  {
    initials: 'VN',
    title: 'Vasant Nehete',
    role: 'Mentor · Electronics & Engineering',
    desc: 'Guides hands-on electronics explorations, helping children build confidence through trial-and-error.',
  },
  {
    initials: 'VR',
    title: 'Vilas Rabde',
    role: 'Mentor · Electronics Engineer',
    desc: 'Ham Radio operator and Philips veteran who brings deep industry and project exposure to the lab.',
  },
]

export function OurTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            The People Behind the Experience
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            FunSmartism was built by people who believe that learning should be an active, exploratory, and hands-on process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((item) => {
            return (
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
                <p className="text-xs font-mono text-accent-teal mb-4 uppercase tracking-widest font-bold">
                  {item.role}
                </p>
                <div className="h-px w-12 bg-neutral-200 mb-4"></div>
                <p className="text-neutral-600 leading-relaxed text-sm italic font-light">
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
