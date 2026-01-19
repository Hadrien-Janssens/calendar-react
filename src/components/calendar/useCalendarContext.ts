import { useContext } from 'react'
import { calendarModalContext } from './calendarModalContext'

export const useCalendarContext = () => {
  const context = useContext(calendarModalContext)
  if (!context) {
    throw new Error('useCalendarContext must be used inside CalendarProvider')
  }
  return context
}
