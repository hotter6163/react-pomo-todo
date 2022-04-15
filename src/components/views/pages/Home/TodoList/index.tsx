import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { Task } from './Task'
import { TasksContext } from 'components/providers/index'

export const TodoList: VFC = () => {
  const tasks = useContext(TasksContext)
  
  const tasksTSX = tasks.parents().map((task) => {
    return (
      <Task key={task.id} task={task} />
    )
  })
  
  return (
    <Wrapper>
      <ListArea>
        {tasksTSX}
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