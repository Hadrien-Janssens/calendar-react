import dayjs from 'dayjs'
import type { Dispatch, SetStateAction } from 'react'
import type { DayType } from '@/type/DayType'
import {
  getTheSameDay,
  isCurrentDay,
  isDayInMonth,
} from '@/components/calendar/utils/calendarFunction'

type CalendarDayType = {
  day: DayType
  data: any
  selectedDay: dayjs.Dayjs
  setSelectedDay: Dispatch<SetStateAction<dayjs.Dayjs>>
}

export default function CalendarDay({
  day,
  data,
  selectedDay,
  setSelectedDay,
}: CalendarDayType) {
  const isToday = isCurrentDay(day)
  // const hasEvents = hasEvent(day, data)

  const canBooking = () => {
    if (isDayInMonth(day) && !day.day.isBefore(dayjs())) {
      return true
    }
    return false
  }

  const getColorAvailabilityLevel = (day_param: DayType, data_param: any) => {
    const isWorkingDay = getTheSameDay(day_param.day, data_param)
    if (!isWorkingDay) {
      return 'text-neutral-400 '
    }

    const slots = isWorkingDay.availableSlots.length ?? 0

    if (slots === 0) return 'bg-red-800'
    if (slots <= 2) return 'bg-red-400'
    if (slots <= 7) return 'bg-amber-100'
    return 'bg-emerald-300'
  }

  return (
    <div
      onClick={() => setSelectedDay(day.day)}
      className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full text-center flex justify-center items-center cursor-pointer hover:scale-110 duration-200  
        ${dayjs(selectedDay).isSame(dayjs(day.day), 'day') ? 'border-2 border-blue-400' : ''}
        ${canBooking() ? getColorAvailabilityLevel(day, data) : 'text-neutral-400 '}
        `}
    >
      {day.day.date()}
      <div
        className={`${isToday ? 'w-1.5 h-1.5 bg-red-500 rounded absolute bottom-0' : ''}`}
      ></div>
    </div>
  )
}
