import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function saveFormProgress(data) {
  try {
    localStorage.setItem('tln-feedback-form-progress', JSON.stringify(data))
    localStorage.setItem('tln-feedback-form-timestamp', new Date().toISOString())
  } catch (error) {
    console.error('Failed to save form progress:', error)
  }
}

export function loadFormProgress() {
  try {
    const saved = localStorage.getItem('tln-feedback-form-progress')
    return saved ? JSON.parse(saved) : null
  } catch (error) {
    console.error('Failed to load form progress:', error)
    return null
  }
}

export function clearFormProgress() {
  try {
    localStorage.removeItem('tln-feedback-form-progress')
    localStorage.removeItem('tln-feedback-form-timestamp')
  } catch (error) {
    console.error('Failed to clear form progress:', error)
  }
}

export function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function downloadCSV(data, filename) {
  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, key) => {
      const value = obj[key]
      const newKey = prefix ? `${prefix}.${key}` : key
      
      if (Array.isArray(value)) {
        acc[newKey] = value.join('; ')
      } else if (typeof value === 'object' && value !== null) {
        Object.assign(acc, flattenObject(value, newKey))
      } else {
        acc[newKey] = value
      }
      
      return acc
    }, {})
  }

  const flattened = flattenObject(data)
  const headers = Object.keys(flattened)
  const values = Object.values(flattened)
  
  const csvContent = [
    headers.join(','),
    values.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')
  ].join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
