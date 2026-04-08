import { cn } from '../../lib/cn'
import { type CardProps } from '../../lib/types'

export function Card({ variant = 'default', children, className }: CardProps) {
  const variantStyles = {
    default: cn(
      'bg-white border border-neutral-100 rounded-lg',
      'shadow-sm hover:shadow-base transition-smooth'
    ),
    program: cn(
      'bg-white border border-neutral-100 rounded-lg p-8',
      'shadow-base hover:shadow-md hover:border-primary-200',
      'transition-smooth'
    ),
    testimonial: cn(
      'bg-accent-surface border border-primary-100 rounded-lg p-8',
      'shadow-sm hover:shadow-base transition-smooth'
    ),
    stat: cn(
      'bg-white border border-neutral-100 rounded-lg p-6',
      'flex flex-col items-center justify-center text-center',
      'shadow-sm hover:shadow-base transition-smooth'
    ),
  }

  return <div className={cn(variantStyles[variant], className)}>{children}</div>
}
