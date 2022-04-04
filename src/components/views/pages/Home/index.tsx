import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { FlexContainer } from 'components/commons/index'
import { color } from 'constants/index'

export const Home: VFC = () => {
  return (
    <FlexContainer justifyContent='flex-start'>
      <TestDiv width={30}/>
      <TestDiv width={30}/>
    </FlexContainer>
  )
}

const TestDiv = styled.div<{ width: number }>`
  height: 100px;
  background-color: ${color.gray};
  ${props =>
    css`width: ${Math.floor(window.innerWidth*props.width/100)}px;`
  }
`