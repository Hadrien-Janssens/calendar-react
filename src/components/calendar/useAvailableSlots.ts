import { useQuery } from '@tanstack/react-query'
import { fetchAvailablesSlots } from './services/calendar.service'
import type { DaySlots } from './type'
import type dayjs from 'dayjs'
import type { ServiceType } from '@/type/serviceType'

export function useAvailableSlots(
  day: dayjs.Dayjs,
  service: ServiceType | null,
) {
  return useQuery<Array<DaySlots>, Error>({
    queryKey: ['events', day.format('YYYY-MM'), service?.id],
    queryFn: () => {
      if (!service) {
        throw new Error('No service selected')
      }
      return fetchAvailablesSlots(day, service.id)
    },
    enabled: !!service,
  })
}
