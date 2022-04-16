import React, { VFC, useContext, useState, ChangeEvent } from 'react'

import { FlexContainer, FlexItem, ButtonSmall } from 'components/commons/index'
import { StyledInput } from 'components/styeled_components/StyledInput'
import { actionText, ActionType } from 'libs/types/todoListTypes'
import { TodoListMethodsContext, TasksContext } from 'components/providers/index'
import { Tasks } from 'libs/classes/Tasks'

type Props = {
  action: ActionType
  beforeValue?: string
  isChild?: boolean
  target: string
}

export const EditTaskForm: VFC<Props> = React.memo(({ action, beforeValue, isChild=false, target }) => {
  const flexItemSize = {
    form: !isChild ? "100%" : "97%",
    input: !isChild ? "65%" : "64%",
    buttons: !isChild ? "35%" : "36%",
  }
  
  const tasks = useContext(TasksContext)
  const { setEditTask, setTasks } = useContext(TodoListMethodsContext)
  const [inputValue, setInputValue] = useState<string>(!!beforeValue ? beforeValue : '')
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  
  const editAction = () => {
    const cloneTasks = Object.assign(new Tasks(), tasks)
    cloneTasks.editTasks(action, target, inputValue)
    setTasks(cloneTasks)
    setEditTask(undefined)
  }
  
  const cancelAction = () => {
    setEditTask(undefined)
  }
  
  return (
    <FlexContainer justifyContent="flex-end">
      <FlexItem width={flexItemSize.form}>
        <FlexContainer>
          <FlexItem width={flexItemSize.input} alignSelf="center">
            <StyledInput fontSize="s" value={inputValue} onChange={handleChange} />
          </FlexItem>
          <FlexItem width={flexItemSize.buttons} textAlign="center">
            <ButtonSmall color="primary" onClick={editAction} disabled={inputValue === ''}>{actionText[action]}</ButtonSmall>
            <ButtonSmall color="warning" onClick={cancelAction}>cancel</ButtonSmall>
          </FlexItem>
        </FlexContainer>
      </FlexItem>
    </FlexContainer>
  )
})
