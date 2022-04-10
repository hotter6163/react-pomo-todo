import React, { VFC, useState } from 'react'
import styled from 'styled-components'

import { TimerProps } from 'libs/types/componentTypes'
import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { StyledButton } from 'components/styeled_components/StyledButton'
import { divmod } from 'libs/calculation'
import { color } from 'libs/constants/index'
import { fontSize } from 'libs/constants/size'

export const Timer: VFC<TimerProps> = ({ minite }) => {
  const [time, setTime] = useState<number>(minite * 60)
  
  const { div, mod } = divmod(time, 60)
  
  const decrementTime = () => {
    setTime(pre => pre -1)
  }
  
  console.log('レンダリング')
  
  return (
    <StyledDiv>
      <TimeDisplay>
        {div > 10 ? div.toString() : `0${div}`}:{mod > 10 ? mod.toString() : `0${mod}`}
      </TimeDisplay>
      <StyledButton onClick={decrementTime} color="primary" size="l">primary</StyledButton>
      <StyledButton onClick={decrementTime} color="normal" size="m">normal</StyledButton>
      <StyledButton onClick={decrementTime} color="warning" size="s">warning</StyledButton>
      <StyledButton onClick={decrementTime} color="danger" size="l">danger</StyledButton>
    </StyledDiv>
  )
}

const TimeDisplay = styled.div`
  font-size: ${fontSize.xxl};
  border: 5px ${color.black} ridge;
  width: 20rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`