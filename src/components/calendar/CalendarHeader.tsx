// LIB
import dayjs from 'dayjs'

// COMPONENT
import CalendarHeaderButton from './CalendarHeaderButton'
import type { Dispatch, SetStateAction } from 'react'

type CalendarHeaderProps = {
  prevMonth: () => void
  nextMonth: () => void
  currentDate: dayjs.Dayjs
  setCurrentDate: Dispatch<SetStateAction<dayjs.Dayjs>>
}

export default function CalendarHeader({
  prevMonth,
  nextMonth,
  currentDate,
  setCurrentDate,
}: CalendarHeaderProps) {
  const followMonth = (index: number) => {
    setCurrentDate(dayjs().month(index))
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <CalendarHeaderButton onClick={prevMonth}>
          précédent
        </CalendarHeaderButton>
        <h2 className="text-lg font-semibold mb-2 text-center">
          <select
            value={currentDate.month()}
            onChange={(e) => followMonth(parseInt(e.target.value))}
          >
            {Array.from({ length: 12 }).map((_, index) => {
              return (
                <option key={index} value={index}>
                  {currentDate.month(index).format('MMMM')}
                </option>
              )
            })}
          </select>

          {currentDate.format('YYYY')}
        </h2>
        <CalendarHeaderButton onClick={nextMonth}>suivant</CalendarHeaderButton>
      </div>
    </>
  )
}
