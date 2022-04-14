import { createContext } from 'react'

import { TimerType } from 'libs/types/pomodoroTimerTypes'

export const TimerIdsContext = createContext<TimerType>({timeoutId: undefined, intervalId: undefined})