import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react'

function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

export function Footer({ data }: { data?: any }) {
  const email = data?.contactEmail || 'hello@funsmartism.in'
  const phone = data?.contactPhone || '+91 99999 99999'
  const address = data?.address || 'Navkar Residency, Swami Vivekanand Road, Next to Bibwewadi Police Station, Bibwewadi, Pune 411037'
  const hours = data?.openingHours || 'Open: Tue - Sun | 10:00 AM - 7:00 PM'
  
  const socialLinks = data?.socialLinks?.length > 0 
    ? data.socialLinks 
    : [
        { platform: 'Facebook', url: 'https://www.facebook.com/FunSmartismIntelligenceCenter', icon: Facebook, color: 'hover:text-[#1877F2] hover:border-[#1877F2]' },
        { platform: 'Instagram', url: 'https://www.instagram.com/funsmartism.intelligence', icon: Instagram, color: 'hover:text-[#E4405F] hover:border-[#E4405F]' },
        { platform: 'Youtube', url: 'https://www.youtube.com/@FunSmartism_IntelligenceCenter', icon: Youtube, color: 'hover:text-[#FF0000] hover:border-[#FF0000]' },
        { platform: 'Pinterest', url: 'https://in.pinterest.com/FunSmartism_IntelligenceCenter', icon: PinterestIcon, color: 'hover:text-[#E60023] hover:border-[#E60023]' },
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
              {data?.description || "A hands-on RoboSTEM thinking lab helping children build independent problem-solving beyond rote learning."}
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
                { name: 'Programs', href: '/programs' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Schedule a Visit', href: '/schedule-visit' },
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

