import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexItemProps as Props } from 'libs/types/componentTypes'
import { StyledDiv } from 'components/styeled_components/StyledDiv'

export const FlexItem: VFC<Props> = ({ children, width, backgroundColor, alignSelf, order }) => {
  return (
    <Wrapper backgroundColor={backgroundColor} width={width} alignSelf={alignSelf} order={order}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(StyledDiv)<Omit<Props, 'children'>>`
  ${props => 
    css`
      ${props.order && `order: ${props.order};`}
      ${props.alignSelf && `align-self: ${props.alignSelf};`}
    `
  }
`