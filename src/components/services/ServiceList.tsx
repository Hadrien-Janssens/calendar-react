import { useQuery } from '@tanstack/react-query'
import ServiceCard from './ServiceCard'

export default function ServiceList({ onClick }) {
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
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Services</p>
      </div>
      {/* BODY */}
      <div className="space-y-5">
        {data.map((service) => {
          return (
            <ServiceCard onClick={onClick} key={service.id} service={service} />
          )
          // TODO: Il faut pas faire un type pour service ? pour avoir une autodompletion notament ?
          // et reflechir au composant : pour que le client puisse choisir les ombres, les radius ... mais aussi pour que ça soit homogène ( ex: crénaux et cardService)
        })}
      </div>
    </>
  )
}
