import { X } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { createPortal } from 'react-dom'
import type { Dispatch, SetStateAction } from 'react'

type BookingModalType = {
  setshowBookingModal: Dispatch<SetStateAction<boolean>>
}

export default function BookingModal({
  setshowBookingModal,
}: BookingModalType) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Array<any>, Error>({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3333/services')
      if (!res.ok) {
        throw new Error('Network error')
      }
      return await res.json()
    },
  })
  console.log(data)

  return createPortal(
    <div className="fixed bottom-0 p-5 shadow-2xl  bg-[#000000d4] w-full h-screen ">
      <div className="max-w-md mx-auto bg-white rounded-xl p-5 h-[90vh] overflow-scroll space-y-5">
        {/* HEADER MODAL  */}
        <div className="flex justify-between">
          <p className="text-lg font-bold">Services</p>
          <X onClick={() => setshowBookingModal(false)} />
        </div>
        {/* BODY MODAL  */}
        <div className="space-y-5">
          {data.map((service) => {
            return (
              <div
                className="border rounded-2xl p-5 shadow-md"
                key={service.id}
              >
                <p>{service.name}</p>
                <p>{service.description}</p>
                <p>{service.durationMinutes} min.</p>
                <p>{service.priceCents} €</p>
              </div>
            )
            // TODO: Il faut pas faire un type pour service ? pour avoir une autodompletion notament ?
            // et reflechir au composant : pour que le client puisse choisir les ombres, les radius ... mais aussi pour que ça soit homogène ( ex: crénaux et cardService)
          })}
        </div>
      </div>
    </div>,
    document.body,
  )
}
