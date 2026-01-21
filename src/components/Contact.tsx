import { useState } from 'react'
import CalendarModal from './CalendarModal'
import { calendarModalContext } from './calendar/calendarModalContext'

export default function Contact() {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className="">
      Contact
      <div className="flex justify-center items-center h-full">
        <button
          className="border rounded-md py-1 px-3 bg-stone-300"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          Prendre rendez-vous
        </button>
      </div>
      <calendarModalContext.Provider value={{ showCalendar, setShowCalendar }}>
        {showCalendar && <CalendarModal />}
      </calendarModalContext.Provider>
    </div>
  )
}
