import React, { createContext, VFC ,ReactNode } from "react"

type PomodoroStatusType = 'motion' | 'rest' | 'longRest'
type PomodoroOrederType = [
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType, 
  PomodoroStatusType
]

type PomodoroTimeType = {
  [key in PomodoroStatusType]: number
}

type ContextType = {
  pomodoroTime: PomodoroTimeType
  pomodoroOrder: PomodoroOrederType
}

type Props = {
  children: ReactNode,
}

export const PomodoroConstantsContext = createContext<ContextType>({} as ContextType)

export const PomodoroConstantsProvider: VFC<Props> = React.memo(({ children }) => {
  console.log('render PomodoroConstantsProvider')
  
  const pomodoroOrder: PomodoroOrederType = [
    'motion',
    'rest',
    'motion',
    'rest',
    'motion',
    'rest',
    'motion',
    'longRest',
  ]
  
  const pomodoroTime: PomodoroTimeType = {
    motion: 10,
    rest: 3,
    longRest: 5,
  }
  
  return (
    <PomodoroConstantsContext.Provider value={{ pomodoroOrder, pomodoroTime }}>
      {children}
    </PomodoroConstantsContext.Provider>
  )
})