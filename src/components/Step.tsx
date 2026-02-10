import { cloneElement, isValidElement } from 'react'

type StepStatus = 'completed' | 'active' | 'inactive'
const getStepStatus = (stepIndex: number, currentStep: number): StepStatus => {
  if (stepIndex < currentStep) return 'completed'
  if (stepIndex === currentStep) return 'active'
  return 'inactive'
}

type StepProps = {
  followStep: (step: number) => void
  currentStep: number
  step: number
  children?: React.ReactElement<{ className?: string }> | React.ReactNode
  lastStep?: boolean
}

export default function Step({
  followStep,
  currentStep,
  step,
  children,
  lastStep = false,
}: StepProps) {
  const stepStyles = {
    completed: {
      container: 'bg-emerald-400 border-emerald-400',
      icon: 'text-emerald-50',
      line: 'bg-emerald-400',
    },
    active: {
      container: 'bg-blue-50 border-blue-400 border-2',
      icon: 'text-blue-400',
      line: 'bg-neutral-300',
    },
    inactive: {
      container: 'bg-white border-neutral-300',
      icon: 'text-neutral-400',
      line: 'bg-neutral-300',
    },
  }

  const status = getStepStatus(step, currentStep)
  const styles = stepStyles[status]

  return (
    <>
      <div
        className={`relative z-10 flex justify-center items-center w-10 h-10 rounded-full p-1.5 ${styles.container}`}
        onClick={() => followStep(step)}
      >
        {isValidElement(children)
          ? cloneElement(
              children as React.ReactElement<{ className?: string }>,
              {
                className: styles.icon,
              },
            )
          : children}
      </div>
      {/* LIGNE BETWEEN STEP  */}
      {!lastStep && <div className={`flex-1 h-0.5 ${styles.line}`} />}
    </>
  )
}
