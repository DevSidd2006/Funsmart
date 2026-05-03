import Image from 'next/image'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { galleryItems } from '@/data/gallery'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function GalleryPage() {
  const displayItems = galleryItems

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="pt-48 pb-16 bg-accent-surface relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 leading-tight tracking-tight mb-8">
              Real Projects. <br />
              <span className="text-accent-teal italic font-light">Real Challenges. Real Learning Moments.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light max-w-3xl mx-auto">
              A glimpse into the hands-on RoboSTEM environment inside FunSmartism — where children build, experiment, solve, discuss, redesign, and explore through real-world learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <div className="container-fluid max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            Every project, challenge, workshop, exhibition, and discussion inside FunSmartism is designed to encourage active participation instead of passive learning. 
            This gallery captures moments from workshops, STEM challenges, take-home creations, edu-events, scientist interactions, exhibitions, and year-long learning sessions.
          </p>
        </div>
      </section>

      {/* SECTION 3 — GALLERY CATEGORIES / MASONRY GRID */}
      <section className="py-16">
        <div className="container-fluid max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[340px]">
              {displayItems.map((item: any) => (
                <div key={item.id} className={`relative group overflow-hidden rounded-3xl shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-2xl ${item.span || 'lg:col-span-4'}`}>
                  {item.image ? (
                    <Image 
                       src={item.image} 
                       alt={item.title} 
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out" 
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center border-dashed border-2 border-neutral-200">
                      <span className="text-mono text-neutral-300 text-xs mb-2 uppercase tracking-widest">Image Content</span>
                      <span className="text-sm text-neutral-400 font-medium text-center px-4">{item.title}</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                      <div className="flex justify-between items-start mb-4">
                         <span className="text-mono text-accent-teal text-[11px] font-bold tracking-[0.2em] uppercase">{item.tag}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                      <p className="text-white/80 text-[15px] leading-relaxed max-w-sm font-light">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SHORT OBSERVATION STRIP */}
      <section className="py-20 bg-[#1E2A44] text-white relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">What These Photos Usually <br className="hidden lg:block" /> Don’t Fully Capture</h2>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  The most important moments are often invisible in pictures:
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    'the child who retries independently',
                    'the student who starts asking deeper questions',
                    'the team discussing multiple approaches',
                    'the quiet child confidently presenting a project',
                    'the excitement after solving something unfamiliar'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 shrink-0 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(47,181,163,0.5)]" />
                       <span className="text-lg font-medium text-white/90 leading-snug">{point}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="pt-12 border-t border-white/5 text-center">
              <p className="text-xl text-accent-teal italic font-light">
                That experience becomes visible only inside the environment itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Want To Experience It Beyond Photos?
          </h2>
          <p className="text-xl text-neutral-600 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
            The gallery shows the activities.
          </p>
          <p className="text-xl text-neutral-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            A visit helps parents experience the learning environment, session culture, and student participation much more clearly.
          </p>
          <Link href="/schedule-visit">
            <Button size="lg" className="bg-accent-teal border-none text-white px-16 py-6 shadow-huge shadow-accent-teal/30 rounded-full font-bold">
              Schedule A Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

