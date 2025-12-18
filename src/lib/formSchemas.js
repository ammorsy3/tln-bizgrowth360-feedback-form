import { z } from 'zod'

// Section 1: The Business Challenge
export const section1Schema = z.object({
  biggestChallenge: z.array(z.string()).min(1, 'Please select at least one challenge'),
  biggestChallengeOther: z.string().optional(),
  triedBefore: z.array(z.string()).min(1, 'Please select at least one option'),
  triedBeforeOther: z.string().optional(),
  whyDidntWork: z.string().min(1, 'Please select why previous approaches didn\'t work'),
  whyDidntWorkOther: z.string().optional(),
  revenueLeft: z.string().min(1, 'Please select an amount'),
  urgencyLevel: z.number().min(1).max(10),
})

// Section 2: The Growth Goal
export const section2Schema = z.object({
  primaryGoal: z.array(z.string()).min(1, 'Please select at least one goal'),
  primaryGoalOther: z.string().optional(),
  financialResult: z.string().min(10, 'Please describe the financial result (at least 10 characters)'),
  otherTransformation: z.array(z.string()).min(1, 'Please select at least one transformation'),
  otherTransformationOther: z.string().optional(),
  mostImpressiveResult: z.string().min(1, 'Please select what impressed you most'),
  mostImpressiveResultOther: z.string().optional(),
})

// Section 3: What Made It Work
export const section3Schema = z.object({
  biggestImpact: z.array(z.string()).min(1, 'Please select at least one framework'),
  biggestImpactOther: z.string().optional(),
  timeToResults: z.string().min(1, 'Please select a timeframe'),
  braggingRights: z.string().min(20, 'Please share what you would say (at least 20 characters)'),
})

// Section 4: Why You Chose TLN
export const section4Schema = z.object({
  whatMadeDifferent: z.array(z.string()).min(1, 'Please select at least one differentiator'),
  whatMadeDifferentOther: z.string().optional(),
  convincedToMove: z.string().min(20, 'Please share what convinced you (at least 20 characters)'),
})

// Section 5: Your Business Profile
export const section5Schema = z.object({
  industry: z.string().min(1, 'Please select your industry'),
  industryOther: z.string().optional(),
  yearsOperating: z.string().min(1, 'Please select how long you\'ve been operating'),
  teamSize: z.number().min(1, 'Please enter your team size'),
})

// Section 6: Your Growth Journey
export const section6Schema = z.object({
  decisionTrigger: z.array(z.string()).min(1, 'Please select at least one trigger'),
  decisionTriggerOther: z.string().optional(),
  roleInBusiness: z.string().min(2, 'Please enter your role'),
  madeKeyHires: z.boolean(),
  keyHiresRoles: z.array(z.string()).optional(),
  keyHiresRolesOther: z.string().optional(),
})

// Section 7: Current State
export const section7Schema = z.object({
  biggestFocus: z.string().min(1, 'Please select your biggest focus'),
  biggestFocusOther: z.string().optional(),
  withoutTLN: z.string().min(20, 'Please describe what would be different (at least 20 characters)'),
})

// Section 8: Network & Community
export const section8Schema = z.object({
  partOfGroups: z.boolean(),
  industryAssociations: z.string().optional(),
  linkedinGroups: z.string().optional(),
  masterminds: z.string().optional(),
  facebookGroups: z.string().optional(),
  businessInfluencers: z.string().optional(),
  industryInfluencers: z.string().optional(),
})

// Complete form schema
export const completeFormSchema = z.object({
  section1: section1Schema,
  section2: section2Schema,
  section3: section3Schema,
  section4: section4Schema,
  section5: section5Schema,
  section6: section6Schema,
  section7: section7Schema,
  section8: section8Schema,
})
