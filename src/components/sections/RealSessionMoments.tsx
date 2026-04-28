'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const moments = [
  {
    shortTitle: "Observe Before Acting",
    title: "A 10-year-old was given a gear system she had never seen before.",
    text: "For several minutes, she did not touch anything. She observed quietly. Tilted the structure. Looked from different angles. Watched how the gears connected before making a move. When she finally interacted with it, her first action was to slowly test the largest gear before changing anything else. Her parent had earlier described her as “slow to start.” Inside the session, we saw something different: careful observation before action.",
  },
  {
    shortTitle: "Retry After Failure",
    title: "A 12-year-old working on a STEM structure failed multiple times while testing his design.",
    text: "The fourth attempt failed too. He paused quietly for a while, looked at the materials again, and then started building in a completely different way. Not a small adjustment. A genuinely different approach. Nobody instructed him to do that.",
  },
  {
    shortTitle: "Confident Expert Interaction",
    title: "During one of FunSmartism’s edu-events, a 14-year-old student presented her working model to a visiting researcher.",
    text: "She explained how the system worked, why certain design decisions were made, and what problems she faced during testing. Then she asked the researcher a question back. Her mother later said: “I’ve never seen her speak to an adult with this much confidence before.”",
  },
]

export function RealSessionMoments() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [expandedDesktop, setExpandedDesktop] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-white py-[80px]">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            Three Moments From Real Sessions
          </h2>
          <p className="text-lg text-neutral-600 font-medium max-w-3xl mx-auto">
            These are the kinds of moments that happen regularly inside workshops, STEM challenges, and year-long sessions — moments that often reveal sides of children parents rarely get to see in traditional learning environments.
          </p>
        </div>

        {/* Desktop View: Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="relative overflow-hidden rounded-[24px] bg-neutral-50 border border-neutral-200 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-full w-2 bg-accent-teal" />
              <div className="relative">
                <span className="text-xs font-mono text-accent-teal uppercase tracking-widest font-bold mb-4 block">
                  {moment.shortTitle}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#16213B] mb-4">
                  {moment.title}
                </h3>
                <div className="relative">
                  <p className={`text-neutral-600 leading-relaxed text-sm ${expandedDesktop === index ? '' : 'max-h-36 overflow-hidden'}`}>
                    {moment.text}
                  </p>
                  {expandedDesktop !== index && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neutral-50 to-transparent" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setExpandedDesktop(expandedDesktop === index ? null : index)}
                  className="mt-6 text-sm font-bold text-accent-teal uppercase tracking-wider hover:text-[#28A392] transition-colors"
                >
                  {expandedDesktop === index ? 'Show less' : 'Read full moment'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Accordion */}
        <div className="md:hidden space-y-4">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="border border-neutral-200 rounded-2xl bg-neutral-50 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-8 bg-accent-teal rounded-full" />
                  <span className="font-serif font-bold text-[#1E2A44] text-lg">
                    {moment.shortTitle}
                  </span>
                </div>
                <div>
                  {openIndex === index ? (
                    <Minus className="text-neutral-400" size={20} />
                  ) : (
                    <Plus className="text-neutral-400" size={20} />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <h3 className="text-lg font-serif font-bold text-[#16213B] mb-4 mt-4">
                    {moment.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {moment.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
