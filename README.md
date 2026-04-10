# FunSmartism Intelligence Center

A premium thinking lab website for children aged 8–14, built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## 🎯 About FunSmartism

FunSmartism is not a coding class or robotics lab. It's a **thinking lab** where:
- Children explore unfamiliar problems
- Facilitators observe how they think
- Parents gain deep insights into their child's problem-solving approach

**Core Philosophy**: We don't teach. We observe.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Copy project files
git clone <repository-url>
cd funsmartism

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Accordion.tsx
│   └── sections/            # Homepage sections
│       ├── Hero.tsx
│       ├── StatsRow.tsx
│       ├── Positioning.tsx
│       ├── Comparison.tsx
│       ├── HowItWorks.tsx
│       ├── Programs.tsx
│       ├── Insights.tsx
│       ├── Testimonials.tsx
│       ├── ParentConcerns.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── lib/
│   ├── cn.ts               # Utility for class merging
│   ├── constants.ts        # Colors, spacing constants
│   └── types.ts            # TypeScript interfaces
└── data/
    ├── programs.ts         # Program data
    ├── testimonials.ts     # Testimonial data
    └── faqs.ts            # FAQ data
```

## 🎨 Design System

### Colors
- **Primary**: `#4F8F7F` (Sage Green)
- **Dark Text**: `#1A1A1A`
- **Body Text**: `#555555`
- **Backgrounds**: Light grays and off-whites

### Typography
- **Headings**: Poppins Bold or Inter Bold
- **Body**: Inter or Ubuntu
- **Sizes**: 13px–56px scale

### Components
- **Buttons**: Primary (filled) & Secondary (outlined)
- **Cards**: Default, Program, Testimonial, Stat variants
- **Forms**: Input with label, error, helper text support
- **Accordion**: Expandable FAQ items

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Format code
npm run format
```

## 📊 Homepage Sections

1. **Hero** – Engaging headline + CTAs
2. **Stats** – Trust signals (500+ parents, 2000+ kids observed, etc.)
3. **Positioning** – Core value prop explanation
4. **Comparison** – Traditional vs Thinking Lab comparison table
5. **How It Works** – 3-step process timeline
6. **Programs** – 10-Day Workshop & Year-Long Program cards
7. **Insights** – What parents will understand (3 features)
8. **Testimonials** – Real parent stories with carousel
9. **Parent Concerns** – FAQ accordion addressing common fears
10. **Final CTA** – Conversion-focused call-to-action
11. **Footer** – Navigation + social links

## ♿ Accessibility

- WCAG AA contrast ratios (4.5:1 minimum)
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels and roles
- Focus indicators on all interactive elements
- Semantic HTML structure

## 📱 Responsive Design

- **Mobile**: 375px–480px (single column)
- **Tablet**: 481px–768px (2-column layouts)
- **Desktop**: 769px+ (full grid layouts)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel dashboard
# https://vercel.com/new
```

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🧪 Testing Checklist

- [ ] Responsive on mobile (375px, 480px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1200px, 1920px)
- [ ] All links working
- [ ] Forms functional
- [ ] Keyboard navigation working
- [ ] Color contrast passing WCAG AA
- [ ] Lighthouse score > 90

## 📚 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.3
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Client Handover Guide](./CLIENT_HANDOVER_GUIDE.md)

## 🐛 Troubleshooting

### Styles not applying
```bash
rm -rf .next
npm run dev
```

### Build errors
```bash
npm run type-check  # Check TS errors
npm run lint:fix    # Fix linting issues
```

### Port already in use
```bash
# Use alternative port
npm run dev -- -p 3001
```

## 📞 Support

For questions or issues:
1. Check documentation in project root
2. Review component Storybook (if available)
3. Open GitHub issue with details

## 📄 License

Private project for FunSmartism Intelligence Center.

---

**Made with ❤️ for FunSmartism Intelligence Center**
