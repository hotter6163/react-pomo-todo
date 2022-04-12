import React, { createContext, useState, VFC ,ReactNode } from "react"

type Props = {
  children: ReactNode,
}

export const TimeContext = createContext<number>(0)
export const SetTimeContext = createContext<React.Dispatch<React.SetStateAction<number>>>(() => {})

export const TimeProveider: VFC<Props> = React.memo(({ children }) => {
  const [time, setTime] = useState<number>(0)
  console.log(`render TimeProveider time: ${time}`)
  
  return (
    <TimeContext.Provider value={time}>
      <SetTimeContext.Provider value={setTime}>
        {children}
      </SetTimeContext.Provider>
    </TimeContext.Provider>
  )
})