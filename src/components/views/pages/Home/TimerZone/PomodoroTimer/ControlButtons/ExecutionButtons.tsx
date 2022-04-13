import React, { VFC, useContext }  from 'react'

import { ButtonMiddle } from 'components/commons/index'
import { SetMethodsContext } from 'components/providers/index'

export const ExecutionButtons: VFC = () => {
  const { setTimerStatus } = useContext(SetMethodsContext)
  
  const pauseAction = () => {
    setTimerStatus('waiting')
  }
  
  return (
    <ButtonMiddle color='normal' block={true} onClick={pauseAction}>
      一時停止
    </ButtonMiddle>
  )
}
