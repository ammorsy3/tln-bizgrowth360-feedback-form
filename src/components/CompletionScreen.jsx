import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { PartyPopper, Download } from 'lucide-react'
import { Button } from './ui/Button'
import { downloadJSON, downloadCSV } from '@/lib/utils'

const CompletionScreen = ({ formData, onSubmit }) => {
  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#2563eb', '#7c3aed', '#ec4899']
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#2563eb', '#7c3aed', '#ec4899']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  const handleDownloadJSON = () => {
    const timestamp = new Date().toISOString().split('T')[0]
    downloadJSON(formData, `tln-feedback-${timestamp}.json`)
  }

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0]
    downloadCSV(formData, `tln-feedback-${timestamp}.csv`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-slide-in">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 animate-bounce">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You! 🎉
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your feedback helps us identify and serve more business owners like you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-gray-700 text-center">
              We truly appreciate you taking the time to share your transformation story.
              Your insights are invaluable! 🙏
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={onSubmit}
              size="lg"
              className="w-full text-lg"
            >
              Submit Responses
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={handleDownloadJSON}
                variant="outline"
                size="default"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                JSON
              </Button>
              <Button
                onClick={handleDownloadCSV}
                variant="outline"
                size="default"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                CSV
              </Button>
            </div>

            <p className="text-sm text-center text-gray-500 pt-4">
              You can download a personal copy of your responses above
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletionScreen
