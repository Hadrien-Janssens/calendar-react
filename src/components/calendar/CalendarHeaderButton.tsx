type calendarHeaderButtonType = {
  children: string
  onClick: () => void
}
export default function CalendarHeaderButton({
  children,
  onClick,
}: calendarHeaderButtonType) {
  return (
    <button onClick={onClick} className="border rounded-sm py-0.5 px-2 text-xs">
      {children}
    </button>
  )
}
