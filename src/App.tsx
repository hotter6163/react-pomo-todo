import React, { VFC, useContext } from 'react'

import { Header, Home, Main } from 'components/views/index'
import { WindowWidthContext } from 'components/providers/index'

export const App: VFC = () => {
  const { setWindowWidth } = useContext(WindowWidthContext)
  
  if (setWindowWidth) {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }
  
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  )
}