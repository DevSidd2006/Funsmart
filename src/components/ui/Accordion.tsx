'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'
import { type FAQItem } from '../../lib/types'

interface AccordionProps {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.id} className="group rounded-[1.5rem] bg-white border border-neutral-200 shadow-sm overflow-hidden">
          <summary className="cursor-pointer list-none flex items-center justify-between p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
            <span className="text-lg font-serif font-bold text-primary-500 pr-4">
              {item.question}
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center flex-shrink-0 group-open:bg-primary-50 transition-colors">
              <ChevronDown
                size={18}
                className="text-primary-400 group-open:text-primary-500 group-open:rotate-180 transition-transform duration-300"
              />
            </div>
          </summary>
          <div className="px-6 pb-6 pt-2 text-neutral-600 leading-relaxed font-light border-t border-neutral-100">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
