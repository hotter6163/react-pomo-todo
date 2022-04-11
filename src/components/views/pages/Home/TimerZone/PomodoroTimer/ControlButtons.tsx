import React, { VFC } from 'react'
import styled from 'styled-components'

import { ButtonMiddle } from 'components/commons/index'
import { StyledDiv } from 'components/styeled_components/StyledDiv'

export const ControlButtons: VFC = () => {
  return (
    <Wrapper textAlign="center">
      <ButtonMiddle color="primary">STARE</ButtonMiddle>
    </Wrapper>
  )
}

const Wrapper = styled(StyledDiv)`
  
`