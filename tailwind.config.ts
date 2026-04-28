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
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#1E2A44', // Indigo Intelligence (Main)
          600: '#1a253c',
          700: '#151e31',
          800: '#111827',
          900: '#0c111c',
        },
        'accent-teal': '#2FB5A3', // Curiosity / Action
        'accent-gold': '#F4C542', // Subtle Energy (Yellow)
        'accent-surface': '#F8F9FB', // Soft Off-White Background
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // Secondary Text
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#1A1A1A', // Dark Text
        },
      },
      fontFamily: {
        serif: ['var(--font-sora)', 'sans-serif'], // Sora is technically sans but we use it for structured headlines
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
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
        huge: '128px',
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        base: '14px',
        lg: '15px',
        xl: '16px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '28px',
        '5xl': '36px',
        '6xl': '48px',
        '7xl': '64px',
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.2',
        normal: '1.5',
        relaxed: '1.6',
      },
      borderRadius: {
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '24px',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
        base: '0 4px 8px rgba(0, 0, 0, 0.08)',
        md: '0 8px 16px rgba(0, 0, 0, 0.12)',
        lg: '0 16px 32px rgba(0, 0, 0, 0.15)',
        'focus-ring': '0 0 0 3px rgba(79, 143, 127, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
