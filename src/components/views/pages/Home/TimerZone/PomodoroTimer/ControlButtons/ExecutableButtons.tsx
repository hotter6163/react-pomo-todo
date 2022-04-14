import React, { VFC }  from 'react'

import { ButtonMiddle } from 'components/commons/index'

type Props = {
  startAction: () => void
}

export const ExecutableButtons: VFC<Props> = ({ startAction }) => {
  return (
    <ButtonMiddle color='primary' block={true} onClick={startAction}>
      スタート
    </ButtonMiddle>
  )
}
