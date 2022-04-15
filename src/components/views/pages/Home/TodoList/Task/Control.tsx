import React, { VFC } from 'react'
import styled from 'styled-components'

import { TaskType } from 'libs/types/todoListTypes'
import { Text, FlexContainer, FlexItem, ButtonSmall } from 'components/commons/index'
import { color } from 'libs/constants/index'

type Props = {
  task: TaskType
}

export const Control: VFC<Props> = ({ task }) => {
  return (
    <FlexContainer>
      <FlexItem width="30%" alignSelf="center">
        <Text fontSize="m" textAlign="center">{task.runTime / 3600}時間</Text>
      </FlexItem>
      <FlexItem width="70%" alignSelf="center" textAlign="center">
        <ButtonSmall color="normal">Edit</ButtonSmall>
        {!task.parent && <ButtonSmall color="normal">サブタスク</ButtonSmall>}
        <ButtonSmall color="danger">Delete</ButtonSmall>
      </FlexItem>
    </FlexContainer>
  )
}