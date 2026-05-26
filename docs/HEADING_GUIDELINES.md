Heading size guidelines

Purpose: keep heading sizes consistent and responsive across the site so they never overflow on narrow viewports.

Recommended classes (Tailwind):

- Page hero H1: `text-2xl md:text-3xl lg:text-5xl lg:text-[50px]` — bold, large on desktop, compact on mobile.
- Section H2 (large feature headings): `text-3xl md:text-4xl lg:text-5xl` — prevents line breaks overflowing cards.
- Special large H2 (marketing hero where 50px desired): `text-3xl md:text-[50px]` — enforces 50px only from `md` upwards.
- Comparison / mid headings where 46px requested: `text-2xl md:text-[46px]`.
- H3: `text-xl`.
- Small UI labels: keep `text-[10px]`/`text-[11px]` as used.

Notes:
- Prefer `md:` breakpoint for switching to large desktop sizes to avoid mobile overflow.
- Avoid top-level `text-[50px]` without breakpoint prefixes.
- When changing sizes, check line-height (`leading-*`) and `mb-*` margins to maintain balance.

How I applied this in the repo:
- Programs page: made workshop + year-long H2 responsive (`text-3xl md:text-[50px]`), Quick Comparison set to `text-2xl md:text-[46px]`.
- Founder section reduced to `text-3xl md:text-4xl lg:text-5xl`.

If you want, I can run a visual diff script to capture screenshots of key pages after these updates.