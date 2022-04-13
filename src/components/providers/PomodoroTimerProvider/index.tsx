import React, { VFC, ReactNode, createContext, useState } from 'react'

import { TimeContext } from './TimeContext'
import { TimerContext } from './TimerContext'
import { PomodoroConfigContext } from './PomodoroConfigContext'
import { TimerStatusContext } from './TimerStatusContext'
import { SetMethodsType, TimerType, TimerStatusType } from 'libs/types/pomodoroTimerTypes'
import { PomodoroConfig } from 'libs/classes/PomodoroConfig'


export const SetMethodsContext = createContext<SetMethodsType>({} as SetMethodsType)

export const PomodoroTimerProvider: VFC<{ children: ReactNode }> = React.memo(({ children }) => {
  console.log('render PomodoroTimerProvider')
  
  const [time, setTime] = useState<number>(0)
  const [timer, setTimer] = useState<TimerType>({ intevalId: undefined, timeoutId: undefined })
  const [pomodoroConfig, setPomodoroConfig] = useState<PomodoroConfig>(new PomodoroConfig())
  const [timerStatus, setTimerStatus] = useState<TimerStatusType>('executable')
  const setMethods: SetMethodsType = {
    setPomodoroConfig, setTime, setTimer, setTimerStatus
  }
  
  return (
    <SetMethodsContext.Provider value={setMethods}>
      <PomodoroConfigContext.Provider value={pomodoroConfig}>
        <TimerContext.Provider value={timer}>
          <TimeContext.Provider value={time}>
            <TimerStatusContext.Provider value={timerStatus}>
              {children}
            </TimerStatusContext.Provider>
          </TimeContext.Provider>
        </TimerContext.Provider>
      </PomodoroConfigContext.Provider>
    </SetMethodsContext.Provider>
  )
})