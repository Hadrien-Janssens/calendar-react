import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useState } from 'react'
import Calendar from './calendar/Calendar'
import ServiceList from './services/ServiceList'
import Stepper from './Stepper'
import CalendarChoices from './calendar/CalendarChoices'
import type { Dispatch, SetStateAction } from 'react'
import type { ServiceType } from '@/type/serviceType'

type BookingModalType = {
  setshowBookingModal: Dispatch<SetStateAction<boolean>>
}

export default function BookingModal({
  setshowBookingModal,
}: BookingModalType) {
  const [step, setStep] = useState(0)
  const [ActivateStep, setActivateStep] = useState(0)
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  )
  const selectService = (service: ServiceType) => {
    setSelectedService(service)
    if (!selectedService) {
      setActivateStep((v) => v + 1)
    }
  }
  const nextStep = () => {
    setStep((v) => v + 1)
  }
  const prevStep = () => {
    setStep((v) => v - 1)
  }

  return createPortal(
    <div
      onClick={() => {
        setshowBookingModal(false)
      }}
      className="fixed bottom-0 p-5 shadow-2xl  bg-[#000000d4] w-full h-screen "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md mx-auto bg-white rounded-4xl p-4 h-[90vh] overflow-scroll space-y-5 flex flex-col"
      >
        <div className="flex flex-col gap-2 h-full">
          {/* HEADER MODAL */}
          <div className="sticky top-0 z-20 bg-white">
            <X
              className="absolute top-0 right-0"
              onClick={() => {
                setshowBookingModal(false)
              }}
            />
            <div className="pt-10">
              <Stepper />
            </div>{' '}
          </div>
          {/* BODY MODAL */}
          <div className="grow overflow-scroll">
            {step === 0 && (
              <ServiceList
                onSelectedService={selectService}
                selectedService={selectedService}
              />
            )}
            {step === 1 && (
              <>
                <Calendar selectedService={selectedService} />
                <CalendarChoices selectedService={selectedService} />
              </>
            )}
          </div>
          {/* FOOTER MODAL  */}
          <div
            className={`w-full flex 
            ${step > 0 ? 'justify-between' : 'justify-end'}
            `}
          >
            {step > 0 && (
              <button
                className="border rounded-xl py-2 w-30 cursor-pointer"
                onClick={prevStep}
              >
                Précécent
              </button>
            )}
            <button
              disabled={ActivateStep - 1 !== step}
              className={
                'border rounded-xl py-2 w-30 ' +
                (ActivateStep - 1 === step
                  ? 'border-blue-500 bg-blue-50 text-blue-500 hover:cursor-pointer'
                  : 'hover:cursor-not-allowed ')
              }
              onClick={nextStep}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
