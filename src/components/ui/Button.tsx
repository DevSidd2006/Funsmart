import { cn } from '../../lib/cn'
import { type ButtonProps } from '../../lib/types'

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'font-semibold rounded-lg transition-all duration-300 ease-in-out',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400'
  )

  const variantStyles = {
    primary: cn(
      'bg-accent-teal text-white hover:bg-[#28A392]',
      'active:bg-[#228B7D] active:scale-[0.98]',
      'shadow-sm hover:shadow-md'
    ),
    secondary: cn(
      'border border-primary-500 text-primary-500',
      'hover:bg-primary-50/50 hover:border-primary-600',
      'active:scale-[0.98]'
    ),
    ghost: cn(
      'text-neutral-500 hover:bg-neutral-100/50 hover:text-primary-500',
      'active:scale-[0.98]'
    ),
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg w-full md:w-auto',
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
