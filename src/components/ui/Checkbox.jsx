import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef(({ className, checked, label, ...props }, ref) => {
  return (
    <label className="flex items-start space-x-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            'w-6 h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center',
            checked
              ? 'bg-primary border-primary'
              : 'bg-white border-gray-300 group-hover:border-primary',
            className
          )}
        >
          {checked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </div>
      </div>
      {label && (
        <span className="text-base leading-6 select-none">
          {label}
        </span>
      )}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
