import React, { VFC } from 'react'
import styled from 'styled-components'

import { HeaderTextLogo } from './HeaderTextLogo'

import { color } from 'libs/constants/index'

export const Header: VFC = () => {
  return (
    <Wrapper>
      <HeaderTextLogo title='ポモドーロTODO' />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: ${color.lightBlue};
  width: 100%;
  padding: 1rem;
`
