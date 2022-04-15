import React, { VFC } from 'react'
import styled from 'styled-components'

import { Task } from './Task'
import { TaskType } from 'libs/types/todoListTypes'

export const TodoList: VFC = () => {
  const task: TaskType = {
    value: 'hoge',
    runTime: 1.5 * 60 * 60
  }
  
  return (
    <Wrapper>
      <ListArea>
        <Task task={task} />
      </ListArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`

const ListArea = styled.div`
  height: ${window.innerHeight - 160}px;
  overflow: auto;
  border-width: 8px;
  border-style: inset;
`