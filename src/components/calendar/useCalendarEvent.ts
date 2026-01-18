import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from './calendar.service'
import type { GoogleEvent } from '@/type/googleEventType'

export function useCalendarEvents() {
  return useQuery<Array<GoogleEvent>, Error>({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })
}
