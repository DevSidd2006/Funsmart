'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const moments = [
  {
    shortTitle: "Observe before act",
    title: "A 10-year-old and a gear system she'd never seen before.",
    text: "She didn't touch it for the first eight minutes. Just looked. Tilted her head. Looked from a different angle. When she finally reached out, her first move was to turn the largest gear — testing the system before committing to it. Her parent had described her as 'slow to start things'. We described it as a real problem solving way of first observing the system. Same child. Different lens.",
  },
  {
    shortTitle: "Retry after failure",
    title: "A 12-year-old who failed four times and kept going.",
    text: "His fourth attempt didn't work either. He sat back, stared at the ceiling for about thirty seconds, then picked up the materials and tried something genuinely different. Not a variation — a different approach entirely. That shift is harder than it sounds. Most adults default to trying the same thing faster. He did it at twelve, without being asked.",
  },
  {
    shortTitle: "Confident scientist interaction",
    title: "A 14-year-old who explained her project to a scientist during one of our school and edu innovation events.",
    text: "She'd spent a month building a working model during the year-long program. At the event, a researcher asked her how it worked. She answered — clearly, confidently, technically. And then asked the researcher a question back. Her mother said she'd never heard her daughter speak to an adult that way. We weren't surprised. We'd been watching her think for eight weeks.",
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
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-4">
            Three moments from real sessions.
          </h2>
          <p className="text-lg text-neutral-600 font-light">
            These are the kinds of things that happen every week — and that parents never hear about from schools.
          </p>
        </div>

        {/* Desktop View: Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="relative overflow-hidden rounded-[20px] bg-neutral-50 border border-neutral-200 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-xl bg-accent-teal" />
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
                  className="mt-4 text-sm font-semibold text-accent-teal hover:text-accent-teal/80 transition-colors"
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
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-accent-teal rounded-full mr-4"></div>
                  <span className="font-serif font-bold text-[#1E2A44]">
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <h3 className="text-lg font-serif font-bold text-[#16213B] mb-3 mt-4">
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
