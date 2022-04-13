import { createContext } from 'react'

import { TimerStatusType } from 'libs/types/pomodoroTimerTypes'

export const TimerStatusContext = createContext<TimerStatusType>('executable')
