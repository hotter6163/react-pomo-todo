import { SetValueType } from 'libs/types/commonTypes'
import { PomodoroConfig } from 'libs/classes/PomodoroConfig'

export type PomodoroStatusType = 'motion' | 'rest' | 'longRest'

export type PomodoroTimeType = {
  [key in PomodoroStatusType]: number
}

export type TimerStatusType = 'executable' | 'execution' | 'waiting'

export type TimerType = {
  timeoutId: number | undefined
  intevalId: number | undefined
}

export type SetMethodsType = {
  setPomodoroConfig: SetValueType<PomodoroConfig>
  setTime: SetValueType<number>
  setTimer: SetValueType<TimerType>
  setTimerStatus: SetValueType<TimerStatusType>
}