import React, { VFC } from 'react'
import styled from 'styled-components'

import { TaskType } from 'libs/types/todoListTypes'
import { Text, FlexContainer, FlexItem, ButtonSmall } from 'components/commons/index'
import { color } from 'libs/constants/index'

type Props = {
  task: TaskType
}

export const Task: VFC<Props> = ({ task }) => {
  return (
    <Wrapper>
      <FlexContainer>
        <FlexItem width="50%" alignSelf="center">
          <Text fontSize='m'>{task.value}</Text>
        </FlexItem>
        <FlexItem width="50%" alignSelf="center">
          <FlexContainer>
            <FlexItem width="30%" alignSelf="center">
              <Text fontSize="m" textAlign="center">{task.runTime / 3600}時間</Text>
            </FlexItem>
            <FlexItem width="70%" alignSelf="center" textAlign="center">
              <ButtonSmall color="normal">Edit</ButtonSmall>
              <ButtonSmall color="normal">サブタスク</ButtonSmall>
              <ButtonSmall color="danger">Delete</ButtonSmall>
            </FlexItem>
          </FlexContainer>
        </FlexItem>
      </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
  border-bottom-style: solid;
`