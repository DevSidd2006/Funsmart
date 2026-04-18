import { Check } from 'lucide-react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'

export function WhatMakesDifferent({ data }: { data?: any }) {
  const heading = data?.heading || "A Different Kind of Learning"
  const subheading = data?.subheading || "Will your child's true potential go unnoticed?"
  const description = data?.description || "There’s a difference between completing a project and understanding how the child thought through it. A thinking lab for children aged 8–16 in Pune."
  
  const comparisonImage = data?.image 
    ? urlForImage(data.image).width(1200).height(800).url() 
    : "/images/stem-vs-lab.png"

  const rows = data?.comparisonRows || [
    { text: 'Explore without instructions — child decides where to start' },
    { text: 'Work on real challenges with no fixed answer' },
    { text: 'Observe how the child tests, retries, and solves' },
    { text: 'Share thinking habits + how to respond to them at home' },
    { text: 'Thinking maturity as the outcome' },
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-accent-teal font-bold uppercase tracking-[0.2em] text-sm mb-4">{subheading}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-500 mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Split Image */}
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-neutral-100">
            <Image 
              src={comparisonImage} 
              alt="STEM Class vs Thinking Lab" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Right: Contrast Table */}
          <div className="bg-[#1E2A44] rounded-[40px] p-8 md:p-12 shadow-huge text-white">
            <h4 className="text-2xl font-serif font-bold mb-8 border-b border-white/10 pb-6 tracking-wide">
              What FunSmartism does
            </h4>
            
            <ul className="space-y-6">
              {rows.map((row: any, i: number) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-teal transition-colors duration-300">
                    <Check className="text-accent-teal group-hover:text-white transition-colors duration-300" size={14} />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-[#B7E3DD] leading-snug">
                    {row.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
