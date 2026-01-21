import CalendarTimeChoice from './CalendarTimeChoice'

export default function CalendarChoices() {
  // TODO: Fetch les horaires sur base de la configue du dashboard
  const HORAIRE = [
    { dayOfWeek: 0, startTime: '9:30', endTime: '12:30' },
    { dayOfWeek: 0, startTime: '13:00', endTime: '18:00' },
    { dayOfWeek: 1, startTime: '9:30', endTime: '18:00' },
    { dayOfWeek: 2, startTime: '9:30', endTime: '12:00' },
    { dayOfWeek: 3, startTime: '9:30', endTime: '18:00' },
    { dayOfWeek: 4, startTime: '9:30', endTime: '18:00' },
    { dayOfWeek: 5, startTime: '9:30', endTime: '18:00' },
    { dayOfWeek: 6, startTime: '9:30', endTime: '18:00' },
  ]

  // ensuite donner les crénaux disponibles suivant le service
  return (
    <div className="space-y-2 ">
      <CalendarTimeChoice>17h00 - 18h00</CalendarTimeChoice>
      <CalendarTimeChoice>18h00 - 19h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
    </div>
  )
}
