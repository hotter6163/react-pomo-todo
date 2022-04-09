import React, { VFC, useContext, useEffect } from 'react'

import { Header, Home, Main } from 'components/views/index'
import { WindowWidthContext } from 'components/providers/index'

export const App: VFC = () => {
  const { setWindowWidth } = useContext(WindowWidthContext)
  
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
  }, [])
  
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  )
}