import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { section2Schema } from '@/lib/formSchemas'
import { Checkbox } from './ui/Checkbox'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { RadioGroup } from './ui/RadioGroup'
import { Label } from './ui/Label'
import { Button } from './ui/Button'
import { ChevronRight } from 'lucide-react'

const Section2 = ({ initialData, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(section2Schema),
    defaultValues: initialData || {
      primaryGoal: [],
      otherTransformation: [],
    },
  })

  const primaryGoal = watch('primaryGoal') || []
  const otherTransformation = watch('otherTransformation') || []
  const mostImpressiveResult = watch('mostImpressiveResult')

  const goalOptions = [
    { value: 'double_revenue', label: '💰 Double revenue within 12 months' },
    { value: 'break_threshold', label: '📈 Break through $50K or $100K/month' },
    { value: '7_figures', label: '🏆 Reach 7-figures annually' },
    { value: 'work_less', label: '⏰ Work less while maintaining/growing revenue' },
    { value: 'build_systems', label: '👥 Build systems so business runs without me' },
    { value: 'profit_margins', label: '💵 Increase profit margins significantly' },
    { value: 'better_leader', label: '🧠 Become a better leader/CEO' },
    { value: 'premium_clients', label: '🎯 Attract higher-quality, premium clients' },
    { value: 'clear_strategy', label: '🗺️ Get clear 3-year growth strategy' },
    { value: 'predictable_revenue', label: '🔄 Create predictable revenue model' },
    { value: 'other', label: 'Other' },
  ]

  const transformationOptions = [
    { value: 'clarity', label: '🧠 Clarity on vision and 3-year strategy' },
    { value: 'reclaimed_time', label: '⏰ Reclaimed 10-20+ hours per week' },
    { value: 'confidence', label: '💪 Confidence as a leader and decision-maker' },
    { value: 'built_team', label: '👥 Successfully built and led a team' },
    { value: 'repositioned', label: '🎯 Repositioned to attract premium clients' },
    { value: 'systems', label: '📊 Built profitable systems that scale' },
    { value: 'profit_improved', label: '💵 Significantly improved profit margins' },
    { value: 'runs_without_me', label: '🔄 Business now runs without me day-to-day' },
    { value: 'balance', label: '😌 Better work-life balance, less stress' },
    { value: 'milestones', label: '🏆 Hit revenue milestones I didn\'t think possible' },
    { value: 'other', label: 'Other' },
  ]

  const impressiveResults = [
    { value: 'revenue_growth', label: '💰 Total revenue growth achieved' },
    { value: 'speed', label: '⚡ Speed of results (faster than expected)' },
    { value: 'clarity', label: '🧠 Clarity and strategic thinking gained' },
    { value: 'client_quality', label: '🎯 Quality of clients I now attract' },
    { value: 'leadership_growth', label: '💪 My growth as a CEO/leader' },
    { value: 'time_freedom', label: '⏰ Time freedom I\'ve reclaimed' },
    { value: 'profit', label: '💵 Profit improvement, not just revenue' },
    { value: 'systems', label: '🔄 Systems that actually work' },
    { value: 'other', label: 'Other' },
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
            Section 2: The Growth Goal
          </h2>
          <p className="text-gray-600">What you set out to achieve</p>
        </div>

        <form onSubmit={handleSubmit(onNext)} className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <Label required>
              What was your primary goal when you started with TLN BizGrowth 360?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {goalOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={primaryGoal.includes(option.value)}
                  onChange={() => handleCheckboxChange('primaryGoal', option.value)}
                />
              ))}
            </div>
            {primaryGoal.includes('other') && (
              <Input
                {...register('primaryGoalOther')}
                placeholder="Please specify..."
                error={errors.primaryGoalOther}
              />
            )}
            {errors.primaryGoal && (
              <p className="text-sm text-red-500">{errors.primaryGoal.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <Label required>
              What financial or business result did TLN deliver for you?
            </Label>
            <p className="text-sm text-gray-500">
              Be specific with numbers if possible (e.g., Went from $400K/year to $1.2M in 18 months while working 20 fewer hours/week)
            </p>
            <Textarea
              {...register('financialResult')}
              placeholder="e.g., Went from $400K/year to $1.2M in 18 months while working 20 fewer hours/week"
              error={errors.financialResult}
              rows={3}
            />
            {errors.financialResult && (
              <p className="text-sm text-red-500">{errors.financialResult.message}</p>
            )}
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <Label required>
              Beyond revenue, what other transformation did you experience?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {transformationOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={otherTransformation.includes(option.value)}
                  onChange={() => handleCheckboxChange('otherTransformation', option.value)}
                />
              ))}
            </div>
            {otherTransformation.includes('other') && (
              <Input
                {...register('otherTransformationOther')}
                placeholder="Please specify..."
                error={errors.otherTransformationOther}
              />
            )}
            {errors.otherTransformation && (
              <p className="text-sm text-red-500">{errors.otherTransformation.message}</p>
            )}
          </div>

          {/* Question 4 */}
          <div className="space-y-4">
            <Label required>
              What result impressed you most about working with TLN?
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {impressiveResults.map((result) => (
                <label
                  key={result.value}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    mostImpressiveResult === result.value
                      ? 'border-primary bg-blue-50'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    value={result.value}
                    {...register('mostImpressiveResult')}
                    className="sr-only"
                  />
                  <span className="text-base">{result.label}</span>
                </label>
              ))}
            </div>
            {mostImpressiveResult === 'other' && (
              <Input
                {...register('mostImpressiveResultOther')}
                placeholder="Please specify..."
                error={errors.mostImpressiveResultOther}
              />
            )}
            {errors.mostImpressiveResult && (
              <p className="text-sm text-red-500">{errors.mostImpressiveResult.message}</p>
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

export default Section2
