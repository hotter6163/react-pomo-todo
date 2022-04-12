import React, { VFC, ReactNode } from 'react'

import { TimeProveider } from './TimeProvider'
import { TimerStatusProveider } from './TimerStatusProvider'
import { PomodoroConstantsProvider } from './PomodoroConstantsProvider'

export const PomodoroTimerProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimeProveider>
      <PomodoroConstantsProvider>
        <TimerStatusProveider>
         {children}
        </TimerStatusProveider>
      </PomodoroConstantsProvider>
    </TimeProveider>
  )
} 