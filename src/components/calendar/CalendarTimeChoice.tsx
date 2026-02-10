import type { ReactNode } from 'react'
import type { Slot } from './type'

type CalendarTimeChoiceType = {
  slot: Slot
  selectedSlot: Slot | undefined
  onClick: (slot: Slot) => void
  children: ReactNode
}
export default function CalendarTimeChoice({
  slot,
  selectedSlot,
  onClick,
  children,
}: CalendarTimeChoiceType) {
  return selectedSlot === slot ? (
    <p
      onClick={() => onClick(slot)}
      className="border bg-emerald-50 border-emerald-500 text-emerald-700 hover:cursor-pointer rounded-lg p-1 text-center shadow-sm hover:scale-105 transition duration-150 cursor-pointer hover:shadow-md"
    >
      {children}
    </p>
  ) : (
    <p
      onClick={() => onClick(slot)}
      className="border rounded-lg p-1 text-center shadow-sm hover:scale-105 transition duration-150 cursor-pointer hover:shadow-md"
    >
      {children}
    </p>
  )
}
