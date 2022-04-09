import React, { VFC } from 'react'

import { FlexContainer, FlexItem, Text } from 'components/commons/index'
import { PomodoroTimer } from "./PomodoroTimer/index"

export const Home: VFC = () => {
  return (
    <FlexContainer>
      <FlexItem width="30%">
        <PomodoroTimer />
      </FlexItem>
      <FlexItem width="70%" backgroundColor="gray">
        <Text fontSize="xxl" textAlign="center">コンテンツ2</Text>
      </FlexItem>
    </FlexContainer>
  )
}
