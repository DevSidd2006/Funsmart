import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { Testimonials } from '@/components/sections/Testimonials'
import { Check } from 'lucide-react'
import Link from 'next/link'

import { client } from '@/sanity/lib/client'
import { settingsQuery } from '@/sanity/lib/queries'

export default async function ForParentsPage() {
  const settings = await client.fetch(settingsQuery, {}, { cache: 'no-store' })

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
    { q: 'What if my child doesn\'t perform well — will that reflect badly?', a: "There's no performance to do well or badly at. We observe how they approach something unfamiliar — and every approach is valid. A child who spends the whole session examining without building has revealed something. So has a child who builds without examining. Neither is better. Both are informative." },
    { q: 'Are you going to tell me something is wrong with my child?', a: "No. We don't diagnose or label. We share specific observed behaviour — as information, not as a verdict. The framing is always: this is what we noticed, and here's why it might be worth holding on to." },
    { q: 'My child is shy and anxious in new environments. Will they engage?', a: "A child who spends the first 20 minutes observing before touching anything is telling us something real. We don't consider that a problem — we consider it a meaningful clue. Sessions are self-paced. No child is pressured." },
    { q: 'My child is very competitive and driven by results. What if they find this frustrating?', a: "Some of our most valuable observations come from exactly this child. A result-oriented child in an environment with no result to aim for reveals — quickly — how much of their capability is intrinsic versus performance-driven. Most find it unexpectedly enjoyable once they settle in." },
    { q: 'Is this a long-term commitment?', a: "The orientation is free. The workshop is a fixed 10-day commitment with no obligation to continue. The year-long program is a natural next step we'll guide you toward — only when it makes sense for your child." }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-primary-500 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]">
              You will leave knowing something about your child that school has never told you.
            </h1>
            <p className="text-xl text-primary-100/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              What parents discover through hands-on RoboSTEM challenges, expert interaction sessions, and real observation-based guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="px-10 py-5 bg-accent-teal shadow-lg border-none text-white w-full">
                  Schedule a visit →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Discover */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              What parents actually find out.
            </h2>
            <p className="text-lg text-neutral-500 mt-4 leading-relaxed">
              Not 'my child improved'. The specific, moments revealed when children face scientist-style RoboSTEM challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Whether your child observes first like a scientist — or jumps straight into action.', desc: 'This is one of the clearest thinking patterns we observe. Most parents have never had it described to them about their own child.' },
              { title: 'How your child handles being stuck?', desc: 'Some go quiet. Some call for help in two minutes. Some double down. Some take a breath and start from a different angle. Every response becomes a clue for better parent support.' },
              { title: 'Whether your child believes they\'re capable before they\'ve tried.', desc: 'Common in high-performing children — and it surprises parents every time. Capable, but visibly doubtful before starting. Different problem, different support needed.' },
              { title: 'What kinds of problems genuinely light your child up?', desc: 'Mechanical systems? Logic patterns? Open-ended challenges? These preferences are invisible in results — but enormously useful for a parent who wants to nurture real interest.' },
              { title: 'Whether your child\'s approach to challenges is different from what their results might reveal.', desc: 'Both are common, and both matter. Sometimes results don’t fully show how a child thinks during real challenges — and that helps parents respond differently.' }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-neutral-100 rounded-sm hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-white shadow-sm hover:shadow-lg">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-teal" />
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guidance */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              What parents can do with this.
            </h2>
            <p className="text-lg text-neutral-500 mt-4 leading-relaxed">
              Understanding helps. Knowing what to do changes home moments. Based on how your child responds in handling unfamiliar challenges, we guide you with simple home responses to try.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {[
               { q: 'When your child asks for help immediately', a: 'what to say before explaining' },
               { q: 'When they give up quickly', a: 'how to respond without rescuing' },
               { q: 'When they over focus on being right', a: 'how to redirect toward exploration' },
               { q: 'When they hesitate too long', a: 'how to support without pushing' }
             ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-accent-teal/10 text-accent-teal rounded-full flex items-center justify-center">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-500 mb-1">{item.q}</h3>
                    <p className="text-neutral-500 italic text-sm">→ {item.a}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Parent Worries (FAQ Style) */}
      <section className="section-spacing bg-white">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6 text-center">
              The questions most parents rarely ask out loud.
            </h2>
            <p className="text-lg text-neutral-500 mb-16 text-center">
              We'd rather answer them directly.
            </p>
            <div className="space-y-6">
              {worries.map((faq: any, i: number) => (
                <div key={i} className="bg-accent-surface p-8 rounded-2xl shadow-sm border border-neutral-100">
                  <h3 className="text-lg font-serif font-bold text-primary-500 mb-3">"{faq.q}"</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-primary-500 text-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
            Think beyond the exam score. What truly matters is your child’s ability of figuring things out through testing and retrying, persist, adapt, and stay curious when the answer isn’t obvious.
          </h2>
          <p className="text-xl text-accent-teal italic mb-8">
            Thinking habits don't appear in exam results. They appear in how a person navigates life.
          </p>
          <p className="text-lg text-primary-100/80 leading-relaxed">
            A parent who understands how their child thinks can respond to them more thoughtfully. That understanding — specific, observed, honest — is what FunSmartism gives you.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <div className="pt-24 pb-12 bg-white">
         <div className="max-w-4xl mx-auto text-center mb-8 px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              In their own words.
            </h2>
         </div>
         <Testimonials data={parentVoices} />
      </div>

      {/* FAQ */}
      <section className="section-spacing bg-neutral-50 border-t border-neutral-100">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-12 text-center">
              Experience FAQ
            </h2>
            <div className="space-y-6">
              {parentFaq.map((faq: any, i: number) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                  <h3 className="text-lg font-bold text-primary-500 mb-3">{faq.q}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A note from FunSmartism & CTA */}
      <section className="section-spacing bg-white text-center">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto mb-20 bg-accent-surface p-12 rounded-[2rem] border border-neutral-100 relative">
            <h2 className="text-2xl font-serif font-bold text-primary-500 mb-6 uppercase tracking-widest text-sm text-accent-teal">
              A note from FunSmartism.
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              We built FunSmartism because we kept seeing children who were capable — genuinely, observably capable — in environments that gave them freedom, and confused in environments that didn't. And parents who had no language for what they were seeing.
            </p>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              That’s why our environments are inspired by how scientists observe, test, and solve.
            </p>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              School gives you marks. FunSmartism gives you something harder to quantify and more useful to hold: a specific, honest picture of how your child thinks when no one is telling them what to think.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-semibold">
              We're not here to judge your child. We're here to help you see them more clearly. We hope you'll come and meet us.
            </p>
            <p className="font-serif font-bold text-primary-500">— Dipali, Founder, FunSmartism</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary-500 mb-6">
              Schedule a RoboSTEM visit for your child — and clarity for yourself as a parent.
            </h2>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              No fee. No commitment. No preparation needed. <br/>You bring your questions. We take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button size="lg" className="px-10 py-5 bg-accent-teal hover:bg-primary-500 transition-colors border-none text-white w-full">
                  Schedule a visit →
                </Button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-primary-500 border-primary-500 px-10 py-5 w-full hover:bg-neutral-50 flex items-center justify-center">
                  See Programs First
                </Button>
              </Link>
            </div>
            <p className="text-mono text-xs uppercase tracking-widest text-neutral-400">
              Free Parent Orientation · 30–45 minutes · 📍 Bibwewadi, Pune
              <br/>We'll WhatsApp you a confirmation.
            </p>
          </div>
        </div>
      </section>

      <Footer data={settings} />
    </div>
  )
}
