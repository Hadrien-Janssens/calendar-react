import { BadgeEuro, CalendarDays, HandPlatter } from 'lucide-react'

export default function Stepper({ currentStep, totalStep }) {
  return (
    <div className="w-full pb-3 border-b">
      {/* LIGNE + ICONES */}
      <div className="flex items-center gap-1 w-full px-7">
        {/* Step 1 */}
        <div className="relative z-10 flex justify-center items-center w-10 h-10 rounded-full border-emerald-400  bg-emerald-400 p-1.5 ">
          <HandPlatter className="text-emerald-50 " />
        </div>

        <div className="flex-1 h-0.5 bg-emerald-400" />

        {/* Step 2 */}
        <div className="relative z-10 flex justify-center items-center w-10 h-10 rounded-full border-2 border-blue-400 bg-blue-50 p-1.5">
          <CalendarDays className="text-blue-400" />
        </div>

        <div className="flex-1 h-0.5 bg-neutral-300" />

        {/* Step 3 */}
        <div className="relative z-10 flex justify-center items-center w-10 h-10 rounded-full border bg-white p-1.5">
          <BadgeEuro className="text-neutral-500" />
        </div>
      </div>

      {/* TEXTES */}
      <div className="flex justify-between mt-1 text-center">
        <div className="w-24">
          <p className="text-sm font-semibold">Service</p>
          <p className="text-xs font-extralight">Choisis un service</p>
        </div>

        <div className="w-24">
          <p className="text-sm font-semibold">Réserve</p>
          <p className="text-xs font-extralight">Choisis une disponibilité</p>
        </div>

        <div className="w-24">
          <p className="text-sm font-semibold">Paiement</p>
          <p className="text-xs font-extralight">Payer en toute sécurité</p>
        </div>
      </div>
    </div>
  )
}
