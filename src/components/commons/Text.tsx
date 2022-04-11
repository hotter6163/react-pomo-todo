import React, { VFC } from 'react'

import { TextProps as Props } from 'libs/types/componentTypes'
import { StyledP } from 'components/styeled_components/StyledP'

export const Text: VFC<Props> = ({ fontSize, children, textAlign, inline=false }) => {
  return (
    <StyledP fontSize={fontSize} color="black" textAlign={textAlign} inline={inline}>
      {children}
    </StyledP>
  )
}
