import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useState } from 'react'

// IMPORT COMPONENT
import CalendarChoices from './CalendarChoices'
import { useCalendarEvents } from './useCalendarEvent'
import CalendarHeader from './CalendarHeader'
import CalendarTableHead from './CalendarTableHead'
import CalendarDay from './CalendarDay'
// OTHERS IMPORT
import { getCalendarDays } from '@/components/calendar/utils/calendarFunction'

export default function Calendar() {
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

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur lors du chargement des événements</div>
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
      <div className="flex gap-5 text-xs p-3 justify-center">
        <p>Disponibilités :</p>
        <div className="flex gap-4">
          <div className="flex gap-0.5 items-center">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <p>Bonne</p>
          </div>
          <div className="flex gap-0.5 items-center">
            <div className="w-3 h-3 bg-amber-200 rounded-full"></div>
            <p>Moyenne</p>
          </div>
          <div className="flex gap-0.5 items-center">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <p>Faible</p>
          </div>
          <div className="flex gap-0.5 items-center">
            <div className="w-3 h-3 bg-red-800 rounded-full"></div>
            <p>Complet</p>
          </div>
        </div>
      </div>
      {/* CRENEAUX */}
      <CalendarChoices />
    </div>
  )
}
