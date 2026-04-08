import Link from 'next/link'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/activities', label: 'Activities' },
  { href: '/blogs', label: 'Blogs' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-fluid py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-serif font-bold text-primary-900">
              FunSmartism
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
              A premium thinking lab for children. This demo keeps the structure simple so the client can review the layout, theme, and page flow.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Pages
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-700">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-smooth hover:text-primary-400">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              Placeholder for phone, email, and location details.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
