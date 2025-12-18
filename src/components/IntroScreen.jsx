import React from 'react'
import { Sparkles, Clock } from 'lucide-react'
import { Button } from './ui/Button'

const IntroScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-slide-in">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success & Insights Survey
            </h1>
            <p className="text-lg text-primary font-semibold mb-2">
              TLN Consulting Group - BizGrowth 360
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              We're gathering insights from our BizGrowth 360 clients to understand what drives successful transformations and identify similar business owners who could benefit from strategic coaching. Your feedback helps us serve businesses like yours better.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-base">
              Estimated time: <span className="font-semibold">6-8 minutes</span>
            </span>
          </div>

          <div className="space-y-4">
            <Button
              onClick={onStart}
              size="lg"
              className="w-full text-lg"
            >
              Get Started 🚀
            </Button>
            <p className="text-sm text-center text-gray-500">
              Your progress will be automatically saved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroScreen
