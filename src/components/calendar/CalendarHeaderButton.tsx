import type { ReactElement } from 'react'

type calendarHeaderButtonType = {
  children: ReactElement
  onClick: () => void
}
export default function CalendarHeaderButton({
  children,
  onClick,
}: calendarHeaderButtonType) {
  return (
    <button onClick={onClick} className="border rounded-sm py-0 px-3 text-xs">
      {children}
    </button>
  )
}
