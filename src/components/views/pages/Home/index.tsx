import React, { VFC } from 'react'

import { FlexContainer, FlexItem, Text } from 'components/commons/index'
import { TimerZone } from "./TimerZone/index"

export const Home: VFC = () => {
  console.log('render Home')
  
  return (
    <FlexContainer>
      <FlexItem width="30%">
        <TimerZone />
      </FlexItem>
      <FlexItem width="70%" backgroundColor="gray">
        <Text fontSize="xl" textAlign="center">コンテンツ2</Text>
      </FlexItem>
    </FlexContainer>
  )
}
