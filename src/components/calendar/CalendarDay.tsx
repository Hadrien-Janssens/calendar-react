import type { dayType } from '@/type/dayType'
import type { GoogleEvent } from '@/type/googleEventType'
import {
  hasEvent,
  isCurrentDay,
} from '@/utils/calendarFunction/calendarFunction'

type CalendarDayType = {
  day: dayType
  data: Array<GoogleEvent>
}

export default function CalendarDay({ day, data }: CalendarDayType) {
  const isToday = isCurrentDay(day)
  const hasEvents = hasEvent(day, data)

  return (
    <div
      className={` w-8 h-8 rounded-full text-center flex justify-center items-center 
        ${isToday ? 'border-2 border-red-400' : ''}
        ${hasEvents ? 'bg-amber-100' : ''}`}
    >
      {day.day.date()}
    </div>
  )
}
