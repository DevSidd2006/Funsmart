interface ImagePlaceholderProps {
  label?: string
  className?: string
}

export function ImagePlaceholder({
  label = 'IMAGE',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex min-h-72 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white/70 text-center ${className}`}
      aria-label={label}
    >
      <div>
        <p className="text-mono text-neutral-500">{label}</p>
        <p className="mt-2 text-sm text-neutral-400">Placeholder for client imagery</p>
      </div>
    </div>
  )
}
