import React, { VFC } from 'react'
import { Header, Home } from 'views/index'

import { Text } from 'components/index'

export const App: VFC = () => {
  return (
    <>
     <Header />
     <Home />
    </>
  )
}
