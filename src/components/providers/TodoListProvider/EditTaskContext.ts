import { createContext } from 'react'

import { SelectTaskType } from 'libs/types/todoListTypes'

export const EditTaskContext = createContext<SelectTaskType>(undefined)