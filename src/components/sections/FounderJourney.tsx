import React from 'react';
import Image from 'next/image';

export function FounderJourney() {
  return (
    <section className="section-spacing bg-[#F8FBFF]" id="founder-journey">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A44] mb-12 leading-tight">
            Why we built this.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            {/* Left side: Founder photo and bio */}
            <div>
              <div className="rounded-[2rem] overflow-hidden border border-neutral-200 bg-white p-6 shadow-lg mb-6">
                <div className="w-full aspect-[4/5] rounded-2xl mb-6 overflow-hidden relative shadow-inner bg-neutral-50 border border-neutral-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" 
                    alt="Dipali Akolkar in FunSmartism Lab" 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="text-mono text-accent-teal mb-3 text-sm uppercase tracking-widest font-bold">From software systems to child thinking systems</div>
                <h3 className="text-2xl font-serif font-bold text-[#1E2A44] mb-2">Dipali Akolkar</h3>
                <p className="text-neutral-600 text-sm mb-4">Founder — FunSmartism Intelligence Center</p>
                <div className="w-12 h-1 bg-accent-teal/30 rounded-full mb-4"></div>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  After years in software development and hands-on parenting, Dipali went deeper into child development through formal learning experiences both globally and in the USA.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm mt-3">
                  What stood out was simple: the right environment can completely change how a child observes, persists, and solves.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm mt-3">
                  That insight led her to build FunSmartism — a scientist-inspired RoboSTEM environment where real problem-solving becomes visible and parents learn how to support independent thinking in everyday life.
                </p>
              </div>
            </div>

            {/* Right side: Short founder journey story */}
            <div className="pt-4 lg:pt-8">
              <div className="prose prose-lg prose-neutral max-w-none">
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  We noticed it again and again: a child who struggled in a classroom would become active the moment you put something real in their hands. A mechanical puzzle. A circuit board. A question without a single correct answer.
                </p>
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  We saw parents frustrated, wondering why their child's initial spark for logic and science had faded into rote memorization. We realized the problem wasn't the children or the subjects—it was the environment.
                </p>
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  So we built a different kind of environment. One where thinking was the subject, not the by-product. Where the goal was not to produce a result, but to understand how a child arrived at one — or didn't.
                </p>
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  That environment is FunSmartism Intelligence Center.
                </p>
                <p className="text-xl text-neutral-700 leading-relaxed mb-12">
                  The Thinking Lab is where children build, test, and solve real challenges while we observe how they think and solve during real challenges along the way— and helping parents understand how to respond to them in real life.
                </p>
                
                <a href="#schedule" className="inline-flex items-center text-accent-teal font-semibold text-lg hover:text-accent-teal/80 transition-colors">
                  See how this becomes real inside the FunSmartism RoboSTEM Thinking Lab 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
