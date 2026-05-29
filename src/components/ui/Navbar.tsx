'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from './Button'
import { JoinCommunity } from './JoinCommunity'
import { cn } from '@/lib/cn'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery & Newsroom', href: '/gallery' },
  { name: 'Schedule a Visit', href: '/schedule-visit' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDarkHeroPage = pathname === '/' || pathname === '/about' || pathname === '/programs' || pathname === '/gallery' || pathname === '/schedule-visit'
  const useLightText = isDarkHeroPage && !scrolled && !isOpen

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div 
        className={cn(
          "container-fluid w-full flex items-center justify-between transition-all duration-700",
          scrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-neutral-100 px-8 py-2 rounded-b-[2rem]" 
            : "bg-transparent py-4 px-8"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group py-1">
          <div className={cn(
            "p-1.5 md:p-2 rounded-xl transition-all duration-500 mr-4 flex items-center gap-3",
            useLightText ? "bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-primary-500" : "bg-transparent text-primary-500"
          )}>
            <Image 
              src="/images/logo.png" 
              alt="FunSmartism Logo" 
              width={80}
              height={80}
              priority
              className="h-12 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />
            <span className="font-kaushan text-2xl md:text-4xl leading-none pr-2">
              FunSmartism
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-2">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap',
                  pathname === link.href
                    ? (useLightText
                        ? 'text-[#1E2A44] bg-accent-teal shadow-sm'
                        : 'text-white bg-primary-500 shadow-sm')
                    : (useLightText
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-100')
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-neutral-200/20 pl-2">
            <JoinCommunity variant="solid" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "xl:hidden w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-500",
            useLightText ? "text-white bg-white/10" : "text-neutral-900 bg-neutral-100"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'xl:hidden fixed inset-x-4 top-24 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-neutral-100 shadow-huge p-8 transition-all duration-500 origin-top',
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-2xl font-serif font-bold transition-colors',
                pathname === link.href ? 'text-accent-teal' : 'text-primary-500'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-neutral-100 my-2" />
          <JoinCommunity variant="solid" className="w-full py-5 rounded-2xl text-base" />
        </div>
      </div>
    </nav>
  )
}
