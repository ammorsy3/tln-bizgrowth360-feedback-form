import React from 'react'
import { cn } from '@/lib/utils'

const Label = React.forwardRef(({ className, children, required, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn('text-base font-medium leading-6 text-gray-900', className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
})

Label.displayName = 'Label'

export { Label }
