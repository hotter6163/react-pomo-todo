import React, { VFC, useState } from 'react'
import styled from 'styled-components'

import { StyledDiv } from 'components/styeled_components/StyledDiv'
import { Text, ButtonMiddle } from 'components/commons/index'
import { divmod } from 'libs/functions/calculation'
import { color } from 'libs/constants/index'
import { fontSize } from 'libs/constants/size'

export type Props = {
  minite: number
}

export const Timer: VFC<Props> = ({ minite }) => {
  const [time, setTime] = useState<number>(minite * 60)
  
  const { div, mod } = divmod(time, 60)
  
  const decrementTime = () => {
    setTime(pre => pre -1)
  }
  
  console.log('レンダリング')
  
  return (
    <TimeDisplay>
      <Text fontSize='xl' inline={true}>{div > 10 ? div.toString() : `0${div}`}</Text>
      <Text fontSize='xl' inline={true}>:</Text>
      <Text fontSize='xl' inline={true}>{mod > 10 ? mod.toString() : `0${mod}`}</Text>
    </TimeDisplay>
  )
}

const TimeDisplay = styled.div`
  font-size: ${fontSize.xl};
  border: 5px ${color.black} ridge;
  width: 20rem;
  text-align: center;
  margin: 0 auto 1rem;
`