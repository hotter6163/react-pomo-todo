import React, { VFC } from 'react'
import styled from 'styled-components'

import { WrapperText } from 'components/commons/index'
import { color } from 'constants/index'

type Proops = {
  title: string
}

export const HeaderTextLogo: VFC<Proops> = ({ title }) => {
  return (
    <Wrapper fontSize="xl">{title}</Wrapper>
  )
}

const Wrapper = styled(WrapperText)`
  color: ${color.gray};
`