import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { Check, ArrowRight, Calculator, Puzzle, Settings, Plane, Cpu, PenTool, Telescope, Laptop, Bot, Presentation, Milestone, Clock, Users, Brain, Anchor, Target, Rocket, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism',
  description:
    'Explore FunSmartism programs for children aged 8–15 in Pune. Choose from the Friday STEM Challenge Club, 10-Day Thinking Reset Workshop, Year-Long RoboSTEM Thinking Lab, 1-Day STEM Challenge, or Edu-Events.',
  keywords: [
    'RoboSTEM programs Pune',
    'STEM workshop for kids',
    'thinking lab',
    'robotics for children',
    'design thinking workshop',
    'children learning programs Pune',
    '10-day workshop',
  ],
  alternates: { canonical: `${siteUrl}/programs` },
  openGraph: {
    title: 'Programs | FunSmartism',
    description:
      'Explore FunSmartism programs for children aged 8–15 in Pune. Friday STEM Challenge Club, RoboSTEM Thinking Lab, 10-Day Reset Workshop, and more.',
    url: `${siteUrl}/programs`,
    siteName: 'FunSmartism',
    images: [{ url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'FunSmartism Programs' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programs | FunSmartism',
    description:
      'Explore FunSmartism programs for children aged 8–15 in Pune. Friday STEM Challenge Club, RoboSTEM Thinking Lab, 10-Day Reset Workshop, and more.',
    images: [`${siteUrl}/og-image-real.jpg`],
  },
}

const workshopThemes = [
  { theme: 'Robotics', desc: 'Build something that moves using real testing and debugging.' },
  { theme: 'Astronomy', desc: 'Observation journals, scale of space, light and time. Big questions, no telescope needed.' },
  { theme: 'Space Science', desc: 'Scale, orbit, gravity — thinking like a scientist.' },
  { theme: 'Aeromodeling', desc: 'Build and test model aeroplanes and rockets. Gravity is the examiner.' },
  { theme: 'Rubik’s & Cognitive Sudoku', desc: 'A 3D puzzle and number logic that rewards systems thinking over trial and error.' },
  { theme: 'Hands on STEM Projects', desc: 'Build, break, rebuild — understanding mechanical systems.' },
  { theme: 'Electronics & Tech Toys', desc: "Electronics and mechanical systems opened up. What's inside? How does it move?" },
  { theme: 'Design Thinking & Innovation', desc: 'A real problem. Open brief. Children design, prototype, and explain their idea.' },
  { theme: 'Sci-Fi Story Writing', desc: 'Stories grounded in real science. Imagination + logic working together.' },
  { theme: 'How Stuff Works', desc: 'Real objects taken apart and examined. Why does this work? What breaks it?' },
]

const yearLongMonthlyMap = [
  { theme: 'Robotics', desc: 'Design, build, test, debug. A working robot and own it.' },
  { theme: 'Astronomy', desc: 'Sky observation journals, constellation mapping, light and distance.' },
  { theme: 'Space Science', desc: 'Explore lunar missions, orbital mechanics, and space technologies.' },
  { theme: 'Aeromodeling', desc: 'Build gliders, study flight principles, launch paper rockets.' },
  { theme: 'Rubik’s & Cognitive Sudoku', desc: 'Layer-by-layer method, logic puzzles. Children teach each other.' },
  { theme: 'Hands on STEM Projects', desc: 'Progressively harder STEM builds. Experimenting with physics and structural integrity.' },
  { theme: 'Electronics & Tech Toys', desc: 'Circuit basics, mechanical movement, simple motor systems. Own kits, unique projects.' },
  { theme: 'Design Thinking & Innovation', desc: 'Identify a real problem. Research. Prototype. Refine. Present to the group.' },
  { theme: 'Sci-Fi Story Writing', desc: 'World-building, character design, plot driven by a real science concept. Final story shared.' },
  { theme: 'How Stuff Works', desc: 'Disassemble objects. Document findings. Explain mechanisms in their own words.' },
]

const comparisonData = [
  { feature: 'Duration', workshop: '1 day', friday: 'Full academic year', yearLong: '10 consecutive days', lab: '10 months' },
  { feature: 'Frequency', workshop: 'One session', friday: 'Every Friday', yearLong: 'Daily during vacation', lab: '2 weekends/month' },
  { feature: 'Themes', workshop: '1 challenge', friday: 'Rotating weekly', yearLong: 'All 10 — one per day', lab: 'All 10 — one per month' },
  { feature: 'Parent insight', workshop: 'Session observation', friday: '—', yearLong: 'Workshop-end note', lab: 'Monthly guidance note' },
  { feature: 'Edu-event access', workshop: 'Not included', friday: 'Not included', yearLong: 'Not included', lab: 'Priority access' },

  { feature: 'Best for', workshop: 'First look', friday: 'Weekly habit building', yearLong: 'Vacation deep-dive', lab: 'Long-term growth' },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'Do I need to complete the workshop before joining the year-long program?',
    answer: 'Strongly recommended. The 10-day workshop gives the best starting point, and we’ll guide you during orientation based on your child’s stage.',
  },
  {
    id: 'faq-2',
    question: 'Can my child attend more than two weekend sessions per month?',
    answer: 'The year-long program runs twice each month on weekends, and the workshop runs for 10 consecutive days. These schedules stay fixed.',
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
      <section className="pt-28 md:pt-44 pb-20 md:pb-24 bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-bold text-white mb-6 md:mb-8 leading-[1.05] text-balance tracking-tight">
              Different Programs. <br />
              <span className="text-accent-teal italic font-light opacity-90">One way of thinking about children.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#B7E3DD] mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
              These programs use real materials, scientist-inspired challenges, and live observation of how your child thinks. The difference is depth, pace, and continuity.
            </p>
          </div>

          {/* Navigator Strip */}
          <div className="flex flex-nowrap justify-start lg:justify-center gap-4 mb-16 overflow-x-auto hide-scrollbar px-4 -mx-4 md:px-0 md:mx-0">
            <Link href="#year-long" className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-serif font-bold tracking-wide flex items-center gap-2">
              <Rocket size={14} className="text-accent-teal" />
              RoboSTEM Thinking Lab
            </Link>
            <Link href="#friday-club" className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-serif font-bold tracking-wide flex items-center gap-2">
              <Clock size={14} className="text-accent-teal" />
              Friday STEM Challenge Club
            </Link>
            <Link href="#workshop" className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-serif font-bold tracking-wide flex items-center gap-2">
              <Target size={14} className="text-accent-teal" />
              10-Day STEM Tinkering Workshop
            </Link>
            <Link href="#one-day" className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-serif font-bold tracking-wide flex items-center gap-2">
              <Eye size={14} className="text-accent-teal" />
              1-Day STEM Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROGRAM NAVIGATOR */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            {/* Year-Long Card */}
            <Link href="#year-long" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary-500" />
              <div className="inline-flex px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Year-Long Program
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">RoboSTEM Thinking Lab</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">2 weekend sessions per month across 10 themes. Our flagship annual lab.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–15 <span className="text-primary-400 opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>

            {/* Friday Club Card */}
            <Link href="#friday-club" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent-teal" />
              <div className="inline-flex px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Weekly Club
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">Friday STEM Challenge Club</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">Weekly sessions every Friday to build consistent thinking habits across the year.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–15 <span className="text-accent-teal opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>

            {/* 10-Day Workshop Card */}
            <Link href="#workshop" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent-teal" />
              <div className="inline-flex px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Vacation Program
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">10-Day STEM Tinkering Workshop</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">Ten days. Ten themes. One new world every day during vacations.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–15 <span className="text-accent-teal opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>

            {/* 1-Day Gateway Card */}
            <Link href="#one-day" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-neutral-400" />
              <div className="inline-flex px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Trial Day
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">1-Day STEM Challenge</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">A single hands-on challenge where parents observe — not instruct.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–15 <span className="text-neutral-300 opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 04 — YEAR-LONG PROGRAM */}
      <section className="py-32 bg-[#1E2A44] text-white relative overflow-hidden" id="year-long">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl overflow-hidden mb-12">
              <div className="bg-primary-900 px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div>Year-Long Program · Ages 8–15</div>
                <div>Ages 8–15</div>
              </div>
              <div className="p-10 md:p-24">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 md:mb-10 leading-[1.1]">
                  RoboSTEM Thinking Lab — Annual Program
                </h2>
                <p className="text-lg md:text-xl text-[#B7E3DD] mb-16 max-w-3xl leading-relaxed font-light italic">
                  One theme each month. Two weekend sessions to go deeper. Real hands-on projects, monthly STEM challenges, and regular parent discussions on how your child approaches problems.
                  <br /><br />
                  This is not a tuition class. Children are guided — not given fixed answers. Facilitators observe how each child thinks during activities and share those observations with parents monthly — so you can support independent thinking at home without over-helping.
                </p>

                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 mb-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-teal mb-3">Sessions</p>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">2 weekend sessions per month</p>
                  <p className="text-[#B7E3DD] text-base font-light">10 months · Ages 8–15</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-8 p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Milestone size={14} /></div>
                      Children do
                    </h4>
                    <ul className="space-y-5">
                      {[
                        'Hands-on projects across 10 RoboSTEM themes',
                        'Monthly thinking challenge alongside the project',
                        'Priority access to edu-events with scientists and innovators',
                        'Projects go home — some displayed at the centre'
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
                        'Monthly note on how your child approached challenges',
                        'Guidance on supporting independent thinking at home',
                        'Priority notification for all edu-events and expert interactions'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-white/80 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-[11px] font-sans text-white/30 italic">
                      → The natural next step after the workshop.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Block Structure */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-0">
              {[
                { label: '10 themes', val: 'One per month', sub: 'explored in depth', icon: Milestone },
                { label: '2 sessions', val: 'Two weekends', sub: 'per month', icon: Clock },
                { label: '1 parent note', val: 'Monthly discussion', sub: 'on thinking habits', icon: Brain },
                { label: 'Scientist Interaction', val: 'Priority access', sub: 'to all Edu Events', icon: Users },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[3rem] text-center flex flex-col items-center group hover:bg-white/10 transition-all shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6 group-hover:scale-110 transition-transform">
                    <s.icon size={28} />
                  </div>
                  <div className="text-xl font-serif font-bold text-white mb-2">{s.label}</div>
                  <div className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">{s.val}</div>
                  <div className="text-[10px] text-white/40 font-sans italic">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Monthly Map Section 
            <div className="mb-40">
              <div className="text-center mb-20">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tight">How the year is structured?</h3>
                <p className="text-lg md:text-xl text-[#B7E3DD] font-light italic max-w-2xl mx-auto leading-relaxed">A monthly journey into thinking depth.</p>
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
                            <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal opacity-50 text-[10px] font-sans font-bold">
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
            */}


          </div>
        </div>
      </section>

      {/* SECTION 02.75 — FRIDAY STEM CHALLENGE CLUB */}
      <section className="py-24 bg-[#FAF9F6]" id="friday-club">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden border border-neutral-100 shadow-huge bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-10 md:p-16 lg:p-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  Weekly · Full Academic Year · Ages 8–15
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 leading-tight">
                  Friday STEM Challenge Club
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed font-light mb-10 max-w-2xl">
                  Every Friday, one independent challenge. No instructions waiting. No fixed answer at the end.
                  <br /><br />
                  Children work through open-ended STEM problems designed to build consistent thinking habits across the year — outside school routine and without textbook scaffolding.
                  <br /><br />
                  <span className="text-sm text-neutral-500 italic">This is an add-on program, not a replacement for the main lab. It works well alongside the Annual Program or as a standalone starting point.</span>
                </p>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-primary-500 uppercase tracking-widest opacity-80">
                    What each Friday session involves:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'One unfamiliar challenge per session',
                      'Independent problem-solving — children are not walked through steps',
                      'Different domains across the year: logic, mechanics, space, design, electronics'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-neutral-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary-500 text-white p-10 md:p-16 lg:p-20 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-teal mb-4">Best for</p>
                  <p className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
                    Children who need consistent weekly practice thinking independently — not just during school terms.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-teal mb-1">Sessions</p>
                    <p className="text-base font-serif font-bold text-white">Every Friday · Weekly · Ages 8–15</p>
                  </div>

                  <Link href="/schedule-visit" className="inline-flex w-full">
                    <Button size="lg" className="bg-accent-teal border-none text-white px-8 py-4 rounded-full font-bold shadow-huge shadow-accent-teal/30 w-full">
                      Ask about Friday Club
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — 10-DAY WORKSHOP */}
      <section className="py-16 md:py-32" id="workshop">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[40px] border border-neutral-100 shadow-huge overflow-hidden mb-32 relative">
              <div className="bg-[#1E2A44] px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                  Vacation Program · 10 Consecutive Days
                </div>
                <div>Ages 8–15</div>
              </div>
              <div className="p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 md:mb-10 leading-tight">
                  10-Day STEM Tinkering Workshop
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-3xl leading-relaxed font-light">
                  Ten days. Ten themes. One new world every day.
                  <br /><br />
                  A fast-paced hands-on RoboSTEM experience designed for vacations — where children move through robotics, space science, electronics, aeromodelling, design thinking, and more through real projects and challenges.
                  <br /><br />
                  Every project is a take-home creation. Every day is a different problem. Children are not told what the answer should look like.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-primary-500 font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500"><Target size={14} /></div>
                      Designed for children who:
                    </h4>
                    <ul className="space-y-4">
                      {[
                        'Enjoy building and exploring beyond textbooks',
                        'Want exposure to multiple STEM domains quickly',
                        'Need a more active learning environment during holidays',
                        'Are curious about how real systems and machines work'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8 p-10 bg-accent-teal/5 rounded-[2.5rem] border border-accent-teal/20 flex flex-col justify-between">
                    <div>
                      <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs mb-4">
                        <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Users size={14} /></div>
                        What parents receive:
                      </h4>
                      <p className="text-base text-primary-500 font-medium italic leading-relaxed">
                        A workshop-end note on how your child approached unfamiliar challenges across the ten days.
                      </p>

                      <div className="border-t border-accent-teal/20 pt-4 mt-6">
                        <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block mb-1">Next batch:</span>
                        <p className="text-xs text-primary-500 font-medium">Announced before each vacation period. Join the Parent Community for early updates.</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-accent-teal/20 flex flex-col gap-4">
                      <Link href="https://chat.whatsapp.com/L79pYlQ55XFAKk0PikYtUu" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-accent-teal hover:bg-[#28A392] text-white py-6 rounded-full font-bold shadow-md shadow-accent-teal/20">
                          Join Parent Community
                        </Button>
                      </Link>
                      <span className="text-[9px] text-neutral-400 font-sans text-center block">Sessions: 10 consecutive days · Vacation batches only · Ages 8–15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes Table Section */}
            <div className="mb-20">
              <div className="text-center mb-20">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6">The 10 themes</h3>
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
                    <h4 className="text-xl font-serif font-bold text-primary-500 mb-6">{t.theme}</h4>
                    <p className="text-neutral-500 leading-relaxed font-light italic">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Grid Visual Reinforcement */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500">Visualizing the themes</h3>
                <p className="text-sm text-neutral-400 mt-2">Variety is at the core of the experience.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: '/images/gallery/teaser-1.jpg', label: 'Robotics · Gears & Motors' },
                  { src: '/images/gallery/teaser-2.jpg', label: 'Aeromodelling · Props & Balsa' },
                  { src: '/images/gallery/teaser-3.jpg', label: 'Tech Toys · Electronic Systems' },
                  { src: '/images/gallery/teaser-4.jpg', label: 'Mechanical · Wooden Structures' },
                ].map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-[2rem] overflow-hidden shadow-xl group">
                    <Image src={img.src} alt={img.label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
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

      {/* SECTION 02.5 — ONE DAY GATEWAY */}
      <section className="py-32 bg-white" id="one-day">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[40px] border border-neutral-100 shadow-huge overflow-hidden relative">
              <div className="bg-neutral-800 px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Trial Day · One Session
                </div>
                <div>Ages 8–15</div>
              </div>
              <div className="p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 md:mb-10 leading-tight">
                  1-Day STEM Challenge <br className="hidden md:block" />
                  <span className="text-2xl text-neutral-500 font-light italic mt-2 block">Experience FunSmartism Before Joining</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-3xl leading-relaxed font-light">
                  A single hands-on session where children face an unfamiliar STEM challenge — while parents observe, not instruct.
                  <br /><br />
                  No preparation needed. No prior STEM experience required. Children are given a real problem, real materials, and no fixed steps to follow.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 p-10 bg-[#FAF9F6] rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-primary-500 font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500"><Eye size={14} /></div>
                      Parents observe:
                    </h4>
                    <ul className="space-y-6">
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1 font-bold">How their child responds to something completely new</strong>
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1 font-bold">Whether they retry independently after difficulty</strong>
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1 font-bold">How they approach testing ideas without guidance</strong>
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1 font-bold">How they react when there is no correct answer waiting</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6 p-10 bg-accent-teal/5 rounded-[2.5rem] border border-accent-teal/20 flex flex-col justify-between">
                    <div>
                      <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs mb-4">
                        <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Users size={14} /></div>
                        Parent Window
                      </h4>
                      <p className="text-base text-primary-500 font-medium italic leading-relaxed mb-4">
                        This is a rare window into how your child actually thinks — not how they perform when coached.
                      </p>
                      <p className="text-sm text-neutral-600 font-light leading-relaxed">
                        Most parents say this one session showed them something three years of school reports never did.
                      </p>
                      <div className="border-t border-accent-teal/20 pt-4 mt-6">
                        <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest block mb-1">Next batch:</span>
                        <p className="text-xs text-primary-500">Check current schedule or join the Parent Community for updates.</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-accent-teal/20">
                      <Link href="/schedule-visit">
                        <Button className="w-full bg-accent-teal hover:bg-[#28A392] text-white py-6 rounded-full font-bold shadow-md shadow-accent-teal/20">
                          Schedule a Visit →
                        </Button>
                      </Link>
                      <span className="text-[9px] text-neutral-400 font-sans text-center block mt-2">Sessions: Single day · Weekend slots · Ages 8–15</span>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 md:mb-8 tracking-tight">Quick Comparison</h2>
            <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">Helping you decide between first insight and deeper habit building.</p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-neutral-100 shadow-huge relative">
            <table className="w-full text-left bg-white relative z-10 border-collapse">
              <thead>
                <tr className="bg-[#1E2A44] text-white">
                  <th className="py-8 px-8 text-xs font-bold uppercase tracking-[0.2em]"></th>
                  <th className="py-8 px-4 text-xs font-bold uppercase tracking-[0.1em] text-center text-accent-teal">RoboSTEM Lab</th>
                  <th className="py-8 px-4 text-xs font-bold uppercase tracking-[0.1em] text-center">Friday Club</th>
                  <th className="py-8 px-4 text-xs font-bold uppercase tracking-[0.1em] text-center">10-Day Workshop</th>
                  <th className="py-8 px-4 text-xs font-bold uppercase tracking-[0.1em] text-center">1-Day Challenge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-accent-surface transition-all">
                    <td className="py-8 px-8 text-sm font-bold text-primary-500 font-serif">{row.feature}</td>
                    <td className="py-8 px-4 text-sm text-primary-500 font-medium text-center">{row.lab}</td>
                    <td className="py-8 px-4 text-sm text-neutral-500 font-light text-center">{row.friday}</td>
                    <td className="py-8 px-4 text-sm text-neutral-500 font-light text-center">{row.yearLong}</td>
                    <td className="py-8 px-4 text-sm text-neutral-500 font-light text-center">{row.workshop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-16 text-center text-primary-500 font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Not sure where to start? The 1-Day Challenge is the lowest-commitment entry point. Most families move to the Annual Program after that.
          </p>
        </div>
      </section>

      {/* SECTION 06 — FAQ */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
                Frequently asked questions.
              </h2>
              <div className="w-20 h-1.5 bg-accent-teal mt-8 mx-auto rounded-full" />
            </div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA */}
      <section className="py-24 text-center bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 md:mb-10 leading-tight tracking-tight">
              Every program begins with a <br className="hidden md:block" />
              <span className="text-accent-teal italic font-light opacity-90">parent orientation.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
              Come in. See how scientist-inspired RoboSTEM problem-solving works in real life. Ask your questions. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-teal border-none text-white px-10 py-4 text-base shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold hover:scale-105 transition-transform">
                  Schedule a visit →
                </Button>
              </Link>
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 py-4 text-base w-full rounded-full font-medium">
                  Need Help Choosing?
                </Button>
              </Link>
            </div>


          </div>
        </div>
      </section>

    </div>
  )
}
