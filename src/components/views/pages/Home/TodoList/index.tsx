import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { ActionType } from 'libs/types/todoListTypes'
import { Task } from './Task/index'
import { TaskBox } from './Task/TaskBox'
import { TasksContext, EditTaskContext } from 'components/providers/index'
import { EditTaskForm } from './Task/EditTaskForm'

export const TodoList: VFC = () => {
  const tasks = useContext(TasksContext)
  const editTask = useContext(EditTaskContext)
  
  const tasksTSX = tasks.parents().map((task) => {
    return (
      <Task key={task.id} task={task} />
    )
  })
  
  let showForm: ActionType | undefined
  if (editTask?.target === "master") {
    showForm = editTask.action
  }
  
  return (
    <Wrapper>
      <ListArea>
        {tasksTSX}
        {showForm === 'add' && (
          <TaskBox>
            <EditTaskForm action="add" target="master" />
          </TaskBox>
        )}
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