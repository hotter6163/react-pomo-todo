import React, { VFC, useContext }  from 'react'

import { ButtonMiddle } from 'components/commons/index'
import { SetMethodsContext } from 'components/providers/index'

export const ExecutableButtons: VFC = () => {
  const { setTimerStatus } = useContext(SetMethodsContext)
  
  const startAction = () => {
    setTimerStatus('execution')
  }
  
  return (
    <ButtonMiddle color='primary' block={true} onClick={startAction}>
      スタート
    </ButtonMiddle>
  )
}
