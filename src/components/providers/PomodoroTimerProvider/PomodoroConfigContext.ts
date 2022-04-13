import { createContext } from "react"

import { PomodoroConfig } from 'libs/classes/PomodoroConfig'

export const PomodoroConfigContext = createContext<PomodoroConfig>(new PomodoroConfig())
