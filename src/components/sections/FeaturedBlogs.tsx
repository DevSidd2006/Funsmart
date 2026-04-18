import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

export function FeaturedBlogs({ posts }: { posts: any[] }) {
  const displayPosts = posts?.slice(0, 3) || []

  if (displayPosts.length === 0) return null

  return (
    <section className="section-spacing bg-accent-surface border-y border-neutral-100">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-6">
              Thinking in <span className="text-accent-teal italic font-light">Insights.</span>
            </h2>
            <p className="text-lg text-neutral-500">
              Deep dives into child development, mental models, and the future of educational patterns.
            </p>
          </div>
          <Link href="/blogs" className="group flex items-center gap-3 text-accent-teal font-bold uppercase text-xs tracking-widest hover:gap-5 transition-all">
            Read All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayPosts.map((post, i) => (
            <Link key={post._id || i} href={`/blogs/${post.slug?.current || '#'}`} className="group block h-full">
              <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-huge transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {post.mainImage ? (
                    <img 
                      src={urlForImage(post.mainImage).width(800).height(500).url()} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" 
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-300">No Image</div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-bold bg-white/90 backdrop-blur-md text-accent-teal px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-neutral-100 shadow-sm">
                      {post.category || 'ARTICLE'}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4 group-hover:text-accent-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-accent-teal text-xs font-bold uppercase tracking-widest mt-auto">
                    Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
