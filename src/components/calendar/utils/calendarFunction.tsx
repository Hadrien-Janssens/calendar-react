import dayjs from 'dayjs'
import type { DayType } from '@/type/DayType'
import type { GoogleEvent } from '@/type/googleEventType'

export function getCalendarDays(month: dayjs.Dayjs) {
  const startOfMonth = month.startOf('month')
  const endOfMonth = month.endOf('month')

  const startWeekday = (startOfMonth.day() + 6) % 7 // lundi = 0
  const days: Array<DayType> = []

  // Jours du mois précédent pour compléter la semaine
  if (startWeekday > 0) {
    const prevMonthEnd = startOfMonth.subtract(1, 'month').endOf('month')
    for (let i = startWeekday - 1; i >= 0; i--) {
      days.push({ day: prevMonthEnd.subtract(i, 'day'), month: 'before' })
    }
  }

  // Jours du mois courant
  let current = startOfMonth
  while (current.isBefore(endOfMonth) || current.isSame(endOfMonth, 'day')) {
    days.push({ day: current, month: 'current' })
    current = current.add(1, 'day')
  }

  // compléter avec les jours du mois suivant pour compléter la dernière semaine
  const totalDays = days.length
  const remaining = 7 - (totalDays % 7)
  if (remaining < 7) {
    let nextMonthDay = endOfMonth.add(1, 'day')
    for (let i = 0; i < remaining; i++) {
      days.push({ day: nextMonthDay, month: 'after' })
      nextMonthDay = nextMonthDay.add(1, 'day')
    }
  }

  return days
}

/**
 *
 * @param day it's just a day
 * @param events List of events given by Google agenda
 * @returns true if the day have at least one event
 */
export const hasEvent = (day: DayType, events: Array<GoogleEvent>): boolean => {
  return events.some((event) => {
    const eventDate = event.start.dateTime || event.start.date
    return dayjs(eventDate).isSame(day.day, 'day')
  })
}

/**
 *
 * @param day it's just a day
 * @returns true if it's today
 */
export const isCurrentDay = (day: DayType): boolean => {
  const currentDay = Date.now()

  if (day.day.isSame(currentDay, 'day')) {
    return true
  }
  return false
}

/**
 *
 * @param day
 * @returns
 */
export const isDayInMonth = (day: DayType): boolean => {
  if (day.month === 'current') {
    return true
  }
  return false
}
