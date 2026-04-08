'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'
import { type FAQItem } from '../../lib/types'

interface AccordionProps {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id}>
          <button
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

          {openId === item.id && (
            <div className="px-5 py-5 rounded-base bg-white border border-neutral-200 border-t-2 border-t-neutral-200 mt-0">
              <p className="text-base text-neutral-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
