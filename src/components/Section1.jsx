import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { section1Schema } from '@/lib/formSchemas'
import { Checkbox } from './ui/Checkbox'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { Slider } from './ui/Slider'
import { Label } from './ui/Label'
import { Button } from './ui/Button'
import { ChevronRight } from 'lucide-react'

const Section1 = ({ initialData, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(section1Schema),
    defaultValues: initialData || {
      biggestChallenge: [],
      triedBefore: [],
      urgencyLevel: 5,
    },
  })

  const biggestChallenge = watch('biggestChallenge') || []
  const triedBefore = watch('triedBefore') || []
  const whyDidntWork = watch('whyDidntWork')
  const urgencyLevel = watch('urgencyLevel')

  const challenges = [
    { value: 'stuck_in_business', label: '😫 Stuck working IN the business, no time ON it' },
    { value: 'revenue_plateau', label: '📉 Revenue plateau - couldn\'t break through ceiling' },
    { value: 'cash_flow', label: '💸 Inconsistent cash flow/unpredictable revenue' },
    { value: 'wrong_clients', label: '🎯 Attracting wrong type of clients (low-value, difficult)' },
    { value: 'depends_on_me', label: '👤 Business depended entirely on me - no systems' },
    { value: 'no_strategy', label: '🤯 No clear strategy or roadmap for growth' },
    { value: 'leadership', label: '👥 Struggled with leadership/managing team' },
    { value: 'burnout', label: '⏰ Working 60+ hours/week, burned out' },
    { value: 'profit_margins', label: '💰 Good revenue but poor profit margins' },
    { value: 'accountability', label: '🔄 Lack of accountability or execution' },
    { value: 'other', label: 'Other' },
  ]

  const triedOptions = [
    { value: 'different_coach', label: 'Different business coach' },
    { value: 'group_coaching', label: 'Group coaching program or mastermind' },
    { value: 'online_courses', label: 'Online courses (business growth, leadership, etc.)' },
    { value: 'books_podcasts', label: 'Read books, listened to podcasts' },
    { value: 'consultant', label: 'Hired consultant for specific project' },
    { value: 'figure_out', label: 'Tried to figure it out myself' },
    { value: 'ops_person', label: 'Hired operations person or integrator' },
    { value: 'nothing', label: 'Nothing, TLN was my first real investment' },
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
            Section 1: The Business Challenge
          </h2>
          <p className="text-gray-600">Let's understand where you started</p>
        </div>

        <form onSubmit={handleSubmit(onNext)} className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <Label required>
              Before working with TLN, what was your biggest business challenge?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <Checkbox
                  key={challenge.value}
                  label={challenge.label}
                  checked={biggestChallenge.includes(challenge.value)}
                  onChange={() => handleCheckboxChange('biggestChallenge', challenge.value)}
                />
              ))}
            </div>
            {biggestChallenge.includes('other') && (
              <Input
                {...register('biggestChallengeOther')}
                placeholder="Please specify..."
                error={errors.biggestChallengeOther}
              />
            )}
            {errors.biggestChallenge && (
              <p className="text-sm text-red-500">{errors.biggestChallenge.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <Label required>
              What had you already tried before TLN?
            </Label>
            <p className="text-sm text-gray-500">Select all that apply</p>
            <div className="space-y-3">
              {triedOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={triedBefore.includes(option.value)}
                  onChange={() => handleCheckboxChange('triedBefore', option.value)}
                />
              ))}
            </div>
            {triedBefore.includes('other') && (
              <Input
                {...register('triedBeforeOther')}
                placeholder="Please specify..."
                error={errors.triedBeforeOther}
              />
            )}
            {errors.triedBefore && (
              <p className="text-sm text-red-500">{errors.triedBefore.message}</p>
            )}
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <Label required>
              Why didn't those previous approaches work?
            </Label>
            <Select
              {...register('whyDidntWork')}
              error={errors.whyDidntWork}
            >
              <option value="">Select an option...</option>
              <option value="generic">Too generic/cookie-cutter (not customized to my business)</option>
              <option value="no_implementation">Theory without practical implementation</option>
              <option value="no_accountability">No accountability structure or check-ins</option>
              <option value="coach_disappeared">Coach disappeared after initial sessions - left me on my own</option>
              <option value="not_enough_touchpoints">Only monthly calls, not enough touchpoints</option>
              <option value="no_troubleshooting">No one to troubleshoot problems in real-time</option>
              <option value="no_industry">Didn't address my specific industry challenges</option>
              <option value="tactics_not_strategy">Too focused on tactics, not strategy</option>
              <option value="no_help_executing">Gave me homework but no help executing it</option>
              <option value="expensive">Too expensive for the value received</option>
              <option value="too_long">Took too long to see results</option>
              <option value="didnt_commit">I didn't fully commit or execute</option>
              <option value="other">Other</option>
            </Select>
            {whyDidntWork === 'other' && (
              <Input
                {...register('whyDidntWorkOther')}
                placeholder="Please specify..."
                error={errors.whyDidntWorkOther}
              />
            )}
            {errors.whyDidntWork && (
              <p className="text-sm text-red-500">{errors.whyDidntWork.message}</p>
            )}
          </div>

          {/* Question 4 */}
          <div className="space-y-4">
            <Label required>
              How much revenue or profit were you leaving on the table monthly before TLN?
            </Label>
            <Select
              {...register('revenueLeft')}
              error={errors.revenueLeft}
            >
              <option value="">Select an amount...</option>
              <option value="under_5k">Under $5K/month</option>
              <option value="5k_10k">$5K - $10K/month</option>
              <option value="10k_25k">$10K - $25K/month</option>
              <option value="25k_50k">$25K - $50K/month</option>
              <option value="50k_100k">$50K - $100K/month</option>
              <option value="100k_plus">$100K+/month</option>
              <option value="hard_to_quantify">Hard to quantify, but I knew it was significant</option>
            </Select>
            {errors.revenueLeft && (
              <p className="text-sm text-red-500">{errors.revenueLeft.message}</p>
            )}
          </div>

          {/* Question 5 */}
          <div className="space-y-4">
            <Label required>
              On a scale of 1-10, how urgent was fixing this?
            </Label>
            <Slider
              value={urgencyLevel}
              onChange={(value) => setValue('urgencyLevel', value)}
              min={1}
              max={10}
            />
            {errors.urgencyLevel && (
              <p className="text-sm text-red-500">{errors.urgencyLevel.message}</p>
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

export default Section1
