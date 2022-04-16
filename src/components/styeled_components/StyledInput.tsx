import styled, { css } from 'styled-components'

import { color, fontSize as fs } from 'libs/constants/index'
import { StyledInputProps } from 'libs/types/componentTypes'

export const StyledInput = styled.input<StyledInputProps>`
  border: 1px ${color.black} solid;
  border-radius: 8px;
  padding: 8px;
  ${({ fontSize = 'm', width = '100%' }) => 
    css`
      font-size: ${fs[fontSize]};
      width: ${width};
    `
  }
  &:focus{
    outline: 5px ${color.warning} solid;
  }
`