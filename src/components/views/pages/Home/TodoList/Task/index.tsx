import React, { VFC } from 'react'
import styled from 'styled-components'

import { TaskType } from 'libs/types/todoListTypes'
import { Text, FlexContainer, FlexItem } from 'components/commons/index'
import { color } from 'libs/constants/index'
import { Control } from './Control'

type Props = {
  task: TaskType
}

export const Task: VFC<Props> = ({ task }) => {
  return (
    <>
      <Wrapper id={task.id}>
        <FlexContainer justifyContent="flex-end">
          <FlexItem width={!task.parent ? '50%' : '45%'} alignSelf="center">
            <Text fontSize='m'>{task.name}</Text>
          </FlexItem>
          <FlexItem width="50%" alignSelf="center">
            <Control task={task} />
          </FlexItem>
        </FlexContainer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
  border-bottom-style: solid;
`