import React, { VFC, ReactNode, useContext } from 'react'
import styled, { css } from 'styled-components'

import { WindowWidthContext } from 'components/providers'

type Props = {
  children: ReactNode,
  width: number,
}

export const BasicBox: VFC<Props> = ({ children, width }) => {
  return (
    <Wrapper width={width}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<Omit<Props, 'children'>>`
  ${props => { 
    const { windowWidth } = useContext(WindowWidthContext) 
    
    return css`
      width: ${Math.floor(windowWidth*props.width/100)}px;
    `
  }}
`