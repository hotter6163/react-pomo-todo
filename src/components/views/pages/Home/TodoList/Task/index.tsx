import React, { VFC, useContext } from 'react'

import { TaskType, ActionType } from 'libs/types/todoListTypes'
import { Text, FlexContainer, FlexItem } from 'components/commons/index'
import { Control } from './Control'
import { TasksContext, EditTaskContext } from 'components/providers/index'
import { TaskBox } from './TaskBox'
import { EditTaskForm } from './EditTaskForm'

type Props = {
  task: TaskType
}

export const Task: VFC<Props> = React.memo(({ task }) => {
  const tasks = useContext(TasksContext)
  const editTask = useContext(EditTaskContext)
  
  const childrenTSX = tasks.children(task.id).map((task) => {
    return (
      <Task key={task.id} task={task} />
    )
  })
  
  let showForm: ActionType | undefined
  if (task.id === editTask?.target) {
    showForm = editTask.action
  }
  
  return (
    <>
      <TaskBox id={task.id}>
        {(() => {
          if (showForm !== 'edit') {
            return (
              <FlexContainer justifyContent="flex-end">
                <FlexItem width={!task.parent ? '50%' : '47%'} alignSelf="center">
                  <Text fontSize='m'>{task.value}</Text>
                </FlexItem>
                <FlexItem width="50%" alignSelf="center">
                  <Control task={task} />
                </FlexItem>
              </FlexContainer>
            )
          } else {
            return (
              <EditTaskForm action="edit" target={task.id} isChild={!!task.parent} beforeValue={task.value} />
            )
          }
        })()}
      </TaskBox>
      {childrenTSX}
      {showForm === 'add' && (
        <TaskBox>
          <EditTaskForm action="add" target={task.id} isChild={true} />
        </TaskBox>
      )}
    </>
  )
})
