type calendarHeaderButtonType = {
  children: string
}
export default function CalendarHeaderButton({
  children,
}: calendarHeaderButtonType) {
  return (
    <button className="border rounded-sm py-0.5 px-2 text-xs">
      {children}
    </button>
  )
}
