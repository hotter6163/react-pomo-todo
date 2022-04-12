import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { TimerStatusContext } from 'components/providers/index'

import { ExecutableButton } from './ExecutableButton'

export const ControlButtons: VFC = () => {
  const { timerStatus } = useContext(TimerStatusContext)
  
  return (
    <Wrapper textAlign="center">
      {timerStatus === 'executable' && (<ExecutableButton />)}
    </Wrapper>
  )
}

const Wrapper = styled(StyledDiv)`
  
`