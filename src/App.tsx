import React, { VFC, useContext } from 'react'

import { Header, Home } from 'components/views/index'
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
      <Home />
    </>
  )
}