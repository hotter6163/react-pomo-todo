import React, { VFC } from 'react'
import styled from 'styled-components'

export const TodoList: VFC = () => {
  return (
    <Wrapper>
      <ListArea>
        
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