import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type calendarModalContextType = {
  showCalendar: boolean
  setShowCalendar: Dispatch<SetStateAction<boolean>>
} | null

export const calendarModalContext =
  createContext<calendarModalContextType>(null)
