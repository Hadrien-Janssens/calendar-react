import dayjs from 'dayjs'
import CalendarTimeChoice from './CalendarTimeChoice'
import { getTheSameDay } from './utils/calendarFunction'
import type { Dayjs } from 'dayjs'
import type { DaySlots, Slot } from './type'
import type { Dispatch, SetStateAction } from 'react'

export default function CalendarChoices({
  data,
  selectedDay,
  selectedSlot,
  setSelectedSlot,
  setActivateStep,
}: {
  data: Array<DaySlots>
  selectedDay: Dayjs
  selectedSlot: Slot | undefined
  setSelectedSlot: Dispatch<SetStateAction<Slot | undefined>>
}) {
  const day = getTheSameDay(selectedDay, data)

  const bookingSlot = (slot: Slot) => {
    setSelectedSlot(slot)
    if (!selectedSlot) {
      setActivateStep((v) => v + 1)
    }
  }

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
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 mb-2 p-2">
      {slots.map((slot, index) => {
        return (
          <CalendarTimeChoice
            key={index}
            onClick={bookingSlot}
            slot={slot}
            selectedSlot={selectedSlot}
          >
            {dayjs(slot.start).format('HH:mm')} -
            {dayjs(slot.end).format('HH:mm')}
          </CalendarTimeChoice>
        )
      })}
    </div>
  )
}
