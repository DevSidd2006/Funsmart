import { Eye, Users, Sparkles, Handshake } from 'lucide-react'

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', // Placeholder for Vasant Nehete
    title: 'Vasant Nehete',
    role: 'Entrepreneur · Electronics hobbyist · Organic farming experimenter',
    desc: 'Has co-conducted 16+ workshops, Guides hands-on electronics explorations and helping children build confidence through trial-and-error exploration and practical electronics.',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400', // Placeholder for Vilas Rabde
    title: 'Vilas Rabde',
    role: 'Electronics Engineer · 37 years at Philips · Ham Radio operator',
    desc: 'A frequent collaborative mentor who brings deep industry and project exposure, experience into electronics, instrumentation, and workshops.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400', // Placeholder for Milind Bhagwat
    title: 'Milind Bhagwat',
    role: 'Mechanical Engineer · 45+ years across CNC, telecom, biometrics, smart systems',
    desc: 'Supports advanced engineering, design thinking projects and frequently mentors workshop and real-world problem-solving.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400', // Placeholder for Shrirang Gokhale
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            The mentors behind the learning experience
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            FunSmartism is founder-led, strengthened by experienced mentors, collaborators, and practitioner friends who contribute to workshops, challenge design, and real-world learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((item) => {
            return (
              <div key={item.title} className="group flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 border border-neutral-100 p-2 bg-white">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-accent-teal mb-4 uppercase tracking-widest font-bold">
                  {item.role}
                </p>
                <p className="text-neutral-500 leading-relaxed text-sm font-light">
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
