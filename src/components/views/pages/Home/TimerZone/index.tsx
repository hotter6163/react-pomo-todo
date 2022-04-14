import React, { VFC, useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import { StyledDiv } from "components/styeled_components/StyledDiv"
import { StyledDivProps } from "libs/types/componentTypes"
import { SelectBox } from 'components/commons/index'
import { PomodoroTimer } from './PomodoroTimer/index'
import { PomodoroTimerProvider } from 'components/providers/index'

const selectItems = [
  {id: "none", value: "--------"},
  {id: "1", value: "ネズミ"},
  {id: "2", value: "牛"},
  {id: "3", value: "トラ"},
  {id: "4", value: "うさぎ"},
]


export const TimerZone: VFC = () => {
  const [selected, setSelected] = useState<string>(selectItems[1].value)
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelected(e.target.value)
  }
  
  return (
    <Wrapper textAlign="center">
      <SelectBox handleValue={selected} handleMethod={handleChange} selectItems={selectItems} width="80%" />
      <PomodoroTimerProvider>
        <PomodoroTimer />
      </PomodoroTimerProvider>
    </Wrapper>
  )
}

type WrapperProps = Required<Omit<StyledDivProps, 'width' | 'height' | 'backgroundColor'>>

const Wrapper = styled(StyledDiv)<WrapperProps>`
  padding: 1rem;
`