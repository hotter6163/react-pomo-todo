import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexContainerProps as Props } from 'components/commons/Types'

export const FlexContainer: VFC<Props> = ({ children, justifyContent='space-around' }) => {
  return (
    <Wrapper justifyContent={justifyContent}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<Required<Omit<Props, 'children'>>>`
  display: flex;
  align-items: flex-start;
  ${props => 
    css`justify-content: ${props.justifyContent};`
  }
`

