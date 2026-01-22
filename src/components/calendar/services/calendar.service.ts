import type { GoogleEvent } from '@/type/googleEventType'

export async function fetchEvents(): Promise<Array<GoogleEvent>> {
  const res = await fetch('http://localhost:3333/events')
  if (!res.ok) throw new Error('Network error')
  return (await res.json()) as Array<GoogleEvent>
}
