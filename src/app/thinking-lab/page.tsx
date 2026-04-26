import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Eye,
  Search,
  RotateCcw,
  ChevronRight,
} from 'lucide-react'
import { VignetteAccordion } from '@/components/ui/VignetteAccordion'

export default function ThinkingLabPage() {
  const vignettes = [
    {
      age: "A 9-year-old with a gear assembly",
      title: "Observe before act",
      content: "She spent 10 minutes just looking at it before touching anything. When she finally started, she worked backwards from the outcome she wanted. That observe-before-act approach is rare and deeply valuable."
    },
    {
      age: "A 13-year-old who stopped when it got hard",
      title: "Stops when difficulty rises",
      content: "He'd always done well in school. When the challenge didn't resolve in five minutes, he put the materials down and waited. Not because he couldn't — because no one had ever asked him to sit with difficulty before."
    },
    {
      age: "A 12-year-old who kept taking things apart",
      title: "Rebuilds after success",
      content: "She solved the challenge in 20 minutes. Then quietly dismantled her own solution to build a different version. Nobody asked her to. That's what we stood out— and what we told her father."
    }
  ]

  const firstTenMinutes = [
    { 
      time: "Minute 1–2", 
      icon: Eye,
      title: "Observation", 
      desc: "The challenge is introduced. Children are given an object, a system, or a problem to explore. No instructions. No demonstration. Just the materials, a question, and independent problem-solving exploration. Some begin immediately. Some look quietly before touching anything. Both responses matter." 
    },
    { 
      time: "Minute 3–6", 
      icon: Search,
      title: "Exploration", 
      desc: "The first attempt. A few children try something quickly. Others turn the object around, studying how it might work. Some ask questions. Some prefer to experiment first. Each response reveals a different way of approaching the unknown—something marks rarely show." 
    },
    { 
      time: "Minute 7–10", 
      icon: RotateCcw,
      title: "Adaptation", 
      desc: "The moment of friction. The first idea usually doesn't work. This is where thinking habits begin to appear. Some children try a variation. Some pause and re-examine the system. Some look for help. Nothing is rushed. Nothing is ranked. We simply watch how each child responds." 
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
      question: "How does your child handle being stuck?",
      answer: "When the first attempt failed, your child paused, then tried a variation. Over three attempts, each variation became more distinct. That shows healthy retry behaviour — a valuable thinking habit."
    },
    {
      question: "What does your child do after succeeding?",
      answer: "Once the challenge was solved, your child immediately began modifying the solution — unprompted. That's scientist-like curiosity— something marks rarely capture."
    },
    {
      question: "Every visit includes private parent guidance notes.",
      answer: "Each note is specific, practical, and rooted in observed behaviour during unfamiliar problem-solving moments."
    },
    {
      question: "Scientist interaction beyond the lab",
      answer: "Selected FunSmartism RoboSTEM Thinking Lab sessions include interaction sessions with scientists from ISRO, DRDO, IISER, and leading research ecosystems — helping children connect real problem-solving habits with real scientific journeys."
    }
  ]

  return (
    <div className="bg-white">
      {/* SECTION 01 — HERO */}
      <section className="pt-36 pb-24 bg-accent-surface text-[#1E2A44] relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-500 mb-8 leading-tight">
              We don't teach. <br />
              <span className="text-accent-teal italic font-light">We observe.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light">
              The FunSmartism RoboSTEM Thinking Lab makes scientist-inspired problem-solving visible through hands-on projects, real-world challenges, and live parent insight observations.
            </p>

            <div className="mt-16 max-w-4xl mx-auto">
              <p className="text-2xl md:text-4xl font-serif font-bold text-primary-500 leading-tight mb-8">
                Schools show what children know. <br className="hidden md:block" />
                The Thinking Lab reveals how they think when the path is unclear.
              </p>
              <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light max-w-2xl mx-auto">
                Independant problem-solving appears most clearly in unfamiliar situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — What a session actually looks like */}
      <section className="pt-24 md:pt-32 pb-8 bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mb-20">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
               What a session actually looks like.
             </h2>
             <p className="text-lg text-neutral-500 leading-relaxed font-medium">
               No worksheets. No step-by-step kits. Scientist-inspired exploration first. <br />
               Children are given a real object, system, or challenge — and the space to figure it out, adapt, or ask for help.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {firstTenMinutes.map((step, i) => (
              <div key={i} className="relative p-8 rounded-[32px] bg-neutral-50 border-l-[6px] border-accent-teal shadow-sm transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
                  <step.icon size={28} />
                </div>
                <div className="text-accent-teal font-mono text-[12px] font-bold uppercase tracking-widest mb-3">{step.time}</div>
                <h3 className="text-2xl font-serif font-bold text-primary-500 mb-6">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-medium whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center mt-20 p-8 rounded-3xl bg-accent-surface border border-neutral-100 italic text-neutral-500 leading-relaxed">
            "Every session unfolds differently, but the first few minutes almost always help parents understand how a child approaches something unfamiliar."
          </div>

          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-serif font-bold text-primary-500 mb-4">Inside the moments</h3>
              <p className="text-neutral-500">Tap to read each full moment.</p>
            </div>
            <VignetteAccordion items={vignettes} />
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW WE OBSERVE (Trust Anchor) */}
      <section className="pt-12 pb-24 md:pb-32 bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
              We're not ranking. <br />
              <span className="text-accent-teal">We're watching how they are figuring things out through testing and retrying.</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
              Facilitators observe specific patterns — not to judge, but to understand.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-huge border border-neutral-200">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-[#1E2A44] text-white">
                    <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest w-1/2">What we notice</th>
                    <th className="py-6 px-10 text-xs font-bold uppercase tracking-widest">What it can reveal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {observationRows.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-8 px-10 text-lg font-serif font-bold text-primary-500 leading-tight">{row.notice}</td>
                      <td className="py-8 px-10 text-sm text-neutral-500 flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="text-accent-teal" size={14} />
                        </div>
                        <span className="italic">"{row.reveal}"</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Insight Cards */}
            <div className="md:hidden divide-y divide-neutral-100 bg-white">
              {observationRows.map((row, i) => (
                <div key={i} className="p-8">
                  <div className="text-[12px] font-bold text-accent-teal uppercase tracking-widest mb-3 opacity-60">What we notice</div>
                  <h5 className="text-xl font-serif font-bold text-primary-500 mb-6">{row.notice}</h5>
                  <div className="text-[12px] font-bold text-primary-400 uppercase tracking-widest mb-3 opacity-60">What it helps parents understand</div>
                  <div className="text-neutral-500 text-sm leading-relaxed italic border-l-2 border-accent-teal/20 pl-4 py-1">
                    {row.reveal}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-neutral-400 font-mono mt-12 uppercase tracking-[0.2em]">
            Important: We don't compare children to each other. Every parent insight note is shared privately with your family.
          </p>
        </div>
      </section>

      {/* SECTION 05 — WHAT THIS IS NOT */}
      <section className="py-10 md:py-16 bg-white border-y border-neutral-100">
        <div className="container-fluid text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              {['Not exam coaching', 'Not remedial programme', 'Not gifted labeling'].map((text) => (
                 <div key={text} className="px-10 py-5 rounded-2xl bg-neutral-50 text-neutral-300 font-serif text-2xl font-bold border border-neutral-100 transition-all cursor-default">
                    {text}
                 </div>
              ))}
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-primary-500 leading-tight">
              A build–test–retry environment <br />
              <span className="text-accent-teal italic">where real thinking becomes visible.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHAT PARENTS RECEIVE */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6">Not a score. Not a rank. <br /> Something more useful.</h2>
            <p className="text-lg text-neutral-500 font-medium">Model observation notes you receive after your visit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {insightCards.map((card, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500">
                 <h4 className="text-xl font-serif font-bold text-primary-500 mb-6 border-b border-neutral-100 pb-4">
                   {card.question}
                 </h4>
                 <p className="text-neutral-500 leading-relaxed italic text-base">"{card.answer}"</p>
              </div>
            ))}
          </div>

          {/* Elevated Scientist Interaction Strip (Trust Multiplier) */}
          <div className="max-w-6xl mx-auto p-8 md:p-12 rounded-[50px] bg-[#1E2A44] text-white relative overflow-hidden shadow-huge border border-white/5">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
               <div className="md:col-span-7">
                   <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">Children experience how real experts approach problems — not as theory, but through interaction.</h3>
                   <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-8 mt-8">
                      {['ISRO', 'DRDO', 'IISER', 'Research ecosystems'].map((name) => (
                         <div key={name} className="flex flex-col">
                           <span className="text-2xl font-serif font-black tracking-tighter text-white/90 leading-none">{name}</span>
                           <span className="text-[8px] font-bold text-accent-teal/60 uppercase tracking-widest mt-1">Interaction layer</span>
                         </div>
                      ))}
                   </div>
                </div>
               <div className="md:col-span-5">
                  <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-white/10">
                    <Image
                      src="/images/lab/hero-child.png"
                      alt="Child interacting with a real challenge in the FunSmartism RoboSTEM Thinking Lab"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/55 to-transparent" />
                  </div>
               </div>
             </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-center text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-5">
              Featured in leading newspapers for innovation-led child learning
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['The Times of India', 'Sakal', 'Pudhari', 'The Indian Express'].map((press) => (
                <div key={press} className="h-14 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[12px] font-semibold text-neutral-500 px-2 text-center">
                  {press}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center mt-12 text-primary-500 font-serif font-bold text-lg opacity-80">
             Along with these parent insights, we guide you on how to respond at home using unfamiliar problem-solving moments.
          </p>
        </div>
      </section>

      {/* SECTION 07 — CLOSING CTA */}
      <section className="section-spacing text-center bg-[#1E2A44] text-white relative overflow-hidden py-32">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
               See your child’s real <br />
               <span className="text-accent-teal italic font-light opacity-90">problem-solving approach in action</span>
            </h2>
            <p className="text-lg md:text-xl text-[#B7E3DD] mb-16 font-light opacity-80 italic">To experience it in real RESET sessions</p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <Link href="/schedule-visit" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-accent-teal border-none text-white px-10 py-5 shadow-huge shadow-accent-teal/30 w-full rounded-full font-bold">
                    Schedule a Thinking Lab Visit
                  </Button>
                </Link>
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 py-5 w-full rounded-full">
                    See Programs First
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs text-white/30 font-mono tracking-[0.3em] uppercase font-bold">
                   Free Parent Orientation · 30–45 minutes 📍 Bibwewadi, Pune
                </p>
                <p className="text-[12px] text-white/20 uppercase tracking-widest">
                   Also available for school innovation visits and STEM partner sessions
                </p>
                <Link href="/programs" className="block text-sm text-accent-teal hover:underline decoration-accent-teal/30 underline-offset-8 mt-6 font-medium tracking-wide">
                   Want to see the programs first? See programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
