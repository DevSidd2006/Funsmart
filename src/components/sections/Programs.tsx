import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check } from 'lucide-react'
import { programs } from '../../data/programs'

export function Programs() {
  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          Choose Your Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.title} variant="program">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {program.title}
              </h3>
              <p className="text-sm font-semibold text-neutral-600 mb-8">
                Perfect for {program.title === '10-Day Workshop' ? 'quick intro' : 'deep growth'}
              </p>

              <ul className="space-y-4 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start">
                    <Check size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-200 pt-6 mt-6">
                <p className="text-2xl font-bold text-neutral-900 mb-4">
                  {program.price}
                  <span className="text-sm text-neutral-600">{program.duration}</span>
                </p>
                <Button size="lg">{program.cta}</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
