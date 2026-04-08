# FunSmartism — Next.js + Tailwind CSS Implementation Guide

> Complete setup, configuration, and component architecture to build the homepage

---

## 📋 PROJECT SETUP

### 1. Create Next.js Project

```bash
npx create-next-app@latest funsmartism --typescript --tailwind --eslint
cd funsmartism
```

**Recommended options:**
- TypeScript: **Yes**
- ESLint: **Yes**
- `src/` directory: **Yes** (cleaner structure)
- App Router: **Yes** (modern Next.js)
- Tailwind CSS: **Yes**

### 2. Install Additional Dependencies

```bash
npm install clsx tailwind-merge lucide-react
# clsx: Conditional className utility
# tailwind-merge: Merge Tailwind classes safely
# lucide-react: Icon library (line-drawn icons we need)
```

### 3. Project Structure

```
funsmartism/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (header, footer wrapper)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── ...
│   │   └── sections/           # Homepage sections
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
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── cn.ts              # Class name utilities
│   │   ├── constants.ts       # Config, colors, spacing
│   │   └── types.ts           # TypeScript types
│   └── data/
│       ├── programs.ts        # Program data
│       ├── testimonials.ts    # Testimonial data
│       └── faqs.ts            # FAQ data
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json
├── package.json
└── next.config.js
```

---

## 🎨 TAILWIND CONFIGURATION

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f3',
          100: '#d4e3e0',
          200: '#b8d1cc',
          300: '#7fa99c',
          400: '#4F8F7F',      // Main sage green
          500: '#468074',
          600: '#3D6B65',      // Hover state
          700: '#2F5551',      // Active state
          800: '#1a3a35',
          900: '#0f2622',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e5e5e5',
          300: '#d5d5d5',
          400: '#aaaaaa',
          500: '#888888',      // Light text
          600: '#666666',      // Medium text
          700: '#555555',      // Body text
          800: '#333333',
          900: '#1a1a1a',      // Dark text
        },
        sage: {
          light: '#f0f4f3',
          DEFAULT: '#4F8F7F',
          dark: '#3D6B65',
        },
        status: {
          error: '#D9534F',
          success: '#5CB85C',
          warning: '#F0AD4E',
          info: '#5BC0DE',
        },
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        base: '16px',
        md: '20px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
        xxxl: '64px',
      },
      fontSize: {
        xs: '13px',
        sm: '14px',
        base: '15px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '32px',
        '6xl': '36px',
        '7xl': '48px',
        '8xl': '56px',
      },
      lineHeight: {
        tight: '1.2',
        snug: '1.3',
        normal: '1.4',
        relaxed: '1.6',
        loose: '1.8',
      },
      borderRadius: {
        sm: '3px',
        base: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.06)',
        base: '0 2px 4px rgba(0, 0, 0, 0.08)',
        md: '0 4px 8px rgba(0, 0, 0, 0.10)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
        xl: '0 16px 32px rgba(0, 0, 0, 0.15)',
        'focus-ring': '0 0 0 3px rgba(79, 143, 127, 0.2)',
      },
      transitionDuration: {
        'quick': '150ms',
        'base': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🛠️ UTILITY FUNCTIONS

### `src/lib/cn.ts`

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely, removing conflicts
 * Usage: cn('px-2 py-1', condition && 'px-4') => 'py-1 px-4'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `src/lib/constants.ts`

```typescript
// Color constants
export const COLORS = {
  primary: '#4F8F7F',
  primaryHover: '#3D6B65',
  primaryActive: '#2F5551',
  darkText: '#1A1A1A',
  bodyText: '#555555',
  lightText: '#888888',
  border: '#D5D5D5',
  bgLight: '#F9F9F9',
  bgSage: '#F0F4F3',
  bgDark: '#2A2A2A',
  error: '#D9534F',
  success: '#5CB85C',
} as const

// Spacing constants
export const SPACING = {
  xs: '8px',
  sm: '12px',
  base: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '64px',
} as const

// Breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1200px',
} as const
```

### `src/lib/types.ts`

```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  variant?: 'default' | 'program' | 'testimonial' | 'stat'
  children: React.ReactNode
  className?: string
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export interface Program {
  id: string
  title: string
  duration: string
  price: string
  description: string
  features: string[]
  cta: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  child?: string
  childAge?: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
```

---

## 🧩 REUSABLE UI COMPONENTS

### `src/components/ui/Button.tsx`

```typescript
import { cn } from '@/lib/cn'
import { type ButtonProps } from '@/lib/types'

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'font-semibold rounded-base transition-all duration-base ease-smooth',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:shadow-focus-ring'
  )

  const variantStyles = {
    primary: cn(
      'bg-primary-400 text-white hover:bg-primary-600',
      'active:bg-primary-700 active:scale-98',
      'shadow-base hover:shadow-lg'
    ),
    secondary: cn(
      'border-2 border-primary-400 text-primary-400',
      'hover:bg-primary-50 hover:border-primary-600 hover:text-primary-600',
      'active:scale-98'
    ),
  }

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-4 text-base min-w-[140px] min-h-[48px]',
    lg: 'px-12 py-5 text-lg w-full',
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
```

### `src/components/ui/Card.tsx`

```typescript
import { cn } from '@/lib/cn'
import { type CardProps } from '@/lib/types'

export function Card({ variant = 'default', children, className }: CardProps) {
  const variantStyles = {
    default: cn(
      'bg-white border border-neutral-200 rounded-md',
      'shadow-base hover:shadow-md',
      'transition-all duration-base'
    ),
    program: cn(
      'bg-white border border-neutral-200 rounded-md p-8',
      'shadow-base hover:shadow-lg hover:border-primary-400',
      'hover:-translate-y-1 transition-all duration-base'
    ),
    testimonial: cn(
      'bg-white border border-neutral-200 rounded-base p-7',
      'shadow-sm hover:shadow-md',
      'transition-all duration-base'
    ),
    stat: cn(
      'bg-white border border-neutral-200 rounded-md',
      'w-40 h-40 flex flex-col items-center justify-center',
      'shadow-sm hover:shadow-md hover:border-primary-400',
      'hover:scale-102 transition-all duration-base'
    ),
  }

  return <div className={cn(variantStyles[variant], className)}>{children}</div>
}
```

### `src/components/ui/Input.tsx`

```typescript
import { cn } from '@/lib/cn'
import { type InputProps } from '@/lib/types'

export function Input({
  label,
  error,
  helperText,
  className,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          {label}
          {props.required && <span className="text-status-error ml-1">*</span>}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 rounded-base',
          'border-2 border-neutral-300 bg-white',
          'text-base text-neutral-700 placeholder-neutral-400',
          'transition-all duration-base',
          'focus:outline-none focus:border-primary-400 focus:shadow-focus-ring',
          error && 'border-status-error focus:shadow-none',
          error && 'focus:border-status-error focus:shadow-[0_0_0_3px_rgba(217,83,79,0.1)]',
          'disabled:bg-neutral-100 disabled:border-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-status-error mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-neutral-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
```

### `src/components/ui/Accordion.tsx`

```typescript
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { type FAQItem } from '@/lib/types'

interface AccordionProps {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setOpenId(openId === item.id ? null : item.id)}
          className={cn(
            'w-full px-5 py-4 rounded-base border border-neutral-200',
            'bg-neutral-50 hover:bg-neutral-100 transition-colors duration-base',
            'flex items-center justify-between text-left',
            'focus:outline-none focus:shadow-focus-ring'
          )}
        >
          <span className="text-base font-semibold text-neutral-900">
            {item.question}
          </span>
          <ChevronDown
            size={20}
            className={cn(
              'text-primary-400 transition-transform duration-300 flex-shrink-0',
              openId === item.id && 'rotate-180'
            )}
          />
        </button>
      ))}

      {openId && (
        <div className="px-5 py-5 rounded-base bg-white border border-neutral-200 border-t-2 border-t-neutral-200">
          <p className="text-base text-neutral-700 leading-relaxed">
            {items.find((item) => item.id === openId)?.answer}
          </p>
        </div>
      )}
    </div>
  )
}
```

---

## 📄 HOMEPAGE SECTIONS

### `src/components/sections/Hero.tsx`

```typescript
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-xxxl font-bold text-neutral-900 mb-6 leading-tight">
          Your child thinks differently when no one is watching
        </h1>

        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
          A thinking lab for observing how children approach problems, handle
          difficulty, and discover themselves. For parents.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="md">Schedule a Visit</Button>
          <Button variant="secondary" size="md">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/StatsRow.tsx`

```typescript
import { Card } from '@/components/ui/Card'
import { Eye, Users, TrendingUp, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Users, number: '500+', label: 'Parents Impacted' },
  { icon: Users, number: '2000+', label: 'Kids Observed' },
  { icon: TrendingUp, number: '15+', label: 'Years Growth' },
  { icon: CheckCircle, number: '98%', label: 'Report Insight' },
]

export function StatsRow() {
  return (
    <section className="w-full bg-neutral-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} variant="stat">
                <Icon size={48} className="text-primary-400 mb-3" />
                <p className="text-4xl font-bold text-neutral-900">
                  {stat.number}
                </p>
                <p className="text-sm text-neutral-600 mt-2 text-center max-w-xs">
                  {stat.label}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/Positioning.tsx`

```typescript
export function Positioning() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              More than a class. A thinking laboratory.
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Schools measure what children know. We measure how they think. The
              difference changes everything.
            </p>

            <ul className="space-y-4">
              {[
                'Observe, don't rank',
                'Real problems, no scripts',
                'Insights parents need',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span className="text-base text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="rounded-md overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Child problem-solving in thinking lab"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/Comparison.tsx`

```typescript
export function Comparison() {
  const data = [
    {
      category: 'Focus',
      traditional: 'Marks',
      thinking: 'Process & Habits',
    },
    {
      category: 'Goals',
      traditional: 'What they know',
      thinking: 'How they approach problems',
    },
    {
      category: 'Output',
      traditional: 'Grades',
      thinking: 'Insights into thinking & confidence',
    },
    {
      category: 'Success',
      traditional: 'Right answer',
      thinking: 'Discovery of problem-solving patterns',
    },
  ]

  return (
    <section className="w-full bg-sage-light py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-12 text-center leading-tight">
          What makes thinking different from traditional learning
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-900">
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Traditional Classes
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Thinking Lab
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={row.category}
                  className={
                    idx % 2 === 0
                      ? 'bg-white'
                      : 'bg-sage-light border-t border-neutral-200'
                  }
                >
                  <td className="px-6 py-5 text-base text-neutral-700">
                    <strong>{row.category}:</strong> {row.traditional}
                  </td>
                  <td className="px-6 py-5 text-base text-neutral-700">
                    <strong>{row.category}:</strong> {row.thinking}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/HowItWorks.tsx`

```typescript
import { Eye, Beaker, Lightbulb } from 'lucide-react'

const steps = [
  {
    icon: Eye,
    title: 'Step 1: Orientation Session',
    description:
      'You observe a live thinking session. See how your child approaches a problem. No pressure, no judgment.',
  },
  {
    icon: Beaker,
    title: 'Step 2: Workshop or Program',
    description:
      'Your child explores new challenges. Facilitators take detailed notes on how they think.',
  },
  {
    icon: Lightbulb,
    title: 'Step 3: Insights Session',
    description:
      'Receive a detailed observation report and meet with the facilitator to understand your child's thinking.',
  },
]

export function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          How FunSmartism Works
        </h2>

        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.title}>
                {/* Timeline Connector */}
                {idx > 0 && (
                  <div className="flex justify-center mb-8">
                    <div className="w-1 h-10 border-l-2 border-dashed border-neutral-400" />
                  </div>
                )}

                {/* Step Card */}
                <div className="bg-white border border-neutral-200 rounded-base p-8 hover:shadow-md transition-shadow">
                  <div className="flex gap-6 items-start">
                    <Icon
                      size={48}
                      className="text-primary-400 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base text-neutral-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/Programs.tsx`

```typescript
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const programs = [
  {
    title: '10-Day Workshop',
    price: '₹12,000',
    duration: '/ 10 days',
    features: [
      'Quick intro to thinking framework',
      'Summer camp intensive',
      'Try before committing',
      'Live sessions daily',
      'Detailed observation report',
      'Insights call with facilitator',
    ],
  },
  {
    title: 'Year-Long Program',
    price: '₹8,000',
    duration: '/ month',
    features: [
      'Deep, ongoing growth',
      'Continuous learning',
      'Long-term insights',
      'Weekly check-ins',
      'Monthly progress reports',
      'Progress tracking over time',
    ],
  },
]

export function Programs() {
  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          Choose Your Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.title} variant="program">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {program.title}
              </h3>
              <p className="text-sm font-semibold text-neutral-600 mb-8">
                Perfect for {program.title === '10-Day Workshop' ? 'quick intros' : 'deep growth'}
              </p>

              <ul className="space-y-4 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start">
                    <Check size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-200 pt-6 mt-6">
                <p className="text-2xl font-bold text-neutral-900 mb-4">
                  {program.price}
                  <span className="text-sm text-neutral-600">{program.duration}</span>
                </p>
                <Button size="lg">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/Insights.tsx`

```typescript
import { Eye, TrendingUp, Sparkles } from 'lucide-react'

const insights = [
  {
    icon: Eye,
    title: 'Approach',
    description:
      'How does your child tackle unfamiliar problems? Do they ask questions first? Dive in? Plan?',
  },
  {
    icon: TrendingUp,
    title: 'Resilience',
    description:
      'What happens when they encounter difficulty? Do they retry, adapt, or give up? How long do they persist?',
  },
  {
    icon: Sparkles,
    title: 'Interests',
    description:
      'What does your child actually enjoy? Which problems engage her the most?',
  },
]

export function Insights() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          You'll Understand
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div
                key={insight.title}
                className="text-center p-8 rounded-md hover:shadow-md transition-shadow"
              >
                <Icon size={56} className="text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/Testimonials.tsx`

```typescript
'use client'

import { Card } from '@/components/ui/Card'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      "I realized my son wasn't shy—he just needed real problems. Watching him solve this, I felt proud.",
    author: 'Rahul M',
    location: 'Mumbai',
    child: 'Adarsh',
    age: 10,
  },
  {
    id: 2,
    quote:
      "She doesn't give up as quickly now. The confidence is coming from inside.",
    author: 'Anjali P',
    location: 'Bangalore',
    child: 'Sejal',
    age: 9,
  },
  {
    id: 3,
    quote:
      'The feedback was so detailed. I finally understand why we clash over homework.',
    author: 'Vikram K',
    location: 'Pune',
    child: 'Diya',
    age: 12,
  },
  {
    id: 4,
    quote:
      'He actually wants to work on problems now. That's the real win.',
    author: 'Priya R',
    location: 'Delhi',
    child: 'Vikram',
    age: 11,
  },
]

export function Testimonials() {
  const [startIdx, setStartIdx] = useState(0)
  const itemsPerRow = 2
  const totalPages = Math.ceil(testimonials.length / (itemsPerRow * 2))

  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? testimonials.length - itemsPerRow * 2 : prev - itemsPerRow * 2
    )
  }

  const handleNext = () => {
    setStartIdx((prev) =>
      prev + itemsPerRow * 2 >= testimonials.length ? 0 : prev + itemsPerRow * 2
    )
  }

  const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + itemsPerRow * 2
  )

  return (
    <section className="w-full bg-sage-light py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          What Parents Discover
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="testimonial">
              <p className="text-base italic text-neutral-900 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-neutral-200 pt-4">
                <p className="font-semibold text-neutral-900">
                  — {testimonial.author}, {testimonial.location}
                </p>
                <p className="text-sm text-neutral-600">
                  Parent of {testimonial.child} ({testimonial.age})
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-base border border-neutral-300 hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIdx(idx * itemsPerRow * 2)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(startIdx / (itemsPerRow * 2)) === idx
                    ? 'bg-primary-400'
                    : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-base border border-neutral-300 hover:bg-neutral-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
```

### `src/components/sections/ParentConcerns.tsx`

```typescript
'use client'

import { Accordion } from '@/components/ui/Accordion'
import { type FAQItem } from '@/lib/types'

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What if my child fails?',
    answer:
      'Failure is part of thinking. We observe how they handle it—not to judge, but to understand. That insight helps you at home and guides how you respond when they face challenges.',
  },
  {
    id: '2',
    question: 'Is my child falling behind?',
    answer:
      'This is about thinking patterns, not marks. We help you understand your child's approach to learning, which often reveals they're not behind—just different. Many "slow starters" are actually thoughtful problem-solvers.',
  },
  {
    id: '3',
    question: 'Will this affect school marks?',
    answer:
      'Many parents report that as children grow more confident in problem-solving, school performance improves naturally. But our focus is on thinking habits, not test scores. Better thinking habits lead to better everything.',
  },
  {
    id: '4',
    question: 'What if my child is shy?',
    answer:
      'Shyness is often misread as inability. Our facilitators create safe spaces where reserved children often surprise their parents. Many introverted kids shine when they're problem-solving rather than performing.',
  },
]

export function ParentConcerns() {
  return (
    <section className="w-full bg-yellow-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-neutral-900 mb-12 text-center leading-tight">
          Common Questions
        </h2>

        <Accordion items={faqs} />
      </div>
    </section>
  )
}
```

### `src/components/sections/FinalCTA.tsx`

```typescript
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-white to-sage-light">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
          Experience the difference
        </h2>

        <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
          Join us for a complimentary orientation session. Observe a real
          thinking lab, no strings attached.
        </p>

        <Button size="lg" className="mb-6">
          Schedule Your Orientation
        </Button>

        <p className="text-sm text-neutral-600">
          Pick a time that works. We'll send you details via WhatsApp.
        </p>
      </div>
    </section>
  )
}
```

### `src/components/sections/Footer.tsx`

```typescript
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Explore */}
          <div>
            <h3 className="text-base font-semibold mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/thinking-lab"
                  className="hover:text-primary-400 transition-colors"
                >
                  Thinking Lab Page
                </a>
              </li>
              <li>
                <a
                  href="/for-parents"
                  className="hover:text-primary-400 transition-colors"
                >
                  For Parents
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="hover:text-primary-400 transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="hover:text-primary-400 transition-colors"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/impact" className="hover:text-primary-400 transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-primary-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="hover:text-primary-400 transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Parents */}
          <div>
            <h3 className="text-base font-semibold mb-6">Parents</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/for-parents"
                  className="hover:text-primary-400 transition-colors"
                >
                  For Parents
                </a>
              </li>
              <li>
                <a
                  href="/stories"
                  className="hover:text-primary-400 transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-neutral-400 mb-4 md:mb-0">
              © 2024 FunSmartism Intelligence Center. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="#privacy"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Terms
              </a>
              <div className="flex gap-4">
                <a
                  href="#instagram"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#linkedin"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## 📑 MAIN LAYOUT & HOMEPAGE

### `src/app/layout.tsx`

```typescript
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FunSmartism Intelligence Center - Thinking Lab for Kids',
  description:
    'A premium thinking lab where children explore unfamiliar problems and parents understand how they think.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
```

### `src/app/page.tsx`

```typescript
import { Hero } from '@/components/sections/Hero'
import { StatsRow } from '@/components/sections/StatsRow'
import { Positioning } from '@/components/sections/Positioning'
import { Comparison } from '@/components/sections/Comparison'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Programs } from '@/components/sections/Programs'
import { Insights } from '@/components/sections/Insights'
import { Testimonials } from '@/components/sections/Testimonials'
import { ParentConcerns } from '@/components/sections/ParentConcerns'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <StatsRow />
      <Positioning />
      <Comparison />
      <HowItWorks />
      <Programs />
      <Insights />
      <Testimonials />
      <ParentConcerns />
      <FinalCTA />
      <Footer />
    </main>
  )
}
```

### `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom utilities */
@layer components {
  .container-fluid {
    @apply max-w-6xl mx-auto px-4;
  }

  .section-spacing {
    @apply py-16 md:py-24;
  }

  .text-hero {
    @apply text-5xl md:text-7xl font-bold leading-tight;
  }

  .text-section-heading {
    @apply text-4xl md:text-5xl font-bold leading-tight;
  }

  .focus-ring {
    @apply focus:outline-none focus:shadow-focus-ring;
  }

  .transition-smooth {
    @apply transition-all duration-base ease-smooth;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Remove default button styles */
button {
  font-family: inherit;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #4F8F7F;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3D6B65;
}
```

---

## 🚀 DEPLOYMENT & OPTIMIZATION

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
```

### `package.json` Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 📱 DEVELOPMENT WORKFLOW

### 1. **Local Development**

```bash
npm run dev
# Open http://localhost:3000
```

### 2. **Build & Preview**

```bash
npm run build
npm start
```

### 3. **Type Checking**

```bash
npm run type-check
```

---

## ✅ IMPLEMENTATION CHECKLIST

- [ ] Set up Next.js project with Tailwind CSS
- [ ] Configure `tailwind.config.ts` with design tokens
- [ ] Create utility functions (`cn.ts`, `constants.ts`)
- [ ] Build reusable UI components (Button, Card, Input, Accordion)
- [ ] Create
 all section components
- [ ] Set up metadata for SEO
- [ ] Optimize images with Next.js Image component
- [ ] Add form handling (Typeform or custom)
- [ ] Implement analytics (Google Analytics 4)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Accessibility audit (WAVE, Axe)
- [ ] Performance optimization (Lighthouse)
- [ ] Deploy to Vercel or similar

---

## 🎯 QUICK START COMMANDS

```bash
# Create project
npx create-next-app@latest funsmartism --typescript --tailwind --eslint

# Install dependencies
npm install clsx tailwind-merge lucide-react

# Start development
npm run dev

# Build for production
npm run build
npm start
```

---

## 📚 RESOURCES

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
- [Next.js Deployment](https://vercel.com)

