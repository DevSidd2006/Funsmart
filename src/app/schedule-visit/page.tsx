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
      <section className="pt-40 pb-20 text-center">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-500 mb-8 leading-tight tracking-tight">
              Start with a conversation.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a visit — meet us, understand the process, understand how FunSmartism works. No commitment until you're ready.
            </p>
            
            <a href="#schedule-form">
              <Button size="lg" className="bg-accent-teal hover:bg-primary-500 border-none text-white px-12 py-6 rounded-full font-bold shadow-huge shadow-accent-teal/20 transition-all hover:scale-105">
                Schedule a visit →
              </Button>
            </a>
            
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-[0.3em] font-bold">
                Free Parent Orientation · 30–45 minutes · No Commitment
              </p>
              <div className="flex items-center gap-2 text-accent-teal font-bold text-xs">
                <MapPin size={14} />
                Bibwewadi, Pune
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 md:py-24 bg-white border-y border-neutral-100">
        <div className="container-fluid max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Content Column */}
            <div className="space-y-20">
              
              {/* SECTION 02 — HOW IT WORKS */}
              <div>
                <div className="mb-8">
                  <p className="text-xl font-serif font-bold text-primary-500">Three steps. Your child is in a project within a week.</p>
                </div>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="p-8 rounded-3xl bg-[#FAF9F6] border-t-4 border-primary-500 shadow-sm border border-neutral-100 transition-all hover:shadow-lg">
                    <p className="text-[12px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">Step 1 — You</p>
                    <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">Parent orientation.</h3>
                    <p className="text-neutral-600 leading-relaxed font-light italic mb-6">
                      Come in. Meet us. Understand the process. Ask every question you have.
                    </p>
                    <div className="text-xs font-mono text-accent-teal font-bold uppercase tracking-wider flex items-center gap-3">
                      <Clock size={14} />
                      30–45 min · In person · No fee
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-8 rounded-3xl bg-[#FAF9F6] border-t-4 border-accent-teal shadow-sm border border-neutral-100 transition-all hover:shadow-lg">
                    <p className="text-[12px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">Step 2 — Your child</p>
                    <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">10-Day Thinking Reset Workshop.</h3>
                    <p className="text-neutral-600 leading-relaxed font-light italic">
                      10 days. 10 themes. Real challenges, real materials, real thinking. Each day is different. All-inclusive.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-8 rounded-3xl bg-[#FAF9F6] border-t-4 border-amber-500 shadow-sm border border-neutral-100 transition-all hover:shadow-lg">
                    <p className="text-[12px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">Step 3 — The long game</p>
                    <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">Year-Long Intelligence Program.</h3>
                    <p className="text-neutral-600 leading-relaxed font-light italic">
                      One theme per month. One session per week. Deep projects, observed thinking, parent insights. Natural next step — no separate application.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 03 — WHAT HAPPENS AT THE ORIENTATION */}
              <div className="p-10 rounded-[2.5rem] bg-accent-surface border border-neutral-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl -mr-16 -mt-16" />
                <h3 className="text-2xl font-serif font-bold text-primary-500 mb-8 relative z-10">What to expect when you come in.</h3>
                <ul className="space-y-5 relative z-10">
                  {[
                    'Understand how FunSmartism works',
                    'See materials and real challenges',
                    'Ask workshop + year-long program questions'
                  ].map((item) => (
                    <li key={item} className="flex gap-4 items-center text-primary-500 font-medium">
                      <div className="w-5 h-5 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-neutral-200 text-xs font-mono text-neutral-400 italic space-y-2">
                  <p>Duration: 30–45 minutes</p>
                  <p>Bring your questions</p>
                  <p>Children are welcome to come along</p>
                </div>
              </div>

            </div>

            {/* Right Column: FORM (SECTION 06) */}
            <div id="schedule-form" className="sticky top-24">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-neutral-100 shadow-huge relative overflow-hidden">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-serif font-bold text-primary-500 mb-4">Schedule a visit.</h2>
                      <div className="inline-flex flex-col items-center gap-2">
                        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest font-bold">
                          Free Parent Orientation · 30–45 minutes
                        </p>
                        <div className="flex items-center gap-1.5 text-[12px] text-neutral-400 font-bold uppercase tracking-widest">
                          <MapPin size={10} />
                          Bibwewadi, Pune
                        </div>
                      </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Parent Name <span className="text-accent-teal">*</span></label>
                          <input 
                            required 
                            type="text" 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500" 
                            placeholder="Your name" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child's First Name <span className="text-accent-teal">*</span></label>
                          <input 
                            required 
                            type="text" 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500" 
                            placeholder="Child's name" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child's Age <span className="text-accent-teal">*</span></label>
                          <select 
                            required 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                          >
                            <option value="">Age (8–16)</option>
                            {[8,9,10,11,12,13,14,15,16].map(age => <option key={age} value={age}>{age}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">WhatsApp Number <span className="text-accent-teal">*</span></label>
                          <input 
                            required 
                            type="tel" 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500" 
                            placeholder="+91 XXXXX XXXXX" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Preferred Date <span className="text-accent-teal">*</span></label>
                          <input 
                            required 
                            type="date" 
                            min={todayStr} 
                            max={maxDateStr} 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Preferred Time <span className="text-accent-teal">*</span></label>
                          <select 
                            required 
                            className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                          >
                            <option value="">Time of day</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Anything else? (Optional)</label>
                        <textarea 
                          rows={2} 
                          className="w-full p-4 bg-[#FAF9F6] border border-neutral-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent-teal/30 transition-all font-medium text-primary-500 resize-none" 
                          placeholder="A question or note for the team"
                        ></textarea>
                      </div>

                      <div className="pt-4 space-y-6">
                        <Button type="submit" size="lg" className="w-full bg-accent-teal hover:bg-primary-500 border-none text-white py-6 shadow-huge shadow-accent-teal/20 transition-all font-bold rounded-2xl">
                          Confirm my orientation →
                        </Button>
                        
                        <div className="space-y-2 text-center">
                          <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-[0.1em]">No fee for the orientation session.</p>
                          <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-[0.1em]">No commitment until you enroll.</p>
                          <p className="text-[12px] font-bold text-accent-teal uppercase tracking-[0.1em]">We'll WhatsApp you a confirmation within 2 hours.</p>
                        </div>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-20 px-6">
                    <div className="w-24 h-24 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto text-accent-teal mb-10 animate-bounce-slow">
                      <Check size={48} strokeWidth={3} />
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-primary-500 mb-6">You're in.</h2>
                    <p className="text-xl text-neutral-600 font-light max-w-sm mx-auto leading-relaxed mb-10">
                      We'll WhatsApp you a confirmation within 2 hours with all the details.
                    </p>
                    <p className="text-2xl font-serif font-bold text-accent-teal italic">
                      See you soon — the FunSmartism team.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04 — THE 10-DAY THINKING RESET WORKSHOP */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-500 mb-6">10 days. 10 worlds.</h2>
            <p className="text-lg md:text-xl text-neutral-600 font-light italic max-w-3xl mx-auto">
              Each day, your child steps into a completely different challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { icon: Bot, label: 'Robotics' },
              { icon: Rocket, label: 'Space & Flight' },
              { icon: Target, label: 'How Stuff Works' },
              { icon: Milestone, label: 'Design Thinking' },
              { icon: MessageSquare, label: 'Sci-Fi Story Writing' }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm text-center flex flex-col items-center group hover:bg-accent-teal/5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6 group-hover:scale-110 transition-transform">
                  <card.icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-primary-500 uppercase tracking-widest">{card.label}</h4>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] border border-neutral-100 shadow-huge overflow-hidden">
            <div className="bg-primary-500 px-10 py-6 text-center">
              <span className="text-[12px] font-mono font-bold text-white/50 uppercase tracking-[0.4em]">A glimpse of the 10-day experience</span>
            </div>
            
            <div className="overflow-hidden transition-all duration-700" style={{ maxHeight: showAllThemes ? '2000px' : '450px' }}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50/50">
                    <th className="py-8 px-12 text-[12px] font-bold text-neutral-400 uppercase tracking-widest w-1/3">Theme</th>
                    <th className="py-8 px-12 text-[12px] font-bold text-neutral-400 uppercase tracking-widest">What the child encounters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {themes.map((row, i) => (
                    <tr key={i} className="group hover:bg-[#FAF9F6] transition-all">
                      <td className="py-8 px-12">
                        <div className="flex items-center gap-4">
                          <div className="text-[12px] font-mono font-bold text-accent-teal opacity-50">DAY {String(i + 1).padStart(2, '0')}</div>
                          <span className="font-bold font-serif text-lg text-primary-500">{row.theme}</span>
                        </div>
                      </td>
                      <td className="py-8 px-12 text-neutral-600 font-light italic leading-relaxed">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {!showAllThemes && (
              <button 
                onClick={() => setShowAllThemes(true)}
                className="w-full py-8 bg-neutral-50 text-accent-teal font-bold font-mono text-xs tracking-[0.3em] uppercase hover:bg-accent-teal hover:text-white transition-all flex items-center justify-center gap-3 cursor-pointer outline-none"
              >
                See all 10 themes <ChevronDown size={16} />
              </button>
            )}
            
            {showAllThemes && (
              <button 
                onClick={() => setShowAllThemes(false)}
                className="w-full py-8 bg-neutral-50 text-neutral-400 font-bold font-mono text-xs tracking-[0.3em] uppercase hover:bg-primary-500 hover:text-white transition-all flex items-center justify-center gap-3 cursor-pointer outline-none"
              >
                Show less <ChevronUp size={16} />
              </button>
            )}
          </div>

          <div className="mt-20 p-12 rounded-[2.5rem] bg-white border border-neutral-100 text-center shadow-lg">
            <p className="text-xl text-neutral-600 leading-relaxed font-light italic max-w-4xl mx-auto">
              <span className="font-bold not-italic text-primary-500">Throughout all 10 days:</span> We observe how your child thinks. Not what they produce — how they approach, persist, adapt, and engage. <span className="text-primary-500 not-italic">Insights shared with parents at the end of the workshop.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — THE YEAR-LONG INTELLIGENCE PROGRAM */}
      <section className="py-32 bg-white border-t border-neutral-100">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: '10 themes', val: 'one per month' },
              { label: '4 sessions', val: 'per month, 3 offline + 1 online' },
              { label: '1 insight report', val: 'per month for parents' },
              { label: 'Scientist Interaction', val: 'Priority access' },
            ].map((s, i) => (
              <div key={i} className="bg-[#FAF9F6] p-10 rounded-[2rem] text-center border border-neutral-100 shadow-sm group hover:bg-primary-500 transition-all">
                <h4 className="font-bold text-primary-500 text-2xl mb-4 group-hover:text-white transition-all">{s.label}</h4>
                <p className="text-[12px] text-accent-teal uppercase tracking-[0.2em] font-bold group-hover:text-accent-teal/80 transition-all">{s.val}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-3xl mx-auto space-y-10">
            <p className="text-2xl text-neutral-600 leading-relaxed font-light italic">
              Many families naturally continue into the year-long Thinking Program where deeper projects and weekly sessions help thinking habits grow over time.
            </p>
            <div className="h-px w-24 bg-accent-gold/20 mx-auto" />
            <p className="text-3xl text-primary-500 font-serif font-bold">
              You can explore this during your visit.
            </p>
            <p className="text-[12px] font-mono text-neutral-400 uppercase tracking-[0.4em]">
              <span className="font-bold text-primary-500">Every month:</span> Parents receive observation notes on their child's thinking habits.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA STRIP */}
      <section className="py-24 bg-primary-500 text-center relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <p className="text-2xl md:text-4xl text-white font-serif font-bold mb-12 max-w-3xl mx-auto italic leading-tight">
            The best way to know if this fits your child is to visit once.
          </p>
          <a href="#schedule-form">
            <Button size="lg" className="bg-accent-teal hover:bg-white hover:text-accent-teal border-none text-white font-bold px-16 py-6 rounded-full shadow-huge transition-all hover:scale-105">
              Schedule a visit →
            </Button>
          </a>
          <div className="mt-12 space-y-3">
            <p className="text-[12px] font-mono text-white/40 uppercase tracking-[0.5em] font-bold">
              Free Parent Orientation · 30–45 minutes
            </p>
            <p className="text-xs text-accent-teal font-bold uppercase tracking-widest">
              📍 Bibwewadi, Pune
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
