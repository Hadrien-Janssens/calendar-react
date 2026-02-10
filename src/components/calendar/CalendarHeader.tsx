// LIB
import dayjs from 'dayjs'
// COMPONENT
import { MoveLeft, MoveRight } from 'lucide-react'
import CalendarHeaderButton from './CalendarHeaderButton'
// TYPE
import type { Dispatch, SetStateAction } from 'react'

type CalendarHeaderProps = {
  selectedDay: dayjs.Dayjs
  setSelectedDay: Dispatch<SetStateAction<dayjs.Dayjs>>
}

export default function CalendarHeader({
  selectedDay,
  setSelectedDay,
}: CalendarHeaderProps) {
  const nextMonth = () => {
    setSelectedDay((v) => v.add(1, 'month'))
  }

  const prevMonth = () => {
    if (!dayjs(selectedDay).subtract(1, 'month').isBefore(dayjs(), 'month')) {
      setSelectedDay((v) => v.subtract(1, 'month'))
    }
  }
  const followMonth = (index: number) => {
    if (!selectedDay.month(index).isBefore(dayjs(), 'month')) {
      setSelectedDay(selectedDay.month(index))
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <CalendarHeaderButton onClick={prevMonth}>
          <MoveLeft className="w-4 text-gray-500" />
        </CalendarHeaderButton>
        <h2 className="text-lg font-semibold mb-2 text-center">
          <select
            value={selectedDay.month()}
            onChange={(e) => followMonth(parseInt(e.target.value))}
          >
            {Array.from({ length: 12 }).map((_, index) => {
              return (
                <option key={index} value={index}>
                  {selectedDay.month(index).format('MMMM')}
                </option>
              )
            })}
          </select>

          {selectedDay.format('YYYY')}
        </h2>
        <CalendarHeaderButton onClick={nextMonth}>
          <MoveRight className="w-4 text-gray-500" />
        </CalendarHeaderButton>
      </div>
    </>
  )
}
