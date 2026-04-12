import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { Check } from 'lucide-react'

import { client } from '@/sanity/lib/client'
import { faqsQuery } from '@/sanity/lib/queries'

export default async function ForParentsPage() {
  const sanityFaqs = await client.fetch(faqsQuery)
  
  const faqList = sanityFaqs && sanityFaqs.length > 0 ? sanityFaqs.map((f: any) => ({ q: f.question, a: f.answer })) : [
    { q: 'Will my child perform?', a: 'There is no "performance" at FunSmartism. We are interested in the thinking process, not a final flawless product.' },
    { q: 'Will you judge my child?', a: 'Never. We are observers, not judges. Every "mistake" is just data on how your child thinks.' },
    { q: 'What if my child is shy?', a: 'Our lab is designed for individual discovery. They can work at their own pace without social pressure.' },
    { q: 'What is the commitment?', a: 'Flexible. Start with an orientation, then a workshop. Only commit to the year-long lab if it feels like the right fit.' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-primary-500 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ FOR_PARENTS ]</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]">
              You will leave knowing something about your child that school has never told you.
            </h1>
            <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-accent-teal shadow-lg border-none text-white">
              Schedule a visit →
            </Button>
          </div>
        </div>
      </section>

      {/* What Parents Discover */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              What parents discover at FunSmartism
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Observe vs Act', desc: 'Does your child jump in immediately or take time to observe the system first?' },
              { title: 'Reaction to Difficulty', desc: 'How does your child handle the moment a build doesn’t work as expected?' },
              { title: 'Confidence before trying', desc: 'Watch the shift from "I can\'t" to "Let me try this" without being told the answer.' },
              { title: 'Thinking vs Results', desc: 'Learn to see the value in a failed build that led to a better understanding.' },
              { title: 'Interests', desc: 'Discover which STEM systems (Robotics, Space, Electronics) truly capture their attention.' }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-neutral-100 rounded-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Worries (FAQ Style) */}
      <section className="section-spacing bg-accent-surface">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-16 text-center">Common Parent Conversations</h2>
            <div className="space-y-8">
              {faqList.map((faq: any, i: number) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100">
                  <h3 className="text-lg font-bold text-primary-500 mb-2">Q: {faq.q}</h3>
                  <p className="text-neutral-500">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Note Section */}
      <section className="section-spacing text-center">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-serif italic text-neutral-500 mb-12">
              "We built FunSmartism because we kept seeing capable children misunderstood. Thinking habits shape real life."
            </p>
            <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-[#1E2A44] hover:bg-accent-teal transition-colors border-none text-white">
              Schedule your orientation →
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
