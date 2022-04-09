import React, { VFC, useState } from 'react'
import styled from 'styled-components'

import { TimerProps } from 'types/ComponentTypes'
import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { divmod } from 'libs/calculation'
import { fontSize, color } from 'constants/index'

export const Timer: VFC<TimerProps> = ({ minite }) => {
  const [time, setTime] = useState<number>(minite * 60)
  
  const { div, mod } = divmod(time, 60)
  
  const decrementTime = () => {
    setTime(pre => pre -1)
  }
  
  return (
    <StyledDiv>
      <TimeDisplay>
        {div > 10 ? div.toString() : `0${div}`}:{mod > 10 ? mod.toString() : `0${mod}`}
      </TimeDisplay>
      <button onClick={decrementTime}>カウントダウン</button>
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