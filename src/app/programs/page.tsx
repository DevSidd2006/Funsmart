import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { Check, ArrowRight, Calculator, Puzzle, Settings, Plane, Cpu, PenTool, Telescope, Laptop, Bot, Presentation, Milestone, Clock, Users, Brain, Anchor, Target, Rocket, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export default function ProgramsPage() {
  const programs = [
    {
      id: 'year-long',
      title: 'Year-Long RoboSTEM Lab',
      tagline: 'A hands-on exploratory ecosystem where children build, test, and redesign across the academic year.',
      ageGroups: ['Age 8–15'],
      duration: 'Academic Year (10 Months)',
      sessions: '4 sessions every month (3 Offline + 1 Online STEM Challenge)',
      structure: '3-hour sessions conducted on weekends.',
      activities: 'Hands-on RoboSTEM themes, take-home projects, real-world challenges, and teamwork.',
      parentInvolvement: 'Regular observation-based discussions and project showcases.',
      usp: 'Priority opportunities to interact with scientists and industry experts.',
      bgColor: 'bg-white',
      borderColor: 'border-neutral-100',
    },
    {
      id: 'workshop',
      title: '10-Day Thinking RESET Workshop',
      tagline: 'A fast-paced hands-on RoboSTEM experience exploring different themes each day.',
      ageGroups: ['Age 8–15'],
      duration: '10 Consecutive Days (Holidays/Vacation)',
      sessions: '10 Daily sessions (2–3 hours each)',
      structure: 'Intensive daily projects and experimentation.',
      activities: 'Rapid prototyping, daily challenges, theme-based builds, and creative problem-solving.',
      parentInvolvement: 'Insights on child’s independent problem-solving approach shared at the end.',
      usp: 'Ideal for children who want exposure to multiple STEM domains quickly.',
      bgColor: 'bg-[#FAF9F6]',
      borderColor: 'border-neutral-200',
    },
    {
      id: 'challenge',
      title: '1-Day STEM Challenge',
      tagline: 'A hands-on entry gateway to experience the FunSmartism environment.',
      ageGroups: ['Age 8–15'],
      duration: 'Single Session',
      sessions: '1 session (2–3 hours)',
      structure: 'Parent-observed STEM challenge.',
      activities: 'Children solve unfamiliar problems while parents observe their natural response to difficulty.',
      parentInvolvement: 'Direct observation of child’s persistence and independent thinking.',
      usp: 'The first moment parents realise "This is the environment my child actually needs."',
      bgColor: 'bg-white',
      borderColor: 'border-neutral-100',
    }
  ]


  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-12 bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
              Hands-on RoboSTEM Programs
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Understand the batch structures, age groups, session formats, and real-world activities that happen inside our Thinking Lab.
            </p>
          </div>
        </div>
      </section>


      {/* Program Cards */}
      <section className="py-12">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="space-y-10">
            {programs.map((prog) => (
              <div 
                key={prog.id} 
                id={prog.id}
                className={`${prog.bgColor} border ${prog.borderColor} rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-sm relative overflow-hidden scroll-mt-24`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-4">{prog.title}</h2>
                    <p className="text-xl text-accent-teal italic font-light mb-10">{prog.tagline}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Age Groups</h4>
                        <div className="flex flex-wrap gap-2">
                          {prog.ageGroups.map(age => (
                            <span key={age} className="px-4 py-2 bg-white border border-neutral-100 rounded-full text-primary-500 text-sm font-medium">{age}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Duration</h4>
                        <p className="text-primary-500 font-medium">{prog.duration}</p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      {[
                        { label: 'Sessions', val: prog.sessions, icon: Clock },
                        { label: 'Structure', val: prog.structure, icon: Milestone },
                        { label: 'Activities', val: prog.activities, icon: Wrench },
                        { label: 'Parent Engagement', val: prog.parentInvolvement, icon: Users },
                      ].map((item, i) => {
                        const Icon = item.icon
                        return (
                          <div key={i} className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{item.label}</h5>
                              <p className="text-neutral-700 leading-relaxed text-sm">{item.val}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm mb-8">
                      <h4 className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-6">Key Advantage</h4>
                      <p className="text-lg text-primary-500 font-serif italic leading-relaxed">
                        “{prog.usp}”
                      </p>
                    </div>
                    
                    <Link href="/schedule-visit">
                      <Button size="lg" className="w-full bg-accent-teal hover:bg-[#28A392] text-white rounded-full font-bold py-8">
                        Schedule Orientation Visit →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section (Simplified) */}
      <section className="py-12 bg-[#1E2A44] text-white">
        <div className="container-fluid max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16">Which path fits?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 border border-white/10 rounded-3xl bg-white/5 text-left">
              <h3 className="text-2xl font-serif font-bold text-accent-teal mb-4">Immediate Exposure</h3>
              <p className="text-white/70 leading-relaxed mb-8 font-light">Choose the 1-Day Challenge or 10-Day Workshop if you want your child to experience the environment, explore different STEM domains, and see immediate engagement patterns.</p>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <div className="p-10 border border-white/10 rounded-3xl bg-white/5 text-left">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Sustainable Growth</h3>
              <p className="text-white/70 leading-relaxed mb-8 font-light">Choose the Year-Long program to build sustainable independent problem-solving, work on complex projects, and interact regularly with scientists and experts.</p>
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-white text-center">
        <div className="container-fluid max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary-500 mb-8">Not sure?</h2>
          <p className="text-xl text-neutral-600 mb-12 font-light">Tell us your child’s age and interest during a visit—we’ll guide you.</p>
          <Link href="/schedule-visit">
            <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
              Schedule A Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
