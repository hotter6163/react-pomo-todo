import { createContext } from 'react'

import { TimerType } from 'libs/types/pomodoroTimerTypes'

export const TimerContext = createContext<TimerType>({timeoutId: undefined, intevalId: undefined})