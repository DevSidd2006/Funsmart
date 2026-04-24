import React from 'react'
import { Button } from '@/components/ui/Button'
import { TestimonialsClient } from './TestimonialsClient'
import { 
  Search, 
  RefreshCcw, 
  Sparkles, 
  Lightbulb, 
  Sprout, 
  HelpCircle, 
  MessageCircleQuestion, 
  Brain
} from 'lucide-react'
import Link from 'next/link'
export default async function ForParentsPage() {

  const parentVoices = [
    {
      quote: "I came prepared for my daughter to either do brilliantly or shut down. She did neither. She worked methodically — more so than I'd ever seen at home. When something didn't work, she paused, looked at it, and tried differently. The team told me this 'pause before pivot' approach is less common than I'd think. I've been sitting with that for weeks.",
      author: "Deepa S.",
      role: "Parent · 11-year-old · Thinking Reset Workshop"
    },
    {
      quote: "My son has been 'easily distracted' his whole school life. FunSmartism told me he isn't distracted — he loses interest when the challenge isn't deep enough. That reframe alone was worth everything. We're still figuring out what to do with it, but at least we're asking the right question now.",
      author: "Arvind M.",
      role: "Parent · 14-year-old · RoboSTEM Thinking Lab Year-Long"
    },
    {
      quote: "My daughter is top three in her class. I thought — what will they tell me that school hasn't? They told me she's extraordinary at solving the problem in front of her, but doesn't yet know how to generate her own problem. She waits to be asked. That's a different limitation than I expected, and marks will never show it.",
      author: "Sunita R.",
      role: "Parent · 13-year-old · Thinking Reset Workshop"
    },
    {
      quote: "My son refused to try anything he wasn't already sure he'd be good at. School had made him terrified of being wrong publicly. The facilitator told me: he worked alone for 40 minutes and was genuinely absorbed. Nobody was watching. Nobody could tell him he was wrong. That was the first time in two years I'd heard 'absorbed'. I cried in the car on the way home.",
      author: "Nandita K.",
      role: "Parent · 10-year-old · Thinking Reset Workshop"
    }
  ]

  const parentFaq = [
    { q: 'What do I tell my child before the session?', a: "Tell them they're going somewhere they'll get to build and explore — no tests, no grades, no right answers. That's enough. Don't describe the session in detail. The unfamiliarity is part of the design." },
    { q: 'Should I tell my child I\'ll be watching?', a: "Keep it light. Parents who stay in the building are asked to remain out of their child's line of sight. A child who knows they're being watched by a parent behaves differently — and we want to see them as they are." },
    { q: 'What do I do with the parent guidance note I receive?', a: "Understand first. Then apply small changes in how you respond — we guide you on exactly what to try. Think of the observations as a lens, not a checklist. Notice whether they match what you see at home. Let them change how you pay attention — rather than what you immediately do." },
    { q: 'My child has a different learning styles or school challenges. Is this appropriate?', a: "We work with children across a wide range of learning style/context. The self-directed, low-pressure environment often works especially well for children who find traditional structured settings difficult. We are not a clinical or therapeutic environment — but we're thoughtful." },
    { q: 'How many sessions do families typically attend?', a: "There's no prescribed number. Some families do the 10-day workshop and find one parent note is enough. Others join the year-long program and find the monthly observations build into something rich over time. We'll always be honest about whether continued sessions are genuinely useful." }
  ]

  const worries = [
    { q: 'What if my child doesn\'t perform well — will that reflect badly?', a: "There's no performance to do well or badly at. We observe how they approach something unfamiliar — and every approach is valid. A child who spends the whole session examining without building has revealed something. So has a child who builds without examining. Neither is better. Both are informative.", icon: MessageCircleQuestion },
    { q: 'Are you going to tell me something is wrong with my child?', a: "No. We don't diagnose or label. We share specific observed behaviour — as information, not as a verdict. The framing is always: this is what we noticed, and here's why it might be worth holding on to.", icon: HelpCircle },
    { q: 'My child is shy and anxious in new environments. Will they engage?', a: "A child who spends the first 20 minutes observing before touching anything is telling us something real. We don't consider that a problem — we consider it a meaningful clue. Sessions are self-paced. No child is pressured.", icon: Brain },
    { q: 'My child is very competitive and driven by results. What if they find this frustrating?', a: "Some of our most valuable observations come from exactly this child. A result-oriented child in an environment with no result to aim for reveals — quickly — how much of their capability is intrinsic versus performance-driven. Most find it unexpectedly enjoyable once they settle in.", icon: Brain },
    { q: 'Is this a long-term commitment?', a: "The orientation is free. The workshop is a fixed 10-day commitment with no obligation to continue. The year-long program is a natural next step we'll guide you toward — only when it makes sense for your child.", icon: HelpCircle }
  ]

  return (
    <div className="bg-[#FAF9F6] text-[#1E2A44] font-sans">
      {/* SECTION 01 — HERO */}
      <section className="pt-40 pb-24 bg-accent-surface relative overflow-hidden flex items-center min-h-[75vh]">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/5 border border-primary-500/10 text-primary-500 text-[10px] font-bold uppercase tracking-widest mb-10">
                The Parent Perspective
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-500 mb-8 leading-[1.05] tracking-tight text-balanced">
                You will leave knowing something about your child <br />
                <span className="text-accent-teal italic font-light opacity-90">that school has never told you.</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed font-light max-w-2xl">
                What parents discover through hands-on RoboSTEM challenges, expert interaction sessions, and real observation-based guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link href="/schedule-visit" className="w-full sm:w-auto">
                  <Button size="lg" className="px-12 py-6 bg-accent-teal shadow-huge shadow-accent-teal/20 border-none text-white transition-all text-xl font-bold rounded-full w-full">
                    Schedule a visit →
                  </Button>
                </Link>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest hidden sm:block">
                  Free Parent Orientation <br /> 30–45 minutes
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative rounded-[3rem] overflow-hidden shadow-huge w-full aspect-[4/5] bg-neutral-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200" 
                  alt="Parent and child in a discovery moment" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="italic font-serif text-xl opacity-95 leading-relaxed">"The environment changes everything. When the pressure to perform disappears, the true child appears."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHAT PARENTS DISCOVER */}
      <section className="py-24 bg-white">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-4">
              What parents actually find out.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
              Not 'my child improved'. The specific moments revealed when children face scientist-style RoboSTEM challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <p className="font-serif text-lg font-bold text-[#1E2A44] mb-3 leading-snug">Whether your child observes first like a scientist — or jumps straight into action.</p>
              <p className="text-neutral-600 text-sm leading-relaxed mt-auto font-light">This is one of the clearest thinking patterns we observe. Most parents have never had it described to them about their own child.</p>
            </div>
            
            <div className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                <RefreshCcw size={24} />
              </div>
              <p className="font-serif text-lg font-bold text-[#1E2A44] mb-3 leading-snug">How your child handles being stuck?</p>
              <p className="text-neutral-600 text-sm leading-relaxed mt-auto font-light">Some go quiet. Some call for help in two minutes. Some double down. Some take a breath and start from a different angle. Every response becomes a clue for better parent support.</p>
            </div>
            
            <div className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <p className="font-serif text-lg font-bold text-[#1E2A44] mb-3 leading-snug">Whether your child believes they're capable before they've tried.</p>
              <p className="text-neutral-600 text-sm leading-relaxed mt-auto font-light">Common in high-performing children — and it surprises parents every time. Capable, but visibly doubtful before starting. Different problem, different support needed.</p>
            </div>
            
            <div className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform lg:col-span-1">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                <Lightbulb size={24} />
              </div>
              <p className="font-serif text-lg font-bold text-[#1E2A44] mb-3 leading-snug">What kinds of problems genuinely light your child up?</p>
              <p className="text-neutral-600 text-sm leading-relaxed mt-auto font-light">Mechanical systems? Logic patterns? Open-ended challenges? These preferences are invisible in results — but enormously useful for a parent who wants to nurture real interest.</p>
            </div>
            
            <div className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform lg:col-span-2">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                <Sprout size={24} />
              </div>
              <p className="font-serif text-lg font-bold text-[#1E2A44] mb-3 leading-snug">Whether your child's approach to challenges is different from what their results might reveal.</p>
              <p className="text-neutral-600 text-sm leading-relaxed mt-auto font-light">Both are common, and both matter. Sometimes results don’t fully show how a child thinks during real challenges — and that helps parents respond differently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — WHAT YOU CAN DO WITH THIS */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
              What parents can do with this.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
              Understanding helps. Knowing what to do changes home moments.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-2">
              Based on how your child responds in handling unfamiliar challenges, we guide you with simple home responses to try.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 h-full flex flex-col justify-center">
              <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-wide mb-2 block min-h-[32px]">When your child asks for help immediately</span>
              <p className="text-[#1E2A44] font-serif italic">what to say before explaining</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 h-full flex flex-col justify-center">
              <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-wide mb-2 block min-h-[32px]">When they give up quickly</span>
              <p className="text-[#1E2A44] font-serif italic">how to respond without rescuing</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 h-full flex flex-col justify-center">
              <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-wide mb-2 block min-h-[32px]">When they over focus on being right</span>
              <p className="text-[#1E2A44] font-serif italic">how to redirect toward exploration</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 h-full flex flex-col justify-center">
              <span className="text-xs font-mono text-accent-teal font-bold uppercase tracking-wide mb-2 block min-h-[32px]">When they hesitate too long</span>
              <p className="text-[#1E2A44] font-serif italic">how to support without pushing</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03.5 — WHAT PARENTS WORRY ABOUT */}
      <section className="py-24 bg-white">
        <div className="container-fluid max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] mb-4">
              The questions most parents <br className="hidden md:block" /> rarely ask out loud.
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              We'd rather answer them directly.
            </p>
          </div>
          
          <div className="space-y-6">
            {worries.map((faq, idx) => {
              const Icon = faq.icon
              return (
                <div key={idx} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 flex gap-6">
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-white shadow-sm items-center justify-center shrink-0 text-[#1E2A44]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1E2A44] mb-3">Parent thinks: "{faq.q}"</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm font-light">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHY THIS MATTERS */}
      <section className="py-32 bg-[#1E2A44] text-white">
        <div className="container-fluid max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-12">
            Think beyond the exam score. What truly matters is your child's ability to figure things out through testing and retrying, <span className="text-accent-teal">persist, adapt, and stay curious when the answer isn't obvious.</span>
          </h2>
          
          <div className="w-16 h-px bg-white/20 mx-auto mb-10"></div>
          
          <blockquote className="text-2xl md:text-3xl font-serif font-light italic text-white mb-10 leading-snug">
            "Thinking habits don't appear in exam results. <br className="hidden md:block" />They appear in how a person navigates life."
          </blockquote>
          
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            A parent who understands how their child thinks can respond to them more thoughtfully. That understanding — specific, observed, honest — is what FunSmartism gives you.
          </p>
        </div>
      </section>

      {/* SECTION 05 — PARENT VOICES */}
      <section className="py-24 bg-[#FAF9F6]">
        <TestimonialsClient testimonials={parentVoices} />
      </section>

      {/* AS FEATURED IN (Mini Logo Strip) */}
      <section className="py-12 bg-white border-y border-neutral-100">
        <div className="container-fluid max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] mb-4 font-bold">As Featured In</p>
          <p className="text-sm text-neutral-500 mb-8">Featured in leading newspapers for innovation-led child learning.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['The Times of India', 'Sakal', 'Pudhari', 'The Indian Express'].map((paper) => (
              <div key={paper} className="h-10 md:h-12 rounded-lg border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-500 flex items-center justify-center px-2">
                {paper}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — PARENT FAQ */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container-fluid max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A44] mb-12 text-center">
            Parent FAQ
          </h2>
          <div className="space-y-4">
            {parentFaq.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-[#1E2A44] flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-accent-teal group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="pt-4 text-neutral-600 text-sm leading-relaxed font-light">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — A NOTE FROM FUNSMARTISM */}
      <section className="py-24 bg-white">
        <div className="container-fluid max-w-3xl mx-auto px-4">
          <div className="bg-[#F8FAFC] p-10 md:p-16 rounded-[2.5rem] border border-neutral-100 relative">
            <h2 className="text-sm font-mono font-bold text-accent-teal mb-8 uppercase tracking-widest block">
              A note from FunSmartism.
            </h2>
            <div className="prose prose-lg prose-neutral max-w-none font-serif text-[#1E2A44] leading-relaxed">
              <p className="mb-6">
                We built FunSmartism because we kept seeing children who were capable — genuinely, observably capable — in environments that gave them freedom, and confused in environments that didn't. And parents who had no language for what they were seeing.
              </p>
              <p className="mb-6">
                That’s why our environments are inspired by how scientists observe, test, and solve.
              </p>
              <p className="mb-6">
                School gives you marks. FunSmartism gives you something harder to quantify and more useful to hold: a specific, honest picture of how your child thinks when no one is telling them what to think.
              </p>
              <p className="text-xl font-bold mb-8">
                We're not here to judge your child. We're here to help you see them more clearly. We hope you'll come and meet us.
              </p>
              <p className="font-bold italic">
                — Dipali, Founder, FunSmartism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — CLOSING CTA */}
      <section className="py-32 bg-[#1E2A44] text-center text-white">
        <div className="container-fluid max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Schedule a RoboSTEM visit for your child — and clarity for yourself as a parent.
          </h2>
          <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-light">
            No fee. No commitment. No preparation needed. <br className="hidden md:block" />
            You bring your questions. We take care of the rest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link href="/schedule-visit" className="w-full sm:w-auto">
              <Button size="lg" className="px-10 py-5 bg-accent-teal hover:bg-white hover:text-accent-teal transition-colors border-none text-white w-full rounded-full shadow-lg font-bold">
                Schedule a visit →
              </Button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 w-full rounded-full transition-colors font-semibold">
                See Programs First
              </Button>
            </Link>
          </div>

          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">
            Free Parent Orientation <span className="mx-2 text-white/30">·</span> 30–45 minutes <span className="mx-2 text-white/30">·</span> 📍 Bibwewadi, Pune
          </p>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold mt-3">
            We'll WhatsApp you a confirmation.
          </p>
        </div>
      </section>

    </div>
  )
}
