import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { Check, ArrowRight, Calculator, Puzzle, Settings, Plane, Cpu, PenTool, Telescope, Laptop, Bot, Presentation, Milestone, Clock, Users, Brain, Anchor, Target, Rocket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism Intelligence Center',
  description: 'Help parents choose the right entry point. From our 10-Day Thinking Reset Workshop to the Year-Long Thinking Lab. Scientist-inspired RoboSTEM programs for ages 8–16.',
  keywords: ['workshop', 'thinking lab', 'children programs', 'STEM Pune', 'robotics', 'design thinking'],
}

const workshopThemes = [
  { theme: 'Math Magic & Logic', desc: 'Sudoku, number patterns, logic puzzles. No single correct path — multiple valid solutions.' },
  { theme: "Rubik's Cube", desc: 'A 3D puzzle that rewards systems thinking over trial and error. More than a toy.' },
  { theme: 'Design Thinking & Innovation', desc: 'A real problem. Open brief. Children design, prototype, and explain their idea.' },
  { theme: 'STEM — How Stuff Works', desc: 'Real objects taken apart and examined. Why does this work? What breaks it?' },
  { theme: 'Aeromodelling & Space', desc: 'Build and test model aeroplanes and rockets. Gravity is the examiner.' },
  { theme: 'Tech Toys', desc: "Electronics and mechanical systems opened up. What's inside? How does it move?" },
  { theme: 'Sci-fi Story Writing', desc: 'Stories grounded in real science. Imagination + logic working together.' },
  { theme: 'Daytime Astronomy & Sky Watching', desc: 'Observation journals, scale of space, light and time. Big questions, no telescope needed.' },
  { theme: 'Digital Skills', desc: 'Logic of computing — not just using screens but understanding them.' },
  { theme: 'Robotics', desc: 'Build something that moves. using real testing and debugging.' },
]

const yearLongMonthlyMap = [
  { theme: 'Math Magic & Logic', desc: 'Progressively harder puzzles. Children build their own Sudoku by end of month.' },
  { theme: "Rubik's Cube", desc: 'Layer-by-layer method, free algorithm exploration. Children teach each other.' },
  { theme: 'Design Thinking', desc: 'Identify a real problem. Research. Prototype. Refine. Present to the group.' },
  { theme: 'STEM — How Stuff Works', desc: 'Disassemble objects. Document findings. Explain mechanisms in their own words.' },
  { theme: 'Aeromodelling & Space', desc: 'Build gliders, study flight principles, launch paper rockets, explore scale of space.' },
  { theme: 'Tech Toys', desc: 'Circuit basics, mechanical movement, simple motor systems. Component level — own kits, unique projects' },
  { theme: 'Sci-fi Story Writing', desc: 'World-building, character design, plot driven by a real science concept. Final story shared.' },
  { theme: 'Daytime Astronomy', desc: 'Sky observation journals, constellation mapping, light and distance.' },
  { theme: 'Digital Skills', desc: 'Logic of computing, basic programming thinking, creating something that runs.' },
  { theme: 'Robotics', desc: 'Design, build, test, debug. A working robot and own it.' },
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

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-40 pb-32 bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
              Two programs. <br />
              <span className="text-accent-teal italic font-light opacity-90">One way of thinking about children.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
              Both programs use real materials, scientist-inspired challenges, and live observation of how your child thinks. The difference is depth, pace, and continuity.
            </p>

            {/* Navigator Strip */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#workshop" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Target size={14} className="text-accent-teal" />
                10-Day Workshop
              </Link>
              <Link href="#year-long" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Rocket size={14} className="text-accent-teal" />
                Year-Long Thinking Lab
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-[0.2em] font-bold border-t border-white/5 pt-12">
              <span>Ages 8–16</span>
              <span className="w-1 h-1 rounded-full bg-accent-teal" />
              <span>No grades</span>
              <span className="w-1 h-1 rounded-full bg-accent-teal" />
              <span>No comparison between children</span>
              <span className="w-1 h-1 rounded-full bg-accent-teal" />
              <span className="max-w-[400px] text-center">Scientist-inspired problem-solving patterns observed and shared with parents</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROGRAM NAVIGATOR */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="#workshop" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent-teal" />
              <div className="inline-flex px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Best for first-time families
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">10-Day Thinking Reset Workshop</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed">10 themes. 10 consecutive days. The entry point.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–16 <span className="text-accent-teal opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>
            
            <Link href="#year-long" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-huge">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary-500" />
              <div className="inline-flex px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Best for deeper growth
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">FunSmartism RoboSTEM Thinking Lab — Year-Long</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed">One theme per month. Four sessions per month. A full academic year.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–16 <span className="text-primary-400 opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03 — 10-DAY WORKSHOP */}
      <section className="py-32" id="workshop">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[40px] border border-neutral-100 shadow-huge overflow-hidden mb-32 relative">
              <div className="bg-accent-teal px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Entry Program · 10 consecutive days
                </div>
                <div>Ages 8–16</div>
              </div>
              <div className="p-10 md:p-20">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 mb-10 leading-tight">
                  10-Day Thinking <br className="hidden md:block" />
                  Reset Workshop
                </h2>
                <p className="text-2xl text-neutral-500 mb-16 max-w-3xl leading-relaxed font-light">
                  Ten days. Ten completely different themes. Every day, a new world — and a new way to observe how your child thinks.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal"><Bot size={14} /></div>
                      Children do
                    </h4>
                    <ul className="space-y-4">
                      {[
                        'A brand new theme and challenge every day',
                        'Build, make, test, and take most projects home',
                        'No detailed instructions — each child finds their own way',
                        'Logical puzzles and thinking challenges alongside projects'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6 p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal"><Users size={14} /></div>
                      Parents receive
                    </h4>
                    <ul className="space-y-4">
                      {[
                        'Workshop-end parent note on how your child approached challenges',
                        'First insight into what support helps at home'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-neutral-200 text-[11px] font-mono text-neutral-400 italic">
                      → No preparation needed. No prior experience required. Just curiosity.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes Table Section */}
            <div className="mb-20">
              <div className="text-center mb-20">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">The 10 themes</h3>
                <p className="text-xl text-neutral-500 font-light italic max-w-3xl mx-auto leading-relaxed">
                  Every day, a new world. We observe how your child approaches the unfamiliar—not just what they produce.
                </p>
              </div>

              {/* Desktop Theme Table */}
              <div className="hidden md:block overflow-hidden rounded-[3rem] border border-neutral-100 shadow-huge bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white pointer-events-none" />
                <table className="w-full text-left relative z-10 border-collapse">
                  <thead>
                    <tr className="bg-[#1E2A44] text-white">
                      <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em] w-1/3">Theme</th>
                      <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em]">What the child encounters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {workshopThemes.map((t, i) => (
                      <tr key={i} className="group hover:bg-accent-teal/[0.03] transition-all">
                        <td className="py-10 px-12">
                          <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-accent-teal/5 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all shadow-sm">
                              <Milestone size={22} />
                            </div>
                            <span className="text-primary-500 font-bold font-serif text-xl">{t.theme}</span>
                          </div>
                        </td>
                        <td className="py-10 px-12 text-neutral-600 leading-relaxed font-light italic text-lg">{t.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Swipe Cards */}
              <div className="md:hidden flex gap-6 overflow-x-auto pb-12 px-6 -mx-6 snap-x hide-scrollbar">
                {workshopThemes.map((t, i) => (
                  <div key={i} className="flex-shrink-0 w-[320px] snap-center bg-white border border-neutral-100 p-12 rounded-[3rem] shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-10">
                      <Milestone size={28} />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-primary-500 mb-6">{t.theme}</h4>
                    <p className="text-neutral-500 leading-relaxed font-light italic">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Grid Visual Reinforcement */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif font-bold text-primary-500">Visualizing the 10 themes</h3>
                <p className="text-sm text-neutral-400 mt-2">Variety is at the core of the experience.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: '/images/robotics-project.png', label: 'Robotics · Gears & Motors' },
                  { src: '/images/aeromodelling-project.png', label: 'Aeromodelling · Props & Balsa' },
                  { src: '/images/discovery-moment.png', label: 'Tech Toys · Electronic Systems' },
                  { src: '/images/pattern-recognition.png', label: 'Mechanical · Wooden Structures' },
                ].map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-[2rem] overflow-hidden shadow-xl group">
                    <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{img.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — YEAR-LONG PROGRAM */}
      <section className="py-32 bg-[#1E2A44] text-white relative overflow-hidden" id="year-long">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl overflow-hidden mb-32">
              <div className="bg-primary-900 px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                  Year-Long Program · Once a week
                </div>
                <div>Ages 8–16</div>
              </div>
              <div className="p-10 md:p-24">
                <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05]">
                  FunSmartism RoboSTEM <br className="hidden md:block" />
                  <span className="text-accent-teal italic font-light opacity-90 text-3xl md:text-6xl">Thinking Lab — Year-Long</span>
                </h2>
                <p className="text-2xl text-[#B7E3DD] mb-16 max-w-3xl leading-relaxed font-light italic">
                  One theme each month. Four sessions to go deeper. Real projects, monthly thinking challenges, and regular parent discussions.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-8 p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Milestone size={14} /></div>
                      Children do
                    </h4>
                    <ul className="space-y-5">
                      {[
                        'Deep long-term projects across evolving challenges',
                        'Monthly thinking challenge alongside the project',
                        'Priority access to edu events: experts & scientists',
                        'Projects go home — some displayed at the center'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-white/80 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8 p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Users size={14} /></div>
                      Parents receive
                    </h4>
                    <ul className="space-y-5">
                      {[
                        'Monthly parent note on how your child approached challenges',
                        'Guidance on evolving thinking habits & home support'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-white/80 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-[11px] font-mono text-white/30 italic">
                      → The natural next step after the workshop.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Block Structure */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40">
              {[
                { label: '10 themes', val: 'One per month', sub: 'explored in depth', icon: Milestone },
                { label: '4 sessions', val: 'Once a week', sub: 'per month', icon: Clock },
                { label: '1 parent note', val: 'Monthly discussion', sub: 'on thinking habits', icon: Brain },
                { label: 'Scientist Interaction', val: 'Priority access', sub: 'to all Edu Events', icon: Users },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center flex flex-col items-center group hover:bg-white/10 transition-all shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-8 group-hover:scale-110 transition-transform">
                    <s.icon size={28} />
                  </div>
                  <div className="text-xl font-serif font-bold text-white mb-2">{s.label}</div>
                  <div className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">{s.val}</div>
                  <div className="text-[10px] text-white/40 font-mono italic">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Monthly Map Section */}
            <div className="mb-40">
              <div className="text-center mb-20">
                <h3 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">How the year is structured?</h3>
                <p className="text-2xl text-[#B7E3DD] font-light italic max-w-2xl mx-auto leading-relaxed">A monthly journey into thinking depth.</p>
              </div>

              <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl relative shadow-huge">
                <table className="w-full text-left relative z-10 border-collapse">
                  <thead>
                    <tr className="bg-primary-900/40 text-white border-b border-white/10">
                      <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em] w-1/3">Theme</th>
                      <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em]">Approximately What children work on</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {yearLongMonthlyMap.map((t, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-all">
                        <td className="py-10 px-12">
                          <div className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal opacity-50 text-[10px] font-mono font-bold">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="text-white font-bold font-serif text-xl">{t.theme}</span>
                          </div>
                        </td>
                        <td className="py-10 px-12 text-[#B7E3DD] leading-relaxed font-light italic text-lg">{t.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Edu Events Differentiation Section */}
            <div className="mb-24">
              <div className="bg-accent-teal rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-huge">
                <div className="absolute top-0 right-0 w-full h-full lab-grid opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <div className="max-w-4xl mb-20">
                    <span className="inline-block px-5 py-2 bg-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Major Differentiator</span>
                    <h3 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05]">Year-long exclusive: <br />Edu events</h3>
                    <p className="text-2xl text-white/90 font-light leading-relaxed italic">
                      Children learn scientist-style questioning by interacting with real scientists—not just listening to them. <br className="hidden md:block" />
                      <span className="text-white font-bold not-italic mt-6 block">They help run them — building real responsibility.</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                      { title: 'Set up the space', desc: 'Organise and prepare the event environment.' },
                      { title: 'Run a stall', desc: 'Present their own projects to the public.' },
                      { title: 'Guide visitors', desc: 'Explain, demonstrate, answer questions.' },
                      { title: 'Assist experts', desc: 'Assist scientists and professionals.' }
                    ].map((grid, i) => (
                      <div key={i} className="p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                            <Presentation size={24} />
                          </div>
                          <h4 className="text-xl font-serif font-bold text-white mb-4">{grid.title}</h4>
                          <p className="text-sm text-white/60 leading-relaxed font-light italic">{grid.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-serif font-bold text-white mb-6 italic leading-relaxed">
                      Over time, children don’t just build projects — <br className="hidden md:block" />
                      they learn to discuss, question, and explain them with experts.
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto mb-6" />
                    <p className="text-white/70 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                      Some selected projects are exhibited publicly for parents & scientists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — QUICK COMPARISON */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-primary-500 mb-8 tracking-tight">Quick Comparison</h2>
            <p className="text-2xl text-neutral-500 font-light italic leading-relaxed">Helping you decide between first insight and deeper habit building.</p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-neutral-100 shadow-huge relative">
            <table className="w-full text-left bg-white relative z-10 border-collapse">
              <thead>
                <tr className="bg-[#1E2A44] text-white">
                  <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em]">Comparison</th>
                  <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em] text-accent-teal">10-Day Workshop</th>
                  <th className="py-8 px-12 text-xs font-bold uppercase tracking-[0.2em]">Year-Long Program</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-accent-surface transition-all">
                    <td className="py-8 px-12 text-sm font-bold text-primary-500 font-serif">{row.feature}</td>
                    <td className="py-8 px-12 text-base text-neutral-500 font-light italic">{row.workshop}</td>
                    <td className="py-8 px-12 text-base text-primary-500 font-medium italic">{row.yearLong}</td>
                  </tr>
                ))}
                <tr className="bg-neutral-50 font-bold border-t-2 border-[#1E2A44]/10">
                  <td className="py-10 px-12 text-xs text-primary-400 uppercase tracking-[0.2em]">Best for</td>
                  <td className="py-10 px-12 text-2xl text-accent-teal font-serif italic">First insight</td>
                  <td className="py-10 px-12 text-2xl text-primary-500 font-serif italic">Deeper habit-building</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-20 text-center text-neutral-400 font-serif text-2xl italic max-w-4xl mx-auto leading-relaxed">
            Not sure how to start? Tell us your child's age when you visit — we'll guide you.
          </p>
        </div>
      </section>

      {/* SECTION 06 — FAQ */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 leading-tight">
                Frequently asked questions.
              </h2>
              <div className="w-20 h-1.5 bg-accent-teal mt-8 mx-auto rounded-full" />
            </div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA */}
      <section className="py-40 text-center bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
              Every program begins with a <br className="hidden md:block" />
              <span className="text-accent-teal italic font-light opacity-90">parent orientation.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#B7E3DD] mb-20 max-w-2xl mx-auto leading-relaxed font-light italic">
              Come in. See how scientist-inspired RoboSTEM problem-solving works in real life. Ask your questions. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-teal border-none text-white px-20 py-8 text-2xl shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold hover:scale-105 transition-transform">
                  Schedule a visit →
                </Button>
              </Link>
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-20 py-8 text-2xl w-full rounded-full font-medium">
                  Need Help Choosing?
                </Button>
              </Link>
            </div>
            
            <div className="mt-20 space-y-4">
              <p className="text-xs font-mono tracking-[0.5em] uppercase font-bold text-white/30 text-center">
                Free Parent Orientation · 30–45 minutes 📍 Bibwewadi, Pune
              </p>
              <p className="text-xs text-white/40 font-medium text-center italic">
                Excellent for hesitant parents. We'll guide you during the session.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
