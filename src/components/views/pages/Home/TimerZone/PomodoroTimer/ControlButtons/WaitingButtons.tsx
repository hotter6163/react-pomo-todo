import React, { VFC, useContext }  from 'react'

import { ButtonMiddle } from 'components/commons/index'
import { SetMethodsContext } from 'components/providers/index'

export const WaitingButtons: VFC = () => {
  const { setTimerStatus } = useContext(SetMethodsContext)
  
  const restartAction = () => {
    setTimerStatus('execution')
  }
  
  const stopAction = () => {
    if (!window.confirm(`ポモドーロタイマーを終了しますか？`)) return
    
    setTimerStatus('executable')
  }
  
  return (
    <>
      <ButtonMiddle color='normal' block={true} onClick={restartAction}>
        続ける
      </ButtonMiddle>
      <ButtonMiddle color='danger' block={true} onClick={stopAction}>
        停止する
      </ButtonMiddle>
    </>
  )
}
