import { SectionReveal } from '../ui/SectionReveal'
import Image from 'next/image'

const teamMembers = [
  {
    initials: 'VN',
    name: 'Vasant Nehete',
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
          <p className="text-base md:text-lg text-neutral-400 mt-6 font-light">
            Brief bios focused on what each team member notices about children — not their qualifications. We are obsessed with cognitive development.
          </p>
        </div>

        {/* Mobile Swipe / Desktop Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-12 px-6 -mx-6 md:px-0 md:mx-0 snap-x hide-scrollbar">
          {teamMembers.map((item) => (
            <div key={item.name} className="flex-shrink-0 w-[320px] md:w-auto snap-center group rounded-[2.5rem] border border-neutral-100 bg-neutral-50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
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
              <p className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-[0.15em] mb-8 leading-relaxed">
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
      </SectionReveal>
    </section>
  )
}
