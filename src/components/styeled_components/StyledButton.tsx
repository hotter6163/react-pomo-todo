import styled, { css } from 'styled-components'

import { fontSize } from 'libs/constants/size'
import { StyledButtonProps } from 'libs/types/componentTypes'
import { } from 'libs/constants/buttonValues'

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ color, size }) => 
    css`
      font-size: ${fontSize[size]};
    `
  }
`