import React, { VFC } from 'react'
import styled from 'styled-components'

import { Timer } from './Timer'
import { ControlButtons } from './ControlButtons/index'
import { StyledDiv } from 'components/styeled_components/StyledDiv'

export const PomodoroTimer: VFC = React.memo(() => {
  console.log('render Pomodoro')
  
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