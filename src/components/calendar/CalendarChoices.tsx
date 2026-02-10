import dayjs from 'dayjs'
import CalendarTimeChoice from './CalendarTimeChoice'
import { getTheSameDay } from './utils/calendarFunction'
import type { Dayjs } from 'dayjs'
import type { DaySlots } from './type'

export default function CalendarChoices({
  data,
  selectedDay,
}: {
  data: Array<DaySlots>
  selectedDay: Dayjs
}) {
  const day = getTheSameDay(selectedDay, data)

  // Early return
  if (!day) {
    return (
      <div className="w-full flex justify-center items-center space-y-2 italic text-center ">
        <p>Impossible de prendre rendez-vous à cette date.</p>
      </div>
    )
  }
  if (day.availableSlots.length === 0) {
    return (
      <div className="w-full flex justify-center items-center space-y-2 italic text-center ">
        <p>Plus de crénaux disponibles pour ce jour.</p>
      </div>
    )
  }
  // return availables slots
  const slots = day.availableSlots

  return (
    <div className="space-y-2 ">
      {slots.map((slot, index) => {
        return (
          <CalendarTimeChoice key={index}>
            {dayjs(slot.start).format('HH:mm')} -
            {dayjs(slot.end).format('HH:mm')}
          </CalendarTimeChoice>
        )
      })}
    </div>
  )
}
