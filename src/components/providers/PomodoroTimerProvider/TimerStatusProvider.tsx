import React, { VFC, useState, createContext, ReactNode } from 'react'

type TimerStatusType = 'execution' | 'executable' | 'waiting'

type ContextType = {
  timerStatus: TimerStatusType
  setTimerStatus: React.Dispatch<React.SetStateAction<TimerStatusType>>
}

export const TimerStatusContext = createContext<ContextType>({} as ContextType)

export const TimerStatusProveider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [timerStatus, setTimerStatus] = useState<TimerStatusType>('executable')
  
  const obj = { timerStatus, setTimerStatus }
  
  return (
    <TimerStatusContext.Provider value={obj}>
      {children}
    </TimerStatusContext.Provider>
  )
}