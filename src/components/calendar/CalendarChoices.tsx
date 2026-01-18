import CalendarTimeChoice from './CalendarTimeChoice'

export default function CalendarChoices() {
  return (
    <div className="space-y-2 ">
      <CalendarTimeChoice>17h00 - 18h00</CalendarTimeChoice>
      <CalendarTimeChoice>18h00 - 19h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
    </div>
  )
}
