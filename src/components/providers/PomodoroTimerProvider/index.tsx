import React, { VFC, ReactNode, createContext, useState } from 'react'

import { TimeContext } from './TimeContext'
import { TimerIdsContext } from './TimerIdsContext'
import { PomodoroConfigContext } from './PomodoroConfigContext'
import { TimerStatusContext } from './TimerStatusContext'
import { SetMethodsType, TimerType, TimerStatusType } from 'libs/types/pomodoroTimerTypes'
import { PomodoroConfig } from 'libs/classes/PomodoroConfig'


export const SetMethodsContext = createContext<SetMethodsType>({} as SetMethodsType)

export const PomodoroTimerProvider: VFC<{ children: ReactNode }> = React.memo(({ children }) => {
  const [pomodoroConfig, setPomodoroConfig] = useState<PomodoroConfig>(new PomodoroConfig())
  const [time, setTime] = useState<number>(0)
  const [timerIds, setTimerIds] = useState<TimerType>({ intervalId: undefined, timeoutId: undefined })
  const [timerStatus, setTimerStatus] = useState<TimerStatusType>('executable')
  const setMethods: SetMethodsType = {
    setPomodoroConfig, setTime, setTimerIds, setTimerStatus
  }
  
  return (
    <SetMethodsContext.Provider value={setMethods}>
      <PomodoroConfigContext.Provider value={pomodoroConfig}>
        <TimerIdsContext.Provider value={timerIds}>
          <TimeContext.Provider value={time}>
            <TimerStatusContext.Provider value={timerStatus}>
              {children}
            </TimerStatusContext.Provider>
          </TimeContext.Provider>
        </TimerIdsContext.Provider>
      </PomodoroConfigContext.Provider>
    </SetMethodsContext.Provider>
  )
})