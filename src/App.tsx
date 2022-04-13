import React, { VFC } from 'react'

import { Header, Home, Main } from 'components/views/index'

export const App: VFC = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  )
}