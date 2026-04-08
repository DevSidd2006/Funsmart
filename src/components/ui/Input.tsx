import { cn } from '../../lib/cn'
import { type InputProps } from '../../lib/types'

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
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 rounded-base',
          'border-2 border-neutral-300 bg-white',
          'text-base text-neutral-700 placeholder-neutral-400',
          'transition-all duration-base',
          'focus:outline-none focus:border-primary-400 focus:shadow-focus-ring',
          error && 'border-error focus:shadow-none',
          error && 'focus:border-error focus:shadow-[0_0_0_3px_rgba(217,83,79,0.1)]',
          'disabled:bg-neutral-100 disabled:border-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-error mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-neutral-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
