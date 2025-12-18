import React from 'react'
import { cn } from '@/lib/utils'

const RadioGroup = ({ options, value, onChange, name, className }) => {
  return (
    <div className={cn('space-y-3', className)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-start space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center pt-0.5">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div
              className={cn(
                'w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center',
                value === option.value
                  ? 'bg-primary border-primary'
                  : 'bg-white border-gray-300 group-hover:border-primary'
              )}
            >
              {value === option.value && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
          </div>
          <div className="flex-1">
            <span className="text-base leading-6 block">{option.label}</span>
            {option.description && (
              <span className="text-sm text-muted-foreground">
                {option.description}
              </span>
            )}
          </div>
        </label>
      ))}
    </div>
  )
}

export { RadioGroup }
