import CalendarTimeChoice from './CalendarTimeChoice'
import type { ServiceType } from '@/type/serviceType'

export default function CalendarChoices({
  selectedService,
}: {
  selectedService: ServiceType | null
}) {
  // TODO: Fetch les horaires sur base de la configue du dashboard
  // attention mon calendar a besoin de savoir combien de crénaux sont disponible pour afficher les bonnes couleurs. donc calendar doit plus fetch des events via /event et juste renvoyer un nombre d'events, ça sert a rien.
  // il doit fetch les disponibilités à /time-slot, et pour ça il doit donner la durée de du service. de la, le back va calculer les slots disponible pour cette durée (et recuperer les events google pour ça) puis va juste renvoyer un nombre de slots et c'est ce nombre qui déterminera la couleur du jour ( vert = libre, jaune = moyen, rouge=complet)

  console.log(selectedService)

  // ensuite donner les crénaux disponibles suivant le service
  return (
    <div className="space-y-2 ">
      <CalendarTimeChoice>17h00 - 18h00</CalendarTimeChoice>
      <CalendarTimeChoice>18h00 - 19h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>

      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
      <CalendarTimeChoice>19h00 - 20h00</CalendarTimeChoice>
    </div>
  )
}
