import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useState } from 'react'

// IMPORT COMPONENT
import LoadingDataQuery from '../LoadingDataQuery'
import ErreurDataQuery from '../ErreurDataQuery'
import CalendarChoices from './CalendarChoices'
import { useCalendarEvents } from './useCalendarEvent'
import CalendarHeader from './CalendarHeader'
import CalendarTableHead from './CalendarTableHead'
import CalendarDay from './CalendarDay'
import Legend from './Legend'
// OTHERS IMPORT
import type { ServiceType } from '@/type/serviceType'
import { getCalendarDays } from '@/components/calendar/utils/calendarFunction'

export default function Calendar({
  selectedService,
}: {
  selectedService: ServiceType | null
}) {
  dayjs.locale('fr')
  const [currentDate, setCurrentDate] = useState(dayjs())

  const nextMonth = () => {
    setCurrentDate((v) => v.add(1, 'month'))
  }
  const prevMonth = () => {
    setCurrentDate((v) => v.subtract(1, 'month'))
  }

  const calendarDays = getCalendarDays(currentDate)

  const { data = [], isLoading, error } = useCalendarEvents()

  // console.log(data)

  // TODO: il faut créer un composant pour le chargement et l'error
  if (isLoading) return <LoadingDataQuery />
  if (error) return <ErreurDataQuery />
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-5 h-[90vh] overflow-scroll">
      <CalendarHeader
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        currentDate={currentDate}
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
                    <td key={i} className=" h-14 rounded-2xl ">
                      <div className="flex justify-center items-center font-medium ">
                        <CalendarDay day={day} data={data} />
                      </div>
                    </td>
                  ))}
              </tr>
            ),
          )}
        </tbody>
      </table>

      {/* LEGEND  */}
      <Legend />
      {/* CRENEAUX */}
      <CalendarChoices selectedService={selectedService} />
    </div>
  )
}
