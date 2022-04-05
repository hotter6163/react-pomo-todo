import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexItemProps as Props } from 'components/commons/Types'

export const FlexItem: VFC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`