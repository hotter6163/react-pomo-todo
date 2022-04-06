import styled, { css } from 'styled-components'

import { color, fontSize } from 'constants/index'
import { StyledPProps } from 'types/ComponentTypes'

export const StyledP = styled.p<StyledPProps>`
  ${props => 
    css`
      ${props.color && `color: ${color[props.color]};`}
      ${props.fontSize && `font-size: ${fontSize[props.fontSize]};`}
      ${props.textAlign && `text-align: ${props.textAlign};`}
    `
  }
`