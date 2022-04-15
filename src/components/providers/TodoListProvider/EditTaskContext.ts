import { createContext } from 'react'

import { EditTaskType } from 'libs/types/todoListTypes'

export const EditTaskContext = createContext<EditTaskType>(undefined)