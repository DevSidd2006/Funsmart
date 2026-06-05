'use client'

import { useState } from 'react'
import { SectionReveal } from '../ui/SectionReveal'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamMembers = [
  {
    initials: 'VN',
    name: 'Vasant Nehete',
    image: '/images/teams/Vasant Nehete.jpeg',
    role: 'Entrepreneur · Electronics hobbyist · Organic farming experimenter',
    bio: 'Has co-conducted 16+ workshops, Guides hands-on electronics explorations and helping children build confidence through trial-and-error exploration and practical electronics.',
  },
  {
    initials: 'VR',
    name: 'Vilas Rabde',
    image: '/images/teams/Vilas Rabde.jpg',
    role: 'Electronics Engineer · 37 years at Philips · Ham Radio operator',
    bio: 'A frequent collaborative mentor who brings deep industry and project exposure, experience into electronics, instrumentation, and workshops.',
  },
  {
    initials: 'MB',
    name: 'Milind Bhagwat',
    image: '/images/teams/Milind Bhagwat.jpg',
    role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, smart systems',
    bio: 'Supports advanced engineering, design thinking projects and frequently mentors workshop and real-world problem-solving.',
  },
  {
    initials: 'SG',
    name: 'Shrirang Gokhale',
    image: '/images/teams/Shrirang Gokhale.jpg',
    role: 'Mechanical Engineer · Product Designer · Entrepreneur mentor.',
    bio: 'Contributes to select workshops and helps shape challenge design through creative problem-solving guidance and workshop ideation.',
  },
]

export function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMember = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  const prevMember = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="mentors">
      <SectionReveal className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            The mentors behind the learning experience
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
            FunSmartism is founder-led, strengthened by experienced mentors, collaborators, and practitioner friends who contribute to workshops, challenge design, and real-world learning experiences.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 pb-12">
          {teamMembers.map((item) => (
            <div key={item.name} className="group rounded-[2.5rem] border border-neutral-100 bg-neutral-50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {item.image ? (
                <div className="w-20 h-20 rounded-full overflow-hidden mb-8 shadow-sm relative shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-8 font-serif font-bold text-2xl tracking-wider shadow-sm shrink-0">
                  {item.initials}
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-3 leading-snug">
                {item.name}
              </h3>
              <p className="text-sm text-neutral-500 font-medium mb-8 leading-relaxed">
                {item.role}
              </p>
              
              <div className="mt-auto">
                <div className="h-px w-12 bg-neutral-200 mb-6 group-hover:bg-accent-teal/30 transition-colors" />
                <p className="text-primary-500/80 leading-relaxed text-sm font-medium italic">
                  "{item.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View with next/prev buttons */}
        <div className="flex flex-col md:hidden items-center px-6">
          <div className="w-full max-w-[320px] rounded-[2.5rem] border border-neutral-100 bg-neutral-50 p-8 shadow-sm transition-all flex flex-col min-h-[420px]">
            {teamMembers[currentIndex].image ? (
              <div className="w-20 h-20 rounded-full overflow-hidden mb-8 shadow-sm relative shrink-0">
                <Image src={teamMembers[currentIndex].image!} alt={teamMembers[currentIndex].name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-8 font-serif font-bold text-2xl tracking-wider shadow-sm shrink-0">
                {teamMembers[currentIndex].initials}
              </div>
            )}
            <h3 className="text-3xl font-serif font-bold text-primary-500 mb-3 leading-snug">
              {teamMembers[currentIndex].name}
            </h3>
            <p className="text-sm text-neutral-500 font-medium mb-8 leading-relaxed">
              {teamMembers[currentIndex].role}
            </p>
            
            <div className="mt-auto">
              <div className="h-px w-12 bg-neutral-200 mb-6 transition-colors" />
              <p className="text-primary-500/80 leading-relaxed text-sm font-medium italic">
                "{teamMembers[currentIndex].bio}"
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button 
              onClick={prevMember}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-neutral-50 transition-colors shadow-sm"
              aria-label="Previous team member"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextMember}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-neutral-50 transition-colors shadow-sm"
              aria-label="Next team member"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
