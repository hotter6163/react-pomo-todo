import React, { VFC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { AlineValue } from 'types/CssValueTypes'

type Props = {
  children: ReactNode,
  order?: number,
  alignSelf?: AlineValue,
}

export const FlexItem: VFC<Props> = ({ children }) => {
  
}

const Wrapper = styled.div`
  
`