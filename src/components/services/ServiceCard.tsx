import { Timer } from 'lucide-react'
import type { ServiceType } from '@/type/serviceType'
import { centsToEuros } from '@/utils/price'

type ServiceCardProps = {
  service: ServiceType
  selectedService: ServiceType | null
  onSelectedService: (service: ServiceType) => void
}

export default function ServiceCard({
  service,
  selectedService,
  onSelectedService,
}: ServiceCardProps) {
  return (
    <div
      onClick={() => onSelectedService(service)}
      className={
        'flex flex-col justify-between border rounded-2xl px-3 py-1 shadow-md hover:scale-105 hover:cursor-pointer duration-200 ' +
        (selectedService && selectedService.id === service.id
          ? 'bg-emerald-500 text-emerald-50'
          : '')
      }
    >
      <div>
        <p className="font-bold ">{service.name}</p>
        <p>{service.description}</p>
      </div>

      <div className="flex justify-between w-full text-sm">
        <div className="flex items-center  ">
          <Timer className="w-4" /> <p>{service.durationMinutes} min.</p>
        </div>
        <div className="flex items-center  ">
          <p className="italic">{centsToEuros(service.priceCents)}€</p>
        </div>
      </div>
    </div>
  )
}
