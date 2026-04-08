'use client'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'

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
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Steps / Info */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary-500 mb-12">How it works</h2>
                <div className="space-y-12">
                  {[
                    { step: '01', title: 'Schedule an orientation', desc: 'Pick a time to visit the lab in Bibwewadi, Pune. It takes 30-45 minutes.' },
                    { step: '02', title: 'Observe a session', desc: 'See a real thinking session in action and understand our methodology.' },
                    { step: '03', title: 'Start the journey', desc: 'If it feels right, enroll in the 10-day workshop or year-long lab.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8">
                       <span className="text-4xl font-serif font-black text-primary-100 flex-shrink-0">{item.step}</span>
                       <div>
                         <h3 className="text-xl font-bold text-primary-500 mb-4">{item.title}</h3>
                         <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-primary-500 text-white rounded-sm">
                <h3 className="text-2xl font-serif font-bold mb-6">What to expect</h3>
                <ul className="space-y-4 text-primary-100/80">
                  <li>• Meet with our facilitators</li>
                  <li>• See the materials and systems children use</li>
                  <li>• Learn about "Habits of the Mind"</li>
                  <li>• No commitment required</li>
                </ul>
              </div>
            </div>

            {/* Simple Form Placeholder */}
            <div className="bg-white p-10 md:p-16 border border-neutral-100 shadow-2xl rounded-sm">
              <h2 className="text-3xl font-serif font-bold text-primary-500 mb-10">Schedule Your Visit</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Parent Name</label>
                    <input type="text" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Phone Number</label>
                    <input type="text" className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Child's Age</label>
                  <select className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal">
                    <option>Select Age</option>
                    {[8,9,10,11,12,13,14,15,16].map(a => <option key={a}>{a} Years Old</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Preferred Program</label>
                  <select className="w-full p-4 bg-accent-surface border-none rounded-sm outline-none focus:ring-2 focus:ring-accent-teal">
                    <option>Select Program</option>
                    <option>10-Day Thinking Reset Workshop</option>
                    <option>Year-Long Thinking Lab</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <Button size="lg" className="w-full bg-[#1E2A44] hover:bg-accent-teal border-none text-white py-6 text-xl shadow-xl transition-all">
                  Confirm my orientation →
                </Button>
                <p className="text-center text-xs text-neutral-400">
                  We will confirm your visit via WhatsApp within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
