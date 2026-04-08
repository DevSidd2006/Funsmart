import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero / Vision Section */}
      <section className="section-spacing bg-accent-surface relative">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ THE_FOUNDATION ]</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 mb-8 leading-[1.1]">
              Bridging the gap between marks and <span className="text-accent-teal italic font-light">intelligence</span>.
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-10">
              Founded by Dipali Akolkar, FunSmartism was born out of a simple observation: children are being graded on what they know, but the world is testing them on how they problem-solve.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-white border border-neutral-100 shadow-xl shadow-primary-500/5 group">
              <img src="/images/lab-observation.png" alt="Dipali Akolkar observing a student" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary-500 mb-6">A Note from the Founder</h2>
              <div className="space-y-6 text-neutral-500 leading-relaxed text-lg">
                <p>
                  As a software professional who pivoted to child development, I saw a stark contrast between corporate needs and traditional educational outcomes. 
                </p>
                <p>
                  At FunSmartism, we've created a "Thinkers' Territory" in Pune where children aged 8-14 are not coached, but observed. We focus on the "Habits of the Mind" — persistence, resilience, and critical thinking.
                </p>
                <div className="pt-8 border-t border-neutral-100 mt-8">
                  <p className="font-serif font-bold text-primary-500 text-2xl tracking-tight">Dipali Akolkar</p>
                  <p className="text-mono text-xs text-accent-teal uppercase tracking-widest mt-1">Chief Thinking Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Differentiation Grids */}
      <section className="section-spacing bg-primary-500 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-teal/5 transform skew-x-12 translate-x-1/2"></div>
        <div className="container-fluid relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 max-w-2xl leading-[1.1] text-balanced">
            Why we do <br />what we do.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'The Real World Test',
                desc: 'Real world challenges don\'t have a syllabus. We prepare kids for the "unknowns" through hands-on robotics and space science.'
              },
              {
                title: 'Scientific Observation',
                desc: 'We don\'t just conduct classes; we take detailed notes on how your child handles difficulty and curiosity.'
              },
              {
                title: 'Community of Thinkers',
                desc: 'Kids interact with scientists from ISRO and industry experts to see mental models in action at the highest levels.'
              }
            ].map((card, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-sm bg-accent-teal flex items-center justify-center font-mono text-white text-sm font-bold shadow-lg shadow-accent-teal/20">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">{card.title}</h3>
                <p className="text-primary-100/70 leading-relaxed text-lg">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-accent-surface text-center">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-10 leading-tight">Ready to see your child differently?</h2>
          <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-[#1E2A44] shadow-lg hover:bg-accent-teal transition-colors">Join our next Orientation</Button>
        </div>
      </section>
    </div>
  )
}
