import { useQuery } from '@tanstack/react-query'
import ServiceCard from './ServiceCard'
import type { ServiceType } from '@/type/serviceType'

type ServiceListProps = {
  onSelectedService: () => void
}

export default function ServiceList({ onSelectedService }: ServiceListProps) {
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
  console.log(data)
  // TODO: il faut créer un composant pour le chargement et l'error
  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur lors du chargement des événements</div>
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Services</p>
      </div>
      {/* BODY */}
      <div className="space-y-5">
        {data.map((service: ServiceType) => {
          return (
            <ServiceCard
              onSelectedService={onSelectedService}
              key={service.id}
              service={service}
            />
          )
          // TODO: et reflechir au composant : pour que le client puisse choisir les ombres, les radius ... mais aussi pour que ça soit homogène ( ex: crénaux et cardService)
        })}
      </div>
    </>
  )
}
