import Image from 'next/image'
import Link from 'next/link'
import { Bot, Wrench, Rocket, Blocks, MonitorOff, BrainCircuit, Telescope, PenTool } from 'lucide-react'

export function WhatStudentsDo() {
  const activities = [
    { icon: Bot, text: "build robots using sensors and electronics" },
    { icon: Wrench, text: "open real appliances to understand how things work" },
    { icon: BrainCircuit, text: "create mechanical and electronic tech toys" },
    { icon: Rocket, text: "design rockets and aeroplane models" },
    { icon: Blocks, text: "solve hands-on STEM challenges" },
    { icon: PenTool, text: "build roller coasters and structures using simple materials" },
    { icon: Telescope, text: "explore astronomy and space science" },
    { icon: MonitorOff, text: "redesign products through design thinking activities" },
    { icon: BrainCircuit, text: "create sci-fi stories and innovation concepts" },
    { icon: Blocks, text: "improve logic through Rubik’s Cube, Sudoku, and math challenges" },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            What Happens Inside FunSmartism?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light mb-6">
            Children do not sit through long lectures or copy fixed steps from notebooks or screens.
          </p>
          <p className="text-xl md:text-2xl text-accent-teal italic font-light leading-relaxed">
            They build, open, test, redesign, discuss, and experiment through hands-on RoboSTEM themes across the academic year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF9F6] rounded-[3rem] p-8 md:p-16 shadow-sm border border-neutral-100">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-primary-500 mb-10 uppercase tracking-widest text-[12px] opacity-70">
              Depending on the month’s theme, students may:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, i) => {
                const Icon = activity.icon
                return (
                  <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <p className="text-neutral-700 font-medium leading-tight text-sm">
                      {activity.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-square rounded-[2rem] overflow-hidden group">
            <Image 
              src="/images/hero-child-discovery.png" 
              alt="Hands-on learning at FunSmartism" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            <Link href="/gallery" className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-primary-500 uppercase tracking-widest shadow-lg hover:bg-white transition-colors">
              View Gallery →
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
           <div className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold shadow-lg">
              All projects made are take-home creations.
           </div>
        </div>
      </div>
    </section>
  )
}
