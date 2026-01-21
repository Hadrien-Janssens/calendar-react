import dayjs from 'dayjs'

import type { dayType } from '@/type/dayType'
import type { GoogleEvent } from '@/type/googleEventType'

import {
  hasEvent,
  isCurrentDay,
  isDayInMonth,
} from '@/components/calendar/utils/calendarFunction'

type CalendarDayType = {
  day: dayType
  data: Array<GoogleEvent>
}

export default function CalendarDay({ day, data }: CalendarDayType) {
  const isToday = isCurrentDay(day)
  const hasEvents = hasEvent(day, data)

  const canBooking = () => {
    if (isDayInMonth(day) && !day.day.isBefore(dayjs())) {
      return true
    }
    return false
  }

  return (
    <div
      className={` w-12 h-12 rounded-full text-center flex justify-center items-center cursor-pointer hover:scale-110  duration-200 
        ${isToday ? 'border-2 border-red-400' : ''}
        ${hasEvents ? 'bg-amber-100 shadow-md' : ''}
        ${canBooking() ? '' : 'text-neutral-400 '}
        ${canBooking() && !hasEvents ? 'bg-emerald-300 shadow-md' : ''}
        `}
    >
      {day.day.date()}
    </div>
  )
}
