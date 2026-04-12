import Link from 'next/link'

export function Footer({ data }: { data?: any }) {
  const email = data?.contactEmail || 'hello@funsmartism.in'
  const phone = data?.contactPhone || '+91 99999 99999'
  const address = data?.address || 'Baner - Balewadi Road, Pune, Maharashtra 411045'
  const hours = data?.openingHours || 'Open: Tue - Sun | 10:00 AM - 7:00 PM'
  const socialLinks = data?.socialLinks?.length > 0 
    ? data.socialLinks 
    : [{ platform: 'FB' }, { platform: 'IG' }, { platform: 'LI' }, { platform: 'YT' }]

  return (
    <footer className="bg-accent-surface pt-24 pb-12 border-t border-neutral-100">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group mb-8">
              <div className="w-8 h-8 bg-primary-500 rounded-sm flex items-center justify-center text-white font-serif font-bold group-hover:bg-accent-teal transition-colors duration-500">
                F
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-primary-500">
                FunSmartism
              </span>
            </Link>
            <p className="text-neutral-500 max-w-sm leading-relaxed mb-10">
              {data?.description || "A premium laboratory for parents who value intelligence over marks. Helping children aged 8-14 discover their thinking patterns."}
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social: any) => (
                 <a key={social.platform} href={social.url || "#"} className="w-10 h-10 rounded-sm border border-neutral-200 flex items-center justify-center text-mono text-[10px] text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-all">{social.platform}</a>
               ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Thinking Lab', href: '/thinking-lab' },
                { name: 'For Parents', href: '/for-parents' },
                { name: 'Programs', href: '/programs' },
                { name: 'Gallery', href: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-accent-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 border-r border-neutral-100 hidden md:block" />

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-8">The Thinking Lab</h4>
            <div className="space-y-4 text-sm text-neutral-500 leading-relaxed">
              <p>{address}</p>
              <p>{phone} <br /> {email}</p>
              <p className="pt-4 text-mono text-accent-teal uppercase tracking-widest text-[10px]">{hours}</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-400 font-mono tracking-tighter">© 2026 {data?.title || 'FUNSMARTISM'}_INTELLIGENCE_CENTER</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-neutral-400 hover:text-primary-500 uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-xs text-neutral-400 hover:text-primary-500 uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

