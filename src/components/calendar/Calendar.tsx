import 'dayjs/locale/fr'
import dayjs from 'dayjs'

// IMPORT COMPONENT
import LoadingDataQuery from '../LoadingDataQuery'
import ErreurDataQuery from '../ErreurDataQuery'
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
  isLoading,
  error,
}: {
  data: any
  selectedDay: Dayjs
  setSelectedDay: Dispatch<SetStateAction<dayjs.Dayjs>>
  isLoading: boolean
  error: Error | null
}) {
  dayjs.locale('fr')
  const calendarDays = getCalendarDays(selectedDay)

  if (isLoading) {
    return <LoadingDataQuery />
  }
  if (error) {
    return <ErreurDataQuery />
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl md:p-5 pt-0 md:pt-0 overflow-scroll">
      <CalendarHeader
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
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
