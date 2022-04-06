import styled, { css } from 'styled-components'

import { color } from 'constants/index'
import { StyledDivProps } from 'types/ComponentTypes'

export const StyledDiv = styled.div<StyledDivProps>`
  ${props => 
    css`
      ${props.width && `width: ${props.width};`}
      ${props.height && `height: ${props.height};`}
      ${props.backgroundColor && `background-color: ${color[props.backgroundColor]};`}
      ${props.textAlign && `text-align: ${props.textAlign};`}
    `
  }
`