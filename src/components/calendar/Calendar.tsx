import 'dayjs/locale/fr'
import dayjs from 'dayjs'

import { useState } from 'react'
// IMPORT COMPONENT
import CalendarHeader from './CalendarHeader'
import CalendarTableHead from './CalendarTableHead'
import CalendarDay from './CalendarDay'
import Legend from './Legend'
// OTHERS IMPORT
import type { Dayjs } from 'dayjs'
import type { Dispatch, SetStateAction } from 'react'
import { getCalendarDays } from '@/components/calendar/utils/calendarFunction'

export default function Calendar({
  data,
  selectedDay,
  setSelectedDay,
}: {
  selectedDay: Dayjs
  setSelectedDay: Dispatch<SetStateAction<dayjs.Dayjs>>
  data: any
}) {
  dayjs.locale('fr')
  const [currentDate, setCurrentDate] = useState(dayjs())
  const calendarDays = getCalendarDays(currentDate)

  const nextMonth = () => {
    setCurrentDate((v) => v.add(1, 'month'))
    setSelectedDay((v) => v.add(1, 'month'))
  }

  const prevMonth = () => {
    if (!dayjs(currentDate).subtract(1, 'month').isBefore(dayjs(), 'day')) {
      setCurrentDate((v) => v.subtract(1, 'month'))
      setSelectedDay((v) => v.subtract(1, 'month'))
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl md:p-5 pt-0 md:pt-0 overflow-scroll">
      <CalendarHeader
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        currentDate={currentDate}
        setSelectedDay={setSelectedDay}
        setCurrentDate={setCurrentDate}
      />
      <table className="border-collapse w-full">
        <CalendarTableHead />
        <tbody>
          {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
            (_, weekIndex) => (
              <tr key={weekIndex}>
                {calendarDays
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((day, i) => (
                    <td key={i} className="h-10 md:h-12 rounded-2xl ">
                      <div className="flex justify-center items-center font-medium ">
                        <CalendarDay
                          day={day}
                          data={data}
                          selectedDay={selectedDay}
                          setSelectedDay={setSelectedDay}
                        />
                      </div>
                    </td>
                  ))}
              </tr>
            ),
          )}
        </tbody>
      </table>

      {/* LEGEND FOR COLOR CODE  */}
      <Legend />
    </div>
  )
}
