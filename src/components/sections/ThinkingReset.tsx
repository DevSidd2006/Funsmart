import { Button } from '../ui/Button'
import Link from 'next/link'
import { Calendar, MapPin, Sparkles } from 'lucide-react'

export function ThinkingReset() {
  return (
    <section id="workshop" className="section-spacing bg-gradient-to-br from-[#1E2A44] via-[#16334A] to-[#1F3C5A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(47,181,163,0.35),_transparent_30%)]" />
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-mono text-accent-teal mb-4 uppercase tracking-widest">[ THINKING RESET ]</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              10-Day Thinking Reset Workshop
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
              A focused introduction to how children think. Ten days of open-ended STEAM challenges, observation-led coaching, and guided parent insight.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Calendar, label: '10 days' },
                { icon: MapPin, label: 'Bibwewadi, Pune' },
                { icon: Sparkles, label: 'Scientist-inspired tasks' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-white/90">
                  <div className="font-semibold mb-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-accent-teal border-none text-white shadow-2xl shadow-accent-teal/20">
                  Book a Visit
                </Button>
              </Link>
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/20 text-white bg-white/10 hover:bg-white/15 transition-all duration-300"
              >
                Join Community
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative h-96 bg-[url('https://images.unsplash.com/photo-1596495577886-d920f21e8bc8?q=80&w=1200')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/90 via-[#1E2A44]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 border border-white/20 px-5 py-4 backdrop-blur-sm text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-accent-teal mb-1">Thinking Reset</p>
                <h3 className="text-2xl font-serif font-bold">A week of fresh thinking habits</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
