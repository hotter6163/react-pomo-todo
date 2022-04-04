import React, { VFC, useContext } from 'react'

import { Header, Home, Main } from 'components/views/index'
import { WindowWidthContext } from 'components/providers/index'
import { bodySideMargin } from 'constants/index'

export const App: VFC = () => {
  const { setWindowWidth } = useContext(WindowWidthContext)
  
  if (setWindowWidth) {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth - 2 * bodySideMargin)
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