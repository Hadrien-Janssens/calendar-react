// IMPORT COMPONENT
import CalendarChoices from './CalendarChoices'
import { useCalendarEvents } from './useCalendarEvent'
import CalendarHeader from './CalendarHeader'
import CalendarTableHead from './CalendarTableHead'
import CalendarDay from './CalendarDay'

// OTHERS IMPORT
import { getCalendarDays } from '@/utils/calendarFunction/calendarFunction'

type calendarProps = {
  closeCalendarModal: () => void
}

export default function Calendar({ closeCalendarModal }: calendarProps) {
  const calendarDays = getCalendarDays()
  // console.log('icic', calendarDays)

  const { data = [], isLoading, error } = useCalendarEvents()

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur lors du chargement des événements</div>

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-5 h-[90vh] overflow-scroll">
      <CalendarHeader closeCalendarModal={closeCalendarModal} />
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
      {/* CRENEAUX */}
      <CalendarChoices />
    </div>
  )
}
