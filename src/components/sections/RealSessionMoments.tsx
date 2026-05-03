'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const moments = [
  {
    shortTitle: "Observe Before Acting",
    title: "A 10-year-old was given a gear system she had never seen before.",
    text: "While others immediately started turning parts randomly, she spent several minutes quietly observing how the pieces connected. Only after understanding the structure did she begin testing it. Her parent had earlier described her as \"slow to start.\" Inside the session, we saw something different: careful observation before action.",
  },
  {
    shortTitle: "Retry After Failure",
    title: "A 12-year-old working on a STEM structure failed multiple times while testing his design.",
    text: "After another failed attempt, he paused for a while, looked at the materials again, and then started rebuilding using a completely different approach. Nobody asked him to restart. He decided to test a new idea on his own.",
  },
  {
    shortTitle: "Asking Better Questions",
    title: "During a scientist interaction session, one student quietly listened for almost the entire discussion.",
    text: "Near the end, she raised her hand and asked a question connecting the session topic to something she had previously built during a workshop. Her parent later mentioned: \"Usually she hesitates to speak in front of new people.\" Moments like these often appear gradually — through repeated opportunities to build, discuss, explore, and participate actively.",
  },
]

export function RealSessionMoments() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [expandedDesktop, setExpandedDesktop] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-white py-[60px]">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            Moments from Real Sessions
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light italic max-w-2xl mx-auto">
            These are the kinds of moments that happen regularly inside workshops, STEM challenges, and year-long sessions — moments that often reveal sides of children parents rarely get to see during traditional learning routines.
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
