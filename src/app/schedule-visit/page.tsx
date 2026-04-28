import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schedule a Visit | FunSmartism',
  description: 'Book a free parent orientation to understand how our Thinking Lab helps children discover their unique problem-solving habits.',
}

const visitReasons = [
  "Children building instead of only listening",
  "Discussions instead of passive note-taking",
  "Experimentation instead of fixed instructions",
  "Retrying instead of fear of mistakes",
  "Active participation instead of screen-heavy learning"
]

const visitExpectations = [
  {
    title: "Explore The Learning Environment",
    desc: "See current RoboSTEM themes, hands-on projects, tools, challenge setups, and take-home creations built by students."
  },
  {
    title: "Understand The Learning Approach",
    desc: "Learn how FunSmartism combines guided exploration, experimentation, STEM challenges, and real-world project-based learning."
  },
  {
    title: "Discuss Your Child’s Interests",
    desc: "Share what your child enjoys, struggles with, or gets curious about — and understand which programs may fit best."
  },
  {
    title: "Observe The Session Culture",
    desc: "Depending on the timing, families may also get opportunities to observe how children participate during real activities and challenges."
  }
]

const whoVisits = [
  "Children who enjoy building and creating",
  "Children curious about science, technology, or how things work",
  "Children who ask deeper questions",
  "Children who prefer active learning environments",
  "Children who enjoy puzzles, projects, or experimentation",
  "Parents looking beyond passive learning routines",
  "Families wanting more hands-on learning exposure beyond school"
]

export default function ScheduleVisitPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-[#1E2A44] border-b border-neutral-100 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="container-fluid max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            See The Environment In Person
          </h1>
          <p className="text-lg md:text-xl text-[#B7E3DD] leading-relaxed max-w-3xl mx-auto font-medium">
            The best way to understand FunSmartism is to experience the learning environment directly.
          </p>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mt-4 font-light">
            Visit the lab, explore current RoboSTEM themes, interact with the team, and understand how children learn through hands-on challenges, experimentation, and real-world exploration.
          </p>
        </div>
      </section>

      {/* Why Parents Visit */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6">
                Most Parents Understand FunSmartism Properly Only After Visiting.
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Photos and websites can explain the activities. But the real difference becomes visible when parents walk into the environment itself. They see:
              </p>
              <ul className="space-y-4 mb-8">
                {visitReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                    <span className="text-neutral-700 text-lg leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-medium text-primary-500 italic border-l-4 border-accent-teal pl-6">
                That experience often changes how parents think about learning environments completely.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2FB5A3]/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-[#1E2A44] mb-8">Families Who Usually Connect Deeply With FunSmartism:</h3>
              <ul className="space-y-3">
                {whoVisits.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent-teal font-bold opacity-50 block w-4">•</span>
                    <span className="text-neutral-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens During A Visit */}
      <section className="py-24 bg-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary-500 mb-16">
            What You Can Expect During Your Visit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {visitExpectations.map((item, i) => (
              <div key={i} className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 hover:shadow-md transition-shadow">
                <span className="text-3xl font-bold font-serif text-accent-teal/30 block mb-4">0{i + 1}</span>
                <h3 className="text-lg font-bold text-primary-500 mb-4">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Info & Form */}
      <section className="py-24 bg-[#1E2A44] text-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-serif font-bold mb-4">Schedule A Visit</h2>
              <p className="text-white/70 mb-8 max-w-md">Tell us a little about your child and preferred timings. We’ll help you understand the most suitable session, workshop, or starting point.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Parent Name *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                  <Input type="text" placeholder="Child Age *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input type="tel" placeholder="Phone Number *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                  <Input type="email" placeholder="Email Address (Optional)" className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                </div>
                <Input type="text" placeholder="Area / Location *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                <Input type="text" placeholder="Child's Interests *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                <Input type="text" placeholder="Preferred Visit Timing *" required className="bg-white/10 border-white/20 text-white placeholder-white/40" />
                
                <Button type="button" size="lg" className="w-full bg-accent-teal hover:bg-[#28A392] text-white border-none rounded-full font-bold">
                  Submit Details
                </Button>
              </form>
            </div>

            {/* Visit Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-10">Visit Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-1.5 h-12 bg-accent-teal rounded-full mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-white/80">Bibwewadi, Pune<br /><span className="text-sm opacity-70">(Exact location shared after confirmation)</span></p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-1.5 h-12 bg-accent-teal rounded-full mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Session Format</h4>
                    <p className="text-white/80">Weekend-based sessions across the academic year.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-1.5 h-12 bg-accent-teal rounded-full mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Age Group</h4>
                    <p className="text-white/80">Typically for children aged 8–15 years.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-1.5 h-auto bg-accent-teal rounded-full mt-1" style={{ minHeight: '3rem' }} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Programs Include</h4>
                    <ul className="text-white/80 space-y-1">
                      <li>• Year-long RoboSTEM Lab</li>
                      <li>• 10-Day Thinking RESET</li>
                      <li>• STEM Challenges</li>
                      <li>• Hands-on Workshops</li>
                      <li>• Edu-events & Exhibitions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center border-t border-neutral-100">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Sometimes One Visit Changes Everything.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Many parents walk in expecting “just another activity class.” They leave seeing their child participate, question, experiment, retry, and engage differently than they expected. 
          </p>
          <p className="text-xl italic text-primary-500 font-medium mb-12">
            That difference is difficult to explain through advertisements alone. It becomes visible inside the environment.
          </p>
          <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white border-none px-12 py-6 rounded-full font-bold shadow-xl shadow-accent-teal/20">
            Schedule Your Visit
          </Button>
        </div>
      </section>
    </div>
  )
}
