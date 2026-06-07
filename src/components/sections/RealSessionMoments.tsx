'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal } from '../ui/SectionReveal'

const moments = [
  {
    shortTitle: "Observe Before Acting",
    title: "A 10-year-old and a gear system she'd never seen before.",
    text: "She didn't touch it for the first eight minutes. Just looked. Tilted her head. Looked from a different angle. When she finally reached out, her first move was to turn the largest gear — testing the system before committing to it. Her parent had described her as 'slow to start things'. We described it as a real problem solving way of first observing the system. Same child. Different lens.",
    image: "/images/gallery/teaser-4.jpg",
    alt: "A child carefully exploring and observing a gear system in the lab",
  },
  {
    shortTitle: "Retry After Failure",
    title: "A 12-year-old who failed four times and kept going.",
    text: "His fourth attempt didn't work either. He sat back, stared at the ceiling for about thirty seconds, then picked up the materials and tried something genuinely different. Not a variation — a different approach entirely. That shift is harder than it sounds. Most adults default to trying the same thing faster. He did it at twelve, without being asked.",
    image: "/images/gallery/teaser-2.jpg",
    alt: "A child mid-retry, deeply focused on solving a structural failure",
  },
  {
    shortTitle: "Asking Better Questions",
    title: "A 14-year-old who explained her project to a scientist during one of our school and edu innovation events.",
    text: "She'd spent a month building a working model during the year-long program. At the event, a researcher asked her how it worked. She answered — clearly, confidently, technically. And then asked the researcher a question back. Her mother said she'd never heard her daughter speak to an adult that way. We weren't surprised. We'd been watching her think for eight weeks.",
    image: "/images/gallery/teaser-5.jpg",
    alt: "A confident child explaining her technical project to a visiting adult expert",
  },
]

export function RealSessionMoments() {
  return (
    <section className="relative bg-white py-[60px]">
      <SectionReveal className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A44] leading-tight mb-6">
            Moments from Real Sessions
          </h2>
          <p className="text-base md:text-lg text-neutral-600 font-light italic max-w-2xl mx-auto">
            These are the kinds of moments that happen regularly inside workshops, STEM challenges, and year-long sessions — moments that often reveal sides of children parents rarely get to see during traditional learning routines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="relative overflow-hidden rounded-[20px] bg-neutral-50 border border-neutral-200 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-xl bg-accent-teal" />
              <div className="w-full relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-md border border-neutral-100">
                <Image src={moment.image} alt={moment.alt} fill className="object-cover" />
              </div>
              <div className="relative flex-grow">
                <span className="text-xs font-sans text-accent-teal uppercase tracking-widest font-bold mb-4 block">
                  {moment.shortTitle}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#16213B] mb-4">
                  {moment.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {moment.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600 mb-6 italic">"These moments happen regularly inside sessions."</p>
          <Link href="/programs" className="inline-flex items-center gap-3 bg-accent-teal hover:bg-[#28A392] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
            See how programs work →
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}
