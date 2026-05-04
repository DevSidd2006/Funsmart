'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { Check, Calendar, Clock, MapPin, MessageSquare, ArrowRight, Bot, Target, Rocket, Users, Milestone, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ScheduleVisitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showAllThemes, setShowAllThemes] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to an API here
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const themes = [
    { theme: 'Math Magic & Logic', desc: 'Sudoku, patterns, puzzles that have no single path to the answer. Logic as play.' },
    { theme: "Rubik's Cube", desc: 'A 3D puzzle that rewards system thinking over trial and error. More than a toy.' },
    { theme: 'Design Thinking & Innovation', desc: 'A real problem. Open brief. Children design, prototype, and defend their idea.' },
    { theme: 'STEM — How Stuff Works', desc: 'Real objects taken apart and examined. Why does this work? What breaks it?' },
    { theme: 'Aeromodelling & Space', desc: 'Aeroplanes and rockets — children build and test models. Gravity is the examiner.' },
    { theme: 'Tech Toys', desc: 'Electronics and mechanical systems opened up. What\'s inside? How does it move?' },
    { theme: 'Sci-fi Story Writing', desc: 'Imagination meets logic. Children write stories grounded in real science concepts.' },
    { theme: 'Daytime Astronomy', desc: 'The sky as a thinking surface. Observation, scale, time, and big questions.' },
    { theme: 'Digital Skills', desc: 'Practical computing thinking — not just using a screen but understanding one.' },
    { theme: 'Robotics', desc: 'Build something that moves. Understand why it does — and why it sometimes doesn\'t.' },
  ]

  const previewThemes = themes.slice(0, 5)

  // Get date range for calendar
  const today = new Date()
  const maxDate = new Date()
  maxDate.setDate(today.getDate() + 14)
  const todayStr = today.toISOString().split('T')[0]
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* SECTION 01 — HERO */}
      <section className="pt-40 pb-12 text-center bg-[#1E2A44] !text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold !text-white mb-8 leading-tight tracking-tight">
              See The Environment In Person
            </h1>
            <p className="text-lg md:text-xl !text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              The best way to understand FunSmartism is to experience the learning environment directly. 
              Visit the lab, explore current RoboSTEM themes, interact with the team, and understand how children learn through hands-on challenges, experimentation, and real-world exploration.
            </p>
            
            <a href="#schedule-form">
              <Button size="lg" className="bg-accent-teal hover:bg-primary-500 border-none text-white px-12 py-6 rounded-full font-bold shadow-huge shadow-accent-teal/20 transition-all hover:scale-105">
                Schedule A Visit →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHY PARENTS VISIT */}
      <section className="py-16 bg-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 leading-tight">
                Most Parents Understand FunSmartism Properly Only After meeting and discussion.
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                <p>
                  Photos and websites can explain the activities.
                  But the real difference becomes visible when parents experience the environment themselves
                </p>
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                  <p className="font-medium text-primary-500 mb-4 uppercase tracking-widest text-xs opacity-70">They see:</p>
                  <ul className="space-y-3">
                    {[
                      'children building instead of only listening',
                      'discussions instead of passive note-taking',
                      'experimentation instead of fixed instructions',
                      'retrying instead of fear of mistakes',
                      'active participation instead of screen-heavy learning'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="italic">
                  That experience often changes how parents think about learning environments completely.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200">
               <Image 
                 src="/images/lab-real-3.jpg" 
                 alt="FunSmartism Lab Environment" 
                 fill 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      {/* SECTION 03 — WHAT YOU CAN EXPECT */}

      <section className="py-16 bg-neutral-50">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-16 text-center">
            What You Can Expect During Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Explore The Learning Environment', desc: 'See current RoboSTEM themes, hands-on project list, tools, challenge setups, and take-home project’s kit for students.' },
              { title: 'Understand The Learning Approach', desc: 'Learn how FunSmartism combines guided exploration, experimentation, STEM challenges, and real-world project-based learning.' },
              { title: 'Discuss Your Child’s Interests', desc: 'Share what your child enjoys, struggles with, or gets curious about — and understand how programs may fit best.' },
              { title: 'Observe The Session Culture', desc: 'Depending on the timing, families may also get opportunities to observe how children participate during real activities and challenges.' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-4 leading-snug">{card.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHO VISITS */}
      <section className="py-16 bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="bg-[#1E2A44] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 lab-grid opacity-10" />
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-12 relative z-10 text-center">
              Families Who Usually Connect Deeply With FunSmartism
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
              {[
                'Children who enjoy building and creating',
                'Children who ask deeper questions',
                'Children who prefer active learning environments',
                'Children who enjoy puzzles, projects, or experimentation',
                'Children curious about science, technology, or how things work',
                'Parents looking to explore different learning routines',
                'Families wanting more hands-on learning exposure beyond textbook and screens'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal mt-1">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-white/80 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 & 06 — FORM & INFO */}
      <section id="schedule-form" className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-neutral-100 shadow-huge">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-serif font-bold text-primary-500 mb-4">Schedule A Visit</h2>
                    <p className="text-neutral-600 mb-10 font-light italic">
                      Tell us a little about your child and preferred timings. We’ll help you understand the most suitable session, workshop, or starting point.
                    </p>

                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Parent Name</label>
                          <input required type="text" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child Age</label>
                          <input required type="number" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Area / Location</label>
                          <input required type="text" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child Interests</label>
                          <input required type="text" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Phone Number</label>
                          <input required type="tel" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input required type="email" className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Preferred Visit Timing</label>
                        <select required className="w-full p-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all appearance-none">
                          <option value="">Select a timing</option>
                          <option>Weekend Morning</option>
                          <option>Weekend Afternoon</option>
                          <option>Weekday Evening (Limited slots)</option>
                        </select>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent-teal hover:bg-primary-500 border-none text-white py-6 shadow-huge shadow-accent-teal/20 transition-all font-bold rounded-2xl">
                        Schedule Your Visit →
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto text-accent-teal mb-8">
                      <Check size={48} strokeWidth={3} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-primary-500 mb-4">Request Sent.</h2>
                    <p className="text-neutral-600 font-light">We'll get back to you within 24 hours to confirm your visit details.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary-500">Visit Information</h2>
              <div className="space-y-4">
                {[
                  { label: 'Location', val: 'Bibwewadi, Pune (Exact location shared after confirmation)', icon: MapPin },
                  { label: 'Session Format', val: 'Weekend-based sessions across the academic year.', icon: Calendar },
                  { label: 'Age Group', val: 'Typically for children aged 8–15 years.', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex gap-5 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-primary-500 font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-[#1E2A44] p-8 rounded-[2.5rem] text-white">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-teal mb-6">Programs Include</h4>
                  <ul className="space-y-4">
                    {[
                      'Year-long RoboSTEM Lab',
                      '10-Day Thinking RESET',
                      '1-day STEM Challenge',
                      'Edu-events & Exhibitions'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-sm font-light text-white/80">
                        <div className="w-1 h-1 rounded-full bg-accent-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 07 — FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Sometimes One Visit Changes Everything.
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-xl text-neutral-600 font-light leading-relaxed mb-12">
            <p>
              Many parents walk in expecting “just another activity class.”
            </p>
            <p>
              They leave seeing their child participate, question, experiment, retry, and engage differently than they expected.
            </p>
            <p className="italic">
              That difference is difficult to explain through advertisements alone. It becomes visible inside the environment.
            </p>
          </div>
          <a href="#schedule-form">
            <Button size="lg" className="bg-accent-teal hover:bg-primary-500 border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
              Schedule Your Visit →
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

