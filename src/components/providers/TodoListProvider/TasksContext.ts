import { createContext } from 'react'

import { Tasks } from 'libs/classes/Tasks'

export const TasksContext = createContext<Tasks>(new Tasks())
