import React, { VFC, useContext } from 'react'
import styled from 'styled-components'

import { Text } from 'components/commons/index'
import { divmod } from 'libs/functions/calculation'
import { color, fontSize } from 'libs/constants/index'
import { TimeContext } from 'components/providers/index'

export const Timer: VFC = React.memo(() => {
  const time = useContext(TimeContext)
  
  const { div, mod } = divmod(time, 60)
  
  return (
    <TimeDisplay>
      <Text fontSize='xl' inline={true}>{div >= 10 ? div.toString() : `0${div}`}</Text>
      <Text fontSize='xl' inline={true}>:</Text>
      <Text fontSize='xl' inline={true}>{mod >= 10 ? mod.toString() : `0${mod}`}</Text>
    </TimeDisplay>
  )
})

const TimeDisplay = styled.div`
  font-size: ${fontSize.xl};
  border: 5px ${color.black} ridge;
  width: 20rem;
  text-align: center;
  margin: 0 auto 1rem;
`