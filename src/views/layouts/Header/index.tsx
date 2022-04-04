import React, { VFC } from 'react'
import styled from 'styled-components'

import { HeaderTextLogo } from './HeaderTextLogo'

import { color } from 'constants/index'

export const Header: VFC = () => {
  return (
    <WrapperHeaderTab>
      <HeaderTextLogo title='ポモドーロTODO' />
    </WrapperHeaderTab>
  )
}

const WrapperHeaderTab = styled.header`
  background-color: ${color.deepSkyBlue};
  width: 100%;
  padding: 1.5rem;
`
