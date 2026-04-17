import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { Accordion } from '@/components/ui/Accordion'
import { client } from '@/sanity/lib/client'
import { settingsQuery } from '@/sanity/lib/queries'
import { Check, Calendar, ArrowRight, Star, Clock, Laptop, Calculator, Puzzle, Settings, Plane, Rocket, PenTool, Telescope, Cpu, Bot, Users, Presentation} from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism',
  description: 'Two programs. One way of thinking about children. 10-Day Reset Workshop and Year-Long Thinking Lab for ages 8-16.',
  keywords: ['workshop', 'thinking lab', 'children programs', 'Pune', 'STEM', 'robotics', 'coding'],
}

const workshopThemes = [
  { theme: 'Math Magic & Logic', icon: Calculator, desc: 'Sudoku, number patterns, logic puzzles. No single correct path — multiple valid solutions.' },
  { theme: "Rubik's Cube", icon: Puzzle, desc: 'A 3D puzzle that rewards systems thinking over trial and error. More than a toy.' },
  { theme: 'Design Thinking & Innovation', icon: PenTool, desc: 'A real problem. Open brief. Children design, prototype, and explain their idea.' },
  { theme: 'STEM — How Stuff Works', icon: Settings, desc: 'Real objects taken apart and examined. Why does this work? What breaks it?' },
  { theme: 'Aeromodeling & Space', icon: Plane, desc: 'Build and test model aeroplanes and rockets. Gravity is the examiner.' },
  { theme: 'Tech Toys', icon: Cpu, desc: "Electronics and mechanical systems opened up. What's inside? How does it move?" },
  { theme: 'Sci-fi Story Writing', icon: PenTool, desc: 'Stories grounded in real science. Imagination + logic working together.' },
  { theme: 'Daytime Astronomy', icon: Telescope, desc: 'Observation journals, scale of space, light and time. No telescope needed.' },
  { theme: 'Digital Skills', icon: Laptop, desc: 'Logic of computing — not just using screens but understanding them.' },
  { theme: 'Robotics', icon: Bot, desc: 'Build something that moves. Using real testing and debugging.' },
]

const comparisonData = [
  { feature: 'Duration', workshop: '10 consecutive days', yearLong: '10 months · 4 sessions/month' },
  { feature: 'Session frequency', workshop: 'Once a day for 10 days', yearLong: 'Once a week' },
  { feature: 'Themes covered', workshop: 'All 10 — one per day', yearLong: 'All 10 — one per month (deeper)' },
  { feature: 'Projects', workshop: 'Build + take most home', yearLong: 'Build + take most home + some on display' },
  { feature: 'Thinking challenge', workshop: 'Woven into daily activities', yearLong: 'Monthly standalone challenge + project' },
  { feature: 'Parent insight note', workshop: 'Workshop-end parent note', yearLong: 'Monthly parent guidance note' },
  { feature: 'Edu events', workshop: 'Not included', yearLong: 'Priority access — students run the events' },
  { feature: 'Entry requirement', workshop: 'Parent orientation only', yearLong: 'Recommended: complete workshop first' },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'Do I need to complete the workshop before joining the year-long program?',
    answer: 'Strongly recommended. The 10-day workshop gives the best starting point, and we’ll guide you during orientation based on your child’s stage.',
  },
  {
    id: 'faq-2',
    question: 'Can my child attend more than one session per week?',
    answer: 'The year-long program runs once a week, and the workshop runs for 10 consecutive days. These schedules stay fixed.',
  },
  {
    id: 'faq-3',
    question: 'What should my child bring?',
    answer: 'Just curiosity. No preparation is needed, and we intentionally keep the challenge unfamiliar before the session begins.',
  },
  {
    id: 'faq-4',
    question: 'Do all projects go home?',
    answer: 'Most do. A few may stay at the center for edu events or display, and we always inform parents in advance.',
  },
  {
    id: 'faq-5',
    question: 'Can I watch my child during a session?',
    answer: 'You’re welcome to stay in the building after informing us, but we ask parents to remain out of sight so the child’s natural approach stays unchanged.',
  },
]

export default async function ProgramsPage() {
  const settings = await client.fetch(settingsQuery, {}, { cache: 'no-store' })

  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-32 pb-20 bg-[#1E2A44] text-white overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Two programs. <br />
              <span className="text-accent-teal italic font-light">One way of thinking about children.</span>
            </h1>
            <p className="text-xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Both programs use real materials, scientist-inspired challenges, and live observation of how your child thinks. The difference is depth, pace, and continuity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-bold border-t border-white/5 pt-10">
               <span>Ages 8–16</span>
               <span className="w-1 h-1 rounded-full bg-[#2FB5A3]" />
               <span>No grades</span>
               <span className="w-1 h-1 rounded-full bg-[#2FB5A3]" />
               <span>Scientist-Style Thinking</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROGRAM NAVIGATOR */}
      <section className="py-12 bg-neutral-50 sticky top-[72px] z-20 border-b border-neutral-100 shadow-sm hidden md:block">
        <div className="container-fluid">
          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="#workshop" className="group p-6 rounded-2xl bg-white border border-neutral-100 hover:border-accent-teal transition-all flex items-center justify-between">
               <div>
                  <div className="text-[10px] font-bold text-accent-teal uppercase mb-1">Best for first-time families</div>
                  <div className="text-lg font-serif font-bold text-primary-500">10-Day Thinking Reset Workshop</div>
               </div>
               <ArrowRight className="text-accent-teal group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="#year-long" className="group p-6 rounded-2xl bg-white border border-neutral-100 hover:border-[#1E2A44] transition-all flex items-center justify-between">
               <div>
                  <div className="text-[10px] font-bold text-primary-300 uppercase mb-1">Best for deeper growth</div>
                  <div className="text-lg font-serif font-bold text-primary-500">Year-Long Thinking Lab</div>
               </div>
               <ArrowRight className="text-[#1E2A44] group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03 — 10-DAY WORKSHOP */}
      <section className="section-spacing" id="workshop">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[40px] border border-neutral-100 shadow-huge overflow-hidden mb-24">
               <div className="bg-accent-teal px-10 py-4 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                     Entry Program
                  </div>
                  <div>10 Consecutive Days</div>
                  <div>Ages 8–16</div>
               </div>
               <div className="p-10 md:p-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
                    10-Day Thinking Reset Workshop
                  </h2>
                  <p className="text-xl text-neutral-500 mb-12 max-w-3xl leading-relaxed">
                    Ten days. Ten completely different themes. Every day, a new world — and a new way to observe how your child thinks.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                           <Bot size={18} /> Children do
                        </h4>
                        <ul className="space-y-5">
                           {[
                             'A brand new theme and challenge every day',
                             'Build, make, test, and take most projects home',
                             'Explore without detailed instructions first',
                             'Logical puzzles alongside physical projects'
                           ].map((item) => (
                             <li key={item} className="flex gap-4 items-start text-primary-500 font-medium">
                               <Check className="text-accent-teal mt-0.5" size={18} />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                     <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                           <Users size={18} /> Parents receive
                        </h4>
                        <ul className="space-y-5">
                           {[
                             'Workshop-end parent note on thinking habits',
                             'First insight into what support helps at home',
                             'Observations on child\'s approach to unknowns'
                           ].map((item) => (
                             <li key={item} className="flex gap-4 items-start text-primary-500 font-medium">
                               <Check className="text-accent-teal mt-0.5" size={18} />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-neutral-100 text-sm italic text-neutral-400">
                     → No preparation needed. No prior experience required. Just curiosity.
                  </div>
               </div>
            </div>

            {/* Themes Table */}
            <h3 className="text-3xl font-serif font-bold text-primary-500 mb-10 text-center">The 10 themes</h3>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-neutral-100 shadow-xl bg-white mb-32">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-100">
                    <th className="py-6 px-10 text-xs font-bold text-primary-500 uppercase tracking-widest w-1/3">Theme</th>
                    <th className="py-6 px-10 text-xs font-bold text-primary-500 uppercase tracking-widest">What the child encounters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {workshopThemes.map((t, i) => (
                    <tr key={i} className="group hover:bg-accent-surface transition-colors">
                      <td className="py-6 px-10 flex items-center gap-4 text-primary-500 font-bold">
                         <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all">
                            <t.icon size={20} />
                         </div>
                         {t.theme}
                      </td>
                      <td className="py-6 px-10 text-neutral-500 leading-relaxed font-light">{t.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Horizon Swipe Cards */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-8 mb-20 scrollbar-hide px-4 -mx-4">
               {workshopThemes.map((t, i) => (
                  <div key={i} className="flex-shrink-0 w-[280px] bg-white border border-neutral-100 p-8 rounded-3xl shadow-lg">
                     <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                        <t.icon size={24} />
                     </div>
                     <h4 className="text-xl font-serif font-bold text-primary-500 mb-3">{t.theme}</h4>
                     <p className="text-sm text-neutral-500 leading-relaxed italic">{t.desc}</p>
                  </div>
               ))}
            </div>
            <p className="text-center text-xs text-neutral-300 font-mono italic mb-32">
               Across all 10 days, we observe how your child approaches the unfamiliar—not just what they produce.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — YEAR-LONG PROGRAM */}
      <section className="section-spacing bg-[#1E2A44] text-white overflow-hidden" id="year-long">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            {/* Card */}
            <div className="bg-[#1E2A44] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden mb-24">
               <div className="bg-primary-900 px-10 py-4 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                     Long-term Engagement
                  </div>
                  <div>Once a Week</div>
                  <div>Ages 8–16</div>
               </div>
               <div className="p-10 md:p-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-[1.15]">
                    FunSmartism RoboSTEM <br />
                    <span className="text-accent-teal">Thinking Lab — Year-Long</span>
                  </h2>
                  <p className="text-xl text-[#B7E3DD] mb-12 max-w-3xl leading-relaxed font-light">
                    One theme each month. Four sessions to go deeper. Real projects, monthly thinking challenges, and regular parent discussions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
                     <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                           Children do
                        </h4>
                        <ul className="space-y-5">
                           {[
                             'Deep long-term projects across evolving challenges',
                             'Monthly thinking challenge alongside the project',
                             'Most projects go home after public display',
                             'Priority access to scientist interactions'
                           ].map((item) => (
                             <li key={item} className="flex gap-4 items-start text-white/80 font-medium">
                               <Check className="text-accent-teal mt-0.5 flex-shrink-0" size={18} />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                     <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                            Parents receive
                        </h4>
                        <ul className="space-y-5">
                           {[
                             'Monthly parent note on real challenges',
                             'Guidance on evolving thinking habits',
                             'Support on when to step in or step back at home'
                           ].map((item) => (
                             <li key={item} className="flex gap-4 items-start text-white/80 font-medium">
                               <Check className="text-accent-teal mt-0.5 flex-shrink-0" size={18} />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="pt-8 border-t border-white/5 text-sm italic text-white/30">
                     → The natural next step after the 10-day workshop.
                  </div>
               </div>
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 max-w-5xl mx-auto">
               {[
                 { label: 'Themes', val: '10', sub: 'One per month' },
                 { label: 'Sessions', val: '4', sub: 'Per month · Once/week' },
                 { label: 'Parent Note', val: '1', sub: 'Discussed Monthly' },
                 { label: 'Scientific Access', val: 'Priority', sub: 'Real Experts' }
               ].map((s) => (
                 <div key={s.label} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center flex flex-col items-center">
                    <div className="text-4xl font-serif font-bold text-white mb-2">{s.val}</div>
                    <div className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">{s.label}</div>
                    <div className="text-[10px] text-white/30 font-mono">{s.sub}</div>
                 </div>
               ))}
            </div>

            {/* Edu Events Grid */}
            <div className="mb-32">
               <div className="max-w-3xl mb-12">
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">Year-long exclusive: Edu events</h3>
                  <p className="text-lg text-[#B7E3DD] font-light">
                    Students learn scientist-style questioning by interacting with real scientists—not just listening to them. Year-long students don't just attend; they help run them.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Set up the space', desc: 'Organise and prepare the event environment.' },
                    { title: 'Run a stall', desc: 'Present their own projects to the public.' },
                    { title: 'Guide visitors', desc: 'Explain, demonstrate, answer real questions.' },
                    { title: 'Assist experts', desc: 'Assist scientists and industry professionals.' }
                  ].map((grid, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-teal/40 transition-all flex flex-col justify-between group">
                       <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6 group-hover:bg-accent-teal group-hover:text-white transition-all">
                          <Presentation size={20} />
                       </div>
                       <div>
                          <h4 className="text-lg font-serif font-bold text-white mb-4">{grid.title}</h4>
                          <p className="text-xs text-white/50 leading-relaxed italic">{grid.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 p-8 rounded-3xl bg-accent-teal/5 border border-accent-teal/10 text-center">
                  <p className="text-sm text-accent-teal font-medium tracking-wide">
                     ALSO: SOME SELECTED PROJECTS ARE EXHIBITED PUBLICLY. PARENTS, SCIENTISTS, AND THE PUBLIC ATTEND THE SAME EVENT.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — QUICK COMPARISON */}
      <section className="section-spacing bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6">Quick Comparison</h2>
            <p className="text-neutral-500">Helping you decide between first insight and deeper habit building.</p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-neutral-100 shadow-huge">
            {/* Desktop View */}
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1E2A44] text-white">
                    <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest">Comparison</th>
                    <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest text-accent-teal">10-Day Workshop</th>
                    <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest text-[#B7E3DD]">Year-Long Program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-all">
                      <td className="py-5 px-10 text-sm font-bold text-primary-500">{row.feature}</td>
                      <td className="py-5 px-10 text-sm text-neutral-500">{row.workshop}</td>
                      <td className="py-5 px-10 text-sm text-primary-500 font-medium">{row.yearLong}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile View */}
            <div className="md:hidden divide-y divide-neutral-100 italic">
               {comparisonData.map((row, i) => (
                  <div key={i} className="p-8">
                     <div className="text-[10px] font-bold text-primary-300 uppercase mb-4 tracking-widest">{row.feature}</div>
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <div className="text-[9px] font-bold text-accent-teal uppercase mb-1">Workshop</div>
                           <div className="text-xs text-neutral-500 font-light">{row.workshop}</div>
                        </div>
                        <div>
                           <div className="text-[9px] font-bold text-[#1E2A44] uppercase mb-1">Year-Long</div>
                           <div className="text-xs text-primary-500 font-bold">{row.yearLong}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
          <p className="mt-16 text-center text-neutral-400 font-serif text-lg">
             Not sure how to start? Tell us your child's age when you visit — we'll guide you.
          </p>
        </div>
      </section>

      {/* SECTION 06 — FAQ */}
      <section className="section-spacing bg-accent-surface border-y border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500  leading-tight">
                 Frequently asked questions.
               </h2>
             </div>
             <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA */}
      <section className="section-spacing text-center bg-[#1E2A44] text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.15] text-balanced">
               Every program begins with a <br />
               <span className="text-accent-teal italic font-light">parent orientation.</span>
             </h2>
             <p className="text-xl md:text-2xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
               Come in. See how scientist-inspired RoboSTEM problem-solving works in real life. Ask your questions. No commitment.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <div className="flex flex-col items-center gap-4">
                 <Link href="/schedule-visit" className="w-full sm:w-auto">
                   <Button size="lg" className="bg-accent-teal border-none text-white px-12 py-5 shadow-huge shadow-accent-teal/20 w-full font-bold">
                     Plan a Visit
                   </Button>
                 </Link>
                 <p className="text-xs text-white/30 font-mono tracking-widest uppercase">
                    Free Orientation · 30–45 mins · Bibwewadi
                 </p>
               </div>
               <Link href="/contact">
                  <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10 px-8 py-5">
                     Need Help Choosing?
                  </Button>
               </Link>
             </div>
          </div>
        </div>
      </section>

      <Footer data={settings} />
    </div>
  )
}
