// IMPORT LIB
import dayjs from 'dayjs'

export function getCalendarDays() {
  const startOfMonth = dayjs().startOf('month')
  const endOfMonth = dayjs().endOf('month')

  const startWeekday = (startOfMonth.day() + 6) % 7
  const days: Array<dayjs.Dayjs | null> = []

  // Jours vides avant le 1er
  for (let i = 0; i < startWeekday; i++) {
    days.push(null)
  }

  // Jours du mois
  let current = startOfMonth
  while (current.isBefore(endOfMonth) || current.isSame(endOfMonth, 'day')) {
    days.push(current)
    current = current.add(1, 'day')
  }

  return days
}
