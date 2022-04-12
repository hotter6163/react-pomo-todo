import React, { VFC, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { TimerStatusContext, PomodoroConstantsContext, TimeContext } from 'components/providers/index'

import { ExecutableButtons } from './ExecutableButtons'
import { ExecutionButtons } from './ExecutionButtons'
import { WaitingButtons } from './WaitingButtons'

export const ControlButtons: VFC = React.memo(() => {
  console.log('render ControlButtons')
  const { setTime } = useContext(TimeContext)
  const { timerStatus } = useContext(TimerStatusContext)
  const { pomodoroTime } = useContext(PomodoroConstantsContext)
  
  useEffect(() => {
    setTime(pomodoroTime.motion)
    console.log('useEffect')
  }, [pomodoroTime.motion, setTime])
  
  return (
    <Wrapper textAlign="center">
      {timerStatus === 'executable' && (<ExecutableButtons  />)}
      {timerStatus === 'execution' && (<ExecutionButtons />)}
      {timerStatus === 'waiting' && (<WaitingButtons />)}
    </Wrapper>
  )
})

const Wrapper = styled(StyledDiv)`
  
`