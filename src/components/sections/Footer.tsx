import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer({ data }: { data?: any }) {
  const email = data?.contactEmail || 'hello@funsmartism.in'
  const phone = data?.contactPhone || '+91 99999 99999'
  const address = data?.address || 'Navkar Residency, Swami Vivekanand Road, Next to Bibwewadi Police Station, Bibwewadi, Pune 411037'
  const hours = data?.openingHours || 'Open: Tue - Sun | 10:00 AM - 7:00 PM'
  
  const socialLinks = data?.socialLinks?.length > 0 
    ? data.socialLinks 
    : [
        { platform: 'Facebook', url: '#', icon: Facebook, color: 'hover:text-[#1877F2] hover:border-[#1877F2]' },
        { platform: 'Instagram', url: '#', icon: Instagram, color: 'hover:text-[#E4405F] hover:border-[#E4405F]' },
        { platform: 'Linkedin', url: '#', icon: Linkedin, color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]' },
        { platform: 'Youtube', url: '#', icon: Youtube, color: 'hover:text-[#FF0000] hover:border-[#FF0000]' }
      ]

  return (
    <footer className="bg-accent-surface pt-24 pb-12 border-t border-neutral-100">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group mb-8">
            <Image 
              src="/images/logo.png" 
              alt="FunSmartism Logo" 
              width={200}
              height={100}
              sizes="(max-width: 768px) 150px, 200px"
              className="h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />
            </Link>
            <p className="text-neutral-600 max-w-sm leading-relaxed mb-10 text-sm">
              {data?.description || "A premium laboratory for parents who value intelligence over marks. Helping children discover their unique thinking patterns."}
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social: any) => {
                 const Icon = social.icon || Facebook
                 return (
                   <a 
                     key={social.platform} 
                     href={social.url || "#"} 
                     className={`w-10 h-10 rounded-sm border border-neutral-200 flex items-center justify-center text-neutral-400 transition-all bg-white shadow-sm ${social.color}`}
                     aria-label={`Visit our ${social.platform} page`}
                   >
                     <Icon size={18} />
                   </a>
                 )
               })}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-8">Navigation</h4>
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
                  <Link href={link.href} className="text-sm text-neutral-600 hover:text-accent-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-8">The Thinking Lab</h4>
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p className="font-medium text-primary-900">{address}</p>
              <p>{phone} <br /> {email}</p>
              <div className="pt-4">
                <p className="text-mono text-accent-teal uppercase tracking-widest text-[12px] font-bold mb-1">Hours</p>
                <p className="text-sm">{hours}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-8">Find Us</h4>
            <div className="rounded-xl overflow-hidden border border-neutral-200 h-48">
              <iframe 
                src="https://maps.google.com/maps?q=FunSmartism%20Intelligence%20Center%20Bibwewadi%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="FunSmartism Location"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500 font-mono tracking-tighter">© 2026 {data?.title || 'FUNSMARTISM'}_INTELLIGENCE_CENTER</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-neutral-500 hover:text-primary-500 uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-primary-500 uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

