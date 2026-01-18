import { useState } from 'react'
import CalendarModal from './CalendarModal'

export default function Contact() {
  const [showCalendar, setShowCalendar] = useState(false)
  const closeCalendarModal = () => {
    setShowCalendar(false)
  }

  return (
    <div className="">
      Contact
      <div className="flex justify-center items-center h-full">
        <button
          className="border rounded-md py-1 px-3 bg-stone-300"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          prendre rendez-vous
        </button>
      </div>
      {showCalendar && (
        <CalendarModal closeCalendarModal={closeCalendarModal} />
      )}
    </div>
  )
}
