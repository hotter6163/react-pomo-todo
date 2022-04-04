import React, { VFC } from 'react'

import { FlexContainer, BasicBox } from 'components/commons/index'

export const Home: VFC = () => {
  return (
    <FlexContainer>
      <BasicBox width={30}>テスト</BasicBox>
      <BasicBox width={50}>テスト</BasicBox>
    </FlexContainer>
  )
}
