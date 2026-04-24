import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { Accordion } from '@/components/ui/Accordion'
import { Check, Calendar, ArrowRight, Star, Clock, Laptop, Calculator, Puzzle, Settings, Plane, Rocket, PenTool, Telescope, Cpu, Bot, Users, Presentation } from 'lucide-react'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism',
  description: 'Two programs. One way of thinking about children. 10-Day Reset Workshop and Year-Long Thinking Lab.',
  keywords: ['workshop', 'thinking lab', 'children programs', 'STEM', 'robotics', 'coding'],
}

const projectImages = [
  { src: '/images/hero-child-discovery.png', label: 'Robotics' },
  { src: '/images/iterative-thinking.png', label: 'Circuit building' },
  { src: '/images/aeromodeling.png', label: 'Aeromodelling' },
  { src: '/images/lab-observation.png', label: 'Mechanical' },
  { src: '/images/discovery-moment.png', label: 'Tech toys' },
  { src: '/images/pattern-recognition.png', label: 'Robotics' },
]

const workshopThemes = [
  { theme: 'Math Magic & Logic', icon: Calculator, desc: 'Sudoku, patterns, puzzles that have no single path to the answer. Logic as play.', color: 'text-[#4D96FF] bg-[#4D96FF]/10' },
  { theme: "Rubik's Cube", icon: Puzzle, desc: 'A 3D puzzle that rewards system thinking over trial and error. More than a toy.', color: 'text-[#FF6B6B] bg-[#FF6B6B]/10' },
  { theme: 'Design Thinking & Innovation', icon: PenTool, desc: 'A real problem. Open brief. Children design, prototype, and defend their idea.', color: 'text-[#6BCB77] bg-[#6BCB77]/10' },
  { theme: 'STEM — How Stuff Works', icon: Settings, desc: 'Real objects taken apart and examined. Why does this work? What breaks it?', color: 'text-[#FFD93D] bg-[#FFD93D]/10' },
  { theme: 'Aeromodelling & Space', icon: Plane, desc: 'Aeroplanes and rockets — children build and test models. Gravity is the examiner.', color: 'text-accent-teal bg-accent-teal/10' },
  { theme: 'Tech Toys', icon: Cpu, desc: "Electronics and mechanical systems opened up. What's inside? How does it move?", color: 'text-primary-500 bg-primary-500/10' },
  { theme: 'Sci-fi Story Writing', icon: PenTool, desc: 'Imagination meets logic. Children write stories grounded in real science concepts.', color: 'text-[#9B59B6] bg-[#9B59B6]/10' },
  { theme: 'Daytime Astronomy', icon: Telescope, desc: 'The sky as a thinking surface. Observation, scale, time, and big questions.', color: 'text-[#3498DB] bg-[#3498DB]/10' },
  { theme: 'Digital Skills', icon: Laptop, desc: 'Practical computing thinking — not just using a screen but understanding one.', color: 'text-[#E67E22] bg-[#E67E22]/10' },
  { theme: 'Robotics', icon: Bot, desc: "Build something that moves. Understand why it does — and why it sometimes doesn't.", color: 'text-[#27AE60] bg-[#27AE60]/10' },
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
    answer: 'Strongly recommended. The 10-day workshop gives the best starting point, and we will guide you during orientation based on your childs stage.',
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
    answer: 'You are welcome to stay in the building after informing us, but we ask parents to remain out of sight so the childs natural approach stays unchanged.',
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-32 pb-20 bg-[#1E2A44] text-white overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
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
              <span>No comparison between children</span>
              <span className="w-1 h-1 rounded-full bg-[#2FB5A3]" />
              <span>Scientist-Style Thinking</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROGRAM NAVIGATOR */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="#workshop" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-teal" />
              <div className="text-[10px] font-bold text-accent-teal uppercase mb-3 tracking-widest">Best for first-time families</div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">10-Day Thinking Reset Workshop</h3>
              <p className="text-neutral-500 text-sm mb-6">10 themes. 10 consecutive days. The entry point.</p>
              <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                Ages 8–16 <span className="text-accent-teal">|</span> ↓ See details
              </div>
            </Link>
            
            <Link href="#year-long" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-huge">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500" />
              <div className="text-[10px] font-bold text-primary-400 uppercase mb-3 tracking-widest">Best for deeper growth</div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">RoboSTEM Thinking Lab — Year-Long</h3>
              <p className="text-neutral-500 text-sm mb-6">One theme per month. Four sessions per month. A full academic year.</p>
              <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                Ages 8–16 <span className="text-primary-400">|</span> ↓ See details
              </div>
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
                  Entry Program · 10 consecutive days
                </div>
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
                      Children do
                    </h4>
                    <ul className="space-y-5">
                      {[
                        'A brand new theme and challenge every day',
                        'Build, make, test, and take most projects home',
                        'No detailed instructions — each child finds their own way before asking for help.',
                        'Logical puzzles and thinking challenges alongside projects'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-snug">
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
                        'Workshop-end parent note on how your child approached challenges',
                        'First insight into what support helps at home'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-snug">
                          <Check className="text-accent-teal mt-0.5 flex-shrink-0" size={18} />
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
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${t.color}`}>
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

            {/* Mobile Swipe Cards */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-8 mb-20 px-4 -mx-4 snap-x">
              {workshopThemes.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] snap-center bg-white border border-neutral-100 p-8 rounded-3xl shadow-lg">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${t.color}`}>
                    <t.icon size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary-500 mb-3">{t.theme}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed italic">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-neutral-400 font-mono italic mb-12 max-w-3xl mx-auto leading-loose">
              Across all 10 days, we observe how your child approaches the unfamiliar—not just what they produce. A thinking-habits parent note is shared at the end.
            </p>

            {/* Project Photo Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-8 text-center">A glimpse of what children build</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {projectImages.map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{img.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — YEAR-LONG PROGRAM */}
      <section className="section-spacing bg-[#1E2A44] text-white overflow-hidden" id="year-long">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1E2A44] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden mb-24">
              <div className="bg-primary-900 px-10 py-4 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                  Year-Long Program · Once a week
                </div>
                <div>Ages 8–16</div>
              </div>
              <div className="p-10 md:p-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-[1.15]">
                  FunSmartism RoboSTEM <br />
                  <span className="text-accent-teal">Thinking Lab — Year-Long</span>
                </h2>
                <p className="text-xl text-[#B7E3DD] mb-12 max-w-3xl leading-relaxed font-light">
                  One theme each month. Four sessions to go deeper. Real projects, monthly thinking challenges, and regular parent discussions on how your child approached real challenges.
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
                        'Most projects go home — some displayed at the center',
                        'Priority access to edu events: scientists, industry experts'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-white/80 font-medium leading-snug">
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
                        'Monthly parent note on how your child approached real challenges',
                        'Guidance on how thinking habits are evolving and when to step in or step back at home.'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-white/80 font-medium leading-snug">
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
                { label: 'Themes', val: '10', sub: 'one per month' },
                { label: 'Sessions', val: '4', sub: 'per month · once a week' },
                { label: 'Parent Note', val: '1', sub: 'Discussed monthly' },
                { label: 'Scientist', val: 'Interaction', sub: 'Priority access' }
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center flex flex-col items-center">
                  <div className="text-3xl font-serif font-bold text-white mb-2">{s.val}</div>
                  <div className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">{s.label}</div>
                  <div className="text-[10px] text-white/30 font-mono italic">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Edu Events Grid */}
            <div className="mb-32">
              <div className="max-w-3xl mb-12">
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Year-long exclusive: Edu events</h3>
                <p className="text-lg text-[#B7E3DD] font-light leading-relaxed">
                  Children learn scientist-style questioning by interacting with real scientists—not just listening to them. Year-long students get priority access to FunSmartism edu events — and they don't just attend. They help run them — building real responsibility.
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
                      <p className="text-[10px] text-white/40 leading-relaxed italic">{grid.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-10 rounded-3xl bg-white/5 border border-white/10 text-center">
                <p className="text-sm text-accent-teal font-medium tracking-wide leading-relaxed">
                  OVER TIME, CHILDREN DON’T JUST BUILD PROJECTS — THEY LEARN TO DISCUSS, QUESTION, AND EXPLAIN THEM WITH EXPERTS. <br />
                  <span className="text-white/40 text-[10px] mt-4 block">Also: Some selected projects are exhibited publicly. Parents, scientists, and the public attend the same event.</span>
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

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-neutral-200 shadow-huge">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#1E2A44] text-white">
                  <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest">Comparison</th>
                  <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest text-accent-teal">10-Day Workshop</th>
                  <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest">Year-Long Program</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 italic">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50 transition-all">
                    <td className="py-6 px-10 text-sm font-bold text-primary-500">{row.feature}</td>
                    <td className="py-6 px-10 text-sm text-neutral-500">{row.workshop}</td>
                    <td className="py-6 px-10 text-sm text-primary-500 font-medium">{row.yearLong}</td>
                  </tr>
                ))}
                <tr className="bg-neutral-50 font-bold">
                  <td className="py-6 px-10 text-sm text-primary-500 uppercase tracking-widest">Best for</td>
                  <td className="py-6 px-10 text-sm text-accent-teal">First insight</td>
                  <td className="py-6 px-10 text-sm text-primary-500">Deeper habit-building</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-16 text-center text-neutral-400 font-serif text-lg italic">
            Not sure how to start? Tell us your child's age when you visit — we'll guide you.
          </p>
        </div>
      </section>

      {/* SECTION 06 — FAQ */}
      <section className="section-spacing bg-accent-surface border-y border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
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
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Every program begins with a <br />
              <span className="text-accent-teal italic font-light opacity-90">parent orientation.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-16 max-w-2xl mx-auto leading-relaxed font-light italic">
              Come in. See how scientist-inspired RoboSTEM problem-solving works in real life. Ask your questions. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 text-lg shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold">
                  Schedule a visit →
                </Button>
              </Link>
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-16 py-6 text-lg w-full rounded-full">
                  Need Help Choosing?
                </Button>
              </Link>
            </div>
            <div className="mt-12 space-y-2">
              <p className="text-xs text-white/30 font-mono tracking-[0.3em] uppercase font-bold">
                Free Parent Orientation · 30–45 minutes 📍 Bibwewadi, Pune
              </p>
              <Link href="/programs" className="block text-sm text-accent-teal/60 hover:text-accent-teal transition-colors font-medium">
                Want to see the programs first? See programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
