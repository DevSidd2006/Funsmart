# FunSmartism — Complete Next.js Project Starter

> Ready-to-use project structure with all configs and boilerplate

---

## 📁 COMPLETE PROJECT STRUCTURE

```
funsmartism/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout wrapper
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # Global Tailwind + custom CSS
│   │   ├── favicon.ico
│   │   ├── thinking-lab/
│   │   │   └── page.tsx                  # (Future: Thinking Lab page)
│   │   ├── for-parents/
│   │   │   └── page.tsx                  # (Future: For Parents page)
│   │   ├── programs/
│   │   │   └── page.tsx                  # (Future: Programs page)
│   │   └── schedule/
│   │       └── page.tsx                  # (Future: Schedule page)
│   │
│   ├── components/
│   │   ├── ui/                           # Reusable UI components
│   │   │   ├── Button.tsx                # Primary & Secondary buttons
│   │   │   ├── Card.tsx                  # Card variants
│   │   │   ├── Input.tsx                 # Form input with label & error
│   │   │   ├── Accordion.tsx             # FAQ accordion
│   │   │   ├── Header.tsx                # (Future: Sticky header/nav)
│   │   │   └── index.ts                  # Export all UI components
│   │   │
│   │   └── sections/                     # Homepage sections
│   │       ├── Hero.tsx
│   │       ├── StatsRow.tsx
│   │       ├── Positioning.tsx
│   │       ├── Comparison.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Programs.tsx
│   │       ├── Insights.tsx
│   │       ├── Testimonials.tsx
│   │       ├── ParentConcerns.tsx
│   │       ├── FinalCTA.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts                  # Export all sections
│   │
│   ├── lib/
│   │   ├── cn.ts                         # Utility: className merger
│   │   ├── constants.ts                  # Colors, spacing, breakpoints
│   │   └── types.ts                      # TypeScript interfaces
│   │
│   └── data/
│       ├── programs.ts                   # Program data
│       ├── testimonials.ts               # Testimonial data
│       └── faqs.ts                       # FAQ data
│
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── positioning-image.jpg
│   │   └── ...
│   └── icons/
│       └── ...
│
├── .env.local                            # Environment variables (not in git)
├── .eslintrc.json                        # ESLint config
├── .gitignore                            # Git ignore rules
├── eslint.config.ts                      # ESLint configuration
├── next.config.js                        # Next.js configuration
├── tailwind.config.ts                    # Tailwind configuration
├── tsconfig.json                         # TypeScript configuration
├── package.json                          # Dependencies & scripts
├── package-lock.json                     # Lock file
└── README.md                             # Project documentation
```

---

## 🔧 STEP-BY-STEP SETUP

### Step 1: Create Project

```bash
# Via create-next-app
npx create-next-app@latest funsmartism \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir

cd funsmartism
```

### Step 2: Install Dependencies

```bash
npm install clsx tailwind-merge lucide-react
```

### Step 3: Create Directory Structure

```bash
# Create src structure
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/lib
mkdir -p src/data

# Create public structure
mkdir -p public/images
mkdir -p public/icons
```

### Step 4: Copy Configuration Files

#### `tailwind.config.ts`
[See NEXTJS_TAILWIND_SETUP.md for full config]

#### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
```

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsxImportSource": "react",
    "jsx": "react-jsx",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Step 5: Copy Core Files

All component files from NEXTJS_TAILWIND_SETUP.md into their respective directories.

---

## 📄 QUICK FILE TEMPLATES

### Create Stub Data Files

#### `src/data/programs.ts`
```typescript
export const programs = [
  {
    id: 'workshop-10day',
    title: '10-Day Workshop',
    price: '₹12,000',
    duration: '/ 10 days',
    description: 'Intensive thinking exploration',
    features: [
      'Quick intro to thinking framework',
      'Summer camp intensive',
      'Try before committing',
      'Live sessions daily',
      'Detailed observation report',
      'Insights call with facilitator',
    ],
    cta: 'Learn More',
  },
  {
    id: 'program-yearlong',
    title: 'Year-Long Program',
    price: '₹8,000',
    duration: '/ month',
    description: 'Ongoing deep growth',
    features: [
      'Deep, ongoing growth',
      'Continuous learning',
      'Long-term insights',
      'Weekly check-ins',
      'Monthly progress reports',
      'Progress tracking over time',
    ],
    cta: 'Learn More',
  },
]
```

#### `src/data/testimonials.ts`
```typescript
export const testimonials = [
  {
    id: '1',
    quote:
      "I realized my son wasn't shy—he just needed real problems. Watching him solve this, I felt proud.",
    author: 'Rahul M',
    location: 'Mumbai',
    child: 'Adarsh',
    childAge: 10,
  },
  {
    id: '2',
    quote:
      "She doesn't give up as quickly now. The confidence is coming from inside.",
    author: 'Anjali P',
    location: 'Bangalore',
    child: 'Sejal',
    childAge: 9,
  },
  {
    id: '3',
    quote:
      'The feedback was so detailed. I finally understand why we clash over homework.',
    author: 'Vikram K',
    location: 'Pune',
    child: 'Diya',
    childAge: 12,
  },
  {
    id: '4',
    quote:
      'He actually wants to work on problems now. That's the real win.',
    author: 'Priya R',
    location: 'Delhi',
    child: 'Vikram',
    childAge: 11,
  },
]
```

#### `src/data/faqs.ts`
```typescript
import { type FAQItem } from '@/lib/types'

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What if my child fails?',
    answer:
      'Failure is part of thinking. We observe how they handle it—not to judge, but to understand. That insight helps you at home.',
  },
  {
    id: '2',
    question: 'Is my child falling behind?',
    answer:
      'This is about thinking patterns, not marks. Many "slow starters" are actually thoughtful problem-solvers.',
  },
  {
    id: '3',
    question: 'Will this affect school marks?',
    answer:
      'Many parents report that as children grow more confident in problem-solving, school performance improves naturally.',
  },
  {
    id: '4',
    question: 'What if my child is shy?',
    answer:
      'Shyness is often misread as inability. Our facilitators create safe spaces where reserved children often shine.',
  },
]
```

---

## 📦 PACKAGE.JSON SETUP

```json
{
  "name": "funsmartism",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "^0.298.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.1.0"
  }
}
```

---

## 🚀 RUNNING THE PROJECT

### Development

```bash
# Start dev server (auto-reload)
npm run dev

# Open browser to http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run type checking
npm run type-check

# Fix eslint issues
npm run lint:fix

# Format code
npm run format
```

---

## 🎯 DEVELOPMENT WORKFLOW

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup complete
- [ ] Tailwind config tested
- [ ] UI components built (Button, Card, Input, Accordion)
- [ ] Color system working

### Phase 2: Sections (Week 3-4)
- [ ] Build Hero section
- [ ] Build Stats section
- [ ] Build Positioning section
- [ ] Build Comparison table
- [ ] Build How It Works timeline
- [ ] Build Programs cards

### Phase 3: Complex Sections (Week 5-6)
- [ ] Build Testimonials carousel
- [ ] Build FAQ accordion
- [ ] Build Final CTA
- [ ] Build Footer

### Phase 4: Polish (Week 7-8)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] SEO setup (meta tags, schema)
- [ ] Form integration
- [ ] Analytics setup

### Phase 5: Deployment (Week 9)
- [ ] Environment setup
- [ ] Deploy to Vercel
- [ ] Monitor performance
- [ ] Setup error tracking

---

## 🔐 ENVIRONMENT VARIABLES

Create `.env.local`:

```bash
# API Endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Form Services
NEXT_PUBLIC_FORM_ID=your-form-id

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other
NEXT_PUBLIC_SITE_URL=https://funsmartism.com
```

**Note**: Variables starting with `NEXT_PUBLIC_` are exposed to browser. Never expose secrets here.

---

## 📊 PERFORMANCE TARGETS

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Load Time
- First page load: < 3s
- Interactive: < 4s
- Bundle size: < 150KB gzipped

---

## 🧪 TESTING CHECKLIST

### Responsive Design
- [ ] Mobile (375px) - iPhone SE
- [ ] Mobile (390px) - iPhone 12
- [ ] Tablet (768px) - iPad
- [ ] Desktop (1200px) - Laptop
- [ ] Desktop (1920px) - Large monitor

### Cross-Browser
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Accessibility
- [ ] Keyboard navigation (Tab, Enter, Space, Escape)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators
- [ ] Form labels & errors

### Performance
- [ ] Lighthouse audit
- [ ] Core Web Vitals
- [ ] Network throttling (Slow 3G, 4G)
- [ ] Mobile device testing

---

## 🚀 DEPLOYMENT (VERCEL)

### Connect Repository

```bash
# Push to GitHub
git remote add origin https://github.com/yourusername/funsmartism.git
git push -u origin main
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS setup instructions
4. Wait for verification (typically < 5 minutes)

---

## 📚 USEFUL COMMANDS

```bash
# Start fresh
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next

# Test build locally
npm run build
npm start

# Check for unused dependencies
npm audit

# Update dependencies
npm update

# View file size
npm run build -- --analyze
```

---

## 🐛 TROUBLESHOOTING

### Styles not applying
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

### Build failing
```bash
# Check TypeScript errors
npm run type-check

# Fix ESLint issues
npm run lint:fix
```

### Slow build
```bash
# Check what's slow
npm run build -- --debug

# Consider code splitting
```

---

## 📞 SUPPORT RESOURCES

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/icons
- **Vercel**: https://vercel.com/docs

---

## ✅ LAUNCH CHECKLIST

- [ ] All sections built and responsive
- [ ] Accessibility audit passed (score > 95)
- [ ] Performance optimized (Lighthouse > 90)
- [ ] SEO meta tags added
- [ ] Analytics tracking configured
- [ ] Form integration completed
- [ ] Error handling implemented
- [ ] 404 page created
- [ ] Robots.txt configured
- [ ] Sitemap generated
- [ ] Custom domain configured
- [ ] HTTPS enabled
- [ ] CDN enabled
- [ ] Monitoring setup
- [ ] Backup configured
- [ ] Launch announcement ready

---

**Ready to build?** Start with:

```bash
npm run dev
```

Then open http://localhost:3000/

