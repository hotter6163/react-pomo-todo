import React, { VFC } from 'react'

import { FlexContainer, FlexItem, Text } from 'components/commons/index'

export const Home: VFC = () => {
  return (
    <FlexContainer>
      <FlexItem width="30%" backgroundColor="gray">
        <Text fontSize="l" textAlign="center">コンテンツ1</Text>
      </FlexItem>
      <FlexItem width="70%" backgroundColor="lightBlue">
        <Text fontSize="l" textAlign="center">コンテンツ1</Text>
      </FlexItem>
    </FlexContainer>
  )
}
