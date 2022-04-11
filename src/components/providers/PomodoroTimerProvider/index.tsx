import React, { VFC, ReactNode } from 'react'

import { TimeProveider } from './TimeProvider'
import { TimerStatusProveider } from './TimerStatusProvider'

export const PomodoroTimerProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimeProveider>
      <TimerStatusProveider>
       {children}
      </TimerStatusProveider>
    </TimeProveider>
  )
} 