import React, { VFC } from 'react'

import { FlexContainer, FlexItem } from 'components/commons/index'
import { TimerZone } from "./TimerZone/index"
import { TodoList } from './TodoList/index'

export const Home: VFC = () => {
  console.log('render Home')
  
  return (
    <FlexContainer>
      <FlexItem width="30%">
        <TimerZone />
      </FlexItem>
      <FlexItem width="70%">
        <TodoList />
      </FlexItem>
    </FlexContainer>
  )
}
