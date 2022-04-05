import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { fontSize as fs } from 'constants/index'
import { TextProps as Props } from 'components/commons/Types'

export const Text: VFC<Props> = ({ fontSize, children }) => {
  return (
    <Wrapper fontSize={fontSize}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.p<Omit<Props, 'children'>>`
  ${props =>
    css`font-size: ${fs[props.fontSize]}`
  }
`