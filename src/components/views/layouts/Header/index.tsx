import React, { VFC } from 'react'
import styled from 'styled-components'

import { HeaderTextLogo } from './HeaderTextLogo'

import { color } from 'libs/constants/index'

export const Header: VFC = () => {
  return (
    <WrapperHeaderTab>
      <HeaderTextLogo title='ポモドーロTODO' />
    </WrapperHeaderTab>
  )
}

const WrapperHeaderTab = styled.header`
  background-color: ${color.lightBlue};
  width: 100%;
  padding: 1rem;
`
