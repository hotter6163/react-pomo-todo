import React, { VFC, useContext }  from 'react'

import { ButtonMiddle } from 'components/commons/index'
import { TimerStatusContext } from 'components/providers/index'

export const ExecutableButton: VFC = () => {
  const { setTimerStatus } = useContext(TimerStatusContext)
  
  const onClick = () => {
    setTimerStatus('execution')
  }
  
  return (
    <ButtonMiddle color='primary' block={true} onClick={onClick}>
      スタート
    </ButtonMiddle>
  )
}
