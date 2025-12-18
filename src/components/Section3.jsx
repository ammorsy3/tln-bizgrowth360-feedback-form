import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { section3Schema } from '@/lib/formSchemas'
import { Checkbox } from './ui/Checkbox'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Label } from './ui/Label'
import { Button } from './ui/Button'
import { ChevronRight } from 'lucide-react'

const Section3 = ({ initialData, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(section3Schema),
    defaultValues: initialData || {
      biggestImpact: [],
    },
  })

  const biggestImpact = watch('biggestImpact') || []
  const timeToResults = watch('timeToResults')

  const impactOptions = [
    { value: 'growth_strategy', label: '📋 3-Year Growth Strategy & Roadmap' },
    { value: 'time_mastery', label: '⏰ Time Mastery & CEO Calendar' },
    { value: 'profit_optimization', label: '💰 Profit Optimization Strategy' },
    { value: 'business_systems', label: '🏛️ Business Systems & Processes' },
    { value: 'positioning', label: '🎯 Ideal Client Positioning & Messaging' },
    { value: 'pricing', label: '💵 Pricing & Offer Strategy' },
    { value: 'leadership', label: '👥 Leadership Development & Team Building' },
    { value: 'kpi_tracking', label: '📊 KPI Tracking & Accountability' },
    { value: 'mindset', label: '🧠 Mindset & CEO Identity Shift' },
    { value: 'sales_process', label: '🔄 Sales Process & Client Journey Mapping' },
    { value: 'high_ticket', label: '🎁 High-Ticket Offer Creation' },
    { value: 'strategic_planning', label: '🗓️ Strategic Planning Sessions (Quarterly Reviews)' },
    { value: 'other', label: 'Other' },
  ]

  const timelineOptions = [
    { 
      value: '30_days', 
      label: 'Within 30 days ⚡',
      description: '(quick wins)'
    },
    { 
      value: '1_3_months', 
      label: '1-3 months 📅',
      description: '(momentum building)'
    },
    { 
      value: '3_6_months', 
      label: '3-6 months 📊',
      description: '(significant traction)'
    },
    { 
      value: '6_12_months', 
      label: '6-12 months ⏳',
      description: '(transformation complete)'
    },
  ]

  const handleCheckboxChange = (field, value) => {
    const currentValues = watch(field) || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    setValue(field, newValues)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 animate-slide-in">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Section 3: What Made It Work
          </h2>
          <p className="text-gray-600">The strategies and frameworks that delivered results</p>
        </div>

        <form onSubmit={handleSubmit(onNext)} className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <Label required>
              What specific coaching, strategy, or framework from TLN had the biggest impact?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {impactOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={biggestImpact.includes(option.value)}
                  onChange={() => handleCheckboxChange('biggestImpact', option.value)}
                />
              ))}
            </div>
            {biggestImpact.includes('other') && (
              <Input
                {...register('biggestImpactOther')}
                placeholder="Please specify..."
                error={errors.biggestImpactOther}
              />
            )}
            {errors.biggestImpact && (
              <p className="text-sm text-red-500">{errors.biggestImpact.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <Label required>
              How quickly did you see meaningful results?
            </Label>
            <div className="grid grid-cols-1 gap-4">
              {timelineOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    timeToResults === option.value
                      ? 'border-primary bg-blue-50'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div>
                    <div className="text-lg font-medium">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                  <input
                    type="radio"
                    value={option.value}
                    {...register('timeToResults')}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    timeToResults === option.value
                      ? 'border-primary bg-primary'
                      : 'border-gray-300'
                  }`}>
                    {timeToResults === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.timeToResults && (
              <p className="text-sm text-red-500">{errors.timeToResults.message}</p>
            )}
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <Label required>
              If you were bragging to a fellow business owner about TLN's impact, what would you say?
            </Label>
            <p className="text-sm text-gray-500">
              e.g., They helped me double revenue to $1M while cutting my hours in half by finally building real systems
            </p>
            <Textarea
              {...register('braggingRights')}
              placeholder="e.g., They helped me double revenue to $1M while cutting my hours in half by finally building real systems"
              error={errors.braggingRights}
              rows={3}
            />
            {errors.braggingRights && (
              <p className="text-sm text-red-500">{errors.braggingRights.message}</p>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
            >
              Back
            </Button>
            <Button type="submit">
              Next Section
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Section3
