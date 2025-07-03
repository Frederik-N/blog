import { DATE_FORMATS, TIME_CONSTANTS } from '../constants'

export function formatRelativeDate(dateString: string | undefined): string {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / TIME_CONSTANTS.MILLISECONDS_PER_DAY)
  
  if (diffDays === 1) return DATE_FORMATS.ONE_DAY
  if (diffDays < TIME_CONSTANTS.DAYS_PER_WEEK) return `${diffDays} ${DATE_FORMATS.DAYS}`
  if (diffDays < TIME_CONSTANTS.DAYS_PER_MONTH) return `${Math.floor(diffDays / TIME_CONSTANTS.DAYS_PER_WEEK)} ${DATE_FORMATS.WEEKS}`
  if (diffDays < TIME_CONSTANTS.DAYS_PER_YEAR) return `${Math.floor(diffDays / TIME_CONSTANTS.DAYS_PER_MONTH)} ${DATE_FORMATS.MONTHS}`
  return `${Math.floor(diffDays / TIME_CONSTANTS.DAYS_PER_YEAR)} ${DATE_FORMATS.YEARS}`
}

export function formatSimpleDate(dateString: string | undefined): string {
  if (!dateString) return ''
  return dateString.slice(0, 10)
} 