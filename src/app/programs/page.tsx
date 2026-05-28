import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { Check, ArrowRight, Calculator, Puzzle, Settings, Plane, Cpu, PenTool, Telescope, Laptop, Bot, Presentation, Milestone, Clock, Users, Brain, Anchor, Target, Rocket, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism Intelligence Center',
  description:
    'Explore FunSmartism programs for children aged 8–16 in Pune. Choose from the 10-Day Thinking Reset Workshop, Year-Long RoboSTEM Thinking Lab, 1-Day STEM Challenge, or Edu-Events.',
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
    title: 'Programs | FunSmartism Intelligence Center',
    description:
      'Explore FunSmartism programs for children aged 8–16 in Pune. RoboSTEM Thinking Lab, 10-Day Reset Workshop, and more.',
    url: `${siteUrl}/programs`,
    siteName: 'FunSmartism Intelligence Center',
    images: [{ url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'FunSmartism Programs' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programs | FunSmartism Intelligence Center',
    description:
      'Explore FunSmartism programs for children aged 8–16 in Pune. RoboSTEM Thinking Lab, 10-Day Reset Workshop, and more.',
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
      <section className="pt-28 md:pt-44 pb-20 md:pb-24 bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[50px] font-serif font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Different Programs. <br />
              <span className="text-accent-teal italic font-light opacity-90">One way of thinking about children.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#B7E3DD] mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
              These programs use real materials, scientist-inspired challenges, and live observation of how your child thinks. The difference is depth, pace, and continuity.
            </p>

            {/* Navigator Strip */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#one-day" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Eye size={14} className="text-accent-teal" />
                1-Day Gateway
              </Link>
              <Link href="#workshop" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Target size={14} className="text-accent-teal" />
                10-Day Workshop
              </Link>
              <Link href="#year-long" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Rocket size={14} className="text-accent-teal" />
                Year-Long Thinking Lab
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-sans text-[#B7E3DD] border-t border-white/10 pt-12">
              <span>Ages 8–16</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/50" />
              <span>No grades</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/50" />
              <span>No comparison between children</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/50" />
              <span className="max-w-[500px] text-center">Scientist-inspired problem-solving patterns observed and shared with parents</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROGRAM NAVIGATOR */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* 1-Day Gateway Card */}
            <Link href="#one-day" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-neutral-400" />
              <div className="inline-flex px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Try before joining
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">One-Day Gateway</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">Experience FunSmartism. Parents observe, children participate in a STEM Challenge.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–16 <span className="text-neutral-300 opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>

            {/* 10-Day Workshop Card */}
            <Link href="#workshop" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-accent-teal transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent-teal" />
              <div className="inline-flex px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Best for first-time families
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">10-Day Thinking Reset Workshop</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">10 themes. 10 consecutive days. The entry point.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–16 <span className="text-accent-teal opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>

            {/* Year-Long Card */}
            <Link href="#year-long" className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-huge flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary-500" />
              <div className="inline-flex px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
                Best for deeper growth
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">FunSmartism RoboSTEM Thinking Lab</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">One theme per month. Four sessions per month. A full academic year.</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-primary-500 font-bold text-xs">
                  Ages 8–16 <span className="text-primary-400 opacity-30">|</span> <span className="flex items-center gap-1 group-hover:gap-2 transition-all">↓ See details</span>
                </div>
              </div>
            </Link>
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
                  Try before joining · 1 Day
                </div>
                <div>Ages 8–16</div>
              </div>
              <div className="p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 md:mb-10 leading-tight">
                  One-Day Gateway <br className="hidden md:block" />
                  <span className="text-2xl text-neutral-500 font-light italic mt-2 block">Experience FunSmartism Before Joining Long-Term</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-3xl leading-relaxed font-light">
                  The 1-Day Parent Observation STEM Challenge gives families a glimpse into how children approach unfamiliar problem-solving situations — while parents watch, not instruct.
                  <br /><br />
                  <span className="italic text-primary-500 font-serif font-medium">"This is the kind of environment my child actually needs."</span>
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 p-10 bg-[#FAF9F6] rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-primary-500 font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500"><Eye size={14} /></div>
                      Children participate while parents observe:
                    </h4>
                    <ul className="space-y-6">
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1">Response to difficulty</strong>
                        how they handle something unfamiliar
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1">Independent retry</strong>
                        whether they try again on their own
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1">Testing ideas</strong>
                        how they approach experimenting
                      </li>
                      <li className="text-sm text-neutral-600">
                        <strong className="text-primary-500 block mb-1">Uncertainty handling</strong>
                        how they react without ready answers
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6 p-10 bg-accent-teal/5 rounded-[2.5rem] border border-accent-teal/20">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal"><Users size={14} /></div>
                      Parent Observation
                    </h4>
                    <p className="text-lg text-primary-500 font-medium italic leading-relaxed">
                      A rare window into your child's natural thinking habits when facing something new.
                    </p>
                    
                    <div className="mt-8 pt-8 border-t border-accent-teal/20">
                      <Link href="/schedule-visit">
                        <Button className="w-full bg-accent-teal hover:bg-[#28A392] text-white py-6 rounded-full font-bold shadow-md shadow-accent-teal/20">
                          Schedule a Visit →
                        </Button>
                      </Link>
                    </div>
                  </div>
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
              <div className="bg-accent-teal px-10 py-5 flex flex-wrap items-center justify-between text-white text-[11px] font-bold uppercase tracking-widest gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Entry Program · 10 consecutive days
                </div>
                <div>Ages 8–16</div>
              </div>
              <div className="p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 md:mb-10 leading-tight uppercase tracking-tight">
                  10-Day Thinking <br className="hidden md:block" />
                  RESET Workshop
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-3xl leading-relaxed font-light">
                  A fast-paced hands-on RoboSTEM experience where children explore different themes each day through projects, challenges, experimentation, and creative problem-solving.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100">
                    <h4 className="flex items-center gap-3 text-accent-teal font-serif font-bold uppercase tracking-widest text-xs">
                      <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal"><Target size={14} /></div>
                      Designed Especially For Children Who:
                    </h4>
                    <ul className="space-y-4">
                      {[
                        'enjoy building and exploring',
                        'are curious beyond textbooks',
                        'need more active learning environments',
                        'want exposure to multiple STEM domains'
                      ].map((item) => (
                        <li key={item} className="flex gap-4 items-start text-primary-500 font-medium leading-relaxed text-sm">
                          <Check className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6 p-10 flex flex-col justify-center items-center text-center">
                     <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4">Ready to start?</p>
                     <Link href="https://chat.whatsapp.com/L79pYlQ55XFAKk0PikYtUu" target="_blank" rel="noopener noreferrer" className="w-full">
                       <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 rounded-full font-bold shadow-md shadow-[#25D366]/20">
                         Join Parent Community
                       </Button>
                     </Link>
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
                <h3 className="text-2xl font-serif font-bold text-primary-500">Visualizing the themes</h3>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 md:mb-10 leading-[1.1]">
                  FunSmartism RoboSTEM <br className="hidden md:block" />
                  <span className="text-accent-teal italic font-light opacity-90 text-3xl md:text-4xl">Thinking Lab — Year-Long</span>
                </h2>
                <p className="text-lg md:text-xl text-[#B7E3DD] mb-16 max-w-3xl leading-relaxed font-light italic">
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
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[3rem] text-center flex flex-col items-center group hover:bg-white/10 transition-all shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6 group-hover:scale-110 transition-transform">
                    <s.icon size={28} />
                  </div>
                  <div className="text-xl font-serif font-bold text-white mb-2">{s.label}</div>
                  <div className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-3">{s.val}</div>
                  <div className="text-[10px] text-white/40 font-mono italic">{s.sub}</div>
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
            */}

            {/* Edu Events Differentiation Section */}
            <div className="mb-24">
              <div className="bg-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-sm border border-neutral-100">
                <div className="absolute top-0 right-0 w-full h-full lab-grid opacity-[0.03] pointer-events-none" />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-teal/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="max-w-4xl mb-20">
                    <span className="inline-block px-5 py-2 bg-accent-teal/10 text-accent-teal rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Major Differentiator</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 md:mb-8 leading-tight">Year-long exclusive: <br />Edu events</h3>
                    <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed italic">
                      Children learn scientist-style questioning by interacting with real scientists—not just listening to them. <br className="hidden md:block" />
                      <span className="text-primary-500 font-bold not-italic mt-6 block">They help run them — building real responsibility.</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                      { title: 'Set up the space', desc: 'Organise and prepare the event environment.' },
                      { title: 'Run a stall', desc: 'Present their own projects to the public.' },
                      { title: 'Guide visitors', desc: 'Explain, demonstrate, answer questions.' },
                      { title: 'Assist experts', desc: 'Assist scientists and professionals.' }
                    ].map((grid, i) => (
                      <div key={i} className="p-10 rounded-[2.5rem] bg-[#FAF9F6] border border-neutral-100 hover:border-accent-teal/30 hover:shadow-md transition-all group flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-primary-300 mb-8 group-hover:scale-110 group-hover:bg-accent-teal group-hover:text-white transition-all">
                            <Presentation size={24} />
                          </div>
                          <h4 className="text-xl font-serif font-bold text-primary-500 mb-4">{grid.title}</h4>
                          <p className="text-sm text-neutral-500 leading-relaxed font-light italic">{grid.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-serif font-bold text-primary-500 mb-6 italic leading-relaxed">
                      Over time, children don’t just build projects — <br className="hidden md:block" />
                      they learn to discuss, question, and explain them with experts.
                    </p>
                    <div className="h-px w-24 bg-neutral-200 mx-auto mb-6" />
                    <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-6 md:mb-8 tracking-tight">Quick Comparison</h2>
            <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">Helping you decide between first insight and deeper habit building.</p>
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
                  <td className="py-10 px-12 text-lg md:text-xl text-accent-teal font-serif italic">First insight</td>
                  <td className="py-10 px-12 text-lg md:text-xl text-primary-500 font-serif italic">Deeper habit-building</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-20 text-center text-neutral-400 font-serif text-lg md:text-xl italic max-w-4xl mx-auto leading-relaxed">
            Not sure how to start? Tell us your child's age when you visit — we'll guide you.
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
