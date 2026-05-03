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
  const title = data?.title || 'Most programs teach projects. We observe scientist-style problem-solving.'

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            There's a difference between completing a project and understanding how the child thought through it. FunSmartism is built around the second one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group p-8 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent-teal/30 hover:bg-white hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-teal/10 flex items-center justify-center mb-5 group-hover:bg-accent-teal group-hover:text-white transition-all duration-300">
                  <Icon size={20} className="text-accent-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-500 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/thinking-lab">
            <Button variant="secondary" className="group">
              See the methodology →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
