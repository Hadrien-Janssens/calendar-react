import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useRef } from 'react'

export default function Calendar() {
  const handleDateClick = (arg) => {
    // alert(`Jour : ${arg.dateStr}`)
  }

  const handleEventClick = (info) => {
    // alert(`Event : ${info.event.title}`)
  }

  const calendarRef = useRef(null)

  function goPrev() {
    calendarRef.current.getApi().prev()
  }

  function goNext() {
    calendarRef.current.getApi().next()
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={goPrev}>⬅️ Mois précédent</button>
        <button onClick={goNext}>Mois suivant ➡️</button>
      </div>
      <div className="my-calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{ left: '', center: 'title', right: '' }}
          weekends={false}
          events={[
            { title: 'event 1', date: '2026-01-01' },
            { title: 'event 2', date: '2026-01-02' },
          ]}
          selectable={true}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>
    </>
  )
}
