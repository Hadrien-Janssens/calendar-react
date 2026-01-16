import { createFileRoute } from '@tanstack/react-router'
import { CardService } from './partial/CardService'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h3>Service</h3>
      <CardService />
    </div>
  )
}
