'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'

export function NavbarWrapper() {
  const pathname = usePathname()
  
  // Hide Navbar completely when inside the Sanity Studio
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return <Navbar />
}
