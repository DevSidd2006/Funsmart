'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './Button'
import { cn } from '@/lib/cn'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Thinking Lab', href: '/thinking-lab' },
  { name: 'For Parents', href: '/for-parents' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
      )}
    >
      <div className="container-fluid flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-accent-teal text-white flex items-center justify-center text-lg">
            🧠
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-primary-500">
            FunSmartism
          </span>
        </Link>

        {/* Desktop Links — visible only at lg (1024px+) to avoid tablet overlap */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-400',
                  pathname === link.href ? 'text-primary-400' : 'text-neutral-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/schedule-visit">
              <Button size="sm">Schedule a Visit</Button>
            </Link>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm" className="whitespace-nowrap">
                Join Community
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile / Tablet Toggle — visible below lg (1024px) */}
        <button
          className="lg:hidden text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu Drawer */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6 transition-all duration-300 origin-top',
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium py-2',
                pathname === link.href ? 'text-primary-400' : 'text-neutral-900'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/schedule-visit">
            <Button className="w-full mt-4">Schedule a Visit</Button>
          </Link>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3"
          >
            <Button variant="secondary" className="w-full">
              Join Community
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
