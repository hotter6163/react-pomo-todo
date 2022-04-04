import React, { VFC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { JustifyContentValue } from 'types/CssValueTypes'

type Props = {
  children: ReactNode,
  justifyContent?: JustifyContentValue,
}

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

