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
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined) 
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined) 
  const [executeNum, setExecuteNum] = useState<number>(0)
  
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
  
  const timeoutMethod = (): void => {
    console.log('call timeoutMethod')
    if (timeoutId) clearTimeout(timeoutId)
    if (intervalId) clearInterval(intervalId)
    setTimeoutId(undefined)
    setIntervalId(undefined)
    setTimerStatus('executable')
  }
  
  const intervalMethod = (): void => {
    setTime((pre) => pre - 1)
  }
  
  const toExecution = () => {
    console.log(`time: ${time}, type: ${typeof time}`)
    const resultTimeout: number = window.setTimeout(timeoutMethod, 10000)
    setTimeoutId((pre) => {
      console.log(pre)
      console.log(resultTimeout)
      return resultTimeout
    })
    console.log(timeoutId)
    
    const resultInterval: number = window.setInterval(intervalMethod, 1000)
    setIntervalId(resultInterval)
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
        console.log('effectFuntion change executable')
        toExecutable()
        break
      case 'execution':
        console.log('effectFuntion change execution')
        toExecution()
        console.log(timeoutId)
        break
      case 'waiting':
        console.log('effectFuntion change waiting')
        toWaiting()
        break
    }
    return () => {
      console.log('unmount PomodoroTimer')
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