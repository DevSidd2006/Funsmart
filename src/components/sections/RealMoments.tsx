'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '../ui/Button'

export function RealMoments({ data }: { data?: any[] }) {
  const [current, setCurrent] = useState(0)
  const moments = data && data.length > 0 ? data : [
    {
      id: 1,
      image: '/images/hero-child-discovery.png',
      label: 'SCIENTIFIC_METHOD',
      title: 'Precision in Action',
      desc: 'A child focuses on the mechanical feedback of a gear system, developing patience and logical foresight.'
    },
    {
      id: 2,
      image: '/images/lab-observation.png',
      label: 'FACILITATOR_INSIGHT',
      title: 'The Art of Observation',
      desc: 'We don\'t intervene. We watch for the "Aha!" moment where a child independently leapfrogs a problem.'
    },
    {
      id: 3,
      image: '/images/discovery-moment.png',
      label: 'COGNITIVE_REVELATION',
      title: 'The Spark of Curiosity',
      desc: 'Collaborative problem solving where the solution is less important than the path taken to find it.'
    }
  ]


  const nextSlide = () => setCurrent((prev) => (prev === moments.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? moments.length - 1 : prev - 1))

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ LAB_JOURNAL_VISUALS ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              Real moments of <br />unscripted discovery.
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-base bg-accent-surface aspect-[16/10] md:aspect-[21/9]">
          {moments.map((mom, idx) => (
            <div 
              key={mom.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex flex-col md:flex-row ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-full md:w-2/3 h-2/3 md:h-full relative overflow-hidden">
                <img 
                  src={mom.image} 
                  alt={mom.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-primary-900/10" />
                <div className="absolute bottom-8 left-8">
                   <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-mono text-[10px] text-primary-500 font-bold border border-primary-100 shadow-sm">
                     MOMENT_CAP_0{mom.id} // {mom.label}
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col justify-center bg-white border-l border-neutral-100">
                <h3 className="text-3xl font-serif font-bold text-primary-500 mb-6 leading-tight">{mom.title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-10 text-lg">
                  {mom.desc}
                </p>
                <div className="mt-auto flex items-center gap-4">
                  {moments.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 transition-all duration-500 ${i === current ? 'w-12 bg-accent-teal' : 'w-4 bg-neutral-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
