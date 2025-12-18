import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { section4Schema } from '@/lib/formSchemas'
import { Checkbox } from './ui/Checkbox'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Label } from './ui/Label'
import { Button } from './ui/Button'
import { ChevronRight } from 'lucide-react'

const Section4 = ({ initialData, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(section4Schema),
    defaultValues: initialData || {
      whatMadeDifferent: [],
    },
  })

  const whatMadeDifferent = watch('whatMadeDifferent') || []

  const differentiatorOptions = [
    { value: 'customized', label: '🎯 Customized strategy vs. cookie-cutter program' },
    { value: '3_year_planning', label: '📋 3-year strategic planning approach' },
    { value: 'industry_expertise', label: '💼 Industry-specific expertise' },
    { value: 'implementation', label: '🤝 Coaching + implementation (not just advice)' },
    { value: 'accountability', label: '📞 Level of accountability and support' },
    { value: 'track_record', label: '🏆 Track record with businesses like mine' },
    { value: 'results_driven', label: '💰 Results-driven vs. feel-good coaching' },
    { value: 'systems_focus', label: '🧠 Focus on systems, not just mindset' },
    { value: 'ongoing', label: '🔄 Ongoing partnership vs. one-off program' },
    { value: 'chemistry', label: '💬 Chemistry and communication style' },
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
            Section 4: Why You Chose TLN
          </h2>
          <p className="text-gray-600">What set TLN apart from other options</p>
        </div>

        <form onSubmit={handleSubmit(onNext)} className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <Label required>
              What made TLN's approach feel different from other coaches?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {differentiatorOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={whatMadeDifferent.includes(option.value)}
                  onChange={() => handleCheckboxChange('whatMadeDifferent', option.value)}
                />
              ))}
            </div>
            {whatMadeDifferent.includes('other') && (
              <Input
                {...register('whatMadeDifferentOther')}
                placeholder="Please specify..."
                error={errors.whatMadeDifferentOther}
              />
            )}
            {errors.whatMadeDifferent && (
              <p className="text-sm text-red-500">{errors.whatMadeDifferent.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <Label required>
              What ultimately convinced you to move forward?
            </Label>
            <p className="text-sm text-gray-500">
              e.g., The free strategy session showed they actually understood my business and had a clear plan
            </p>
            <Textarea
              {...register('convincedToMove')}
              placeholder="e.g., The free strategy session showed they actually understood my business and had a clear plan"
              error={errors.convincedToMove}
              rows={3}
            />
            {errors.convincedToMove && (
              <p className="text-sm text-red-500">{errors.convincedToMove.message}</p>
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

export default Section4
