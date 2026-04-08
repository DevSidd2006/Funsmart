import { Accordion } from '../ui/Accordion'
import { faqs } from '../../data/faqs'

export function ParentConcerns() {
  return (
    <section className="w-full bg-yellow-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-12 text-center leading-tight">
          Common Questions
        </h2>

        <Accordion items={faqs} />
      </div>
    </section>
  )
}
