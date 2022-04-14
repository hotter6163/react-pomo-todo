import React, { VFC, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { TimerStatusContext, SetMethodsContext, TimeContext, PomodoroConfigContext } from 'components/providers/index'
import { PomodoroConfig } from 'libs/classes/PomodoroConfig' 

import { ExecutableButtons } from './ExecutableButtons'
import { ExecutionButtons } from './ExecutionButtons'
import { WaitingButtons } from './WaitingButtons'

export const ControlButtons: VFC = React.memo(() => {
  const { setTimerStatus, setTime, setPomodoroConfig }  = useContext(SetMethodsContext)
  const timerStatus = useContext(TimerStatusContext)
  const time = useContext(TimeContext)
  const pomodoroConfig = useContext(PomodoroConfigContext)
  
  const timeoutIdRef = useRef<number | undefined>(undefined)
  const intervalIdRef = useRef<number | undefined>(undefined)
  
  useEffect(() => {
    setTime(pomodoroConfig.setTime())
  }, [pomodoroConfig, setTime])
  
  const timerStop = () => {
    if (timeoutIdRef.current) window.clearInterval(timeoutIdRef.current)
    if (intervalIdRef.current) window.clearInterval(intervalIdRef.current)
    timeoutIdRef.current = undefined
    intervalIdRef.current = undefined
  }
  
  const startAction = () => {
    const timeoutId = window.setTimeout(() => {
      timerStop()
      setTime((prev) => prev - 1)
      const cloneConfig = Object.assign(new PomodoroConfig(), pomodoroConfig)
      cloneConfig.addCount()
      setPomodoroConfig(cloneConfig)
      setTimerStatus('executable')
    }, time * 1000)
    const intervalId = window.setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)
    
    timeoutIdRef.current = timeoutId
    intervalIdRef.current = intervalId

    setTimerStatus('execution')
  }
  
  const pauseAction = () => {
    timerStop()
    setTimerStatus('waiting')
  }
  
  const stopAction = () => {
    if (pomodoroConfig.nowStatus() === 'motion' && !window.confirm('ポモドーロタイマーを終了しますか？')) return 
    setTimerStatus('executable')
    const cloneConfig = Object.assign(new PomodoroConfig(), pomodoroConfig)
    if (pomodoroConfig.nowStatus() === 'motion') {
      cloneConfig.reset()
    } else {
      cloneConfig.addCount()
    }
    setPomodoroConfig(cloneConfig)
  }
  
  return (
    <Wrapper textAlign="center">
      {timerStatus === 'executable' && (<ExecutableButtons startAction={startAction} />)}
      {timerStatus === 'execution' && (<ExecutionButtons pauseAction={pauseAction} />)}
      {timerStatus === 'waiting' && (<WaitingButtons startAction={startAction} stopAction={stopAction} status={pomodoroConfig.nowStatus()} />)}
    </Wrapper>
  )
})

const Wrapper = styled(StyledDiv)`
  
`