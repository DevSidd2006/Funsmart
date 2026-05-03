import Image from 'next/image'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { JoinCommunity } from '../ui/JoinCommunity'
import { Calendar, MapPin, Sparkles } from 'lucide-react'

export function ThinkingReset() {
  const designedFor = [
    'enjoy building and exploring',
    'are curious beyond textbooks',
    'need more active learning environments',
    'want exposure to multiple STEM domains',
  ]

  return (
    <section id="workshop" className="py-16 bg-white overflow-hidden relative">
      <div className="container-fluid">
        <div className="bg-[#FAF9F6] rounded-[3rem] border border-neutral-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            
            <div className="p-10 md:p-16 lg:p-20">
              <div className="inline-flex items-center gap-2 text-accent-teal font-bold uppercase tracking-widest text-xs mb-6">
                <Sparkles size={14} />
                Short-term Intensive
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
                10-Day Thinking <br />
                <span className="text-accent-teal italic font-light text-4xl md:text-6xl">RESET Workshop</span>
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed font-light">
                A fast-paced hands-on RoboSTEM experience where children explore different themes each day through projects, challenges, experimentation, and creative problem-solving.
              </p>
              
              <div className="space-y-6 mb-12">
                <p className="text-sm font-bold text-primary-500 uppercase tracking-widest opacity-70">Designed Especially For Children Who:</p>
                <ul className="space-y-3">
                  {designedFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-teal flex-shrink-0" />
                      <span className="font-medium italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/schedule-visit">
                  <Button size="lg" className="bg-accent-teal border-none text-white shadow-xl shadow-accent-teal/20 rounded-full font-bold px-10">
                    Schedule a Visit
                  </Button>
                </Link>
                <JoinCommunity variant="solid" />
              </div>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200"
                alt="Children participating in a STEM workshop"
                fill
                className="object-cover transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
