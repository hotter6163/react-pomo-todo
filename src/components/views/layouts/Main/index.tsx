import React, { VFC, ReactNode } from 'react'
import styled from 'styled-components'

import { bodySideMargin } from 'constants/index'

export const Main: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-left: ${bodySideMargin}px;
  margin-right: ${bodySideMargin}px;
`