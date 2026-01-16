// IMPORT QUERY
import { useQuery } from '@tanstack/react-query'
// IMPORT LIB
import dayjs from 'dayjs'
// IMPORT TYPE
import type { GoogleEvent } from '@/type/googleEventType'
// OTHERS IMPORT
import { getCalendarDays } from '@/utils/calendarFunction/calendarFunction'

async function fetchEvents(): Promise<Array<GoogleEvent>> {
  const res = await fetch('http://localhost:3333/events')
  if (!res.ok) throw new Error('Erreur réseau')
  return (await res.json()) as Array<GoogleEvent>
}

export default function Calendar() {
  const calendarDays = getCalendarDays()

  const { data, isLoading, error } = useQuery<Array<GoogleEvent>, Error>({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })
  // console.log(data)

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur lors du chargement des événements</div>

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">
        {dayjs().format('MMMM YYYY')}
      </h2>

      <table className="border-collapse w-full">
        <thead>
          <tr>
            {['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'].map(
              (d) => (
                <th key={d} className=" p-2 text-sm text-gray-600">
                  {d}
                </th>
              ),
            )}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
            (_, weekIndex) => (
              <tr key={weekIndex}>
                {calendarDays
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((day, i) => (
                    <td key={i} className=" h-14 text-gray-400 rounded-2xl ">
                      <div className="flex justify-center items-center">
                        <div className=" w-10 h-10 rounded-full text-center flex justify-center items-center">
                          {day ? day.date() : ''}
                        </div>
                      </div>
                    </td>
                  ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}
