import dayjs from 'dayjs'
import type { DaySlots } from '../type'

/**
 * Fetch the days and availables slot by day for the current month
 * @returns
 */
export async function fetchAvailablesSlots(
  day: dayjs.Dayjs,
  serviceId: number,
): Promise<Array<DaySlots>> {
  const res = await fetch(
    `http://localhost:3333/slots?month=${dayjs(day).format('YYYY-MM')}&service_id=${serviceId}`,
  )
  if (!res.ok) throw new Error('Network error')
  return await res.json()
}
