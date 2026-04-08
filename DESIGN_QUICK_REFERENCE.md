# FunSmartism Intelligence Center — Design Overview (Quick Reference)

> **One-page summary** of the homepage design approach, structure, and key decisions

---

## 🎯 DESIGN PHILOSOPHY

**Goal**: Build trust with parents while establishing FunSmartism as a premium, observation-focused thinking lab—NOT a coding class.

**Approach**: Adapt [STEMpedia's proven structure](https://thestempedia.com/) (social proof → process → programs → testimonials) while evolving the tone from *tech-forward* to *calm and insightful*.

**Result**: A website that answers each parent concern at every step, moving them from curiosity → understanding → trust → action.

---

## 📐 HOMEPAGE STRUCTURE (11 Sections)

| # | Section | Purpose | Layout | Background |
|---|---------|---------|--------|------------|
| 1 | **Hero** | Create curiosity + establish difference | Full-width, centered text | Real thinking lab image |
| 2 | **Trust Stats** | Build credibility quickly | 4-column grid | Light gray #F9F9F9 |
| 3 | **Core Positioning** | Clarify "We observe, don't teach" | 2-column (text/image) | White |
| 4 | **Comparison Table** | Traditional vs Thinking approach | Side-by-side table | Light sage #F0F4F3 |
| 5 | **How It Works** | Simplify the process | 3-step vertical timeline | White |
| 6 | **Programs** | Show both program options | 2-column cards | Light gray #F9F9F9 |
| 7 | **Insights You'll Gain** | Show concrete value | 3-column feature grid | White |
| 8 | **Testimonials** | Emotional proof | 2×2 card grid | Light sage #F0F4F3 |
| 9 | **Parent Concerns** | Address fears directly | Accordion/expandable | Off-white #FAF9F7 |
| 10 | **Final CTA** | Drive conversion | Centered card | Gradient (white→sage) |
| 11 | **Footer** | Navigation + links | 3-column footer | Dark #2A2A2A |

---

## 🎨 VISUAL IDENTITY

### Color Palette
```
Primary:   Sage Green #4F8F7F    (CTAs, highlights, trust)
Dark:      #1A1A1A               (Headlines, strong contrast)
Text:      #555555               (Body, readable but soft)
Accents:   Light Sage #F0F4F3    (Section backgrounds)
Neutral:   Grays #D5D5D5–#F9F9F9 (Borders, subtle backgrounds)
Dark BG:   #2A2A2A               (Footer, deep sections)
```

### Typography
- **Headings**: Poppins Bold or Inter Bold (48–56px H1, 32–36px H2, 18–20px H3)
- **Body**: Inter or Ubuntu (15–16px, 1.6–1.8 line height)
- **Feel**: Premium, calm, not corporate or childish

### Photography
- Real thinking lab scenes (not product shots, not robots)
- Authentic facilitator-child interactions (observing moments)
- Warm lighting, natural poses, real environments
- Optional parent headshots (genuine, not stock)

### Icons
- Line-drawn, minimalist style
- 48×56px at standard use
- Sage green (#4F8F7F) primary color
- 2–2.5px stroke weight
- Needed: eye, compass, growth chart, lightbulb, etc.

---

## 🏗️ COMPONENT LIBRARY

Built from ground up with reusable components:

### Buttons
- **Primary**: Solid sage green, white text, 200ms hover
- **Secondary**: Outlined, sage text, transparent background

### Cards
- **Program cards**: White, bordered, 32px padding, lift on hover
- **Testimonial cards**: Centered, light shadow, italic quote
- **Stat cards**: 160×160px, centered icon + number + label

### Forms
- **Inputs**: 44px min height, 3px focus ring, 200ms transition
- **Labels**: Associated with inputs for accessibility
- **Hierarchy**: Clear required field markers

### Interactive
- **Accordions**: Expand/collapse smooth (300ms), arrow animation
- **Tables**: Dark header, alternating rows, hover highlighting
- **Navigation**: Sticky header, mobile hamburger menu

---

## 💡 KEY DESIGN DECISIONS

### 1. Why Start with Real Images?
Trust with parents is earned through authenticity. A real thinking lab photo (not cartoons) signals premium + professional.

### 2. Why Compare to Traditional Learning?
Parents need to understand the difference. A simple, clear comparison removes confusion and validates the approach.

### 3. Why Testimonials, Not Feature Lists?
Parents buy outcomes, not features. "Her confidence is coming from inside" is more powerful than "Weekly sessions included."

### 4. Why an Accordion for FAQ?
Addresses specific parent fears (failure, falling behind, shyness) without overwhelming the page. Reduces cognitive load.

### 5. Why Soft Colors?
Sage green + light tones = calm + trust. Bright primary colors would feel like a kids' activity website (wrong positioning).

### 6. Why Multiple CTAs?
Parents need multiple opportunities to engage. Hero CTA for curious visitors, section CTAs for engaged readers, final CTA for ready-to-convert.

---

## 📊 CONTENT GUIDELINES

### Tone
- ✅ Insightful, human, warm
- ✅ Direct, clear, jargon-free
- ❌ Not corporate ("We're excited to announce...")
- ❌ Not childish ("Fun learning adventures!")

### Word Count Targets
- Hero headline: 8–12 words
- Hero subheading: 20–30 words
- Body paragraphs: 40–60 words
- Testimonials: 25–50 words (punchy!)
- CTA buttons: 2–4 words ("Schedule Your Orientation")

### Key Messages (Per Section)
1. **Hero**: Different approach to childhood learning
2. **Stats**: Growing community, proven impact
3. **Positioning**: We observe thinking, not just mark grades
4. **Comparison**: Thinking ≠ traditional learning
5. **Process**: Simple 3-step journey
6. **Programs**: Both options serve different needs
7. **Insights**: Concrete outcomes parents will understand
8. **Stories**: Real parents, real discoveries
9. **Concerns**: All fears addressed respectfully
10. **CTA**: Action is simple and low-pressure

---

## 🎯 RESPONSIVE DESIGN

### Desktop (1200px+)
- Full sections visible at once
- 2–4 column layouts
- Larger spacing (40–64px gutters)
- Hover states on all interactive elements

### Tablet (768–1199px)
- 2-column layouts (programs, testimonials)
- Reduced spacing (24–32px gutters)
- Slightly smaller typography (5–10% reduction)
- Touch-friendly buttons (48×48px)

### Mobile (480px–767px)
- Single-column layout
- Stacked cards, full-width buttons
- Reduced typography (10–20% smaller)
- Tight spacing (12–16px padding)
- Hamburger menu for navigation

### Extra Small (< 480px)
- Full-width, minimal padding
- Large touch targets (48×48px)
- Vertical stacking of all elements
- Simplified navigation

---

## ✅ ACCESSIBILITY CHECKLIST

- [ ] Color contrast: 4.5:1 for text (WCAG AA)
- [ ] Focus states: Visible, keyboard-navigable
- [ ] Touch targets: 48×48px minimum
- [ ] Form labels: Associated with inputs
- [ ] Images: Descriptive alt text
- [ ] Semantic HTML: Proper heading hierarchy
- [ ] ARIA: Used only when needed
- [ ] Animations: Reduced-motion respected

---

## 🚀 SUCCESS METRICS

### Traffic Metrics
- Time on homepage: > 2 minutes (engaged readers)
- Scroll depth: > 70% (reaching CTA)
- Click-through rate (CTA): > 5% in month 1

### Engagement
- Testimonial interactions: Clicks/shares on quotes
- FAQ expansion: > 40% of visitors expand ≥1 accordion
- Form submissions: Track conversion rate

### Qualitative
- Parent feedback: Understanding increased
- Inquiry quality: Better-qualified leads
- NPS: Net Promoter Score from demo visitors

---

## 📁 FILES CREATED

1. **HOMEPAGE_LAYOUT.md** — Detailed section-by-section layouts with component specs
2. **HOMEPAGE_WIREFRAME.md** — Visual wireframes (ASCII and descriptions) + scroll journey
3. **DESIGN_SYSTEM.md** — Complete component library with CSS variables, spacing, typography
4. **QUICK_REFERENCE.md** ← *This document* — One-page overview for stakeholders

---

## 🎨 DESIGN INSPIRATION COMPARISON

| Aspect | STEMpedia (Reference) | FunSmartism (Adapted) |
|--------|---|---|
| **Logo Placement** | Top-left, sticky | Top-left, sticky |
| **Hero** | Product feature | Parent outcome |
| **Stats** | Numbers (schools, countries) | Impact (parents, kids, insights) |
| **Color** | Bright blues, energetic | Muted sage, calm |
| **Testimonials** | School directors | Parents |
| **CTA** | "Book a Demo" | "Schedule Your Orientation" |

---

## 💻 TECHNICAL SETUP RECOMMENDATIONS

### Frontend Framework
- **React/Next.js**: Component-driven, easy to maintain
- **Accessibility**: Built-in support for ARIA, focus management

### CSS Approach
- **Utility-first** (Tailwind): Fast development, consistent spacing
- **OR CSS-in-JS**: Component-scoped styles, dynamic theming

### CMS
- **Contentful or Strapi**: Headless CMS for testimonials, FAQ
- **OR Static files**: For small updates, use markdown

### Form Handling
- **Typeform or Formspree**: For lead capture, integrates with CRM
- **Custom form + z-form backend**: If needing WhatsApp integration

### Analytics
- **Google Analytics 4**: Track scroll depth, CTA clicks
- **Hotjar or Clarity**: Heatmaps, session recordings (understand behavior)
- **Custom events**: CTA clicks, form starts, accordion expansions

### Performance
- **Image optimization**: Compress, WebP format, lazy-loading
- **Bundle size**: Keep under 150KB gzipped
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🎓 DESIGN HANDOFF PROCESS

1. **Designer → Developer**
   - Share all three design documents
   - Export design system variables (colors, spacing, fonts)
   - Provide component Figma frames or Storybook references

2. **Developer Implementation**
   - Build component library first (buttons, cards, forms)
   - Implement sections in order (hero → testimonials)
   - Test accessibility as you build

3. **QA & Refinement**
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile responsiveness (real devices, not just browser)
   - Accessibility audit (WAVE, Axe, manual testing)
   - Performance testing (Lighthouse)

4. **Launch & Monitor**
   - Track analytics from day 1
   - Gather parent feedback
   - A/B test CTA messages + button placement
   - Update content based on real inquiries

---

## 📝 QUICK START CHECKLIST

- [ ] **Week 1**: Set up design system (colors, typography, spacing)
- [ ] **Week 2**: Build component library (buttons, cards, forms)
- [ ] **Week 3**: Create page sections (hero, positioning, comparison)
- [ ] **Week 4**: Add complex sections (testimonials, FAQ, CTA)
- [ ] **Week 5**: Responsive design, mobile optimization
- [ ] **Week 6**: Accessibility audit & fixes
- [ ] **Week 7**: Performance optimization (images, bundle size)
- [ ] **Week 8**: Content population & final QA
- [ ] **Launch**: Monitor analytics, gather feedback

---

## 🤝 Questions? Next Steps

1. **Design questions?** Review HOMEPAGE_LAYOUT.md and DESIGN_SYSTEM.md
2. **Visual reference?** See HOMEPAGE_WIREFRAME.md for ASCII layouts
3. **Copy guidance?** Refer to tone + word count guidelines in this document
4. **Development ready?** Use CSS variables template in DESIGN_SYSTEM.md

---

**Last Updated**: April 8, 2026  
**Design Approach**: STEMpedia-inspired structure + FunSmartism-specific tone  
**Status**: Design complete, ready for development
