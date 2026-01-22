import { useState } from 'react'
import CalendarModal from './CalendarModal'
import BookingsModal from './BookingModal'
import { calendarModalContext } from './calendar/calendarModalContext'

export default function Contact() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [showBookingModal, setshowBookingModal] = useState(false)

  return (
    <div className="">
      Contact
      <div className="flex justify-center items-center h-full">
        <button
          className="border rounded-md py-1 px-3 bg-stone-300"
          onClick={() => setshowBookingModal(!showBookingModal)}
        >
          Prendre rendez-vous
        </button>
      </div>
      <calendarModalContext.Provider value={{ showCalendar, setShowCalendar }}>
        {showCalendar && <CalendarModal />}
      </calendarModalContext.Provider>
      {showBookingModal && (
        <BookingsModal setshowBookingModal={setshowBookingModal} />
      )}
    </div>
  )
}
