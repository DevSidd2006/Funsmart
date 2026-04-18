'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'

export default function ScheduleVisitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showAllThemes, setShowAllThemes] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const themes = [
    { t: "Robotics", d: "Build something that moves. Understand why it does — and why it sometimes doesn't." },
    { t: "Aeromodelling & Space", d: "Aeroplanes and rockets — children build and test models. Gravity is the examiner." },
    { t: "STEM — How Stuff Works", d: "Real objects taken apart and examined. Why does this work? What breaks it?" },
    { t: "Design Thinking & Innovation", d: "A real problem. Open brief. Children design, prototype, and defend their idea." },
    { t: "Sci-fi Story Writing", d: "Imagination meets logic. Children write stories grounded in real science concepts." },
    { t: "Math Magic & Logic", d: "Sudoku, patterns, puzzles that have no single path to the answer. Logic as play." },
    { t: "Rubik's Cube", d: "A 3D puzzle that rewards system thinking over trial and error. More than a toy." },
    { t: "Tech Toys", d: "Electronics and mechanical systems opened up. What's inside? How does it move?" },
    { t: "Daytime Astronomy", d: "The sky as a thinking surface. Observation, scale, time, and big questions." },
    { t: "Digital Skills", d: "Practical computing thinking — not just using a screen but understanding one." },
  ]

  const previewThemes = themes.slice(0, 5)

  // Get date range for calendar
  const today = new Date()
  const maxDate = new Date()
  maxDate.setDate(today.getDate() + 14)
  const todayStr = today.toISOString().split('T')[0]
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <div className="bg-[#FAF9F6] text-[#1E2A44] font-sans">
      
      {/* SECTION 01 — HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAFC]">
        <div className="container-fluid max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1E2A44] mb-6 leading-tight">
            Start with a <br className="hidden md:block" />
            <span className="italic font-light text-accent-teal">conversation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Schedule a visit — meet us, understand the process, understand how FunSmartism works. No commitment until you're ready.
          </p>
          
          <a href="#schedule-form" className="inline-block mb-6">
            <Button size="lg" className="px-10 py-5 bg-[#1E2A44] hover:bg-accent-teal border-none text-white text-lg rounded-full font-semibold shadow-lg transition-colors">
              Schedule a visit →
            </Button>
          </a>
          
          <div className="text-xs md:text-sm font-mono text-neutral-500 uppercase tracking-widest font-bold">
            Free Parent Orientation <span className="mx-2 text-neutral-300">·</span> 30–45 minutes <br className="md:hidden"/>
            <span className="hidden md:inline mx-2 text-neutral-300">·</span> No Commitment <span className="mx-2 text-neutral-300">·</span> 📍 Bibwewadi, Pune
          </div>
        </div>
      </section>

      {/* Main Container - Sections 02, 03, 06 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Context (Steps & What to expect) */}
            <div className="space-y-16">
              
              {/* SECTION 02 — HOW IT WORKS */}
              <div>
                <p className="text-lg font-bold text-[#1E2A44] mb-8 font-serif">
                  Three steps. Your child is in a project within a week.
                </p>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border-t-4 border-t-[#1E2A44] shadow-sm border border-neutral-100">
                    <p className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-2">Step 1 — You</p>
                    <h3 className="text-xl font-bold text-[#1E2A44] mb-3">Parent orientation.</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-3 font-light">
                      Come in. Meet us. Understand the process. Ask every question you have.
                    </p>
                    <p className="text-xs font-mono text-accent-teal font-bold">30–45 min · In person · No fee</p>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border-t-4 border-t-accent-teal shadow-sm border border-neutral-100">
                    <p className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-2">Step 2 — Your child</p>
                    <h3 className="text-xl font-bold text-[#1E2A44] mb-3">10-Day Thinking Reset Workshop.</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-3 font-light">
                      10 days. 10 themes. Real challenges, real materials, real thinking. Each day is different. All-inclusive.
                    </p>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border-t-4 border-t-amber-500 shadow-sm border border-neutral-100">
                    <p className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-2">Step 3 — The long game</p>
                    <h3 className="text-xl font-bold text-[#1E2A44] mb-3">Year-Long Intelligence Program.</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-3 font-light">
                      One theme per month. One session per week. Deep projects, observed thinking, parent insights. Natural next step — no separate application.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 03 — WHAT HAPPENS AT THE ORIENTATION */}
              <div className="bg-[#1E2A44] p-8 md:p-10 rounded-3xl shadow-lg text-white">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">What to expect when you come in.</h3>
                <ul className="space-y-4 text-neutral-200 mb-8 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1 font-bold">•</span> 
                    <span>Understand how FunSmartism works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1 font-bold">•</span> 
                    <span>See materials and real challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1 font-bold">•</span> 
                    <span>Ask workshop + year-long program questions</span>
                  </li>
                </ul>
                <div className="text-xs text-neutral-400 font-mono tracking-wide leading-relaxed pt-6 border-t border-white/10">
                  Duration: 30–45 minutes <br/>
                  Bring your questions <br/>
                  Children are welcome to come along
                </div>
              </div>

            </div>

            {/* Right Column: FORM (SECTION 06) */}
            <div id="schedule-form" className="bg-white p-8 md:p-12 border border-neutral-200 shadow-2xl rounded-[2.5rem] sticky top-8">
              
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-[#1E2A44] mb-3">Schedule a visit.</h2>
                    <p className="text-xs font-mono text-accent-teal uppercase tracking-widest font-bold">
                      Free Parent Orientation <br className="sm:hidden" />
                      <span className="hidden sm:inline mx-2 text-neutral-300">·</span> 30–45 minutes <br className="sm:hidden" />
                      <span className="hidden sm:inline mx-2 text-neutral-300">·</span> 📍 Bibwewadi, Pune
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={handleFormSubmit}>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Parent Name <span className="text-[#1E2A44]">*</span></label>
                      <input required type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44]" placeholder="Your name" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child's Name <span className="text-[#1E2A44]">*</span></label>
                        <input required type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44]" placeholder="Child's name" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Child's Age <span className="text-[#1E2A44]">*</span></label>
                        <select required className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44] appearance-none" style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231E2A44%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                          <option value="">Age (8–16)</option>
                          {[8,9,10,11,12,13,14,15,16].map(a => <option key={a} value={a}>{a}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">WhatsApp Number <span className="text-[#1E2A44]">*</span></label>
                      <input required type="tel" className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44]" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Preferred Date <span className="text-[#1E2A44]">*</span></label>
                        <input required type="date" min={todayStr} max={maxDateStr} className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44]" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Preferred Time <span className="text-[#1E2A44]">*</span></label>
                        <select required className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44] appearance-none" style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231E2A44%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                          <option value="">Time of day</option>
                          <option>Morning</option>
                          <option>Afternoon</option>
                          <option>Evening</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5 pb-2">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Anything else? (Optional)</label>
                      <textarea rows={2} className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-[#1E2A44] resize-none" placeholder="A question or note for the team"></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent-teal hover:bg-[#1E2A44] border-none text-white py-6 text-xl shadow-lg transition-colors font-bold rounded-xl">
                      Confirm my orientation →
                    </Button>
                    
                    <div className="pt-6 space-y-2 text-center border-t border-neutral-100">
                      <p className="text-sm font-medium text-neutral-500">No fee for the orientation session.</p>
                      <p className="text-sm font-medium text-neutral-500">No commitment until you enroll.</p>
                      <p className="text-sm font-medium text-neutral-500">We'll WhatsApp you a confirmation within 2 hours.</p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto text-accent-teal mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-[#1E2A44]">You're in.</h2>
                  <p className="text-lg text-neutral-600 font-light max-w-sm mx-auto leading-relaxed">
                    We'll WhatsApp you a confirmation within 2 hours with all the details.
                  </p>
                  <p className="text-lg font-bold text-accent-teal pt-4">
                    See you soon — the FunSmartism team.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04 — THE 10-DAY THINKING RESET WORKSHOP */}
      <section className="py-24 bg-[#FAF9F6] border-t border-neutral-200">
        <div className="container-fluid max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
              10 days. 10 worlds.
            </h2>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Each day, your child steps into a completely different challenge.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden mb-12">
            <div className="p-8 md:p-10 border-b border-neutral-100 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-teal">A glimpse of the 10-day experience</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50/50">
                    <th className="py-5 px-8 font-serif font-bold text-[#1E2A44] w-1/3 text-lg border-b border-neutral-100">Theme</th>
                    <th className="py-5 px-8 font-serif font-bold text-[#1E2A44] w-2/3 text-lg border-b border-neutral-100">What the child encounters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {showAllThemes ? (
                    themes.map((row, i) => (
                      <tr key={i} className="hover:bg-[#F8FAFC] transition-colors">
                        <td className="py-5 px-8 font-bold text-[#1E2A44] text-base">{row.t}</td>
                        <td className="py-5 px-8 text-neutral-600 font-light leading-relaxed">{row.d}</td>
                      </tr>
                    ))
                  ) : (
                    previewThemes.map((row, i) => (
                      <tr key={i} className="hover:bg-[#F8FAFC] transition-colors">
                        <td className="py-5 px-8 font-bold text-[#1E2A44] text-base">{row.t}</td>
                        <td className="py-5 px-8 text-neutral-600 font-light leading-relaxed">{row.d}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            {!showAllThemes && (
              <div className="p-6 text-center border-t border-neutral-100 bg-neutral-50/30">
                <button 
                  onClick={() => setShowAllThemes(true)}
                  className="text-accent-teal font-bold font-mono text-sm tracking-widest uppercase hover:text-[#1E2A44] transition-colors cursor-pointer outline-none"
                >
                  See all 10 themes ↓
                </button>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-lg text-neutral-600 leading-relaxed font-light max-w-4xl mx-auto italic">
              <span className="font-bold font-serif not-italic text-[#1E2A44] block mb-2 text-xl">Throughout all 10 days:</span>
              We observe how your child thinks. Not what they produce — how they approach, persist, adapt, and engage. Insights shared with parents at the end of the workshop.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — THE YEAR-LONG INTELLIGENCE PROGRAM */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-fluid max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            <div className="bg-[#FAF9F6] p-6 rounded-2xl text-center flex flex-col justify-center border border-neutral-100 shadow-sm">
              <h4 className="font-bold text-[#1E2A44] text-xl mb-2">10 themes</h4>
              <p className="text-xs text-accent-teal uppercase tracking-widest font-mono font-bold">one per month</p>
            </div>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl text-center flex flex-col justify-center border border-neutral-100 shadow-sm">
              <h4 className="font-bold text-[#1E2A44] text-xl mb-2">4 sessions</h4>
              <p className="text-xs text-accent-teal uppercase tracking-widest font-mono font-bold">per month,<br/>3 offline + 1 online</p>
            </div>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl text-center flex flex-col justify-center border border-neutral-100 shadow-sm">
              <h4 className="font-bold text-[#1E2A44] text-xl mb-2">1 insight</h4>
              <p className="text-xs text-accent-teal uppercase tracking-widest font-mono font-bold">report per month<br/>for parents</p>
            </div>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl text-center flex flex-col justify-center border border-neutral-100 shadow-sm">
              <h4 className="font-bold text-[#1E2A44] text-xl mb-2">Scientist</h4>
              <p className="text-xs text-accent-teal uppercase tracking-widest font-mono font-bold">Interaction<br/>Priority access</p>
            </div>
          </div>
          
          <div className="text-center space-y-8">
            <p className="text-xl text-neutral-600 leading-relaxed font-light">
              Many families naturally continue into the year-long Thinking Program where deeper projects and weekly sessions help thinking habits grow over time.
            </p>
            <p className="text-xl text-[#1E2A44] font-bold font-serif">
              You can explore this during your visit.
            </p>
            <p className="text-lg text-neutral-600 font-light italic">
              <span className="font-bold font-serif not-italic text-[#1E2A44] mr-2">Every month:</span> 
              Parents receive observation notes on their child's thinking habits during that month's project.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA STRIP */}
      <section className="py-20 bg-[#1E2A44] text-center border-t border-neutral-900">
        <div className="container-fluid max-w-3xl mx-auto px-4">
          <p className="text-2xl text-white font-serif mb-8 leading-relaxed">
            The best way to know if this fits your child is to visit once.
          </p>
          <a href="#schedule-form" className="inline-block mb-6">
            <Button size="lg" className="px-10 py-5 bg-accent-teal hover:bg-white hover:text-accent-teal border-none text-white text-lg font-bold shadow-lg transition-colors rounded-full">
              Schedule a visit →
            </Button>
          </a>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">
            Free Parent Orientation <span className="mx-2 text-white/30">·</span> 30–45 minutes <span className="mx-2 text-white/30">·</span> 📍 Bibwewadi, Pune.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
