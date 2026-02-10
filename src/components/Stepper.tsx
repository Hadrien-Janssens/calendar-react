import { BadgeEuro, CalendarDays, HandPlatter } from 'lucide-react'
import Step from './Step'

export default function Stepper({
  followStep,
  step,
}: {
  followStep: (stepNumber: number) => void
  step: number
}) {
  return (
    <div className="w-full pb-3 border-b">
      {/* LIGNE + ICONES */}
      <div className="flex items-center gap-1 w-full px-7">
        {/* Step 1 */}
        <Step followStep={followStep} step={0} currentStep={step}>
          <HandPlatter />
        </Step>

        {/* Step 2 */}
        <Step followStep={followStep} step={1} currentStep={step}>
          <CalendarDays />
        </Step>

        {/* Step 3 */}
        <Step
          followStep={followStep}
          step={2}
          currentStep={step}
          lastStep={true}
        >
          <BadgeEuro />
        </Step>
      </div>

      {/* TEXTES */}
      <div className="flex justify-between mt-1 text-center">
        <div className="w-24">
          <p className="text-sm font-semibold">Service</p>
          <p className="text-xs font-extralight">Choisis un service</p>
        </div>

        <div className="w-24">
          <p className="text-sm font-semibold">Réservation</p>
          <p className="text-xs font-extralight">Choisis une disponibilité</p>
        </div>

        <div className="w-24">
          <p className="text-sm font-semibold">Paiement</p>
          <p className="text-xs font-extralight">Paye en toute sécurité</p>
        </div>
      </div>
    </div>
  )
}
