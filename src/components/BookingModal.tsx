import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useState } from 'react'
import Calendar from './calendar/Calendar'
import ServiceList from './services/ServiceList'
import type { Dispatch, SetStateAction } from 'react'

type BookingModalType = {
  setshowBookingModal: Dispatch<SetStateAction<boolean>>
}

export default function BookingModal({
  setshowBookingModal,
}: BookingModalType) {
  const [step, setStep] = useState(0)
  return createPortal(
    <div
      onClick={() => {
        setshowBookingModal(false)
      }}
      className="fixed bottom-0 p-5 shadow-2xl  bg-[#000000d4] w-full h-screen "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-md mx-auto bg-white rounded-xl p-3 h-[90vh] overflow-scroll space-y-5"
      >
        <X
          onClick={() => {
            setshowBookingModal(false)
          }}
        />
        {step === 0 && <ServiceList onClick={() => setStep((v) => v + 1)} />}
        {step === 1 && <Calendar />}
      </div>
    </div>,
    document.body,
  )
}
