import Link from 'next/link'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/activities', label: 'Activities' },
  { href: '/blogs', label: 'Blogs' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-accent-surface/95 backdrop-blur">
      <div className="container-fluid flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-serif font-bold text-primary-900">
            FunSmartism
          </span>
          <span className="text-mono text-neutral-500">Intelligence Center</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-smooth hover:text-primary-400">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/about-us"
          className="rounded-base border border-primary-400 px-4 py-2 text-sm font-semibold text-primary-900 transition-smooth hover:bg-primary-400 hover:text-white"
        >
          Enquire
        </Link>
      </div>
    </header>
  )
}
