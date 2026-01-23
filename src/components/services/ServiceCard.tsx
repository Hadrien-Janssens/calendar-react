import type { ServiceType } from '@/type/serviceType'
import { centsToEuros } from '@/utils/price'

type ServiceCardProps = {
  service: ServiceType
  onSelectedService: (service: ServiceType) => void
}

export default function ServiceCard({
  service,
  onSelectedService,
}: ServiceCardProps) {
  return (
    <div
      onClick={() => onSelectedService(service)}
      className="border rounded-2xl p-5 shadow-md"
    >
      <p>{service.name}</p>
      <p>{service.description}</p>
      <p>{service.durationMinutes} min.</p>
      <p>{centsToEuros(service.priceCents)} €</p>
    </div>
  )
}
