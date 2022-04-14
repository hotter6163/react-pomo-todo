import React, { VFC }  from 'react'

import { ButtonMiddle } from 'components/commons/index'
import { PomodoroStatusType } from 'libs/types/pomodoroTimerTypes'

type Props = {
  startAction: () => void
  stopAction: () => void
  status: PomodoroStatusType
}

export const WaitingButtons: VFC<Props> = ({ startAction, stopAction, status }) => {
  return (
    <>
      <ButtonMiddle color='normal' block={true} onClick={startAction}>
        続ける
      </ButtonMiddle>
      <ButtonMiddle color='danger' block={true} onClick={stopAction}>
        {status === 'motion' ? '停止する' : '休憩をスキップ'}
      </ButtonMiddle>
    </>
  )
}
