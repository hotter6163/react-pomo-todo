import React, { VFC } from 'react'
import styled from 'styled-components'

import { Text } from 'components/index'
import { color } from 'constants/index'

type Proops = {
  title: string
}

export const HeaderTextLogo: VFC<Proops> = ({ title }) => {
  return (
    <Wrapper fontSize="l">{title}</Wrapper>
  )
}

const Wrapper = styled(Text)`
  color: ${color.darkGray};
`