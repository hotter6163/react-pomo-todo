import React, { VFC } from 'react'
import styled, { css } from "styled-components"

import { SelectBoxProps } from 'libs/types/componentTypes'
import { color } from 'libs/constants/index'
import { fontSize } from 'libs/constants/size'

export const SelectBox: VFC<SelectBoxProps> = React.memo(({ handleValue, handleMethod, selectItems, width="50%" }) => {
  const Options = selectItems.map((item) => {
    return (
      <option value={item.value} key={item.id}>{item.title}</option>
    )
  })
  Options.unshift((
    <option value='' key=''>---------</option>
  ))
  
  return (
    <Wrapper value={handleValue} onChange={handleMethod} width={width}>
      {Options}
    </Wrapper>
  )
})

const Wrapper = styled.select<{ width: string }>`
  ${props => 
    css`width: ${props.width};`
  }
  border: 3px ${color.black} solid;
  border-radius: 10px;
  padding: 5px 30px 5px 10px;
  font-size: ${fontSize.s};
  margin-bottom: 20px;
`