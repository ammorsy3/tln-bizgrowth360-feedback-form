import React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-lg border-2 bg-white px-4 py-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        error ? 'border-red-500' : 'border-gray-300',
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
