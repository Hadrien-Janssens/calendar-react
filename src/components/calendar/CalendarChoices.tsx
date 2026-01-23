import CalendarTimeChoice from './CalendarTimeChoice'
import type { ServiceType } from '@/type/serviceType'

export default function CalendarChoices({
  selectedService,
}: {
  selectedService: ServiceType | null
}) {
  // TODO: Fetch les horaires sur base de la configue du dashboard

  console.log(selectedService)

  // ensuite donner les crénaux disponibles suivant le service
  return (
    <div className="space-y-2 ">
      <CalendarTimeChoice>17h00 - 18h00</CalendarTimeChoice>
      <CalendarTimeChoice>18h00 - 19h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
    </div>
  )
}
