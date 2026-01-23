import { useState } from 'react'
import BookingsModal from './BookingModal'

export default function Contact() {
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
      {showBookingModal && (
        <BookingsModal setshowBookingModal={setshowBookingModal} />
      )}
    </div>
  )
}
