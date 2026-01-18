import dayjs from 'dayjs'
import { X } from 'lucide-react'
import CalendarHeaderButton from './CalendarHeaderButton'

type CalendarHeaderType = {
  closeCalendarModal: () => void
}
export default function CalendarHeader({
  closeCalendarModal,
}: CalendarHeaderType) {
  return (
    <>
      <div className="flex justify-end text-neutral-700 mb-5">
        <button onClick={closeCalendarModal}>
          <X />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <CalendarHeaderButton>précédent</CalendarHeaderButton>
        <h2 className="text-lg font-semibold mb-2 text-center">
          {dayjs().format('MMMM YYYY')}
        </h2>
        <CalendarHeaderButton>suivant</CalendarHeaderButton>
      </div>
    </>
  )
}
