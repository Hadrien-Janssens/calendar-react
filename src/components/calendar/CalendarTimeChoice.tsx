type CalendarTimeChoiceType = {
  children: string
}
export default function CalendarTimeChoice({
  children,
}: CalendarTimeChoiceType) {
  return (
    <p className="border rounded-sm p-1 text-center shadow-sm hover:scale-105 transition duration-150 cursor-pointer hover:shadow-md">
      {children}
    </p>
  )
}
