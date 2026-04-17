import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { client } from '@/sanity/lib/client'
import { labPageQuery, settingsQuery } from '@/sanity/lib/queries'
import { Eye, Beaker, Lightbulb, Check, ChevronRight, FlaskConical, Binary, Sparkles, Quote, Search, MessageSquare, History, Repeat } from 'lucide-react'
import Link from 'next/link'
import { VignetteAccordion } from '@/components/ui/VignetteAccordion'

export default async function ThinkingLabPage() {
  const [data, settings] = await Promise.all([
    client.fetch(labPageQuery, {}, { cache: 'no-store' }),
    client.fetch(settingsQuery, {}, { cache: 'no-store' })
  ])

  const vignettes = [
    {
      age: "9-year-old with a gear assembly",
      title: "Observe before act",
      content: "She spent 10 minutes just looking at it before touching anything. When she finally started, she worked backwards from the outcome she wanted. That observe-before-act approach is rare and deeply valuable."
    },
    {
      age: "13-year-old who stopped when it got hard",
      title: "Stops when difficulty rises",
      content: "He'd always done well in school. When the challenge didn't resolve in five minutes, he put the materials down and waited. Not because he couldn't — because no one had ever asked him to sit with difficulty before."
    },
    {
      age: "12-year-old who kept taking things apart",
      title: "Rebuilds after success",
      content: "She solved the challenge in 20 minutes. Then quietly dismantled her own solution to build a different version. Nobody asked her to. That's what we stood out— and what we told her father."
    }
  ]

  const observationRows = [
    { notice: "How they first approach the challenge", reveal: "Whether they prefer to observe before acting—or act before understanding." },
    { notice: "What they do when stuck", reveal: "Whether they retry, withdraw, or seek help immediately." },
    { notice: "How they respond to failure", reveal: "Whether they adjust their approach or repeat the same attempt." },
    { notice: "The kind of questions they ask", reveal: "Whether their thinking is clarifying, exploratory, or quietly observant." },
    { notice: "What they do after succeeding", reveal: "Whether they stop at success or continue exploring beyond the solution." },
  ]

  const insightCards = [
    {
      title: "How does your child handle being stuck?",
      desc: "When the first attempt failed, your child paused, then tried a variation. Over three attempts, each variation became more distinct. That shows healthy retry behaviour — a valuable thinking habit."
    },
    {
      title: "What does your child do after succeeding?",
      desc: "Once the challenge was solved, your child immediately began modifying the solution — unprompted. That's scientist-like curiosity— something marks rarely capture."
    },
  ]

  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-32 pb-20 bg-[#1E2A44] text-white relative overflow-hidden flex items-center min-h-[70vh]">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[11px] font-bold uppercase tracking-widest mb-10">
              Inside the Lab
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-[1.05] tracking-tight">
              We don't teach. <br />
              <span className="text-accent-teal italic font-light">We observe.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#B7E3DD] max-w-2xl leading-relaxed font-light mt-8">
              The FunSmartism RoboSTEM Thinking Lab makes scientist-inspired problem-solving visible through hands-on projects, real-world challenges, and live parent insight observations.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="py-20 md:py-32 bg-accent-surface border-y border-neutral-100">
        <div className="container-fluid text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="relative inline-block">
                <Quote className="absolute -top-8 -left-12 text-accent-teal/10 w-24 h-24 -z-0" />
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-[1.2] relative z-10">
                  Schools show what children know. <br />
                  <span className="text-accent-teal">The Thinking Lab reveals how they think</span> <br />
                  when the path is unclear.
                </h2>
              </div>
              <p className="text-2xl md:text-3xl text-primary-500/60 font-light italic">
                Independent problem-solving appears most clearly in unfamiliar situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — What a session actually looks like */}
      <section className="section-spacing bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
              What a session actually looks like.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed font-medium">
              No worksheets. No step-by-step kits. Scientist-inspired exploration first. <br />
              Children are given a real object, system, or challenge — and the space to figure it out, adapt, or ask for help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 max-w-6xl mx-auto">
            {[
              { time: "Minute 1–2", icon: Eye, title: "Observation", desc: "The challenge is introduced. Children are given an object, system, or problem to explore. Some begin immediately. Some look quietly. Both responses matter." },
              { time: "Minute 3–6", icon: Search, title: "Exploration", desc: "The first attempt. Some try things quickly, others study it. Each response reveals a different way of approaching the unknown — something marks rarely show." },
              { time: "Minute 7–10", icon: History, title: "Adaptation", desc: "The moment of friction. The first idea usually doesn't work. This is where thinking habits begin to appear. Testing, retrying, and refining." }
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-huge transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
                  <step.icon size={28} />
                </div>
                <div className="text-accent-teal font-mono text-xs font-bold uppercase tracking-widest mb-3">{step.time}</div>
                <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-32">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">Inside the Moments</h3>
               <p className="text-neutral-500">Real observed moments that demonstrate thinking style.</p>
            </div>
            <VignetteAccordion items={vignettes} />
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW WE OBSERVE */}
      <section className="section-spacing bg-[#1E2A44] text-white overflow-hidden">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">How We Observe</h2>
            <p className="text-lg text-[#B7E3DD]/70 max-w-2xl mx-auto">
              We're not ranking. We're watching how they are figuring things out through testing and retrying. Facilitators observe specific patterns — not to judge, but to understand.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white shadow-white/5">
            <div className="bg-accent-teal/10 px-8 py-6 border-b border-white/5">
               <h4 className="text-lg font-serif font-bold text-accent-teal uppercase tracking-widest text-center">The Behavior Tracker</h4>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-100">
                    <th className="py-5 px-8 text-xs font-bold text-primary-500 uppercase tracking-widest w-1/2">What we notice</th>
                    <th className="py-5 px-8 text-xs font-bold text-primary-500 uppercase tracking-widest">What it can reveal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 italic">
                  {observationRows.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-6 px-8 text-base font-bold text-primary-500">{row.notice}</td>
                      <td className="py-6 px-8 text-sm text-neutral-500 flex items-start gap-3">
                         <ChevronRight className="text-accent-teal mt-1 flex-shrink-0" size={16} />
                         <span>{row.reveal}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked View */}
            <div className="md:hidden divide-y divide-neutral-100">
              {observationRows.map((row, i) => (
                <div key={i} className="p-8">
                  <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-3 opacity-60">What we notice</div>
                  <h5 className="text-xl font-serif font-bold text-primary-500 mb-6">{row.notice}</h5>
                  <div className="text-xs font-bold text-accent-teal uppercase tracking-widest mb-2">What it reveals</div>
                  <div className="text-neutral-500 text-sm leading-relaxed italic flex items-start gap-3">
                    <ChevronRight className="text-accent-teal mt-1 flex-shrink-0" size={14} />
                    {row.reveal}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-white/30 font-mono mt-12 uppercase tracking-widest">
            Important: Every parent insight note is shared privately with your family.
          </p>
        </div>
      </section>

      {/* SECTION 05 — WHAT THIS IS NOT */}
      <section className="section-spacing bg-white">
        <div className="container-fluid text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {['Not exam coaching', 'Not remedial programme', 'Not gifted labeling'].map((text) => (
                 <div key={text} className="px-8 py-3 rounded-2xl bg-neutral-50 text-neutral-400 font-serif text-2xl font-bold border border-neutral-100 transition-all hover:text-red-400 hover:border-red-100 cursor-default">
                    {text}
                 </div>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent w-full mb-16" />
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              A build–test–retry environment <br />
              <span className="text-accent-teal">where real thinking becomes visible.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHAT PARENTS RECEIVE */}
      <section className="section-spacing bg-accent-surface border-y border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6">What Parents Receive</h2>
            <p className="text-lg text-neutral-500">Not a score. Not a rank. Something more useful.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {insightCards.map((card, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-huge transition-all duration-500">
                 <h4 className="text-xl font-serif font-bold text-primary-500 mb-6 flex items-center gap-3">
                   <MessageSquare className="text-accent-teal" size={24} />
                   {card.title}
                 </h4>
                 <p className="text-neutral-500 leading-relaxed italic">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Scientist Trust Strip */}
          <div className="max-w-5xl mx-auto p-12 rounded-[40px] bg-[#1E2A44] text-white relative overflow-hidden shadow-huge">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-[80px]" />
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-sm">
                   <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">Scientist interaction beyond the lab</h3>
                   <p className="text-sm text-[#B7E3DD]/70 leading-relaxed font-light">
                      Selected sessions include interactions with scientists from leading research ecosystems.
                   </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-500 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                   {['ISRO', 'DRDO', 'IISER'].map((name) => (
                      <span key={name} className="text-3xl font-serif font-black tracking-tighter text-white/80">{name}</span>
                   ))}
                </div>
             </div>
             <p className="mt-12 text-center text-xs text-white/30 uppercase tracking-[0.3em] font-bold">
                EXPERIENCE HOW REAL EXPERTS APPROACH PROBLEMS — NOT AS THEORY, BUT THROUGH INTERACTION.
             </p>
          </div>
          
          <p className="text-center mt-12 text-primary-500 font-serif font-bold text-lg">
             Every visit includes private parent guidance notes.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing text-center bg-[#1E2A44] text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.15] text-balanced">
               See your child’s real <br />
               <span className="text-accent-teal italic font-light">problem-solving approach in action</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-16 font-light">To experience it in real RESET sessions</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col items-center gap-4">
                <Link href="/schedule-visit" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-accent-teal border-none text-white px-12 py-5 shadow-huge shadow-accent-teal/20 w-full">
                    Schedule a Thinking Lab Visit
                  </Button>
                </Link>
                <p className="text-xs text-white/30 font-mono tracking-widest uppercase">
                   Free Orientation · 30–45 minutes · Bibwewadi
                </p>
              </div>
              <Link href="/programs">
                 <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10 px-8 py-5">
                    See Programs First
                 </Button>
              </Link>
            </div>
            
            <Link href="/programs" className="block mt-12 text-sm text-accent-teal/60 hover:text-accent-teal transition-colors font-medium">
               Want to see the programs first? See programs →
            </Link>
          </div>
        </div>
      </section>

      <Footer data={settings} />
    </div>
  )
}
