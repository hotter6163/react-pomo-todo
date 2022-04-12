import React, { createContext, useState, VFC ,ReactNode } from "react"

type ContextType = {
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>
}

type Props = {
  children: ReactNode,
}

export const TimeContext = createContext<ContextType>({} as ContextType)

export const TimeProveider: VFC<Props> = React.memo(({ children }) => {
  const [time, setTime] = useState<number>(0)
  console.log(`render TimeProveider time: ${time}`)
  
  const obj = { time, setTime } 
  
  return (
    <TimeContext.Provider value={obj}>
      {children}
    </TimeContext.Provider>
  )
})