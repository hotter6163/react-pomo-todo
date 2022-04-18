import React, { VFC, useContext } from 'react'
 
import { TaskType } from 'libs/types/todoListTypes'
import { Text, FlexContainer, FlexItem, ButtonSmall } from 'components/commons/index'
import { TodoListMethodsContext, TasksContext } from 'components/providers/index'
import { Tasks } from 'libs/classes/Tasks'
import { round } from 'libs/functions/calculation'

type Props = {
  task: TaskType
}

export const Control: VFC<Props> = ({ task }) => {
  const { setEditTask, setTasks } = useContext(TodoListMethodsContext)
  const tasks = useContext(TasksContext)
  
  const addAction = () => {
    setEditTask({
      action: 'add',
      target: task.id
    })
  }
  
  const editAction = () => {
    setEditTask({
      action: 'edit',
      target: task.id
    })
  }
  
  const deleteAction = () => {
    if (!window.confirm(`Task:${task.value}を削除してもよろしいですか？`)) return
    const cloneTasks = Object.assign(new Tasks(), tasks)
    cloneTasks.deleteTask(task.id)
    setTasks(cloneTasks)
  }
  
  return (
    <FlexContainer>
      <FlexItem width="30%" alignSelf="center">
        <Text fontSize="m" textAlign="center">{round(task.runTime / 3600, -1)}時間</Text>
      </FlexItem>
      <FlexItem width="70%" alignSelf="center" textAlign="center">
        {!task.parent && <ButtonSmall color="normal" onClick={addAction}>Add Sub</ButtonSmall>}
        <ButtonSmall color="normal" onClick={editAction}>Edit</ButtonSmall>
        <ButtonSmall color="danger" onClick={deleteAction}>Delete</ButtonSmall>
      </FlexItem>
    </FlexContainer>
  )
}