import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexContainerProps as Props } from 'types/ComponentTypes'

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
  flex-wrap: wrap;
  ${props => 
    css`justify-content: ${props.justifyContent};`
  }
`

