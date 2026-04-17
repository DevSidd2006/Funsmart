'use client'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'

export default function ScheduleVisitPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-accent-surface text-center">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 mb-8 leading-tight">
              Start with a <br />
              <span className="text-accent-teal italic font-light">conversation.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Schedule a visit — meet us, understand the process, understand how FunSmartism works. No commitment until you're ready.
            </p>
            <div className="flex flex-col items-center">
              <Button size="lg" className="w-full sm:w-auto px-10 py-5 bg-accent-teal shadow-lg border-none text-white mb-4">
                Schedule a visit →
              </Button>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                Free Parent Orientation · 30–45 minutes <br className="sm:hidden" />
                <span className="hidden sm:inline"> | </span> 
                No Commitment · 📍 Bibwewadi, Pune
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container for Form and Steps */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Form Section */}
            <div className="bg-white p-8 md:p-14 border border-neutral-100 shadow-2xl rounded-2xl h-fit">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-primary-500 mb-4">Schedule a visit.</h2>
                <p className="text-sm font-mono text-accent-teal uppercase tracking-widest">
                  Free Parent Orientation<br/>30–45 minutes · 📍 Bibwewadi, Pune
                </p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Parent Name <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">WhatsApp Number <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Child's First Name <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal" placeholder="Child's name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Child's Age <span className="text-red-500">*</span></label>
                    <select required className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal text-neutral-600">
                      <option value="">Age (8–16)</option>
                      {[8,9,10,11,12,13,14,15,16].map(a => <option key={a} value={a}>{a} Years Old</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Preferred Date <span className="text-red-500">*</span></label>
                    <input required type="date" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal text-neutral-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Preferred Time <span className="text-red-500">*</span></label>
                    <select required className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal text-neutral-600">
                      <option value="">Morning / Afternoon / Evening</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Anything else? (Optional)</label>
                  <textarea rows={3} className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal resize-none" placeholder="A question or note for the team"></textarea>
                </div>
                
                <div className="pt-4 space-y-6">
                  <div className="text-center space-y-2 opacity-80">
                    <p className="text-xs font-medium text-neutral-600">No fee for the orientation session.</p>
                    <p className="text-xs font-medium text-neutral-600">No commitment until you enroll.</p>
                    <p className="text-xs font-medium text-neutral-600">We'll WhatsApp you a confirmation within 2 hours.</p>
                  </div>
                  <Button size="lg" className="w-full bg-[#1E2A44] hover:bg-accent-teal border-none text-white py-6 text-xl shadow-xl transition-all">
                    Confirm my orientation →
                  </Button>
                </div>
              </form>
            </div>

            {/* Steps & Expectations */}
            <div className="space-y-16">
              <div>
                <p className="text-neutral-500 font-medium mb-2">Three steps. Your child is in a project within a week.</p>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Parent orientation.', desc: 'Come in. Meet us. Understand the process. Ask every question you have.', extra: '30–45 min · In person · No fee', color: 'border-l-indigo-500' },
                    { step: '02', title: '10-Day Thinking Reset Workshop.', desc: '10 days. 10 themes. Real challenges, real materials, real thinking. Each day is different. All-inclusive.', color: 'border-l-accent-teal' },
                    { step: '03', title: 'Year-Long Intelligence Program.', desc: 'One theme per month. One session per week. Deep projects, observed thinking, parent insights. Natural next step — no separate application.', color: 'border-l-amber-500' }
                  ].map((item, i) => (
                    <div key={i} className={`flex gap-6 bg-accent-surface p-6 rounded-r-xl border-l-4 ${item.color}`}>
                       <div>
                         <p className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">Step {item.step} — {i === 0 ? 'You' : i === 1 ? 'Your child' : 'The long game'}</p>
                         <h3 className="text-lg font-bold text-primary-500 mb-2">{item.title}</h3>
                         <p className="text-neutral-600 leading-relaxed text-sm mb-2">{item.desc}</p>
                         {item.extra && <p className="text-xs font-mono text-accent-teal">{item.extra}</p>}
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-primary-500 text-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">What to expect when you come in.</h3>
                <ul className="space-y-4 text-primary-100/90 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1">•</span> 
                    <span>Understand how FunSmartism works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1">•</span> 
                    <span>See materials and real challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-teal mt-1">•</span> 
                    <span>Ask workshop + year-long program questions</span>
                  </li>
                </ul>
                <div className="text-xs text-primary-100/60 font-mono tracking-wide leading-relaxed pt-6 border-t border-primary-400/30">
                  Duration: 30–45 minutes<br/>Bring your questions<br/>Children are welcome to come along
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Themes Info */}
      <section className="section-spacing bg-white border-t border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-4">
              10 days. 10 worlds.
            </h2>
            <p className="text-lg text-neutral-500">
              Each day, your child steps into a completely different challenge.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-16">
              {[
                { title: 'Robotics', icon: '🤖' },
                { title: 'Space & flight', icon: '🚀' },
                { title: 'How stuff works', icon: '⚙️' },
                { title: 'Design thinking', icon: '💡' },
                { title: 'Sci-Fi Story writing', icon: '✍️' }
              ].map((item, i) => (
                <div key={i} className="bg-accent-surface p-6 rounded-2xl text-center border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-primary-500 text-sm">{item.title}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <span className="inline-block text-accent-teal font-medium border-b border-accent-teal pb-1 cursor-pointer hover:text-primary-500 hover:border-primary-500 transition-colors">See all 10 themes</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-4 px-6 font-bold text-primary-500 w-1/3">Theme</th>
                    <th className="py-4 px-6 font-bold text-primary-500 w-2/3">What the child encounters</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-neutral-600">
                  {[
                    { t: "Math Magic & Logic", d: "Sudoku, patterns, puzzles that have no single path to the answer. Logic as play." },
                    { t: "Rubik's Cube", d: "A 3D puzzle that rewards system thinking over trial and error. More than a toy." },
                    { t: "Design Thinking & Innovation", d: "A real problem. Open brief. Children design, prototype, and defend their idea." },
                    { t: "STEM — How Stuff Works", d: "Real objects taken apart and examined. Why does this work? What breaks it?" },
                    { t: "Aeromodelling & Space", d: "Aeroplanes and rockets — children build and test models. Gravity is the examiner." },
                    { t: "Tech Toys", d: "Electronics and mechanical systems opened up. What's inside? How does it move?" },
                    { t: "Sci-fi Story Writing", d: "Imagination meets logic. Children write stories grounded in real science concepts." },
                    { t: "Daytime Astronomy", d: "The sky as a thinking surface. Observation, scale, time, and big questions." },
                    { t: "Digital Skills", d: "Practical computing thinking — not just using a screen but understanding one." },
                    { t: "Robotics", d: "Build something that moves. Understand why it does — and why it sometimes doesn't." }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-primary-500">{row.t}</td>
                      <td className="py-4 px-6">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-accent-teal/5 p-8 rounded-2xl border border-accent-teal/20 text-center">
              <p className="text-primary-500 leading-relaxed font-medium">
                Throughout all 10 days: We observe how your child thinks. Not what they produce — how they approach, persist, adapt, and engage. Insights shared with parents at the end of the workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Year Long Program */}
      <section className="section-spacing bg-accent-surface border-t border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { l: "10 themes", r: "one per month" },
                { l: "4 sessions", r: "per month, 3 offline + 1 online" },
                { l: "1 insight report", r: "per month for parents" },
                { l: "Scientist Interaction", r: "Priority access" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 text-center">
                  <h4 className="font-bold text-primary-500 text-lg mb-2">{item.l}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">{item.r}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center space-y-6">
              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Many families naturally continue into the year-long Thinking Program where deeper projects and weekly sessions help thinking habits grow over time.
              </p>
              <p className="text-lg text-primary-500 font-bold">
                You can explore this during your visit.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 inline-block px-10 mt-4">
                <p className="text-neutral-600 text-sm font-medium">
                  <span className="text-accent-teal font-bold mr-2">Every month:</span> 
                  Parents receive observation notes on their child's thinking habits during that month's project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-spacing text-center bg-white border-t border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-xl text-neutral-600 font-medium">
              The best way to know if this fits your child is to visit once
            </p>
            <Button size="lg" className="w-full sm:w-auto px-12 py-5 bg-accent-teal hover:bg-primary-500 border-none text-white text-lg shadow-xl shadow-accent-teal/20 transition-all">
              Schedule a visit →
            </Button>
            <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
              Free Parent Orientation · 30–45 minutes · 📍 Bibwewadi, Pune.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
