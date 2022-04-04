import React, { VFC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: ReactNode,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around',
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
  padding: 1rem;
  ${props => 
    css`justify-content: ${props.justifyContent};`
  }
`