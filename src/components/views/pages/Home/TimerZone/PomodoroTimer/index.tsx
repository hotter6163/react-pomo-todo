import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { Timer } from './Timer'
import { ControlButtons } from './ControlButtons'
import { StyledDiv } from 'components/styeled_components/StyledDiv'

export const PomodoroTimer: VFC = () => {
  return (
    <Wrapper>
      <Timer minite={25}/>
      <ControlButtons />
    </Wrapper>
  )
}

const Wrapper = styled(StyledDiv)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`