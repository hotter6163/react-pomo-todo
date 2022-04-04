import React, { createContext, useState, VFC ,ReactNode } from "react"

export const WindowWidthContext = createContext({})

type Props = {
  children: ReactNode,
}

export const WindowWidthProvider: VFC<Props> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  
  const obj = {
    windowWidth,
    setWindowWidth
  }
  
  return (
    <WindowWidthContext.Provider value={obj}>
      {children}
    </WindowWidthContext.Provider>
  )
}