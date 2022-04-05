import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexItemProps as Props } from 'components/commons/Types'
import { Wrapper as WrappeBasicBox } from "components/commons/BasicBox"

export const FlexItem: VFC<Props> = ({ children, width }) => {
  return (
    <Wrapper width={width}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(WrappeBasicBox)`
  
`