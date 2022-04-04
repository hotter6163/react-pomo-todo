import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { fontSize as fs, FontSizeType } from 'constants/index'

type Props = {
  fontSize: FontSizeType,
  children: string,
}

export const Text: VFC<Props> = ({ fontSize, children }) => {
  return (
    <Wrapper fontSize={fontSize}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.p<Omit<Props, 'children'>>`
  ${props =>
    css`font-size: ${fs[props.fontSize]}`
  }
`