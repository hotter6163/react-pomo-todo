import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { fontSize, color } from 'libs/constants/index'
import { TodoListMethodsContext } from 'components/providers/index'

export const AddFormButton: VFC = () => {
  const { setEditTask } = useContext(TodoListMethodsContext)
  
  const onClick = () => {
    setEditTask({
      action: 'add',
      target: 'master',
    })
  }
  
  return (
    <Button onClick={onClick}>新しいタスクを追加する</Button>
  )
}

const Button = styled.button`
  width: 100%;
  font-size: ${fontSize.m};
  border: 1px ${color.gray} solid;
  border-radius: 8px;
  margin: 0.3rem;
  padding: 0.3rem;
`