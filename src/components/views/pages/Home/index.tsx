import React, { VFC } from 'react'

import { FlexContainer, FlexItem } from 'components/commons/index'
import { TimerZone } from "./TimerZone/index"
import { TodoList } from './TodoList/index'
import { TasksProvider } from 'components/providers/index'

export const Home: VFC = () => {
  return (
    <TasksProvider>
      <FlexContainer>
        <FlexItem width="30%" alignSelf="center">
          <TimerZone />
        </FlexItem>
        <FlexItem width="70%">
          <TodoList />
        </FlexItem>
      </FlexContainer>
    </TasksProvider>
  )
}
