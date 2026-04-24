import { Button } from '@/components/ui/Button'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export default function BlogsPage() {
  const displayPosts = blogPosts
  return (
    <div className="bg-white">
      {/* Blog Hero */}
      <section className="pt-40 pb-24 bg-accent-surface border-b border-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/5 border border-primary-500/10 text-primary-500 text-[11px] font-bold uppercase tracking-widest mb-10">
              The Observer Blog
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-500 mb-8 leading-[1.05] tracking-tight">
              Thinking in <br/>
              <span className="text-accent-teal italic font-light">Insights.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed max-w-2xl font-light">
              Deep dives into child development, mental models, and the future of educational patterns for curious parents.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Categories */}
            <div className="lg:col-span-3 space-y-10">
               <div className="space-y-4">
                 <ul className="space-y-4 border-l border-neutral-100 pl-6">
                    {['Child Development', 'Mental Models', 'STEM Future', 'Parent Stories', 'Lab Insights'].map((cat) => (
                      <li key={cat} className="group">
                        <a href="#" className="font-medium text-neutral-500 hover:text-accent-teal transition-colors uppercase text-xs tracking-widest">{cat}</a>
                      </li>
                    ))}
                 </ul>
               </div>
               
               <div className="p-8 bg-primary-500 rounded-lg text-white shadow-lg shadow-primary-500/10">
                 <h3 className="text-xl font-serif font-bold mb-4">The Observer Newsletter</h3>
                 <p className="text-white/80 text-sm mb-6 leading-relaxed">Weekly insights into child thinking patterns from the lab.</p>
                 <input 
                  type="email" 
                  placeholder="Parent's Email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm mb-4 focus:border-accent-teal outline-none text-sm placeholder:text-white/30 text-white"
                 />
                 <Button className="w-full bg-accent-teal border-none text-white text-sm hover:bg-[#28A392] shadow-md">Subscribe</Button>
               </div>
            </div>

            {/* Articles List */}
            <div className="lg:col-span-9 space-y-24">
              {displayPosts.map((post: any, i: number) => (
                <article key={post.id || i} className="group cursor-pointer">
                  <Link href={`/blogs/${post.slug?.current || '#'}`} className="block">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                       <div className="md:col-span-5 rounded-lg overflow-hidden relative aspect-[4/3] bg-neutral-100 flex items-center justify-center shadow-base group-hover:shadow-md transition-shadow">
                          {post.mainImage ? (
                            <img 
                              src={post.mainImage} 
                              alt={post.title} 
                              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] grayscale-[20%]" 
                            />
                          ) : (
                            <img src="/images/lab-observation.png" alt="Blog" className="w-full h-full object-cover grayscale-[20%]" />
                          )}
                          <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-500" />
                       </div>
                       <div className="md:col-span-7 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-6">
                             <span className="text-mono text-[10px] bg-accent-surface text-accent-teal uppercase tracking-widest px-3 py-1 rounded-sm border border-neutral-100">{post.category || 'ARTICLE'}</span>
                             <span className="text-mono text-[10px] text-neutral-400 tracking-widest">
                               {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent'}
                             </span>
                          </div>
                          <h2 className="text-3xl font-serif font-bold text-primary-500 group-hover:text-primary-600 transition-colors mb-4 leading-tight">
                             {post.title}
                          </h2>
                          <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
                             {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-accent-teal font-semibold group-hover:gap-5 transition-all duration-300">
                             Read Full Article <ArrowRight size={18} />
                          </div>
                       </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Pagination Placeholder */}
      <section className="py-24 bg-accent-surface border-t border-neutral-100">
        <div className="container-fluid flex flex-col items-center gap-12">
           <div className="flex justify-center items-center gap-8">
              <span className="text-mono text-primary-500 font-bold border-b-2 border-accent-teal pb-1">01</span>
              <span className="text-mono text-neutral-400 hover:text-primary-500 transition-colors cursor-pointer pb-1">02</span>
              <span className="text-mono text-neutral-400 hover:text-primary-500 transition-colors cursor-pointer pb-1">03</span>
              <span className="text-mono text-accent-teal hover:text-primary-500 transition-colors cursor-pointer text-sm font-bold ml-6 flex items-center gap-2 group">
                 NEXT_PAGE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
           </div>

           <div className="w-full max-w-4xl bg-primary-500 rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 lab-grid opacity-[0.05]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Want to stay updated?</h2>
                <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                  Join our parent community to get weekly insights and priority access to lab events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <JoinCommunity variant="solid" className="bg-accent-teal hover:bg-[#28A392] px-12 py-6 text-xl" />
                </div>
              </div>
           </div>
        </div>
      </section>
      
    </div>
  )
}
