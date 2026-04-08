export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
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
  location: string
  child?: string
  childAge?: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
