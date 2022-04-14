import React, { VFC }  from 'react'

import { ButtonMiddle } from 'components/commons/index'

type Props = {
  startAction: () => void
  stopAction: () => void
}

export const WaitingButtons: VFC<Props> = ({ startAction, stopAction }) => {
  return (
    <>
      <ButtonMiddle color='normal' block={true} onClick={startAction}>
        続ける
      </ButtonMiddle>
      <ButtonMiddle color='danger' block={true} onClick={stopAction}>
        停止する
      </ButtonMiddle>
    </>
  )
}
