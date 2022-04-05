import React, { VFC, useContext } from 'react'
import styled, { css } from 'styled-components'

import { WindowWidthContext } from 'components/providers'
import { BasicBoxProps as Props } from 'components/commons/Types'

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