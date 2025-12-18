import React from 'react'
import { cn } from '@/lib/utils'

const Slider = React.forwardRef(({ className, value, onChange, min = 1, max = 10, ...props }, ref) => {
  const getEmoji = (val) => {
    if (val <= 3) return '😌'
    if (val <= 6) return '😐'
    if (val <= 8) return '😟'
    return '😰'
  }

  const getLabel = (val) => {
    if (val <= 3) return 'Could wait'
    if (val <= 6) return 'Somewhat urgent'
    if (val <= 8) return 'Very urgent'
    return 'Make or break for my business'
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <span className="text-3xl">{getEmoji(value)}</span>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary">{value}</div>
          <div className="text-sm text-muted-foreground">{getLabel(value)}</div>
        </div>
      </div>
      <div className="relative">
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
          }}
          {...props}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>1 - Could wait</span>
        <span>10 - Critical</span>
      </div>
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
})

Slider.displayName = 'Slider'

export { Slider }
