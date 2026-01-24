import { useQuery } from '@tanstack/react-query'
import LoadingDataQuery from '../LoadingDataQuery'
import ErreurDataQuery from '../ErreurDataQuery'
import ServiceCard from './ServiceCard'
import type { ServiceType } from '@/type/serviceType'

type ServiceListProps = {
  onSelectedService: (service: ServiceType) => void
  selectedService: ServiceType | null
}

export default function ServiceList({
  onSelectedService,
  selectedService,
}: ServiceListProps) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Array<any>, Error>({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3333/services')
      if (!res.ok) {
        throw new Error('Network error')
      }
      return await res.json()
    },
  })
  // console.log(data)

  // TODO: il faut créer un composant pour le chargement et l'error
  if (isLoading) return <LoadingDataQuery />
  if (error) return <ErreurDataQuery />
  return (
    <>
      {/* BODY */}
      <div className="space-y-5 p-2 px-3">
        {data.map((service: ServiceType) => {
          return (
            <ServiceCard
              onSelectedService={onSelectedService}
              key={service.id}
              service={service}
              selectedService={selectedService}
            />
          )
          // TODO: et reflechir au composant : pour que le client puisse choisir les ombres, les radius ... mais aussi pour que ça soit homogène ( ex: crénaux et cardService)
        })}
      </div>
    </>
  )
}
