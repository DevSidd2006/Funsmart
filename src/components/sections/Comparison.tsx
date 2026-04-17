import { Check, Brain, Eye, TrendingUp, Users, BookOpen } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

const differentiators = [
  {
    icon: Eye,
    title: 'We observe, not instruct',
    desc: 'Children encounter real problems without step-by-step guidance. We watch how they think — not what they produce.',
  },
  {
    icon: Brain,
    title: 'Thinking habits as the outcome',
    desc: 'Skills are a by-product. Our real goal is building the mental habits children use for unfamiliar challenges throughout life.',
  },
  {
    icon: TrendingUp,
    title: 'Real challenges, no fixed answer',
    desc: 'Each session presents open-ended problems. There is no "correct" solution — only richer and sharper thinking processes.',
  },
  {
    icon: BookOpen,
    title: 'Deep parent reporting',
    desc: 'You receive a thinking-habit insight note, not a grade. Understand how your child approaches unknown situations.',
  },
  {
    icon: Users,
    title: 'Scientist-inspired methodology',
    desc: 'Inspired by how scientists face unknowns: observe, hypothesize, test, adapt. Not lectures. Not kits.',
  },
  {
    icon: Check,
    title: 'Not a tuition class',
    desc: 'FunSmartism is not remedial, not coaching, and not gifted-only. Every curious child aged 8–16 belongs here.',
  },
]

export function WhatMakesDifferent({ data }: { data?: any }) {
  const title = data?.title || "Will your child's true potential go unnoticed?"
  const subtitle = data?.subtitle || "A Different Kind of Learning"
  const intro = data?.intro || "There’s a difference between completing a project and understanding how the child thought through it. A thinking lab for children aged 8–16 in Pune."

  const rows = data?.rows || [
    { feature: 'Instructions', approach: 'Explore without instructions — child decides where to start' },
    { feature: 'Challenges', approach: 'Work on real challenges with no fixed answer' },
    { feature: 'Observation', approach: 'Observe how the child tests, retries, and solves' },
    { feature: 'Home Support', approach: 'Share thinking habit + how to respond to them at home' },
    { feature: 'Outcome', approach: 'Thinking maturity as the outcome' },
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-4 leading-tight">
            {title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-accent-teal mb-6">
            {subtitle}
          </h3>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-neutral-100 shadow-huge bg-white">
          <div className="bg-[#1E2A44] p-8 text-center">
            <h4 className="text-2xl font-serif font-bold text-white tracking-wide">What FunSmartism does</h4>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50/50 border-b border-neutral-100">
                  <th className="py-6 px-10 text-xs font-bold text-primary-500 uppercase tracking-widest w-1/3">Feature</th>
                  <th className="py-6 px-10 text-xs font-bold text-primary-500 uppercase tracking-widest">FunSmartism Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {rows.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-neutral-50 transition-colors">
                    <td className="py-6 px-10 text-lg font-bold text-primary-500">{row.feature}</td>
                    <td className="py-6 px-10 text-base text-neutral-600 flex items-start gap-4">
                      <Check className="text-accent-teal mt-0.5 flex-shrink-0" size={20} />
                      <span className="font-medium">{row.approach}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card/List View */}
          <div className="md:hidden divide-y divide-neutral-100">
            {rows.map((row: any, i: number) => (
              <div key={i} className="p-8">
                <div className="text-accent-teal font-mono text-[10px] uppercase tracking-widest font-bold mb-3">
                  {row.feature}
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-teal mt-1 flex-shrink-0" size={18} />
                  <p className="text-base text-primary-500 font-medium leading-relaxed">
                    {row.approach}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/thinking-lab">
            <Button variant="secondary" className="group">
              See the full methodology →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
