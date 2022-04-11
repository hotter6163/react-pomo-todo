import styled, { css } from 'styled-components'

import { color } from 'libs/constants/index'
import { StyledDivProps } from 'libs/types/componentTypes'

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