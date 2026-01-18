import { createFileRoute } from '@tanstack/react-router'
import Calendar from '@/components/calendar/Calendar'
import About from '@/components/About'
import Services from '@/components/Services'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      {/* <Calendar /> */}
      <Contact />
      <Footer />
    </div>
  )
}
