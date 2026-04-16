import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { Accordion } from '@/components/ui/Accordion'
import { Check, Calendar, MapPin, Clock, Zap, Star } from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'Programs | FunSmartism',
  description: '10-Day Thinking Reset Workshop and Year-Long Thinking Lab for children aged 8-14. Robotics, Coding, STEM and more.',
  keywords: ['workshop', 'thinking lab', 'children programs', 'Pune', 'STEM', 'robotics', 'coding'],
  openGraph: {
    title: 'Programs | FunSmartism Intelligence Center',
    description: 'Two programs. One philosophy. 10-Day Workshop or Year-Long Lab for young minds.',
    url: `${siteUrl}/programs`,
    type: 'website',
  },
}

const themes = [
  { icon: '🤖', label: 'Robotics & Engineering' },
  { icon: '🚀', label: 'Space Science & Astronomy' },
  { icon: '💻', label: 'Algorithmic Coding' },
  { icon: '🎯', label: "Rubik's Logic" },
  { icon: '🧩', label: 'Cognitive Sudoku' },
  { icon: '🧠', label: 'Memory Mastery' },
  { icon: '✈️', label: 'Aeromodeling' },
  { icon: '🔬', label: 'STEM Research' },
  { icon: '⚡', label: 'Electronics & Circuits' },
  { icon: '🗣️', label: 'Critical Thinking' },
]

const eduEvents = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600',
    title: 'Annual Science Expo',
    desc: 'Children present their own research findings to a panel of scientists and industry professionals.',
    date: 'March 2025',
    tag: 'Flagship Event',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600',
    title: 'Parent Insight Day',
    desc: 'A live observation session where parents watch their child work through a real challenge.',
    date: 'Monthly',
    tag: 'For Parents',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600',
    title: 'Scientist Speaks Series',
    desc: 'Working professionals from ISRO, engineering firms, and biotech visit for Q&A sessions.',
    date: 'Quarterly',
    tag: 'Special Access',
  },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'What age group is FunSmartism for?',
    answer: 'FunSmartism is designed for children aged 8 to 16. Within that range, we group children thoughtfully based on their thinking maturity, not just their age.',
  },
  {
    id: 'faq-2',
    question: 'Do I need to enroll in the 10-day workshop first?',
    answer: 'Yes — the 10-Day Thinking Reset Workshop is the entry point for all children. It gives us (and you) a window into how your child thinks before committing to the year-long program.',
  },
  {
    id: 'faq-3',
    question: 'What is the difference between the workshop and the year-long program?',
    answer: 'The workshop is 10 days of intensive exploration across 10 STEM themes. The year-long program goes deeper — one theme per month, one session per week, with monthly parent insight reports and home guidance.',
  },
  {
    id: 'faq-4',
    question: 'Is this a tuition class or coaching center?',
    answer: "No. FunSmartism is not a tuition class, coaching center, or exam preparation program. We don't teach to any syllabus. Our entire focus is on developing how children think, not what they memorize.",
  },
  {
    id: 'faq-5',
    question: 'What report do parents receive?',
    answer: "After the 10-day workshop you receive a detailed Thinking Habit Insight Note. For year-long students, you receive a monthly report describing your child's evolving thinking habits and specific guidance for home.",
  },
  {
    id: 'faq-6',
    question: 'Where is FunSmartism located?',
    answer: 'We are located at Bibwewadi, Pune. You are welcome to visit for a free parent orientation — no booking required, just contact us beforehand.',
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="section-spacing bg-[#1E2A44] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-mono text-[#2FB5A3] mb-6 uppercase tracking-widest">[ PROGRAMS ]</div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Two programs, one way of helping children think clearly.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Practical STEM experiences, parent guidance, and thinking observations. Every program is built around how your child approaches a challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-visit">
                <Button size="lg" className="bg-[#2FB5A3] border-none text-white px-10 shadow-lg">
                  Schedule a Visit
                </Button>
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="border-white/30 text-white hover:bg-white/10 px-10">
                  Join Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Day Workshop — Highlighted Banner */}
      <section className="section-spacing bg-accent-surface" id="workshop">
        <div className="container-fluid">
          {/* Banner highlight */}
          <div className="bg-gradient-to-br from-accent-teal via-accent-teal to-[#1E9E8F] rounded-2xl p-10 md:p-14 text-white mb-16 relative overflow-hidden shadow-xl">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-mono text-[10px] bg-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest">Entry Point</span>
                <Star size={14} className="text-yellow-300" />
                <span className="text-sm font-semibold">Most popular starting point</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 leading-tight">
                10-Day Thinking Reset Workshop
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Ten days. Ten different themes. Children build, explore, and think — while we observe. Every FunSmartism journey begins here.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, label: '10 Days' },
                  { icon: MapPin, label: 'Bibwewadi, Pune' },
                  { icon: Calendar, label: 'Next batch: rolling enrollment' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/90">
                    <Icon size={14} />
                    {label}
                  </div>
                ))}
              </div>
              <Link href="/schedule-visit">
                <button className="bg-white text-accent-teal px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition shadow-md">
                  Book the Workshop →
                </button>
              </Link>
            </div>
          </div>

          {/* Themes grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary-500 mb-8 text-center">The 10 Themes</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {themes.map((theme, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-100 rounded-xl p-5 text-center hover:border-accent-teal/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{theme.icon}</div>
                  <p className="text-sm font-medium text-primary-500 leading-snug">{theme.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year-Long Program */}
      <section className="section-spacing" id="year-long">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" alt="Year-long lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ SUSTAINED_GROWTH ]</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
                Year-Long Thinking Lab
              </h2>
              <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
                One theme per month. One session per week. Deep projects, thinking observations, and parent guidance — sustained over a full year.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Monthly thinking observations & parent insight reports',
                  'Home guidance for nurturing thinking habits',
                  'Access to industry experts & scientist interactions',
                  'Priority access to all Edu Events',
                  'One theme per month across all 10 STEM domains',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check size={18} className="text-accent-teal mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-[#1E2A44] border-none text-white px-10">
                  Inquire for Admission →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Edu Events Grid */}
      <section className="section-spacing bg-accent-surface">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="text-mono text-accent-teal mb-5 uppercase tracking-widest">[ EDU EVENTS ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-4">
              Beyond the sessions.
            </h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              Year-long students gain priority access to exclusive educational events throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eduEvents.map((ev, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-teal text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {ev.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-mono text-[10px] text-neutral-400 mb-3 uppercase tracking-widest">
                    <Calendar size={11} />
                    {ev.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-3 leading-snug">{ev.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="text-mono text-accent-teal mb-5 uppercase tracking-widest">[ FAQ ]</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
                Frequently asked questions.
              </h2>
            </div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-[#1E2A44] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Which journey is right for your child?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Start with a free parent orientation — see the lab, meet the team, and ask everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule-visit">
              <Button size="lg" className="bg-[#2FB5A3] border-none text-white px-10 shadow-lg">
                Schedule a Visit →
              </Button>
            </Link>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all duration-300"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
