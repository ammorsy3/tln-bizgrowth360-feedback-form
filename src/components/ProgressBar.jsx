import React from 'react'
import { cn } from '@/lib/utils'

const ProgressBar = ({ currentSection, totalSections }) => {
  const percentage = Math.round((currentSection / totalSections) * 100)
  
  const getMessage = () => {
    if (percentage === 0) return "Let's get started! 🚀"
    if (percentage <= 25) return "Great start! Keep going 👏"
    if (percentage <= 50) return "You're crushing it! 🎉"
    if (percentage <= 75) return "Almost there! 💪"
    if (percentage < 100) return "So close! Finish strong! 🌟"
    return "Complete! 🎆"
  }

  const getTimeRemaining = () => {
    const totalMinutes = 7
    const remainingMinutes = Math.ceil(totalMinutes * (1 - currentSection / totalSections))
    if (remainingMinutes === 0) return "You're done!"
    return `~${remainingMinutes} min left`
  }

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-4 shadow-sm">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">{getMessage()}</span>
          <span className="text-sm text-gray-600">{getTimeRemaining()}</span>
        </div>
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={cn(
              'absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out',
              percentage < 100 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gradient-to-r from-green-500 to-emerald-600'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-600">
            Section {currentSection} of {totalSections}
          </span>
          <span className="text-xs font-bold text-primary">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
