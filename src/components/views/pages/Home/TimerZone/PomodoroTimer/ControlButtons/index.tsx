import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { TimerStatusContext, SetMethodsContext } from 'components/providers/index'

import { ExecutableButtons } from './ExecutableButtons'
import { ExecutionButtons } from './ExecutionButtons'
import { WaitingButtons } from './WaitingButtons'

export const ControlButtons: VFC = React.memo(() => {
  const { setTimerStatus }  = useContext(SetMethodsContext)
  const timerStatus = useContext(TimerStatusContext)
  
  const startAction = () => {
    setTimerStatus('execution')
  }
  
  const pauseAction = () => {
    setTimerStatus('waiting')
  }
  
  const stopAction = () => {
    if (!window.confirm('ポモドーロタイマーを停止しますか？')) return
    setTimerStatus('executable')
  }
  
  return (
    <Wrapper textAlign="center">
      {timerStatus === 'executable' && (<ExecutableButtons startAction={startAction} />)}
      {timerStatus === 'execution' && (<ExecutionButtons pauseAction={pauseAction} />)}
      {timerStatus === 'waiting' && (<WaitingButtons startAction={startAction} stopAction={stopAction} />)}
    </Wrapper>
  )
})

const Wrapper = styled(StyledDiv)`
  
`