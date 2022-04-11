import styled, { css } from 'styled-components'

import { fontSize, color } from 'libs/constants/index'
import { StyledButtonProps } from 'libs/types/componentTypes'
import { TextAlignType } from 'libs/types/cssValueTypes'

export const StyledButton = styled.button<StyledButtonProps>`
  ${props => { 
    return css`
      font-size: ${fontSize[props.size]};
      background-color: ${color[props.color]};
      
    `}
  }
`