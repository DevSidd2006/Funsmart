import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

function getImageSrc(image: unknown): string {
  if (typeof image === 'string') return image
  return '/images/discovery-real.jpg'
}

export function GalleryTeaser({ items }: { items: any[] }) {
  const displayItems = items?.slice(0, 4) || []

  return (
    <section className="section-spacing bg-white">
      <SectionReveal className="container-fluid">
        {/* Header */}
        <div className="mb-8">
          {/* Replaced with simple grid as requested */}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayItems.map((item, i) => (
            <Link
              key={item._id || i}
              href="/gallery"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={getImageSrc(item.image)}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-3">
                <span className="text-white text-[11px] font-serif font-bold leading-snug line-clamp-2">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-accent-surface border border-neutral-100 text-primary-500 font-bold text-sm px-8 py-4 rounded-full hover:border-accent-teal/40 hover:shadow-md transition-all duration-300"
          >
            See all moments from FunSmartism in gallery
            <ArrowRight size={16} className="text-accent-teal" />
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}
