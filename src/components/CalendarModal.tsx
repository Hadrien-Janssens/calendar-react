import { createPortal } from 'react-dom'
import Calendar from './calendar/Calendar'

type calendarModalProps = {
  closeCalendarModal: () => void
}

export default function CalendarModal({
  closeCalendarModal,
}: calendarModalProps) {
  return createPortal(
    <div className="fixed bottom-0 p-5 shadow-2xl  bg-[#000000d4] w-full h-screen ">
      <Calendar closeCalendarModal={closeCalendarModal} />
    </div>,
    document.body,
  )
}
