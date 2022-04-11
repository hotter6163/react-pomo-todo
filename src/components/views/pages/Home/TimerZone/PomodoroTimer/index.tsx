import React, { VFC, useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import { Timer } from './Timer'
import { ControlButtons } from './ControlButtons/index'
import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { TimerStatusContext, TimeContext } from 'components/providers/index'

type PomodoroStatusType = 'motion' | 'rest' | 'longRest'
type PomodoroOrederType = [PomodoroStatusType, PomodoroStatusType, PomodoroStatusType, PomodoroStatusType, PomodoroStatusType, PomodoroStatusType, PomodoroStatusType, PomodoroStatusType]

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

type PomodoroTimeType = {
  [key in PomodoroStatusType]: number
}
const pomodoroTime: PomodoroTimeType = {
  motion: 10,
  rest: 3,
  longRest: 5,
}

export const PomodoroTimer: VFC = React.memo(() => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined) 
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined) 
  const [executeNum, setExecuteNum] = useState<number>(-1)
  
  const { timerStatus, setTimerStatus } = useContext(TimerStatusContext)
  const { time, setTime } = useContext(TimeContext)
  
  // マウント時、timerStatusがexecutableになった後の処理
  const toExecutable = () => {
    setExecuteNum((pre) => pre + 1)
    let pomodoreStatus: PomodoroStatusType = pomodoroOrder[executeNum % pomodoroOrder.length]
    if (time !== 0 && pomodoroOrder[executeNum % pomodoroOrder.length] !== 'motion') {
      setExecuteNum(0)
      pomodoreStatus = 'motion'
    }
    
    setTime(pomodoroTime[pomodoreStatus])
  }
  
  const toExecution = () => {
    setTimeoutId(() => setTimeout(() => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
      setTimeoutId(undefined)
      setIntervalId(undefined)
      setTimerStatus('executable')
    }, time))
    setIntervalId(() => setInterval(() => setTime((pre) => pre - 1), 1000))
  }
  
  const toWaiting = () => {
    if (timeoutId) clearTimeout(timeoutId)
    if (intervalId) clearInterval(intervalId)
    
    setTimeoutId(undefined)
    setIntervalId(undefined)
  }
  
  const effectFuntion = () => {
    switch (timerStatus) {
      case 'executable':
        toExecutable()
        break
      case 'execution':
        toExecution()
        break
      case 'waiting':
        toWaiting()
        break
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectFuntion, [timerStatus])
  
  return (
    <Wrapper>
      <Timer />
      <ControlButtons />
    </Wrapper>
  )
})

const Wrapper = styled(StyledDiv)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`