import React, { VFC } from 'react'

import { TextProps as Props } from 'types/componentTypes'
import { StyledP } from 'components/styeled_components/StyledP'

export const Text: VFC<Props> = ({ fontSize, children, textAlign }) => {
  return (
    <StyledP fontSize={fontSize} color="black" textAlign={textAlign}>
      {children}
    </StyledP>
  )
}
