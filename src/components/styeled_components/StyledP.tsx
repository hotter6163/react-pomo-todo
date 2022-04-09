import styled, { css } from 'styled-components'

import { color } from 'libs/constants/index'
import { fontSize } from 'libs/constants/Size'
import { StyledPProps } from 'libs/types/ComponentTypes'

export const StyledP = styled.p<StyledPProps>`
  ${props => 
    css`
      ${props.color && `color: ${color[props.color]};`}
      ${props.fontSize && `font-size: ${fontSize[props.fontSize]};`}
      ${props.textAlign && `text-align: ${props.textAlign};`}
    `
  }
`