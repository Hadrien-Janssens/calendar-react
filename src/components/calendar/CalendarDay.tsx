import dayjs from 'dayjs'
import type { Dispatch, SetStateAction } from 'react'
import type { DayType } from '@/type/DayType'
import type { DaySlots } from './type'

import {
  getTheSameDay,
  isCurrentDay,
  isDayInMonth,
} from '@/components/calendar/utils/calendarFunction'

type CalendarDayType = {
  day: DayType
  data: Array<DaySlots>
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

  const canBooking = () => {
    if (isDayInMonth(day) && !day.day.isBefore(dayjs())) {
      return true
    }
    return false
  }

  const getColorAvailabilityLevel = (
    day_param: DayType,
    data_param: Array<DaySlots>,
  ) => {
    const isWorkingDay = getTheSameDay(day_param.day, data_param)
    if (!isWorkingDay) {
      return 'text-neutral-400 '
    }

    const slots = isWorkingDay.availableSlots.length

    if (slots === 0) return 'border-red-700  text-red-900 bg-red-300 '
    if (slots <= 2) return 'border-orange-700 text-orange-900 bg-orange-300 '
    if (slots <= 7) return '!border-amber-400 text-amber-900 !bg-amber-200 '
    return '!border-emerald-600 text-emerald-900 !bg-emerald-300 '
  }

  return (
    <div
      onClick={() => setSelectedDay(day.day)}
      className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full text-center flex justify-center items-center cursor-pointer hover:scale-110 duration-200  
        ${canBooking() ? getColorAvailabilityLevel(day, data) : 'text-neutral-400 '}
        ${dayjs(selectedDay).isSame(dayjs(day.day), 'day') ? ' border-3 border-neutral-400 bg-neutral-100' : ''}
        `}
    >
      {day.day.date()}
      <div
        className={`${isToday ? 'w-1.5 h-1.5 bg-red-500 rounded absolute bottom-0' : ''}`}
      ></div>
    </div>
  )
}
