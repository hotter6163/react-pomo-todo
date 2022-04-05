import React, { VFC } from 'react'

import { FlexContainer, FlexItem } from 'components/commons/index'

export const Home: VFC = () => {
  return (
    <FlexContainer>
      <FlexItem width={30} order={2}>コンテンツ1</FlexItem>
      <FlexItem width={50} order={1}>コンテンツ2</FlexItem>
    </FlexContainer>
  )
}
