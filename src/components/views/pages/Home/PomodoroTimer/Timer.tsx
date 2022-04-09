import React, { VFC, useState } from 'react'
import styled from 'styled-components'

import { TimerProps } from 'types/ComponentTypes'
import { StyledDiv } from 'components/styeled_components/StyledDiv'

export const Timer: VFC<TimerProps> = ({ minite }) => {
  const [time, setTime] = useState<number>(minite * 60)
  
  const decrementTime = () => {
    setTime(pre => pre -1)
  }
  
  return (
    <StyledDiv textAlign="center">
      <TimeDisplay>
        {Math.floor(time/60)}:{time%60}
      </TimeDisplay>
      <button onClick={decrementTime}>カウントダウン</button>
    </StyledDiv>
  )
}

const TimeDisplay = styled.div`
  
`