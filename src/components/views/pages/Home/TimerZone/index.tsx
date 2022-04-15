import React, { VFC, useContext, ChangeEvent } from 'react'
import styled from 'styled-components'

import { StyledDiv } from "components/styeled_components/StyledDiv"
import { StyledDivProps } from "libs/types/componentTypes"
import { SelectBox } from 'components/commons/index'
import { PomodoroTimer } from './PomodoroTimer/index'
import { PomodoroTimerProvider } from 'components/providers/index'

import { SelectTaskContext, TodoListMethodsContext, TasksContext } from 'components/providers/index'

export const TimerZone: VFC = React.memo(() => {
  const tasks = useContext(TasksContext)
  const selectTask = useContext(SelectTaskContext)
  const { setSelectTask } = useContext(TodoListMethodsContext)
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectTask(e.target.value)
  }
  
  return (
    <Wrapper textAlign="center">
      <SelectBox handleValue={selectTask} handleMethod={handleChange} selectItems={tasks.selectItems()} width="80%" />
      <PomodoroTimerProvider>
        <PomodoroTimer />
      </PomodoroTimerProvider>
    </Wrapper>
  )
})

type WrapperProps = Required<Omit<StyledDivProps, 'width' | 'height' | 'backgroundColor'>>

const Wrapper = styled(StyledDiv)<WrapperProps>`
  padding: 1rem;
`