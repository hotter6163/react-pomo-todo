import styled, { css } from 'styled-components'

import { color } from 'libs/constants/index'

type Props = {
  removeBorderBottom?: boolean
}

export const TaskBox = styled.div<Props>`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
  ${props => css`border-bottom-style: ${props.removeBorderBottom ? 'none' : 'solid'}`}
`