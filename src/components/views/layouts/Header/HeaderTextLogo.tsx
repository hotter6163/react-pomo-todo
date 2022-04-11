import React, { VFC } from 'react'

import { StyledP } from 'components/styeled_components/StyledP'

type Proops = {
  title: string
}

export const HeaderTextLogo: VFC<Proops> = ({ title }) => {
  return (
    <StyledP fontSize="l" color="gray">{title}</StyledP>
  )
}
