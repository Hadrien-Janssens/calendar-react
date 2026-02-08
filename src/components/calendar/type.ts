type Slot = { start: string; end: string }

export type DaySlots = {
  date: string
  availableSlots: Array<Slot>
}
