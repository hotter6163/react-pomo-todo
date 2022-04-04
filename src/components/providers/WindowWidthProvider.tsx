import React, { createContext, useState, VFC ,ReactNode } from "react"

type ContextType = {
  windowWidth: number,
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>
}

export const WindowWidthContext = createContext<ContextType>({} as ContextType)

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