import React, { VFC } from 'react'

import { FlexContainer, FlexItem } from 'components/commons/index'

export const Home: VFC = () => {
  return (
    <FlexContainer>
      <FlexItem width="30%" backgroundColor="gray">コンテンツ1</FlexItem>
      <FlexItem width="70%" backgroundColor="lightBlue">コンテンツ2</FlexItem>
    </FlexContainer>
  )
}
