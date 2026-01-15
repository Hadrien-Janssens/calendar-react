import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import Calendar from '@/components/Calendar'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Calendar />
    </div>
  )
}
