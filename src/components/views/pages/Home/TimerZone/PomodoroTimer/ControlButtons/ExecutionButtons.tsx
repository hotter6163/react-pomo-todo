import React, { VFC }  from 'react'

import { ButtonMiddle } from 'components/commons/index'

type Props = {
  pauseAction: () => void
}

export const ExecutionButtons: VFC<Props> = ({ pauseAction }) => {
  return (
    <ButtonMiddle color='normal' block={true} onClick={pauseAction}>
      一時停止
    </ButtonMiddle>
  )
}
